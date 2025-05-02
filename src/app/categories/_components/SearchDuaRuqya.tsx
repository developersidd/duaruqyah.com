"use client";
import Icon from "@/components/common/Icons";
import useDebounce from "@/hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchDuaRuqya = () => {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

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
    <div className="w-[30%]">
      <div className="focus-within:border-primary-green border-2 border-[#F4F4F4]  flex items-center w-full mx-auto p-1 h-[42px] bg-[#F4F4F4] rounded-lg ">
        <div className="pl-3">
          <Icon classes={"w-4"} name="search.svg" alt={"search"} />
        </div>
        <input
          placeholder="যে দোয়া/রুকিয়া খুঁজতে চাচ্ছেন সেটি এখানে সার্চ করুন..."
          className="w-full h-full outline-none border-none bg-inherit py-3 px-3 text-sm"
          type="text"
          onChange={(e) => debounceHandler(e.target.value)}
          name=""
          id=""
        />
      </div>
    </div>
  );
};

export default SearchDuaRuqya;
