import { Category } from "@/types/index.type";
import CategoryItem from "./CategoryItem";

type CategoryListProps = {
  categories: Category[];
  searchParams: URLSearchParams;
};

const CategoryList = ({ categories, searchParams }: CategoryListProps) => {
  console.log(" searchParams:", searchParams);
  const cat_id = Number(searchParams.get("cat_id"));
  return (
    <div className="space-y-3">
      {categories?.map((category) => (
        <CategoryItem
          isActive={cat_id === Number(category.cat_id)}
          key={category?.cat_id}
          category={category}
        />
      ))}
    </div>
  );
};

export default CategoryList;
