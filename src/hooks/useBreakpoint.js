import { debounce } from 'lodash';
import { useState, useEffect } from 'react';

export default function useBreakpoint() {
    const [windowWidth, setWindowWidth] = useState(0); // curent value of BREAKPOINTS

    const handleResize = debounce(() => {
        console.log('hi');
        setWindowWidth(window.innerWidth);
    }, 500);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize(); // do i need this?

        return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth]);

    return windowWidth;
}