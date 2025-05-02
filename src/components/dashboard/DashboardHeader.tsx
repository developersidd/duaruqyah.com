import { ReactNode } from "react";
import Button from "../common/Button";
import Icon from "../common/Icons";
import ThemeSwitcher from "../ui/ThemeSwitcher";

const DashboardHeader = ({ children }: { children: ReactNode }) => {
  return (
    <header className="flex justify-between mx-auto py-5 items-center px-3 sm:px-5 bg-white sticky top-0 right-0 w-full h-[60px]">
      {children}
      <div className="flex items-center gap-[10px] sm:gap-3 lg:gap-5">
        {/* Theme */}

        <Button
          btnText="সাপোর্ট করুন"
          imgPath="hearts"
          btnClasses="hidden md:flex"
        />
        <ThemeSwitcher />
        <button className="size-[32px] md:size-[40px] 2xl:size-[42px] border-[1.5px]  border-primary-light-gray rounded-lg bg-primary-light-gray">
          <Icon alt="" name="menu_bars.svg" classes="size-7" />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
