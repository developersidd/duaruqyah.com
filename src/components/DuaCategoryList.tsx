import { Category } from "@/types/index.type";
import { FC } from "react";
import DuaCategoryItem from "./DuaCategoryItem";

type DuaCategoryListProps = {
  categories: Category[];
  isShowAll?: boolean;
};

const DuaCategoryList: FC<DuaCategoryListProps> = ({
  categories = [],
  isShowAll,
}) => {
  return (
    <div
      className={`grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-5  md:mt-6 lg:mt-0`}
    >
      {categories?.map((category) => (
        <DuaCategoryItem category={category} isShowAll key={category?.cat_id} />
      ))}
    </div>
  );
};

export default DuaCategoryList;
