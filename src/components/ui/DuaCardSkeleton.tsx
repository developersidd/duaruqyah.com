const DuaCardSkeleton = () => {
  return (
    <div className=" bg-white rounded-xl p-7">
      <div className="flex items-center gap-5">
        <div className="animate-pulse w-[100px] h-[100px] rounded-full bg-gray-200 mb-5"></div>
        <div className="animate-pulse w-[200px] h-[10px] bg-gray-200 rounded-md"></div>
      </div>
      <div className="space-y-5">
        <div className="animate-pulse w-[550px] h-[8px] bg-gray-200 rounded-md"></div>
        <div className="animate-pulse w-[550px] h-[8px] bg-gray-200 rounded-md"></div>
        <div className="animate-pulse w-[550px] h-[8px] bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};

export default DuaCardSkeleton;
