import Icon from "@/components/common/Icons";
import { Dua, SubCategory } from "@/types/index.type";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

type SubcategoryItemProps = {
  subcategory: SubCategory;
  isActive: boolean;
  duas: Dua[];
};

const SubcategoryItem: FC<SubcategoryItemProps> = ({
  subcategory,
  isActive,
  duas,
}) => {
  const searchParams = useSearchParams();
  const cat_id = searchParams.get("cat_id");
  const { subcat_name_en, subcat_id } = subcategory || {};

  return (
    <>
      <Link
        href={`/categories/dua?cat_id=${cat_id}&subcat_id=${subcat_id}`}
        key={subcat_id}
        className={`cursor-pointer py-2 block pl-2 relative
       ${
         isActive ? "before:size-[7px] before:bg-primary-green" : ""
       } before:top-4 before:-left-[12.5px] before:absolute before:rounded-full`}
      >
        <h4
          className={`${
            isActive ? "font-bold text-primary-green" : ""
          } text-[0.875rem] text-gray-700 font-medium`}
        >
          {subcat_name_en}
        </h4>
      </Link>
      {isActive && (
        <div className="ml-2 flex flex-col items-start">
          {duas?.map((dua) => (
            <Link
              href={
                `/categories/dua?cat_id=${cat_id}&subcat_id=${subcat_id}&dua_id=${dua.dua_id}` +
                `#dua-${dua.dua_id}`
              }
              key={dua.dua_id}
              className="flex gap-3 py-3"
            >
              <Icon
                classes={"size-5 -mt-1"}
                alt={"arrow"}
                name={"duaarrow.svg"}
              />
              <h5 className="text-[0.8125rem] text-gray-600">
                {dua.dua_name_en}
              </h5>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default SubcategoryItem;
