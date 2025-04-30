const CategoryLoadingSkeleton = () => {
  return (
    <div className="flex items-center gap-5">
        <div className="animate-pulse w-[120px] h-[70px] bg-gray-200 rounded-md"></div>
        <div className="space-y-4">
          <div className="animate-pulse w-[150px] h-[8px] bg-gray-200 rounded-md"></div>
          <div className="animate-pulse w-[180px] h-[10px] bg-gray-200 rounded-md"></div>
        </div>
      </div>
  );
};

export default CategoryLoadingSkeleton;
