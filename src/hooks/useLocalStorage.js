import { useEffect, useState } from "react";

export default function useLocalStorage(key, initalValue) {
    const[value, setValue] = useState(() => {
        const item = localStorage.getItem(key);

        return item ? JSON.parse(item) : initalValue;
    });

    useEffect(() =>  {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}