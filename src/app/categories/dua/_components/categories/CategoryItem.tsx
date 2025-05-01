import { getDuasByCategory } from "@/api/dua.api";
import { getSubCategories } from "@/api/subCategories.api";
import Icon from "@/components/common/Icons";
import { Category } from "@/types/index.type";
import Link from "next/link";
import SubcategoryList from "./subcategories/SubcategoryList";

type CategoryItemProps = {
  category: Category;
  isActive: Boolean;
};

const CategoryItem = async ({ category, isActive }: CategoryItemProps) => {
  const { cat_id, cat_name_en, cat_icon, no_of_subcat, no_of_dua } =
    category || {};
    // Fetch subcategory
  const { data: subcategories, error } =
    (await getSubCategories(cat_id + "")) || {};
  // Fetch dua by category
  const { data: duas, error: duasError } =
    (await getDuasByCategory(cat_id + "")) || {};



  return (
    <>
      <Link
        key={cat_id}
        href={`/categories/dua?cat_id=${cat_id}&subcat_id=${
          (subcategories || [])[0]?.subcat_id
        }`}
        className={`${
          isActive ? "bg-[#E8F0F5]" : ""
        }  hover:bg-[#E8F0F5] block rounded-lg cursor-pointer group/card`}
      >
        <div className="flex justify-between items-center px-4 py-3">
          <div className="flex justify-between items-center gap-2">
            <Icon
              classes={"bg-[#F7F8FA] p-3 rounded-md size-14"}
              alt={cat_name_en}
              name={`${cat_icon}.svg`}
            />
            <div>
              <h3 className="font-medium">{cat_name_en}</h3>
              <p className="text-xs text-gray-500">
                Subcategory: {no_of_subcat}
              </p>
            </div>
          </div>
          <div
            className={`text-center ${
              isActive ? "" : "border-l"
            }  pl-3 border-gray-300 group-hover/card:border-l-0`}
          >
            <h5>{no_of_dua}</h5>
            <small className="text-gray-500">Duas</small>
          </div>
        </div>
      </Link>
      {subcategories?.length > 0 && isActive && (
        <SubcategoryList duas={duas} subcategories={subcategories} />
      )}
    </>
  );
};

export default CategoryItem;
