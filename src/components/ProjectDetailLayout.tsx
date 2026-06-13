import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X, ChevronLeft, ChevronRight, Github, Globe, LayoutGrid } from "lucide-react";

interface ProjectDetailLayoutProps {
  title: string;
  category: string;
  badge: string;
  subtitle: string;
  githubUrl?: string;
  liveUrl?: string;
  liveUrlLabel?: string;
  figmaUrl?: string;
  tenantUrl?: string;
  tenantUrlLabel?: string;
  tenantUrl2?: string;
  tenantUrlLabel2?: string;
  productPageUrl?: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hideSubtitles?: boolean;
  children: React.ReactNode;
}

export default function ProjectDetailLayout({
  title,
  category,
  badge,
  subtitle,
  githubUrl,
  liveUrl,
  liveUrlLabel,
  figmaUrl,
  tenantUrl,
  tenantUrlLabel,
  tenantUrl2,
  tenantUrlLabel2,
  productPageUrl,
  onClose,
  onPrev,
  onNext,
  hideSubtitles = true,
  children
}: ProjectDetailLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Make sure we scroll to top when the layout is opened
  useEffect(() => {
    const container = document.getElementById("blueprint-scroll-container");
    if (container) {
      container.scrollTop = 0;
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [title]);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About me", href: "#about" },
    { label: "Live products", href: "#live-products" },
    { label: "AI projects", href: "#ai-projects" },
    { label: "Design systems", href: "#design-systems" }
  ];

  const handleNavClick = (href: string) => {
    window.location.hash = href;
    onClose();
  };

  return (
    <motion.div
      id="blueprint-scroll-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full min-h-screen bg-[#FDFDFD] text-zinc-950 font-sans absolute inset-0 z-50 overflow-y-auto select-text scroll-smooth"
    >
      {/* SECTION 0: NAVIGATION BAR */}
      <header className="sticky top-0 bg-[#FDFDFD]/90 backdrop-blur-md border-b border-zinc-200/50 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-6 sm:pt-8 md:pt-12 pb-6 md:pb-8 flex items-center justify-between">
          
          {/* Left: "open to work" logo/pill */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(24, 24, 27, 0.05)" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-zinc-900 bg-white border border-zinc-200 py-2.5 px-4.5 rounded-full select-none cursor-pointer transition-all shadow-xs"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span>Open to work</span>
          </motion.a>

          {/* Center: Desktop Navigation links */}
          <nav className="hidden md:flex items-center gap-x-1.5 text-[14px] font-medium text-zinc-650 bg-zinc-100/40 backdrop-blur-md border border-zinc-200/30 rounded-full p-1.5 select-none font-sans">
            {navLinks.map((link, idx) => {
              // Current section detection helper
              const hash = (window.location.hash || "").toLowerCase();
              let activeSection = "home";
              if (hash.includes("about")) {
                activeSection = "about";
              } else if (hash.includes("live-product")) {
                activeSection = "live-products";
              } else if (hash.includes("ai-project")) {
                activeSection = "ai-projects";
              } else if (hash.includes("design-system")) {
                activeSection = "design-systems";
              } else if (hash.includes("manifesto")) {
                activeSection = "manifesto";
              } else {
                activeSection = "home";
              }
              const cleanHref = link.href.replace("#", "");
              const isActive = cleanHref === activeSection;
              
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
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

          {/* Right: Actions Button / Hamburger */}
          <div className="flex items-center gap-4">
            <motion.a
              id="lets-talk-btn"
              href="mailto:solakidisp@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group hidden sm:flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm py-2.5 px-6 rounded-full transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer font-sans"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>

            {/* Hamburger (Mobile Only) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-zinc-800 bg-zinc-100 rounded-full hover:bg-zinc-200 cursor-pointer transition-colors"
              title="Toggle menu"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE EXPANDABLE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-24 left-6 right-6 bg-white border border-zinc-200/80 rounded-2xl shadow-xl z-50 p-6 overflow-hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick(link.href);
                  }}
                  className="flex items-center justify-between py-3 px-4 border-b border-zinc-100 text-[16px] font-semibold text-zinc-800 hover:bg-zinc-50 rounded-lg transition-colors w-full text-left"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                </button>
              ))}
            </div>

            <a
              href="mailto:solakidisp@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-3.5 rounded-xl transition-colors cursor-pointer"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WRAPPER FOR WHITESPACE PADDING CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* HEADER HERO SECTION */}
        <section className="pt-12 pb-6 space-y-8 border-b border-zinc-205/60 text-left">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 max-w-none w-full"
          >
            {/* Conditional Subtitle removal */}
            {!hideSubtitles && (
              <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-widest text-zinc-400 select-none">
                <span>01. THE ENGINE</span>
                <span className="text-zinc-200">•</span>
                <span className="text-indigo-650 tracking-wider font-semibold">{category}</span>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-none">
                {title.toUpperCase()}
              </h1>
            </div>

            <p className="text-zinc-650 text-base sm:text-lg font-medium leading-relaxed max-w-none w-full font-sans">
              {subtitle}
            </p>

            {/* Render Github / Live App link pills if provided */}
            {(githubUrl || liveUrl || figmaUrl || tenantUrl || tenantUrl2 || productPageUrl) && (
              <div id="project-links-chips" className="flex flex-wrap gap-3 pt-4 select-none">
                {tenantUrl && (
                  <a
                    href={tenantUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4.5 py-2.5 text-xs sm:text-sm font-semibold font-mono text-zinc-700 hover:text-zinc-950 bg-white border border-zinc-250 hover:border-zinc-405 rounded-full shadow-2xs hover:shadow-xs transition-all duration-300 group"
                  >
                    <Globe className="w-4 h-4 text-emerald-600 transition-transform group-hover:scale-110" />
                    <span>{tenantUrlLabel || "Tenant Example"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-45 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}

                {tenantUrl2 && (
                  <a
                    href={tenantUrl2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4.5 py-2.5 text-xs sm:text-sm font-semibold font-mono text-zinc-700 hover:text-zinc-950 bg-white border border-zinc-250 hover:border-zinc-405 rounded-full shadow-2xs hover:shadow-xs transition-all duration-300 group"
                  >
                    <Globe className="w-4 h-4 text-emerald-600 transition-transform group-hover:scale-110" />
                    <span>{tenantUrlLabel2 || "Tenant Example 2"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-45 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}

                {productPageUrl && (
                  <a
                    href={productPageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4.5 py-2.5 text-xs sm:text-sm font-semibold font-mono text-zinc-700 hover:text-zinc-950 bg-white border border-zinc-250 hover:border-zinc-405 rounded-full shadow-2xs hover:shadow-xs transition-all duration-300 group"
                  >
                    <Globe className="w-4 h-4 text-indigo-600 transition-transform group-hover:scale-110" />
                    <span>Product Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-45 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}

                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4.5 py-2.5 text-xs sm:text-sm font-semibold font-mono text-zinc-700 hover:text-zinc-950 bg-white border border-zinc-250 hover:border-zinc-405 rounded-full shadow-2xs hover:shadow-xs transition-all duration-300 group"
                  >
                    <Github className="w-4 h-4 text-zinc-800 transition-transform group-hover:scale-110" />
                    <span>GitHub Repo</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-45 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}

                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4.5 py-2.5 text-xs sm:text-sm font-semibold font-mono text-zinc-700 hover:text-zinc-950 bg-white border border-zinc-250 hover:border-zinc-405 rounded-full shadow-2xs hover:shadow-xs transition-all duration-300 group"
                  >
                    <Globe className="w-4 h-4 text-indigo-600 transition-transform group-hover:scale-110" />
                    <span>{liveUrlLabel || "Live App"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-45 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}

                {figmaUrl && (
                  <a
                    href={figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4.5 py-2.5 text-xs sm:text-sm font-semibold font-mono text-zinc-700 hover:text-zinc-950 bg-white border border-zinc-250 hover:border-zinc-405 rounded-full shadow-2xs hover:shadow-xs transition-all duration-300 group"
                  >
                    <LayoutGrid className="w-4 h-4 text-emerald-600 transition-transform group-hover:scale-110" />
                    <span>Figma Board</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-45 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </section>

        {/* INJECTED PAGE CONTENT */}
        <div className="w-full">
          {children}
        </div>

        {/* PAGINATION / BACK CONTROLS CONTAINER */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-zinc-200/60 pt-10 mt-20 gap-6 select-none">
          {onPrev ? (
            <button
              onClick={onPrev}
              type="button"
              className="flex items-center gap-2.5 text-sm font-bold text-zinc-550 hover:text-zinc-950 transition-colors duration-250 cursor-pointer w-full sm:w-auto justify-start font-sans"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
              <span>Previous project</span>
            </button>
          ) : (
            <div className="hidden sm:block w-32" />
          )}

          <button
            onClick={onClose}
            type="button"
            className="flex items-center gap-2 bg-zinc-100 border border-zinc-200 hover:bg-zinc-200/60 text-zinc-805 text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-full cursor-pointer transition-all shadow-2xs hover:shadow-xs w-full sm:w-auto justify-center font-sans"
          >
            <LayoutGrid className="w-4 h-4" />
            <span>All projects</span>
          </button>

          {onNext ? (
            <button
              onClick={onNext}
              type="button"
              className="flex items-center gap-2.5 text-sm font-bold text-zinc-550 hover:text-zinc-950 transition-colors duration-250 cursor-pointer w-full sm:w-auto justify-end font-sans"
            >
              <span>Next project</span>
              <ChevronRight className="w-4.5 h-4.5" />
            </button>
          ) : (
            <div className="hidden sm:block w-32" />
          )}
        </div>
      </div>
    </motion.div>
  );
}
