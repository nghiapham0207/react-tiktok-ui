import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const id = setTimeout(() => { setDebounceValue(value) }, delay);
        console.log('callback', id);
        return () => { console.log('clean', id); clearTimeout(id); };
    }, [value]);
    //return trước khi setTimeout, rõ ràng :))
    return debounceValue;
}

export default useDebounce;
