import Image from "next/image";

const DownloadApp = () => {
  return (
    <section className="bg-primary-lime pb-10 sm:py-10 sm:px-4 md:px-5  lg:py-[60px] lg:px-10 xl:px-20">
      <div className="2xl:container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="order-2 w-full lg:-order-1 lg:ml-10 max-lg:text-center max-lg:mx-auto max-sm:px-4">
          <h3 className="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[36px] 2xl:text-5xl leading-9 md:leading-10 lg:leading-[54px] 2xl:leading-[70px] mb-5 lg:mb-7 font-semibold">
            ডাউনলোড করুন দোয়া ও রুকিয়া <br /> (হিসনুল মুসলিম) মোবাইল অ্যাপ{" "}
          </h3>
          <p className="max-sm:text-sm  mb-6 lg:mb-10 xl:w-3/4 2xl:w-2/3 leading-6 lg:leading-[30px]">
            এই ওয়েবসাইট থেকে আপনি প্রায় ১০০০+ দোয়া এবং প্রায় সকল দোয়ার অডিও সহ
            পেয়ে যাবেন ১৯ ক্যাটাগরির রুকিয়া এবং অডিও রুকিয়া এই ওয়েবসাইট থেকে
            আপনি প্রায় ১০০০+ দোয়া এবং প্রায় সকল দোয়ার অডিও সহ পেয়ে যাবেন ১৯
            ক্যাটাগরির রুকিয়া এবং অডিও রুকিয়া
          </p>
          {/* Download button */}
          <div className="flex max-sm:flex-col items-center max-lg:justify-center gap-y-5 gap-x-3 md:gap-[15px]">
            <button className="flex items-center gap-[10px] md:gap-3 px-3 md:px-4 bg-[#292D320D] py-1 rounded-xl border">
              <Image
                src="/assets/icons/playstore.svg"
                alt="Google Play Store"
                width={20}
                height={20}
              />
              <div className="text-left">
                <small> Download on the </small>
                <p className="text-sm font-semibold"> App Store </p>
              </div>
            </button>
            <button className="flex items-center gap-[10px] md:gap-3  px-3 md:px-4 bg-[#292D320D] py-1 rounded-xl border">
              <Image
                src="/assets/icons/apple.svg"
                alt="Apple Store"
                width={20}
                height={20}
              />
              <div className="text-left">
                <small> Download on the </small>
                <p className="text-sm font-semibold"> Apple Store </p>
              </div>
            </button>
          </div>
          {/* client reviews */}
          <div className="flex items-center  max-lg:justify-center flex-wrap gap-7 mt-7">
            <div>
              <div className="flex gap-2">
                <Image
                  src="/assets/icons/star.svg"
                  alt="start"
                  width={10}
                  height={10}
                />
                <p>
                  <span className="font-semibold"> 4.8 </span> (Positive
                  Reviews)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icons/users.svg"
                  alt="user"
                  width={80}
                  height={30}
                />
                From 54.5k Users
              </div>
            </div>
            <div>
              <h3 className="text-xl  font-bold">450k+ </h3>
              <p> Total Active User&apos;s </p>
            </div>
            <div>
              <h3 className="text-xl  font-bold">500k+ </h3>
              <p> Download From All Store</p>
            </div>
          </div>
        </div>
        {/* right side mobile Image */}
        <div>
          <Image
            src="/assets/icons/mobile.svg"
            alt="mobile"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
