"use client";
import Icon from "@/components/common/Icons";
import useDebounce from "@/hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchCategories = () => {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setSearch(query);
    }
  }, [searchParams]);
  const debounceHandler = useDebounce((value) => {
    setSearch(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    router.push(`${pathname}?${params.toString()}`);
  });
  return (
    <div className="">
      <div className="p-2 mx-2 mb-3 bg-primary-green/10 rounded-lg">
        <h1 className="text-center text-base text-primary-green font-medium">
          Categories
        </h1>
      </div>
      <div className="focus-within:border-primary-green focus-within:border-2 shadow-sm border flex items-center w-[95%] mx-auto p-1 h-12 bg-white rounded-lg ">
        <div className="pl-3">
          <Icon classes={"w-5"} name="search.svg" alt={"search"} />
        </div>
        <input
          placeholder="Search By Dua Name"
          className="w-full h-full outline-none border-none p-4 text-sm"
          type="text"
          onChange={(e) => debounceHandler(e.target.value)}
          name=""
          value={search}
          id=""
        />
      </div>
    </div>
  );
};

export default SearchCategories;
