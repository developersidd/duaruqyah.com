import { Category } from "@/types/index.type";
import CategoryList from "./CategoryList";
import SearchCategories from "./SearchCategories";

type CategoriesProps = {
  categories: Category[];
  searchParams: URLSearchParams;
};

const Categories = ({ categories, searchParams }: CategoriesProps) => {
  return (
    <div className="overflow-y-auto">
      <SearchCategories />
      <div className="h-[calc(100vh-220px)] overflow-y-auto px-2 py-3 scrollbar-hide">
        <CategoryList searchParams={searchParams} categories={categories} />
      </div>
    </div>
  );
};

export default Categories;
