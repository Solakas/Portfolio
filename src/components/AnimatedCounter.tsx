import React, { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

export default function AnimatedCounter({ value, duration = 1.2 }: AnimatedCounterProps) {
  const [current, setCurrent] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const match = value.match(/^([^0-9.-]*)([-+]?[0-9]*\.?[0-9]+)([^0-9.]*)$/);
  const prefix = match ? match[1] : "";
  const numericPart = match ? parseFloat(match[2]) : null;
  const suffix = match ? match[3] : "";
  const isFloat = match ? match[2].includes(".") : false;
  const decimalPlaces = isFloat ? match[2].split(".")[1].length : 0;

  useEffect(() => {
    if (numericPart === null) return;

    let isMounted = true;
    const startAnimation = () => {
      if (isMounted) {
        setHasStarted(true);
      }
    };

    // 1. Fallback timeout: ensures counters ALWAYS animate and never remain stuck at 0,
    // even inside nested overflow/motion containers where IntersectionObserver might not fire.
    const fallbackTimer = setTimeout(startAnimation, 350);

    // 2. IntersectionObserver with generous rootMargin and 0 threshold
    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              startAnimation();
              observer.disconnect();
            }
          });
        },
        { threshold: 0, rootMargin: "150px" }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        isMounted = false;
        observer.disconnect();
        clearTimeout(fallbackTimer);
      };
    } else {
      startAnimation();
      return () => {
        isMounted = false;
        clearTimeout(fallbackTimer);
      };
    }
  }, [numericPart]);

  useEffect(() => {
    if (!hasStarted || numericPart === null) return;

    let startTime: number | null = null;
    const startValue = 0;
    const endValue = numericPart;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = progress * (2 - progress); // Ease out quad
      const currentValue = startValue + easeProgress * (endValue - startValue);

      setCurrent(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrent(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, numericPart, duration]);

  if (numericPart === null) {
    return <span>{value}</span>;
  }

  // Handle formatted rendering
  return (
    <span ref={ref} className="tabular-nums inline-block">
      {prefix}
      {current.toFixed(decimalPlaces)}
      {suffix}
    </span>
  );
}
