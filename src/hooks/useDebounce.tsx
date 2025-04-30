import React, { useEffect, useRef } from "react";

const useDebounce = <T extends (...args: any[]) => void>(
  cb: T,
  delay: number = 300
) => {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Cleanup
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  const debouncedCallback = (...args: Parameters<T>) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      cb(...args);
    }, delay);
  };

  return debouncedCallback;
};

export default useDebounce;