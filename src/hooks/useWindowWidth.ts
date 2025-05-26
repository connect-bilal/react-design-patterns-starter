import { useEffect, useState } from 'react';

export const useWindowWidth = (onResize?: (width: number) => void): number => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      onResize?.(width);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [onResize]);

  return windowWidth;
};
