"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CollectionHeader = ({
  tabs,
  activeTabIndex,
  setActiveTabIndex,
}: {
  tabs: any;
  activeTabIndex: number;
  setActiveTabIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const tabsRef = React.useRef<HTMLButtonElement[]>([]);
  const [tabBoxWidth, setTabBoxWidth] = useState(0);
  const [tabBoxLeft, setTabBoxLeft] = useState(0);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabBoxLeft(currentTab?.offsetLeft ?? 0);
      setTabBoxWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div className="md:flex justify-between relative mb-5">
      <h3 className="text-[18px] sm:text-xl lg:text-2xl mb-3 font-bold">
        কালেকশন
      </h3>
      <div className="py-[3px] px-1 relative rounded-lg flex items-center justify-between  gap-[2px] sm:gap-1 md:gap-3 bg-primary-black/10 ">
        {tabs.map((tab: any, ind: number) => (
          <button
            ref={(e) => {
              if (e) tabsRef.current[ind] = e;
            }}
            key={tab.title}
            className={`${
              ind === activeTabIndex ? "font-semibold" : ""
            } flex items-center text-[10px] sm:text-[12px] flex-1 justify-center mx-auto lg:text-sm gap-1 rounded-md px-[6px] sm:py-[8px] sm:px-[11px] md:px-[12px] lg:px-[8px] z-20 py-1 min-w-max outline-none`}
            onClick={() => setActiveTabIndex(ind)}
          >
            <Image
              className="size-[10px] sm:size-4"
              src={`/assets/icons/${tab.imgName}`}
              width={20}
              height={20}
              alt={tab.title}
            />
            <span className="text-[14px] md:text-[15px]"> {tab.title} </span>
          </button>
        ))}
        <div
          className={`absolute bg-white shadow-md transition-all duration-500 rounded-md 
          h-[80%] `}
          style={{ left: tabBoxLeft, width: tabBoxWidth }}
        ></div>
      </div>
    </div>
  );
};

export default CollectionHeader;
