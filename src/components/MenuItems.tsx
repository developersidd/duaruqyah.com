import Image from "next/image";
//import { useSwipeable } from "react-swipeable";
const menuItems = [
  {
    name: "রুকিয়া",
    imgName: "ruqya.svg",
    des: "১৫টিরও বেশি ক্যাটাগরি আছে",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-100",
  },
  {
    name: "মেমোরাইজেশন",
    imgName: "memorize.svg",
    des: "শেখা এবং মনে রাখার প্রক্রিয়া",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
  },
  {
    name: "দোয়ার তথ্যাদি",
    imgName: "message.svg",
    des: "১৫টি তথ্যাদি আছে",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
  },
  {
    name: "দোয়ার বইসমূহ",
    imgName: "book.svg",
    des: "বাংলায় ৪টি বই রয়েছে",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-100",
  },
  {
    name: "সাপোর্ট করুন",
    imgName: "green-love.svg",
    des: "প্রোজেক্ট এগিয়ে নিতে সাহায্য প্রয়োজন",
    bgColor: "bg-lime-50",
    borderColor: "border-lime-100",
  },
];
const MenuItems = () => {
  return (
    <section className="mx-auto px-3 py-[3px] sm:py-[5px] md:py-4 sm:px-3 md:px-5  lg:py-[60px] lg:px-10 xl:px-20">
      <div className="flex flex-row 2xl:items-center 2xl:justify-center gap-2 sm:gap-4 lg:gap-5 py-5 pl-1 pr-1 overflow-x-auto scrollbar-hide whitespace-nowrap">
        {menuItems.map((item, index) => {
          const { des, imgName, name, bgColor, borderColor } = item;

          return (
            <div
              key={index}
              className={`${bgColor} border ${borderColor} min-w-max  md:min-w-[240px] md:w-[244px] p-3 md:p-4 rounded-lg text-left`}
            >
              <Image
                src={`/assets/icons/${imgName}`}
                alt={name}
                width={30}
                height={30}
                className="size-[32px] md:size-10 mb-[10px] md:mb-3"
              />
              <h3 className="text-[16px] md:text-lg font-semibold mb-[3px]">
                {name}
              </h3>
              <p className="text-[13px] md:text-sm text-gray-600">{des}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MenuItems;
