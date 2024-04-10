import Image from "next/image";
import Link from "next/link";
import Button from "./common/Button";
const duaSearchList = [
  "নামাজের দোয়া",
  "গোসলের দোয়া",
  "জিকিরের ফজিলত",
  "উপকারীর কৃতজ্ঞতা প্রকাশে",
  "উপকারীর কৃতজ্ঞতা প্রকাশে",
];
const Banner = () => {
  return (
    <section
      style={{
        // banner background shade
        backgroundImage: "url('/assets/icons/banner-bg.svg')",
      }}
      className="-mt-[88px] overflow-hidden w-full h-[400px] md:h-[480px] lg:h-[490px] xl:h-[476px] 2xl:h-[520px] 2xl:bg-cover bg-no-repeat bg-center"
    >
      <div
        className="text-primary-black size-full bg-no-repeat bg-center max-md:pt-14 flex flex-col items-center justify-center"
        style={{
          // banner background image
          backgroundImage: "url('/assets/icons/qalima.svg')",
        }}
      >
        {/* banner content*/}
        <div className="pt-[45px] md:pt-[45px] lg:pt-[65px]">
          <div className="w-full px-4">
            <h3 className="text-center max-md:px-[10%] text-[19px] sm:text-[24px] md:text-[36px] lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-10">
              কুরআন মাজীদে দোয়া এবং মাসনূন আমল
            </h3>
            <div className="flex w-full max-md:w-[95%] mx-auto max-md:h-[44px] md:w-[461px] lg:w-[501px] bg-white p-[2px] md:p-[3px] justify-between rounded-xl border-2 border-primary-black/10">
              <div className="flex items-center flex-1 pl-1 sm:pl-2">
                <Image
                  className="size-5 hidden md:block"
                  src="/assets/icons/search-love.svg"
                  width={30}
                  height={30}
                  alt="search"
                />
                <input
                  type="text"
                  className="w-full outline-none px-2 text-sm md:text-base text-primary-black/80"
                  placeholder="এখানে দোয়া সার্চ করুন...."
                />
              </div>
              <Button
                txtClasses="hidden md:block"
                imgClasses="sm:size-[18px]"
                btnText="সার্চ করুন"
                imgPath="search"
              />
            </div>
          </div>
          {/* dua search list */}
          <div className="mt-[18px] w-full md:w-[600px] flex flex-wrap gap-x-[6px] gap-y-2 md:gap-y-3 items-center justify-center px-1">
            {duaSearchList.map((item) => (
              <Link
                className="bg-white text-primary-black/70 font-medium text-[12px] md:text-sm inline-block py-[5px] md:py-2 px-[13px] md:px-4 border-primary-black/20 border rounded-full"
                key={item}
                href={item}
              >
                {" "}
                {item}{" "}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
