import { useEffect, useRef } from "react";

interface DebounceHook {
  debounce: (fn: () => void, time: number) => void;
}
const useDebounce = (): DebounceHook => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const debounce = (fn: () => void, time: number): void => {
    clearTimeout(timer.current!);
    timer.current = setTimeout(() => {
      fn();
    }, time);
  };

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return { debounce: debounce };
};

export default useDebounce;
