import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Github, Globe, Figma, ChevronLeft, ChevronRight, X, Sparkles } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

export interface NavSection {
  id: string;
  label: string;
}

export interface MetaItem {
  label: string;
  value: string;
}

export interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  tag?: string;
  meta: MetaItem[];
  navSections: NavSection[];
  githubUrl?: string;
  liveUrl?: string;
  liveUrlLabel?: string;
  figmaUrl?: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  children: React.ReactNode;
}

export default function CaseStudyLayout({
  title,
  subtitle,
  tag = "UX Case Study",
  meta,
  navSections,
  githubUrl,
  liveUrl,
  liveUrlLabel = "Live App",
  figmaUrl,
  onClose,
  onPrev,
  onNext,
  children
}: CaseStudyLayoutProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>(navSections[0]?.id || "hero");

  // Track scroll progress and active visible section
  useEffect(() => {
    const container = document.getElementById("case-study-scroll-container");
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);

      // Section intersection detection
      const sectionElements = navSections
        .map(sec => ({ id: sec.id, el: document.getElementById(sec.id) }))
        .filter((item): item is { id: string; el: HTMLElement } => item.el !== null);

      const containerTop = container.getBoundingClientRect().top;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i];
        const rect = el.getBoundingClientRect();
        if (rect.top - containerTop <= 180) {
          setActiveSection(id);
          break;
        }
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, [navSections]);

  const scrollToSection = (id: string) => {
    const container = document.getElementById("case-study-scroll-container");
    const target = document.getElementById(id);
    if (container && target) {
      const containerTop = container.getBoundingClientRect().top;
      const targetTop = target.getBoundingClientRect().top;
      const offset = targetTop - containerTop + container.scrollTop - 100;
      container.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      id="case-study-scroll-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full min-h-screen bg-[#FAFAFA] text-zinc-950 font-sans absolute inset-0 z-50 overflow-y-auto select-text scroll-smooth"
    >
      {/* 1. Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 z-[100] transition-all duration-150 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 2. Floating Navbar */}
      <div className="sticky top-4 z-50 w-full flex items-center justify-center px-4 pointer-events-none mb-4">
        <nav className="pointer-events-auto bg-white/90 backdrop-blur-md border border-zinc-200/80 rounded-full px-3 py-2 flex items-center gap-1 sm:gap-2 shadow-lg shadow-zinc-950/5 max-w-full overflow-x-auto no-scrollbar">
          {/* Close button */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors shrink-0 cursor-pointer"
            title="Close Case Study"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="h-4 w-[1px] bg-zinc-200 mx-1 shrink-0" />

          {/* Section links */}
          {navSections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-zinc-900 text-white shadow-xs"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/80"
                }`}
              >
                {sec.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* 3. Hero Section */}
      <header id="hero" className="max-w-5xl mx-auto px-6 pt-6 pb-16 text-center space-y-8 relative">
        <ScrollReveal>
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-widest shadow-3xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>{tag}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-sans tracking-tight text-zinc-900 leading-tight">
              {title}
            </h1>

            <p className="text-zinc-600 text-base sm:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Action CTAs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white font-medium text-xs sm:text-sm hover:bg-zinc-800 transition-all shadow-sm hover:scale-[1.02]"
              >
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>{liveUrlLabel}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-zinc-200 text-zinc-800 font-medium text-xs sm:text-sm hover:border-zinc-400 transition-all shadow-3xs hover:scale-[1.02]"
              >
                <Github className="w-4 h-4 text-zinc-700" />
                <span>Source Code</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
            )}
            {figmaUrl && (
              <a
                href={figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-zinc-200 text-zinc-800 font-medium text-xs sm:text-sm hover:border-zinc-400 transition-all shadow-3xs hover:scale-[1.02]"
              >
                <Figma className="w-4 h-4 text-purple-600" />
                <span>Figma System</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
            )}
          </div>
        </ScrollReveal>

        {/* Metadata Grid */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-zinc-200/80 max-w-4xl mx-auto">
            {meta.map((item, idx) => (
              <div key={idx} className="bg-white border border-zinc-200/60 p-4 rounded-2xl text-left shadow-3xs">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
                  {item.label}
                </span>
                <span className="block font-sans text-xs sm:text-sm font-bold text-zinc-800 mt-1">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </header>

      {/* 4. Main Case Study Content */}
      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-24">
        {children}
      </main>

      {/* 5. Footer Navigation */}
      <footer className="border-t border-zinc-200 bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={onClose}
            className="text-xs font-bold font-mono text-zinc-500 hover:text-zinc-900 uppercase tracking-widest flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            ← Back to AI Projects
          </button>

          <div className="flex items-center gap-3">
            {onPrev && (
              <button
                onClick={onPrev}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous Project
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
              >
                Next Project
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
