/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, MouseEvent } from "react";
import { flushSync } from "react-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Menu, X, Linkedin, Github, Youtube } from "lucide-react";
import AboutView from "./components/AboutView";
import ProductsView from "./components/ProductsView";
import ProjectsView from "./components/ProjectsView";
import DesignSystemsView from "./components/DesignSystemsView";
import ManifestoView from "./components/ManifestoView";
import Antigravity from "./components/Antigravity";
import LoadingScreen from "./components/LoadingScreen";

interface Splatter {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  maxAge: number;
  age: number;
}

function getContainSize(imgWidth: number, imgHeight: number, containerWidth: number, containerHeight: number) {
  const imgRatio = imgWidth / imgHeight;
  const containerRatio = containerWidth / containerHeight;
  let w, h, x, y;
  
  if (imgRatio > containerRatio) {
    w = containerWidth;
    h = containerWidth / imgRatio;
    x = 0;
    y = containerHeight - h; // Always fixed at the bottom of the section
  } else {
    h = containerHeight;
    w = containerHeight * imgRatio;
    x = (containerWidth - w) / 2;
    y = containerHeight - h; // Align to bottom so the portrait sits on the baseline
  }
  
  return { x, y, width: w, height: h };
}

function drawSplatter(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  
  const numSpokes = 16;
  const points: { x: number; y: number }[] = [];
  
  for (let i = 0; i < numSpokes; i++) {
    const angle = (i * 2 * Math.PI) / numSpokes;
    // Layering sine waves to create organic brush style drips
    const noise = Math.sin(angle * 4) * (r * 0.22) + 
                  Math.cos(angle * 7) * (r * 0.12) + 
                  Math.sin(angle * 3) * (r * 0.08);
    const radius = r + noise;
    points.push({
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    });
  }

  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 0; i < points.length; i++) {
    const nextIdx = (i + 1) % points.length;
    const xc = (points[i].x + points[nextIdx].x) / 2;
    const yc = (points[i].y + points[nextIdx].y) / 2;
    ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
  }
  ctx.closePath();
  ctx.fill();

  // Add surrounding splatter droplets
  const droplets = [
    { dx: -r * 1.15, dy: -r * 0.55, radius: r * 0.12 },
    { dx: r * 0.75, dy: -r * 1.25, radius: r * 0.09 },
    { dx: r * 1.25, dy: r * 0.65, radius: r * 0.11 },
    { dx: -r * 0.65, dy: r * 1.15, radius: r * 0.07 },
    { dx: -r * 1.05, dy: r * 0.35, radius: r * 0.13 },
    { dx: r * 0.45, dy: r * 1.05, radius: r * 0.08 },
  ];

  droplets.forEach((drop) => {
    ctx.beginPath();
    ctx.arc(drop.dx, drop.dy, drop.radius, 0, 2 * Math.PI);
    ctx.fill();
  });

  ctx.restore();
}

