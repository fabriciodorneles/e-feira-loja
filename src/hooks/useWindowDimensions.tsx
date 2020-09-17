import { useState, useEffect } from 'react';

interface IWindowDimensions {
    width: number;
    height: number;
}

function getWindowDimensions(): IWindowDimensions {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export default function useWindowDimensions(): IWindowDimensions {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions(),
    );

    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
