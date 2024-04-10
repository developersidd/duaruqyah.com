"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import BookMarks from "./BookMarks";
import CollectionHeader from "./CollectionHeader";
import LastRedDuas from "./LastRedDuas";
import Pins from "./Pins";
const tabs = [
  {
    title: "সর্বশেষ পঠিত দোয়া",
    imgName: "watch.svg",
    component: <LastRedDuas />,
  },
  {
    title: "বুকমার্কস",
    imgName: "bookmark.svg",
    component: <BookMarks />,
  },
  {
    title: "পিনস",
    imgName: "pin.svg",
    component: <Pins />,
  },
];

const Collection = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <section className="2xl:container  mx-auto px-3 pb-3 sm:pb-4 sm:px-4 md:px-5  lg:pb-[40px] lg:px-10 xl:px-20">
      <CollectionHeader
        activeTabIndex={activeTabIndex}
        tabs={tabs}
        setActiveTabIndex={setActiveTabIndex}
      />
      <motion.div
      key={activeTabIndex}
        initial={{ opacity: 0, y: 150 }}
        transition={{ duration: 0.5 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {tabs[activeTabIndex].component}
      </motion.div>
    </section>
  );
};

export default Collection;
