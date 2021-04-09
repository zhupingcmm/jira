import { useEffect, useState } from "react";

export const cleanObject = (obj) => {
    const result = {...obj};

    Object.keys(obj).forEach(key => {
        const value = obj[key];
        if (isFalsy(value)) {
            delete result[key]
        }

    })

    return result;
}

export const isFalsy = (value) => value === 0 ? false : !value;

export const useMount = (cb) => {
    useEffect(() => {
        cb();
    },[])
}

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const timeOut = setTimeout(()=> setDebounceValue(value), delay);
        return () => clearTimeout(timeOut);
    },[value, delay]);

    return debounceValue;
}