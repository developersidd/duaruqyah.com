"use client";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import SubcategoryItem from "./SubcategoryItem";

const SubcategoryList = ({ subcategories, duas }) => {
  const searchParams = useSearchParams();
  const subcat_id = searchParams.get("subcat_id");
  const [activeId, setActiveId] = useState(Number(subcat_id) || 1);
  const duasByCategory = useMemo(
    () => duas?.filter((dua) => dua.subcat_id === activeId),
    [activeId]
  );
  return (
    <div className="border-l-2 border-dotted border-primary ml-9 pl-2 pt-2 pb-2">
      {subcategories?.map((subcategory) => (
        <SubcategoryItem
          onActive={setActiveId}
          isActive={activeId === Number(subcategory.subcat_id)}
          key={subcategory?.subcat_id}
          subcategory={subcategory}
          duas={duasByCategory}
        />
      ))}
    </div>
  );
};

export default SubcategoryList;
