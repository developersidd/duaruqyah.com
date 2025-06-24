import { Category } from "@/types/index.type";
import { FC } from "react";
import RuqyaItem from "./RuqyaItem";

type RuqyaListProps = {
  categories: Category[];
};
const RuqyaList: FC<RuqyaListProps> = ({ categories = [] }) => {
  return (
    <div className=" grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-[15px]">
      {categories?.map((category) => <RuqyaItem category={category} key={category?.cat_id } />
      )}
    </div>
  );
};

export default RuqyaList;
