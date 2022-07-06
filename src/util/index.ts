import { useCallback, useState } from "react";
import { useEffect } from "react";
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
export const cleanObject = (object?: { [key: string]: unknown }) => {
  if (!object) return;
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
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

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    let timer = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounceValue;
};

export const useArray = <T>(val: T[]) => {
  const [value, setValue] = useState(val);
  const clear = useCallback(() => {
    setValue([]);
  }, []);
  const add = (item: T) =>
    useCallback(() => {
      setValue([...val, item]);
    }, [value, setValue]);
  const removeIndex = (index: number) =>
    useCallback(() => {
      value.splice(index, 1);
      setValue(value);
    }, [value, setValue]);

  return { value, clear, add, removeIndex };
};
