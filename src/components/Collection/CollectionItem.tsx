import Image from "next/image";

const CollectionItem = ({ item: { title, desc, icon } }: { item: any }) => {
  return (
    <div
      className={`max-md:flex items-center gap-3 lg:mt-10 min-w-[225px] w-[270px] p-[10px] md:p-4 rounded-lg  border-primary-light-gray border text-left min-h-[70px] sm:h-[75px] md:h-[120px] lg:h-max`}
    >
      <Image
        src={`/assets/icons/${icon}`}
        alt={"সর্বশেষ পঠিত দোয়া"}
        width={30}
        height={30}
        className="size-[24px] md:size-[26px] lg:size-10 md:mb-3"
      />
      <div>
        <h3 className="text-sm md:text-lg font-medium mb-1"> {title} </h3>
        <p className="text-[11px] md:text-sm text-gray-600">
          {" "}
          সর্বশেষ পঠিত দোয়া নং ১৫{" "}
        </p>
      </div>
    </div>
  );
};

export default CollectionItem;
