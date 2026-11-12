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
    // regardless of whether the element is inside products-view-container, case-study-scroll-container,
    // or standard viewport.
    const fallbackTimer = setTimeout(startAnimation, 300);

    // 2. IntersectionObserver
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              startAnimation();
              if (observer) observer.disconnect();
            }
          });
        },
        { threshold: 0, rootMargin: "150px" }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
    }

    // 3. Container scroll checks (supports case-study-scroll-container and products-view-container)
    const checkVisibility = () => {
      const el = ref.current;
      if (!el) return;

      const containers = [
        document.getElementById("case-study-scroll-container"),
        document.getElementById("products-view-container"),
        document.getElementById("blueprint-scroll-container")
      ].filter(Boolean) as HTMLElement[];

      if (containers.length === 0) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) + 50) {
          startAnimation();
        }
        return;
      }

      containers.forEach((container) => {
        const containerRect = container.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        if (elRect.top <= containerRect.bottom + 50) {
          startAnimation();
        }
      });
    };

    const scrollContainers = [
      document.getElementById("case-study-scroll-container"),
      document.getElementById("products-view-container"),
      document.getElementById("blueprint-scroll-container")
    ].filter(Boolean) as HTMLElement[];

    scrollContainers.forEach((container) => {
      container.addEventListener("scroll", checkVisibility, { passive: true });
    });

    const timer1 = setTimeout(checkVisibility, 50);
    const timer2 = setTimeout(checkVisibility, 150);

    return () => {
      isMounted = false;
      if (observer) observer.disconnect();
      clearTimeout(fallbackTimer);
      clearTimeout(timer1);
      clearTimeout(timer2);
      scrollContainers.forEach((container) => {
        container.removeEventListener("scroll", checkVisibility);
      });
    };
  }, [numericPart]);

  useEffect(() => {
    if (!hasStarted || numericPart === null) return;

    let startTime: number | null = null;
    const startValue = 0;
    const endValue = numericPart;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = progress * (2 - progress); // Ease out quad
      const currentValue = startValue + easeProgress * (endValue - startValue);

      setCurrent(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCurrent(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, numericPart, duration]);

  if (numericPart === null) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref} className="tabular-nums inline-block">
      {prefix}
      {current.toFixed(decimalPlaces)}
      {suffix}
    </span>
  );
}
