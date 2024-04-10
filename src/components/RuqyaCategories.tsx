"use client";
import useQuery from "@/hooks/useQuery";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import AudioPlayerCom from "./AudioPlayerCom";

type Category = {
  id: number;
  cat_name: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
};

const RuqyaCategories = () => {
  const { data, error, isLoading } = useQuery<Category[]>(
    "https://api.duaruqyah.com/api/category/bn"
  );
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 1060px)" });

  // decide what to render
  let content;
  if (isLoading) {
    content = (
      <div className="flex items-center justify-center text-xl h-full">
        Loading...
      </div>
    );
  } else if (error) {
    content = <p>Error: {error.message}</p>;
  } else {
    content = data
      ?.slice(0, 12)!
      .slice(isTabletOrMobile ? 0 : 4)
      .map((category) => (
        <div
          key={category.id}
          className="rounded-[15px] border p-2 md:p-[10px]"
        >
          <div className="flex items-center gap-3 2xl:gap-[15px]">
            <div className="bg-[#292D320D] p-3 rounded-xl min-w-max">
              <Image
                className="size-[34px] 2xl:size-[36px]"
                src={`/assets/icons/${category.cat_icon}.svg`}
                width={30}
                height={30}
                alt={"icon"}
              />
            </div>
            <div>
              <h3 className=" 2xl:text-base font-semibold">
                {category.cat_name}
              </h3>
              <small className="text-gray-500">
                সাবক্যাটাগরিঃ {category.no_of_subcat}
              </small>
            </div>
          </div>
        </div>
      ));
  }

  return (
    <section className="2xl:container  mx-auto px-3 py-6 sm:py-10 sm:px-4 md:px-5  lg:py-[60px] lg:px-10 xl:px-20">
      <div className="flex justify-between items-center md:my-10">
        <h3 className="text-[18px] sm:text-xl lg:text-2xl mb-5 font-bold">
          {" "}
          রুকিয়ার ক্যাটাগরি সমূহ{" "}
        </h3>
        <button className="px-4 lg:px-[18px] py-2 rounded-full md:flex hidden items-center gap-1 bg-primary-black/10">
          <span> সবগুলো দেখুন </span>
          <Image
            className="size-4"
            src={`/assets/icons/right-arrow.svg`}
            width={20}
            height={20}
            alt={"arrow"}
          />
        </button>
      </div>
      <div className="flex flex-col lg:flex-row items-cente justify-between gap-6">
        {/* dua list */}
        <div className="order-2 lg:order-1 w-full lg:w-2/3">
          <div className=" grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-[15px]">
            {content}
          </div>
          <button className="md:hidden px-4 lg:px-[18px] text-[12px] py-2 mx-auto mt-7 rounded-full flex items-center gap-1 bg-primary-light-gray">
            <span> সবগুলো দেখুন </span>
            <Image
              className="size-4"
              src={`/assets/icons/right-arrow.svg`}
              width={20}
              height={20}
              alt={"arrow"}
            />
          </button>
        </div>
        {/* Audio player */}
        <div className="order-1 lg:order-2 w-full lg:w-1/3  max-lg:mb-5">
          <AudioPlayerCom audioSrc="https://api.duaruqyah.com/duaaudiofinal/2.mp3" />
        </div>
      </div>
    </section>
  );
};

export default RuqyaCategories;
