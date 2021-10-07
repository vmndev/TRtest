import { useRef } from "react";

export const useDebounce = (fn, ms = 0) => {
  const timerRef = useRef({});
  timerRef.current.fnRef = fn;

  return (...args) => {
    const callFn = () => timerRef.current.fnRef(...args);
    clearTimeout(timerRef.current.timer);
    timerRef.current.timer = setTimeout(callFn, ms);
  };
};
