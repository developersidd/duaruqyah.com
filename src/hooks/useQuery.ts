"use client";
import { useEffect, useState } from "react";
import { api } from "./../api/index";

interface QueryResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: any;
}

const useQuery = <T>(pathname: string): QueryResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await api.get(`/api/v1${pathname}`);
        if (res.status === 200 || res.statusText === "OK") {
          setData(res.data);
        }
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [pathname]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useQuery;
