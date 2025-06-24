import { Category } from "@/types/index.type";
import CategoryItem from "./CategoryItem";

type CategoryListProps = {
  categories: Category[];
  searchParams: URLSearchParams;
};

const CategoryList = ({ categories, searchParams }: CategoryListProps) => {
  const cat_id = Number(searchParams.get("cat_id"));
  const q = searchParams.get("q") || "";
  return (
    <div className="space-y-3">
      {categories?.length === 0 && q !== "" ? (
        <p className="py-5 text-center text-sm text-primary-black/60">
          No categories found for &quot;{q}&quot;.
        </p>
      ) : (
        categories?.map((category) => (
          <CategoryItem
            isActive={cat_id === Number(category.cat_id)}
            key={category?.cat_id}
            category={category}
          />
        ))
      )}
    </div>
  );
};

export default CategoryList;
