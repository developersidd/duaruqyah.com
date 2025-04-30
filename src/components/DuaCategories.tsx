"use client";
import useQuery from "@/hooks/useQuery";
import Image from "next/image";
import CategoryList from "./DuaCategoryList";

export type Category = {
  id: number;
  cat_name: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
};

const DuaCategories = () => {
  const { data, error, isLoading } = useQuery<Category[]>("/category");
  return (
    <section className="2xl:container mx-auto  px-3 py-2 sm:pb-10 sm:px-4 md:px-5 lg:pb-[60px] lg:px-10 xl:px-20">
      <div className="flex justify-between items-center my-3 md:my-10 align-baseline">
        <h3 className="text-[18px] sm:text-xl lg:text-2xl mb-3 font-bold align-middle">
          দোয়ার ক্যাটাগরি সমূহ
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
      <CategoryList duas={data?.data} />
      <button className="md:hidden px-4 text-[12px] py-2 mx-auto mt-7 rounded-full flex items-center gap-1 bg-[#292D321A]">
        <span> সবগুলো দেখুন </span>
        <Image
          className="size-4"
          src={`/assets/icons/right-arrow.svg`}
          width={20}
          height={20}
          alt={"arrow"}
        />
      </button>
    </section>
  );
};

export default DuaCategories;
