"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import DuaCard from "./DuaCard";
import DuaCardSkeleton from "../ui/DuaCardSkeleton";

const DuaList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const cat_id = searchParams.get("cat_id");
  const [duas, setDuas] = useState([]);
  useEffect(() => {
    // Fetch dua by category
    const handleFetchDuaByCategory = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/dua/${cat_id}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setDuas(data?.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (cat_id) {
      handleFetchDuaByCategory();
    }
  }, [cat_id]);
  // decide what to render
  let content;
  if (loading) {
    content = (
      <div className="space-y-5">
        {Array(7)
          .fill()
          .map((_, i) => (
            <DuaCardSkeleton key={i} />
          ))}
      </div>
    );
  } else if (!loading && error) {
    content = <div> {error.message}</div>;
  } else if (!loading && !error && duas?.length > 0) {
    content = duas.map((dua) => <DuaCard key={dua.id} dua={dua} />);
  } else if (!loading && !error && !duas?.length) {
    content = <div> No Dua Found </div>;
  }
  return <div className="space-y-5 ">{content}</div>;
};

export default DuaList;
