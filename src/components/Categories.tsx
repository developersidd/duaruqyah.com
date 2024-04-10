"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Category = {
  id: number;
  cat_name: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
};

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("https://api.duaruqyah.com/api/category/bn");
      const data = await res.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5  md:mt-6 lg:mt-0">
        {categories.map((category) => (
          <div key={category.id} className="rounded-xl border p-2 md:p-3">
            <div className="flex items-center justify-betwee gap-3">
              <div className="bg-[#292D320D] p-3 rounded-xl min-w-max">
                <Image
                  className="size-[34px] 2xl:size-[36px]"
                  src={`/assets/icons/${category.cat_icon}.svg`}
                  width={30}
                  height={30}
                  alt={"icon"}
                />
              </div>
              <div className="hidden md:block">
                <h3 className="text-sm md:text-lg font-semibold">
                  {" "}
                  {category.cat_name}{" "}
                </h3>
                <small className="text-gray-500">
                  সাবক্যাটাগরিঃ {category.no_of_subcat}
                </small>
                <span className="mx-1 text-gray-400"> | </span>
                <small className="text-gray-500 ">
                  সর্বমোট দোয়াঃ {category.no_of_dua}
                </small>
              </div>
              {/* for mobile devices */}
              <div className="md:hidden flex w-full items-center">
                <div className="w-full">
                  <h3 className="text-sm md:text-lg font-semibold">
                    {" "}
                    {category.cat_name}{" "}
                  </h3>
                  <small className="text-gray-500">
                    সাবক্যাটাগরিঃ {category.no_of_subcat}
                  </small>
                </div>
                <div className="mr-3 sm:mr-5 w-[1px] h-7 bg-gray-300" />
                <div className="text-gray-500 flex flex-col items-center">
                  <p className="text-primary-black font-semibold">
                    {category.no_of_dua}
                  </p>
                  দোয়া
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
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

export default Categories;
