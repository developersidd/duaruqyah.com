"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Button from "../common/Button";
import ThemeSwitcher from "../ui/ThemeSwitcher";
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
            {" "}
            দোয়া রুকিয়া{" "}
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
          <motion.div
            animate={isOpen ? "open" : "closed"}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="xl:hidden z-30  size-[32px] md:size-[40px] 2xl:size-[46px]  px-[5px]  py-2 rounded-md border-[1.5px] border-primary-light-gray grid place-items-center bg-primary-light-gray space-y-[6px] cursor-pointer"
          >
            <motion.div
              style={{ transformOrigin: "0% 0%" }}
              variants={{
                open: {
                  rotate: 41,
                  x: 2,
                  y: 1,
                },
                closed: {
                  rotate: 0,
                },
              }}
              transition={{ duration: 0.3 }}
              className="w-full rounded h-[1.3px] bg-primary-black"
            ></motion.div>
            <motion.div
              variants={{
                open: {
                  x: -50,
                  opacity: 0,
                  display: "none",
                },
                closed: {
                  x: 0,
                  opacity: 1,
                },
              }}
              className="w-full rounded h-[1.3px] bg-primary-black/30"
            ></motion.div>
            <motion.div
              style={{ transformOrigin: "0% 100%" }}
              variants={{
                open: {
                  rotate: -39,
                  x: 2,
                },
                closed: {
                  rotate: 0,
                },
              }}
              transition={{ duration: 0.3 }}
              className="w-full rounded h-[1.3px] bg-primary-black"
            ></motion.div>
          </motion.div>
          {/* Responsive Nav Link */}
        </div>
      </header>
      <ResponsiveNavLinks onClose={() => setIsOpen(false)} isOpen={isOpen} />
    </>
  );
};

export default Header;
