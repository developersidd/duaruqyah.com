"use client";
import Icon from "@/components/common/Icons";
import CategoryLoadingSkeleton from "@/components/ui/CategoryLoadingSkeleton";
import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import CategoryList from "./CategoryList";

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const filteredData = data.data?.filter((category) =>
    category?.cat_name_en?.toLowerCase()?.includes(searchTerm.toLowerCase())
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const debounceHandler = useDebounce((value) => {
    setSearchTerm(value);
  });
  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/category`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData); // Set fetched data into state
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  // decide what to render
  let content;
  if (loading) {
    content = (
      <div className="space-y-5">
        {Array(7)
          .fill()
          .map((_, i) => (
            <CategoryLoadingSkeleton key={i} />
          ))}
      </div>
    );
  } else if (searchTerm && filteredData?.length === 0) {
    content = (
      <div className="text-center p-4">
        No data found with: <span className="text-primary"> {searchTerm} </span>
      </div>
    );
  } else if (error) {
    content = <div> {error.message}</div>;
  } else if (!error && filteredData?.length > 0) {
    content = <CategoryList categories={filteredData} />;
  }

  return (
    <div className="overflow-y-auto">
      <div className="">
        <div className="bg-primary p-4  rounded-t-xl mb-4">
          <h1 className="text-center text-base text-white">Categories</h1>
        </div>
        <div className="focus-within:border-primary focus-within:border-2 shadow-sm border flex items-center w-[95%] mx-auto p-1 h-12 bg-white rounded-lg ">
          <div className="pl-3">
            <Icon classes={"w-5"} name="search.svg" alt={"search"} />
          </div>
          <input
            placeholder="Search By Dua Name"
            className="w-full h-full outline-none border-none p-4 text-sm"
            type="text"
            onChange={(e) => debounceHandler(e.target.value)}
            name=""
            id=""
          />
        </div>
      </div>
      <div className="h-[calc(100vh-300px)] overflow-y-auto p-3">{content}</div>
    </div>
  );
};

export default Categories;
