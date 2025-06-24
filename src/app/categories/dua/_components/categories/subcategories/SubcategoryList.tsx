"use client";
import { Dua, SubCategory } from "@/types/index.type";
import { useSearchParams } from "next/navigation";
import { FC, useMemo } from "react";
import SubcategoryItem from "./SubcategoryItem";
type SubcategoryListProps = {
  subcategories: SubCategory[];
  duas: Dua[];
};
const SubcategoryList: FC<SubcategoryListProps> = ({ subcategories, duas }) => {
  const searchParams = useSearchParams();
  const subcat_id = searchParams.get("subcat_id");
  const activeSubcatId = Number(subcat_id);
  const duasByCategory = useMemo(
    () => duas?.filter((dua) => dua.subcat_id === activeSubcatId),
    [activeSubcatId, duas]
  );
  return (
    <div className="border-l-2 border-dotted border-primary ml-9 pl-2 pt-2 pb-2">
      {subcategories?.map((subcategory, ind) => {
        console.log("key:", subcategory?.subcat_name_en + ind);
        return (
          <SubcategoryItem
            isActive={activeSubcatId === Number(subcategory.subcat_id)}
            key={subcategory?.subcat_name_en + ind}
            subcategory={subcategory}
            duas={duasByCategory}
          />
        );
      })}
    </div>
  );
};

export default SubcategoryList;
