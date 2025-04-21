import Image from "next/image";
import Link from "next/link";
import Icon from "../common/Icons";

const DashboardSidebar = () => {
  return (
    <aside className="fixed w-20 h-full top-0 left-0 bg-white px-2 py-[10px] flex flex-col justify-between items-center">
      <Image
        className="size-[30px] sm:size-[35px] md:size-10 xl:size-[46px]"
        src="/assets/icons/logo.svg"
        width={60}
        height={50}
        alt="logo"
      />
      <nav className="">
        <ul className="space-y-6">
          <li className="py-[10px] px-3  border border-primary-black/10 rounded-lg">
            <Link href="/dashboard">
              <Icon alt="home" name="home.svg" classes="size-6" />
            </Link>
          </li>
          <li className="py-[10px] pxx-3  rounded-lg bg-primary-green">
            <Link href="dua">
              <Icon alt="list" name="list.svg" classes="size-6" />
            </Link>
          </li>
          <li className="py-[10px] pxx-3  border border-primary-black/10 rounded-lg">
            <Link href="">
              <Icon alt="read" name="read.svg" classes="size-6" />
            </Link>
          </li>
          <li className="py-[10px] pxx-3  border border-primary-black/10 rounded-lg">
            <Link href="">
              <Icon alt="menu" name="menu.svg" classes="size-6" />
            </Link>
          </li>
          <li className="py-[10px] pxx-3  border border-primary-black/10 rounded-lg">
            <Link href="">
              <Icon alt="plane" name="plane.svg" classes="size-6" />
            </Link>
          </li>
        </ul>
      </nav>
      <div></div>
    </aside>
  );
};

export default DashboardSidebar;
