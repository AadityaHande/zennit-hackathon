"use client";
import { useState, useEffect } from "react";
import { animate } from "framer-motion";

export function useAnimatedCounter(
  targetValue: number,
  shouldAnimate: boolean,
  duration: number = 1.5 // seconds
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (shouldAnimate) {
      const controls = animate(0, targetValue, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.round(value));
        },
      });
      return () => controls.stop();
    } else {
        // If we shouldn't animate, just set to the final value instantly
        // This handles the case where the element is already in view on load
        setCount(targetValue);
    }
  }, [targetValue, shouldAnimate, duration]);

  return count;
}
