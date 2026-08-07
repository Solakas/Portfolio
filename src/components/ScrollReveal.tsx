import React, { useState, useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down";
  distance?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 24
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const checkVisibility = () => {
      const container = document.getElementById("case-study-scroll-container");
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      // Trigger reveal when element top enters within 40px of container bottom
      if (elRect.top <= containerRect.bottom - 40) {
        setIsVisible(true);
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
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : `translate3d(0, ${distance}px, 0)`,
        filter: isVisible ? "blur(0px)" : "blur(4px)",
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, filter 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: "opacity, transform, filter"
      }}
    >
      {children}
    </div>
  );
}
