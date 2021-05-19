import { useEffect, useRef, useState } from "react";

export const cleanObject = (obj: { [key: string]: unknown }) => {
  const result = { ...obj };

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });

  return result;
};

export const isFalsy = (value: any) => (value === 0 ? false : !value);

export const useMount = (cb: () => void) => {
  useEffect(() => {
    cb();
  }, []);
};

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeOut = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeOut);
  }, [value, delay]);

  return debounceValue;
};

export const useDocumentTitle = (
  title: string,
  keepOnUnmount: boolean = true
) => {
  const oldTitle = useRef(document.title).current;

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = oldTitle;
      }
    };
  }, [keepOnUnmount, oldTitle]);
};

export const RouteReset = () => (window.location.href = window.location.origin);
/**
 * 返回组件的挂载状态， 如果还没挂载或者已经卸载，返回false;反之，返回true
 */
export const useMountedRef = () => {
  const mountRef = useRef(false);

  useEffect(() => {
    mountRef.current = true;
    return () => {
      mountRef.current = false;
    };
  });

  return mountRef;
};
