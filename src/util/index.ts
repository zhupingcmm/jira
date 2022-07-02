import { useState } from "react";
import { useEffect } from "react";
export const isFalsy = (value: any) => (value === 0 ? false : !value);
export const cleanObject = (object: any) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// const debounce = (func, delay) => {
//     let timeout;

//     return (...params) => {
//         if (timeout) {
//             clearTimeout(timeout);
//         }
//         timeout = setTimeout(() => {
//             func(...params);
//         }, delay)
//     }
// }

// const log = debounce(console.log('call'), 5000);
// log();
// log();
// log();

export const useDebounce = (value: any, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    let timer = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounceValue;
};
