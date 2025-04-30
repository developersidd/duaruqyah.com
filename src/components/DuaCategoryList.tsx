import Image from "next/image";
import type { Category } from "./DuaCategories";

const DuaCategoryList = ({ duas }: { duas: Category[] | null }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5  md:mt-6 lg:mt-0">
      {duas?.map((dua) => {
        const { id, cat_name_bn, no_of_subcat, no_of_dua, cat_icon } = dua || {};
        return (
          <div key={id} className="rounded-xl border p-2 md:p-3">
            <div className="flex items-center justify-betwee gap-3">
              <div className="bg-[#292D320D] p-3 rounded-xl min-w-max">
                <Image
                  className="size-[34px] 2xl:size-[36px]"
                  src={`/assets/icons/${cat_icon}.svg`}
                  width={30}
                  height={30}
                  alt={"icon"}
                />
              </div>
              <div className="hidden md:block">
                <h3 className="text-sm md:text-lg font-semibold">
                  {" "}
                  {cat_name_bn}{" "}
                </h3>
                <small className="text-gray-500">
                  সাবক্যাটাগরিঃ {no_of_subcat}
                </small>
                <span className="mx-1 text-gray-400"> | </span>
                <small className="text-gray-500 ">
                  সর্বমোট দোয়াঃ {no_of_dua}
                </small>
              </div>
              {/* for mobile devices */}
              <div className="md:hidden flex w-full items-center">
                <div className="w-full">
                  <h3 className="text-sm md:text-lg font-semibold">
                    {" "}
                    {cat_name_bn}{" "}
                  </h3>
                  <small className="text-gray-500">
                    সাবক্যাটাগরিঃ {no_of_subcat}
                  </small>
                </div>
                <div className="mr-3 sm:mr-5 w-[1px] h-7 bg-gray-300" />
                <div className="text-gray-500 flex flex-col items-center">
                  <p className="text-primary-black font-semibold">
                    {no_of_dua}
                  </p>
                  দোয়া
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DuaCategoryList;