function KPICounter({ value, duration = 1200 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [value, duration]);

  return <>{count}</>;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isWebView, setIsWebView] = useState(false);

  const trackConversion = (eventName: string, label: string) => {
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", eventName, {
        event_category: "engagement",
        event_label: label,
      });
    }
  };

  // Manual page_view tracking on initial load and hash change
  useEffect(() => {
    const handlePageView = () => {
      if (typeof (window as any).gtag === "function") {
        const rawHash = window.location.hash;
        const cleanPath = rawHash ? rawHash.replace("#", "") : "/";
        
        (window as any).gtag("event", "page_view", {
          page_path: cleanPath,
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Track pageview on mount
    handlePageView();

    window.addEventListener("hashchange", handlePageView);
    return () => window.removeEventListener("hashchange", handlePageView);
  }, []);

  useEffect(() => {
    const checkIsWebView = () => {
      setIsWebView(window.innerWidth >= 1024);
    };
    checkIsWebView();
    window.addEventListener("resize", checkIsWebView);
    return () => window.removeEventListener("resize", checkIsWebView);
  }, []);

  // Hash-based router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      let targetSection = "home";
      
      if (hash.includes("about")) {
        targetSection = "about";
      } else if (hash.includes("live-product")) {
        targetSection = "live-products";
      } else if (hash.includes("ai-project")) {
        targetSection = "ai-projects";
      } else if (hash.includes("design-system")) {
        targetSection = "design-systems";
      } else if (hash.includes("manifesto")) {
        targetSection = "manifesto";
      } else {
        targetSection = "home";
      }

      if ((document as any).startViewTransition) {
        const transition = (document as any).startViewTransition(() => {
          flushSync(() => {
            setActiveSection(targetSection);
          });
        });
        // Catch any promise rejection if the transition is aborted/skipped
        if (transition) {
          if (transition.ready) transition.ready.catch(() => {});
          if (transition.finished) transition.finished.catch(() => {});
          if (transition.updateCallbackDone) transition.updateCallbackDone.catch(() => {});
        }
      } else {
        setActiveSection(targetSection);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Run once initially
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  
  const imgRef = useRef<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const splattersRef = useRef<Splatter[]>([]);
  const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const lastMousePosRef = useRef<{ x: number, y: number } | null>(null);

  // Ref to the main scrolling container
  const mainScrollRef = useRef<HTMLDivElement | null>(null);

  // Scroll tracking and mapping
  const { scrollY } = useScroll({
    container: mainScrollRef
  });

  // Map scroll pixel values for clean parallax/transition effects on the hero typography
  const solakidisScrollX = useTransform(scrollY, [0, 400], [0, -32]);
  const panosScrollX = useTransform(scrollY, [0, 400], [0, 32]);
  const heroScrollY = useTransform(scrollY, [0, 400], [0, -12]);
  const heroScrollScale = useTransform(scrollY, [0, 400], [1, 0.97]);
  const heroScrollOpacity = useTransform(scrollY, [0, 300], [1, 0.4]);

  // Load image
  useEffect(() => {
    const img = new Image();
    img.src = "/assets/portrait.png";
    img.onload = () => {
      imgRef.current = img;
      setImgLoaded(true);
      setImgError(false);
    };
    img.onerror = () => {
      setImgError(true);
    };
  }, []);

  // Update loop for animate fadeout
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = Date.now();

    const update = () => {
      const now = Date.now();
      const deltaTime = now - lastTime;
      lastTime = now;

      // Update active splatters age and opacities
      splattersRef.current.forEach((s) => {
        s.age += deltaTime;
        const remainingLife = Math.max(0, 1 - s.age / s.maxAge);
        s.opacity = Math.pow(remainingLife, 1.5); // smooth cubic ease-out fade
      });

      // Filter out completed splatters
      splattersRef.current = splattersRef.current.filter((s) => s.age < s.maxAge);

      const canvas = canvasRef.current;
      const container = containerRef.current;
      
      if (canvas && container && imgLoaded && imgRef.current) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const dpr = window.devicePixelRatio || 1;
          
          const rect = container.getBoundingClientRect();
          const width = rect.width;
          const height = rect.height;

          // Resize canvas for crispiness
          if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
          }

          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const imgWidth = imgRef.current.naturalWidth;
          const imgHeight = imgRef.current.naturalHeight;
          const bounds = getContainSize(imgWidth, imgHeight, width, height);

          ctx.save();
          ctx.scale(dpr, dpr);

          // 1. Draw Grayscale Base Image Layer
          ctx.save();
          ctx.filter = "grayscale(100%) brightness(0.95)";
          ctx.drawImage(imgRef.current, bounds.x, bounds.y, bounds.width, bounds.height);
          ctx.restore();

          // 2. Color reveal with dynamic custom mask if we have any splatters
          if (splattersRef.current.length > 0) {
            if (!offscreenCanvasRef.current) {
              offscreenCanvasRef.current = document.createElement("canvas");
            }
            const offscreen = offscreenCanvasRef.current;
            if (offscreen.width !== canvas.width || offscreen.height !== canvas.height) {
              offscreen.width = canvas.width;
              offscreen.height = canvas.height;
            }
            const oCtx = offscreen.getContext("2d");
            if (oCtx) {
              oCtx.clearRect(0, 0, offscreen.width, offscreen.height);
              oCtx.save();
              oCtx.scale(dpr, dpr);

              // Draw all splatters on mask with their opacities
              splattersRef.current.forEach((s) => {
                oCtx.fillStyle = `rgba(0,0,0,${s.opacity})`;
                drawSplatter(oCtx, s.x, s.y, s.radius);
              });
              oCtx.restore();

              // Draw Colored Portrait
              ctx.save();
              ctx.drawImage(imgRef.current, bounds.x, bounds.y, bounds.width, bounds.height);
              ctx.restore();

              // Composite Mask
              ctx.save();
              ctx.globalCompositeOperation = "destination-in";
              ctx.scale(1/dpr, 1/dpr);
              ctx.drawImage(offscreen, 0, 0);
              ctx.restore();

              // Draw Grayscale Image underneath backlayer
              ctx.save();
              ctx.globalCompositeOperation = "destination-over";
              ctx.filter = "grayscale(100%) brightness(0.95)";
              ctx.drawImage(imgRef.current, bounds.x, bounds.y, bounds.width, bounds.height);
              ctx.restore();
            }
          }

          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [imgLoaded]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const lastPos = lastMousePosRef.current;
    const distance = lastPos 
      ? Math.hypot(x - lastPos.x, y - lastPos.y) 
      : 999;

    // Only add a new brush splatter if mouse moved at least 8px
    if (distance > 8) {
      const sizeMultiplier = 0.85 + Math.random() * 0.3;
      const baseRadius = window.innerWidth < 640 ? 45 : 75;
      const radius = baseRadius * sizeMultiplier;

      const newSplatter: Splatter = {
        x,
        y,
        radius,
        opacity: 1,
        maxAge: 3000, // 3 seconds fade out
        age: 0
      };

      splattersRef.current.push(newSplatter);
      lastMousePosRef.current = { x, y };
    }
  };

  // Navigation Links
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About me", href: "#about" },
    { label: "Live products", href: "#live-products" },
    { label: "AI projects", href: "#ai-projects" },
    { label: "Design systems", href: "#design-systems" }
  ];

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onFinished={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      <div 
        ref={mainScrollRef} 
        id="portfolio-container" 
      className={`relative h-screen w-full bg-[#FCFCFC] text-zinc-900 font-sans flex flex-col justify-between pt-4 px-6 sm:pt-6 sm:px-8 lg:pt-12 lg:px-12 selection:bg-zinc-900 selection:text-white transition-all duration-300 ${
        activeSection === "home" 
          ? "pb-0 overflow-hidden" 
          : "pb-12 sm:pb-16 lg:pb-0 overflow-y-auto lg:overflow-hidden"
      }`}
    >
      
      {/* BACKGROUND DECORATIVE ELEMENTS (Subtle modern details to amplify craftsmanship) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.02]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-zinc-900 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-zinc-900 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] border border-zinc-900 rounded-full" />
      </div>

      {/* HEADER SECTION */}
      <motion.header 
        id="portfolio-header"
        initial={{ opacity: 0, y: -20 }}
        animate={isLoading ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex items-center justify-between z-40 relative border-b border-zinc-100 pb-3 lg:pb-8"
      >
        {/* Left: "open to work" logo/pill */}
        <div 
          className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-zinc-900 bg-white border border-zinc-250 py-2.5 px-4.5 rounded-full select-none shadow-xs"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span>Open to work</span>
        </div>

        {/* Center: Desktop Navigation links */}
        <nav className="hidden lg:flex items-center gap-x-1.5 text-sm font-medium text-zinc-650 bg-zinc-100/40 backdrop-blur-md border border-zinc-200/30 rounded-full p-1.5 select-none font-sans">
          {navLinks.map((link, idx) => {
            const cleanHref = link.href.replace("#", "");
            const isActive = cleanHref === activeSection;
            
            return (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  backgroundColor: isActive ? "#18181b" : "rgba(24, 24, 27, 0)",
                  color: isActive ? "#ffffff" : "#52525b"
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 380,
                  damping: 26,
                  mass: 0.8
                }}
                whileHover={{ 
                  scale: 1.02, 
                  backgroundColor: isActive ? "#18181b" : "rgba(24, 24, 27, 0.06)", 
                  color: isActive ? "#ffffff" : "#18181b" 
                }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2 rounded-full cursor-pointer flex items-center transition-shadow duration-200 ${
                  isActive ? "font-semibold shadow-xs" : ""
                }`}
              >
                <span>{link.label}</span>
              </motion.a>
            );
          })}
        </nav>

        {/* Actions Button / Hamburger */}
        <div className="flex items-center gap-4">
          <motion.a 
            id="lets-talk-btn"
            href="mailto:solakidisp@gmail.com"
            onClick={() => trackConversion('contact_click', 'email')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group hidden sm:flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm py-2.5 px-6 rounded-full transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          {/* Hamburger (Mobile Only) */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2.5 text-zinc-800 bg-zinc-100 rounded-full hover:bg-zinc-200 cursor-pointer transition-colors"
            title="Toggle menu"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* MOBILE EXPANDABLE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-24 left-6 right-6 bg-white border border-zinc-200/80 rounded-2xl shadow-xl z-50 p-6 overflow-hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-4 border-b border-zinc-100 text-[16px] font-semibold text-zinc-800 hover:bg-zinc-50 rounded-lg transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                </a>
              ))}
            </div>

            <a 
              href="mailto:solakidisp@gmail.com"
              onClick={() => {
                setMobileMenuOpen(false);
                trackConversion('contact_click', 'email');
              }}
              className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-3.5 rounded-xl transition-colors cursor-pointer"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DYNAMIC VIEW SWITCHING */}
      <AnimatePresence mode="wait">
        {activeSection === "home" && (
          <motion.div
            key="home-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1 w-full flex flex-col justify-between overflow-visible lg:overflow-visible relative"
          >
            {/* Dynamic particle background on home page only - hidden/disabled on mobile & tablet portrait */}
            {isWebView && (
              <div className="absolute inset-0 pointer-events-none z-0">
                <Antigravity
                  count={300}
                  magnetRadius={6}
                  ringRadius={7}
                  waveSpeed={0.4}
                  waveAmplitude={1}
                  particleSize={1.5}
                  lerpSpeed={0.05}
                  color={'#FF9FFC'}
                  autoAnimate={false}
                  particleVariance={1}
                  particleShape="tetrahedron"
                  eventSource={mainScrollRef}
                />
              </div>
            )}
            {/* GIANT CENTER TYPOGRAPHY */}
            <motion.div 
              id="hero-typography-container"
              style={{
                y: heroScrollY,
                scale: heroScrollScale,
                opacity: heroScrollOpacity
              }}
              className="h-fit flex flex-col items-center justify-start pt-3 sm:pt-6 lg:pt-[5vh] pb-1 sm:pb-2 mb-4 sm:mb-6 lg:mb-0 select-none z-10 w-full"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isLoading ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="w-full flex flex-col items-center"
              >
              <h1 className="text-[10.5vw] sm:text-[9.5vw] lg:text-[10vw] xl:text-[9vw] font-black tracking-tighter uppercase leading-[0.85] text-center w-full flex flex-wrap items-center justify-center gap-x-[2.5vw] select-none text-zinc-900">
                <motion.span style={{ x: solakidisScrollX }} className="inline-block">
                  <motion.span 
                    initial={{ x: -60, opacity: 0, scale: 0.95 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.06, 
                      rotate: -1.5,
                      transition: { duration: 0.3, ease: "easeOut" } 
                    }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="text-outline font-extrabold cursor-pointer inline-block"
                  >
                    SOLAKIDIS
                  </motion.span>
                </motion.span>
                <motion.span style={{ x: panosScrollX }} className="inline-block">
                  <motion.span 
                    initial={{ x: 60, opacity: 0, scale: 0.95 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.06, 
                      rotate: 1.5,
                      transition: { duration: 0.3, ease: "easeOut" } 
                    }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="font-black text-zinc-900 tracking-tighter cursor-pointer inline-block"
                  >
                    PANOS
                  </motion.span>
                </motion.span>
              </h1>
              </motion.div>
            </motion.div>

            {/* FOOTER SECTION: CONTROLS & META (Main Content Div) */}
            <motion.footer 
              id="portfolio-footer"
              initial={{ opacity: 0, y: -20 }}
              animate={isLoading ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="w-full max-w-[1400px] mx-auto flex-1 flex flex-col lg:flex-row lg:items-end justify-end lg:justify-between items-center gap-8 sm:gap-12 lg:gap-6 z-20 pb-0 px-0 lg:px-16 xl:px-8 relative"
            >
              {/* Intro Info, KPIs and CTA Button Panel (Left) */}
              <div className="flex flex-col items-start w-full lg:w-[350px] lg:shrink-0 lg:self-end pb-0 lg:pb-10 gap-y-5 sm:gap-y-6 lg:gap-y-8 order-1 lg:order-none">
                <div className="flex flex-col items-start w-full">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 w-full">
                    Product Designer
                  </h2>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed mt-2 w-full max-w-[325px]">
                    Designing digital products that are clear, usable, and conversion focused.
                  </p>
                </div>

                {/* KPIs Section (Center aligned, counting animate) */}
                <div id="kpis-section" className="grid grid-cols-2 gap-x-8 gap-y-4 sm:gap-x-12 sm:gap-y-6 lg:gap-x-10 lg:gap-y-7 w-full text-center select-none justify-center">
                  <motion.a 
                    href="#about"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="flex flex-col items-center cursor-pointer group focus:outline-none"
                    id="kpi-years-experience"
                  >
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-normal text-zinc-900 leading-none group-hover:text-zinc-950 transition-colors">
                      <KPICounter value={6} />
                    </span>
                    <span className="text-[10px] sm:text-xs lg:text-xs font-bold uppercase tracking-widest text-zinc-500 mt-1.5 lg:mt-2 whitespace-nowrap group-hover:text-zinc-800 transition-colors">
                      Years Experience
                    </span>
                  </motion.a>

                  <motion.a 
                    href="#live-products"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="flex flex-col items-center cursor-pointer group focus:outline-none"
                    id="kpi-live-products"
                  >
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-normal text-zinc-900 leading-none group-hover:text-zinc-950 transition-colors">
                      <KPICounter value={4} />
                    </span>
                    <span className="text-[10px] sm:text-xs lg:text-xs font-bold uppercase tracking-widest text-zinc-500 mt-1.5 lg:mt-2 whitespace-nowrap group-hover:text-zinc-800 transition-colors">
                      Live Products
                    </span>
                  </motion.a>

                  <motion.a 
                    href="#design-systems"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="flex flex-col items-center cursor-pointer group focus:outline-none"
                    id="kpi-design-systems"
                  >
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-normal text-zinc-900 leading-none group-hover:text-zinc-950 transition-colors">
                      <KPICounter value={3} />
                    </span>
                    <span className="text-[10px] sm:text-xs lg:text-xs font-bold uppercase tracking-widest text-zinc-500 mt-1.5 lg:mt-2 whitespace-nowrap group-hover:text-zinc-800 transition-colors">
                      Design Systems
                    </span>
                  </motion.a>

                  <motion.a 
                    href="#ai-projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="flex flex-col items-center cursor-pointer group focus:outline-none"
                    id="kpi-ai-projects"
                  >
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-normal text-zinc-900 leading-none group-hover:text-zinc-950 transition-colors">
                      <KPICounter value={6} />
                    </span>
                    <span className="text-[10px] sm:text-xs lg:text-xs font-bold uppercase tracking-widest text-zinc-500 mt-1.5 lg:mt-2 whitespace-nowrap group-hover:text-zinc-800 transition-colors">
                      AI Projects
                    </span>
                  </motion.a>
                </div>


              </div>

              {/* Middle Portrait Image Container (Center) */}
              <div 
                ref={containerRef}
                className="w-full flex-1 lg:w-auto lg:flex-1 flex items-end justify-center h-auto lg:h-[46vh] xl:h-[52vh] relative px-4 self-end cursor-crosshair group/portrait overflow-hidden rounded-t-2xl rounded-b-none order-3 lg:order-none"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => {
                  lastMousePosRef.current = null;
                }}
              >
                {!imgError ? (
                  <canvas 
                    ref={canvasRef}
                    className="z-10 absolute bottom-0 block select-none pointer-events-none"
                  />
                ) : null}

                {/* Elegant fallback outline placeholder if assets/portrait.png is empty/not present */}
                {imgError && (
                  <div 
                    id="portrait-placeholder" 
                    className="absolute inset-x-4 bottom-0 top-0 rounded-t-2xl rounded-b-none bg-gradient-to-t from-zinc-100/60 to-transparent border border-dashed border-zinc-200 flex flex-col items-center justify-center p-4 text-center select-none"
                  >
                    <div className="w-9 h-9 rounded-full bg-zinc-200/50 flex items-center justify-center text-zinc-500 mb-1.5 border border-zinc-200">
                      👤
                    </div>
                    <p className="text-zinc-400 text-xs font-mono">[portrait.png]</p>
                  </div>
                )}
              </div>

              {/* Social Connections Pills (Right) */}
              <div className="flex flex-col items-center lg:items-end w-full lg:w-[220px] lg:shrink-0 gap-3 sm:gap-4 mt-0 lg:mt-0 lg:self-end pb-0 lg:pb-10 order-2 lg:order-none">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-zinc-900 mb-2.5 lg:mb-2 select-none">
                  Let's connect
                </h2>
                <div className="flex flex-row lg:flex-col items-center justify-center lg:items-end w-full gap-4 lg:gap-3 pb-0 lg:pb-0">
                  <motion.a
                    href="https://www.linkedin.com/in/solakidis-panagiotis-830b69326/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Connect on LinkedIn"
                    onClick={() => trackConversion('social_click', 'linkedin')}
                    whileHover={{ scale: 1.02, borderColor: "#18181b", backgroundColor: "#fafafa" }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-full border border-zinc-200 hover:border-zinc-900 hover:text-zinc-900 text-zinc-700 font-semibold text-xs sm:text-sm h-11 px-5 flex items-center justify-center gap-2.5 transition-all cursor-pointer bg-white/60 backdrop-blur-xs shadow-xs w-full sm:w-auto md:w-40 text-center"
                  >
                    <Linkedin className="w-4 h-4 text-zinc-600 group-hover:text-zinc-900" />
                    <span>LinkedIn</span>
                  </motion.a>

                  <motion.a
                    href="https://github.com/Solakas"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Follow on GitHub"
                    onClick={() => trackConversion('social_click', 'github')}
                    whileHover={{ scale: 1.02, borderColor: "#18181b", backgroundColor: "#fafafa" }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-full border border-zinc-200 hover:border-zinc-900 hover:text-zinc-900 text-zinc-700 font-semibold text-xs sm:text-sm h-11 px-5 flex items-center justify-center gap-2.5 transition-all cursor-pointer bg-white/60 backdrop-blur-xs shadow-xs w-full sm:w-auto md:w-40 text-center"
                  >
                    <Github className="w-4 h-4 text-zinc-600 group-hover:text-zinc-900" />
                    <span>GitHub</span>
                  </motion.a>

                  <motion.a
                    href="https://www.youtube.com/@UX-AIDesigner"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Subscribe on YouTube"
                    onClick={() => trackConversion('social_click', 'youtube')}
                    whileHover={{ scale: 1.02, borderColor: "#18181b", backgroundColor: "#fafafa" }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-full border border-zinc-200 hover:border-zinc-900 hover:text-zinc-900 text-zinc-700 font-semibold text-xs sm:text-sm h-11 px-5 flex items-center justify-center gap-2.5 transition-all cursor-pointer bg-white/60 backdrop-blur-xs shadow-xs w-full sm:w-auto md:w-40 text-center"
                  >
                    <Youtube className="w-4 h-4 text-zinc-600 group-hover:text-zinc-900" />
                    <span>YouTube</span>
                  </motion.a>
                </div>
              </div>
            </motion.footer>
          </motion.div>
        )}

        {activeSection === "manifesto" && (
          <div key="manifesto" className="flex-1 w-full flex flex-col items-center justify-start overflow-hidden">
            <ManifestoView />
          </div>
        )}

        {activeSection === "about" && (
          <div key="about" className="flex-1 w-full flex flex-col items-center justify-start overflow-hidden">
            <AboutView onBack={() => { window.location.hash = ""; }} />
          </div>
        )}

        {activeSection === "live-products" && (
          <div key="products" className="flex-1 w-full flex flex-col items-center justify-start overflow-hidden">
            <ProductsView onBack={() => { window.location.hash = ""; }} />
          </div>
        )}

        {activeSection === "ai-projects" && (
          <div key="projects" className="flex-1 w-full flex flex-col items-center justify-start overflow-hidden">
            <ProjectsView onBack={() => { window.location.hash = ""; }} />
          </div>
        )}

        {activeSection === "design-systems" && (
          <div key="design-systems" className="flex-1 w-full flex flex-col items-center justify-start overflow-hidden">
            <DesignSystemsView onBack={() => { window.location.hash = ""; }} />
          </div>
        )}
      </AnimatePresence>
      </div>
    </>
  );
}

