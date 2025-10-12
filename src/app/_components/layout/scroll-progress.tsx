"use client";
import { useState, useEffect } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const scrollPosition = window.scrollY;
        setProgress(scrollPosition / totalHeight);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50 pointer-events-none">
      <div
        className="h-full bg-primary"
        style={{ 
          transform: `scaleX(${progress})`, 
          transformOrigin: 'left',
          transition: 'transform 0.1s ease-out'
        }}
      />
    </div>
  );
}
