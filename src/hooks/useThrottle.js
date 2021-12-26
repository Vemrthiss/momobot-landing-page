import { throttle } from "lodash";
import { useRef, useEffect, useCallback } from "react";

function useThrottle(cb, delay) {
    const cbRef = useRef(cb);
    useEffect(() => {cbRef.current = cb});
    return useCallback(
        throttle((...args) => cbRef.current(...args), delay), [delay]
    );
}

export default useThrottle;