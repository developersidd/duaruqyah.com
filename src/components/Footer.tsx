import Image from "next/image";
import Link from "next/link";
import Button from "./common/Button";

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] mt-4 md:mt-12 lg:mt-[60px] 2xl:mt-24">
      {/* Top footer content */}
      <div className="h-[450px] 2xl:h-[450px] bg-[url('/assets/icons/first_wave.svg')] bg-no-repeat 2xl:bg-cover max-lg:bg-contain bg-bottom xl:bg-right-bottom 2xl:bg-bottom ">
        <div className="flex items-center justify-center px-3 md:px-0 flex-col w-full md:w-2/3 2xl:w-1/3  mx-auto text-center">
          <Image
            alt="logo"
            className="size-[66px] mb-3"
            src="/assets/icons/logo.svg"
            width={100}
            height={100}
          />
          <h3 className="text-xl lg:text-2xl font-bold my-1">
            দোয়া ও রুকিয়া (হিসনুল মুসলিম)
          </h3>
          <small className="mb-3">Varsion 1.2</small>
          <p className="mb-5">
            দুআ এবং রুকিয়াহ অ্যাপটিতে কোরআন এবং সহিহ হাদিস থেকে সংকলিত সহিহ দুআ
            এবং জিকরের বৃহত্তম সংগ্রহ রয়েছে। আপনি 41টি বিভাগে 1000+ মাসনূন
            দোয়া এবং যিকর পাবেন। সকাল-সন্ধ্যা, শিশু, প্রার্থনা, রমজান, হজ/ওমরাহ
            এবং কুরআনের দুআস (রব্বানা দুআস) এর মতো সমস্ত অনুষ্ঠানের জন্য বিভিন্ন
            ধরণের দুআ এখানে পাওয়া যাবে।
          </p>
          <Button btnText="আমি সাপোর্ট করতে চাই" imgPath="heart_support" />
        </div>
      </div>
      {/* Bottom footer content */}
      <div className="py-10 sm:pr-9 md:pr-0 pl-0 h-full lg:h-[350px] bg-primary-lime flex bg-[url('/assets/icons/bottom_wave.svg')] bg-no-repeat bg-bottom max-lg:bg-contain 2xl:bg-right-bottom">
        <div className="container justify-between xl:justify-around 2xl:justify-between gap-5 flex-wrap items-center flex w-full 2xl:w-2/3 mx-auto">
          <nav>
            <h3 className="font-semibold mb-3"> নেভিগেট </h3>

            <div className="flex flex-wrap items-baseline gap-10">
              <ul className="space-y-2 text-gray-500">
                <li>
                  <Link href="#">হাদিস গ্রন্থসমূহ</Link>
                </li>
                <li>
                  <Link href="#">বিষয়ভিত্তিক হাদিস</Link>
                </li>
                <li>
                  <Link href="#">প্রাইভেসি পলিসি</Link>
                </li>
                <li>
                  <Link href="#">সাপোর্ট করুন</Link>
                </li>
              </ul>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <Link href="#">আমাদের প্রজেক্টসমূহ</Link>
                </li>
                <li>
                  <Link href="#">তাহকিক</Link>
                </li>
                <li>
                  <Link href="#">লেখক</Link>
                </li>
              </ul>
            </div>
          </nav>
          <nav>
            <h3 className="font-semibold mb-3"> আমাদের প্রজেক্ট সমূহ </h3>
            <ul className="space-y-2 text-gray-500">
              <li>
                <Link href="#">আল হাদিস</Link>
              </li>
              <li>
                <Link href="#">কুরআন মাজিদ</Link>
              </li>
              <li>
                <Link href="#">দোয়া ও রুকিয়াহ</Link>
              </li>
              <li>
                <Link href="#">আইআরডি ফাউন্ডেশন</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className="font-semibold mb-3">জনপ্রিয় সাইটসমূহ </h3>
            <ul className="space-y-2 text-gray-500">
              <li>
                <Link href="#">ihadis.com</Link>
              </li>
              <li>
                <Link href="#"> Quranmazid.com</Link>
              </li>
              <li>
                <Link href="#"> Muslimpro.one</Link>
              </li>
              <li>
                <Link href="#"> Sunnah.com</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className="font-semibold mb-3">যোগাযোগ </h3>
            <ul className="space-y-2 text-gray-500">
              <li className="flex items-center gap-2">
                <Image
                  alt="facebook"
                  src="/assets/icons/facebook.svg"
                  width={20}
                  height={20}
                />
                <Link href="#">Facebook</Link>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  alt="linkedin"
                  src="/assets/icons/linkedin.svg"
                  width={20}
                  height={20}
                />
                <Link href="#"> Linkedin</Link>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  alt="twitter"
                  src="/assets/icons/twitter.svg"
                  width={20}
                  height={20}
                />
                <Link href="#"> Twitter </Link>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  alt="gmail"
                  src="/assets/icons/gmail.svg"
                  width={20}
                  height={20}
                />
                <Link href="#"> project.ihadis@gmail.com</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
