"use client";

import { ReactNode, useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher";
import Button from "../common/Button";
import HamburgerMenu from "../ui/HamburgerMenu";

const DashboardHeader = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
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
        {/* Hamburger Menu */}
        <HamburgerMenu isOpen={isOpen} onToggle={setIsOpen} />
        {/* Responsive Nav Link */}
      </div>
    </header>
  );
};

export default DashboardHeader;
