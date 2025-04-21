"use client";
import Image from "next/image";
import { useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher";
import Button from "../common/Button";
import HamburgerMenu from "../ui/HamburgerMenu";
import NavLinks from "./NavLinks/NavLinks";
import ResponsiveNavLinks from "./NavLinks/ResponsiveLavLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={`2xl:container flex justify-between mx-auto py-5 items-center px-3 sm:px-4 md:px-10 relative xl:px-20 z-30 ${
          isOpen ? "overflow-hidden scrollbar-hide" : ""
        }`}
      >
        {/* Top Floting Lights */}
        <Image
          className="hidden lg:block w-[66px] h-[186px] absolute top-0 lg:-left-0 2xl:-left-5 -z-10"
          src="/assets/icons/light.svg"
          width={200}
          height={300}
          alt="light"
        />
        <Image
          className="hidden lg:block w-[66px] h-[186px] absolute top-0 lg:-right-0 2xl:-right-5 -z-10"
          src="/assets/icons/light.svg"
          width={200}
          height={300}
          alt="light"
        />
  
        {/* Logo */}
        <div className="flex items-end md:items-center gap-2">
          <Image
            className="size-[30px] sm:size-[35px] md:size-10 xl:size-[46px]"
            src="/assets/icons/logo.svg"
            width={60}
            height={50}
            alt="logo"
          />
          <h3 className="text-[15px] sm:text-[20px] lg:text-xl font-bold">
            দোয়া রুকিয়া
          </h3>
        </div>
        {/* Nav Link */}
        <NavLinks />
        <div className="flex items-center gap-[10px] sm:gap-3 lg:gap-5">
           {/* Theme */}
          <ThemeSwitcher />

          <Button
            btnText="সাপোর্ট করুন"
            imgPath="hearts"
            btnClasses="hidden md:flex"
          />
          {/* Hamburger Menu */}
          <HamburgerMenu isOpen={isOpen} onToggle={setIsOpen} />
          {/* Responsive Nav Link */}
        </div>
      </header>
      <ResponsiveNavLinks onClose={() => setIsOpen(false)} isOpen={isOpen} />
    </>
  );
};

export default Header;
