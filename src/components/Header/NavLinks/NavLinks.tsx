import Link from "next/link";
const link = [
  "হোম",
  "দোয়া ক্যাটাগরি",
  "সকল দোয়া",
  "রুকিয়া",
  "মেমোরাইজ",
  "কালেকশন",
  "অন্যান্য",
];
const NavLinks = () => {
  return (
    <div className="hidden lg:flex items-center gap-7 text-primary-black">
      {link.map((item, index) => (
        <Link
          key={index}
          href={item.toLocaleLowerCase()?.split(" ").join("")}
          className="relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:bg-primary-green before:rounded  before:scale-x-0 before:transition-transform before:duration-300 before:origin-right hover:before:scale-x-100  hover:before:origin-left"
        >
          {item}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
