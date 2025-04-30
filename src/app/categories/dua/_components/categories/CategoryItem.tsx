import Link from "next/link";
import { useEffect, useState } from "react";
import SubcategoryList from "./subcategories/SubcategoryList";
import Icon from "@/components/common/Icons";

const CategoryItem = ({ category, onActive, isActive }) => {
  const { cat_id, cat_name_en, cat_icon, no_of_subcat, no_of_dua } =
    category || {};
  const [subcategories, setSubcategories] = useState([]);
  const [duas, setDuas] = useState([]);
  useEffect(() => {
    // Fetch dua by category and subcategory when category is active
    if (isActive) {
      handleFetchSubcategory();
      handleFetchDuaByCategory();
    }
  }, [isActive]);

  // Fetch subcategory
  const handleFetchSubcategory = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/subcategory/${cat_id}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setSubcategories(data.data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  // Fetch dua by category
  const handleFetchDuaByCategory = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/dua/${cat_id}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setDuas(data.data);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <>
      <Link
        onClick={() => onActive(cat_id)}
        key={cat_id}
        href={`/categories/dua?cat_id=${cat_id}`}
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
