"use client";
import { useEffect, useState } from "react";

interface QueryResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: any;
}

const useQuery = <T>(url: string): QueryResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        const fetchedData: T = await res.json();
        setData(fetchedData);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useQuery;
