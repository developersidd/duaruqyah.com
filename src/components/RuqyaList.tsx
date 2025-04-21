import Image from "next/image";

const RuqyaList = ({ ruqyas }) => {
  return (
    <div className=" grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-[15px]">
      {ruqyas.map((ruqya) => (
        <div key={ruqya.id} className="rounded-[15px] border p-2 md:p-[10px]">
          <div className="flex items-center gap-3 2xl:gap-[15px]">
            <div className="bg-[#292D320D] p-3 rounded-xl min-w-max">
              <Image
                className="size-[34px] 2xl:size-[36px]"
                src={`/assets/icons/${ruqya.cat_icon}.svg`}
                width={30}
                height={30}
                alt={"icon"}
              />
            </div>
            <div>
              <h3 className=" 2xl:text-base font-semibold">{ruqya.cat_name}</h3>
              <small className="text-gray-500">
                সাবক্যাটাগরিঃ {ruqya.no_of_subcat}
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RuqyaList;
