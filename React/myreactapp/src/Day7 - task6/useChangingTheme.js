import { useEffect, useState } from "react";

export function useChangingTheme() {
  const getColorByWidth = (width) => {
    if (width < 768) return 'lightcoral';
    else if (width < 1024) return 'lightyellow';
    else return 'lightgreen';
  }

  const getDeviceType = (width) => {
    if (width < 768) return 'mobile';
    else if (width < 1024) return 'tablet';
    else return 'desktop';
  }

  const [windowData, setWindowData] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    theme: getColorByWidth(window.innerWidth),
    deviceType: getDeviceType(window.innerWidth),
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowData({
        width: window.innerWidth,
        height: window.innerHeight,
        theme: getColorByWidth(window.innerWidth),
        deviceType: getDeviceType(window.innerWidth),
      });
    }
    
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowData;
}