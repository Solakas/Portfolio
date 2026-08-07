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

    const el = ref.current;
    if (!el) return;

    const checkVisibility = () => {
      const container = document.getElementById("case-study-scroll-container");
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      if (elRect.top <= containerRect.bottom - 40) {
        setHasStarted(true);
      }
    };

    const container = document.getElementById("case-study-scroll-container");
    if (container) {
      container.addEventListener("scroll", checkVisibility, { passive: true });
    }

    const timer1 = setTimeout(checkVisibility, 50);
    const timer2 = setTimeout(checkVisibility, 150);

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkVisibility);
      }
      clearTimeout(timer1);
      clearTimeout(timer2);
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
