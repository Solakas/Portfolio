import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  Layers, 
  Sliders, 
  ArrowUpRight, 
  Scaling, 
  BookOpen
} from "lucide-react";
import SolDesignSystemView from "./SolDesignSystemView";
import WGDesignSystemView from "./WGDesignSystemView";

interface DesignSystemsViewProps {
  onBack: () => void;
}

interface DesignSystemProject {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  tech: string[];
  gradient: string;
  badge: string;
  icon: React.ElementType;
  layoutClass: string;
  vectorType: "waveform" | "matrix" | "concentric" | "network" | "orbit" | "flow";
}

const designSystemsData: DesignSystemProject[] = [
  {
    id: "sol-ds",
    title: "Sol Design System",
    category: "AI-Powered Components & Code Hub",
    subtitle: "Pioneering design-to-code parity using meticulous 3-tier token structures and automated AI generation.",
    description: "Architected a unified design ecosystem bridging Figma layouts with React using Anthropic's Claude Code. Refactored structural variance properties, nesting 3,500+ high-fidelity assets and custom tokens under a single-source-of-truth style pipeline. Reduced layout-related QA errors by 40% and accelerated feature delivery by 3.5x.",
    tech: ["Figma Variables API", "Style Dictionary", "Tailwind Theme CSS", "Storybook Workspace", "Claude Code"],
    gradient: "from-indigo-600 via-purple-650 to-pink-550",
    badge: "CLAUDE INTEGRATION",
    icon: Layers,
    layoutClass: "col-span-1 lg:col-span-6 w-full",
    vectorType: "waveform"
  },
  {
    id: "wg-ds",
    title: "Wave Grocery Design System",
    category: "Multi-Tenant Token Framework",
    subtitle: "Powering multi-brand e-commerce web, mobile native layouts, and transactional tools from a single library.",
    description: "Organized 146 published component modules across vertical Foundations, Patterns, and Journeys. Designed a unidirectional 409-token schema enabling entire brand skin swaps (e.g., Greta vs. Gigo) in minutes by modifying only 22 core primary/secondary values. Accelerated design team discoverability by 90% with custom clickable indexes.",
    tech: ["Multi-Tenant Architecture", "Tokens Studio", "Responsive grids", "TOC Hyperlinks Map", "POS Alignments"],
    gradient: "from-cyan-500 via-blue-600 to-indigo-600",
    badge: "MULTI-BRAND CORE",
    icon: Sliders,
    layoutClass: "col-span-1 lg:col-span-4 w-full",
    vectorType: "matrix"
  }
];

export default function DesignSystemsView({ onBack }: DesignSystemsViewProps) {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  if (selectedProjectId) {
    const handleClose = () => setSelectedProjectId(null);
    const onPrev = selectedProjectId === "wg-ds" ? () => setSelectedProjectId("sol-ds") : undefined;
    const onNext = selectedProjectId === "sol-ds" ? () => setSelectedProjectId("wg-ds") : undefined;

    if (selectedProjectId === "sol-ds") {
      return <SolDesignSystemView onClose={handleClose} onPrev={onPrev} onNext={onNext} />;
    } else if (selectedProjectId === "wg-ds") {
      return <WGDesignSystemView onClose={handleClose} onPrev={onPrev} onNext={onNext} />;
    }
  }

  // Helper custom background vectors to display the colorize transition
  const renderVectorDecoration = (type: string, isHovered: boolean, gradient: string) => {
    switch (type) {
      case "waveform":
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M10,100 C40,40 160,40 190,100 C160,160 40,160 10,100 Z" 
              stroke="currentColor" 
              strokeWidth="1" 
              className={`transition-all duration-700 ${isHovered ? "stroke-[2.5px] opacity-100" : "opacity-35"}`}
            />
            {isHovered && Array.from({ length: 6 }).map((_, i) => (
              <motion.path
                key={i}
                d={`M10,100 C40,${40 + i * 20} 160,${40 + i * 20} 190,100`}
                stroke="currentColor"
                strokeWidth="1"
                opacity={0.15 + (i * 0.1)}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
              />
            ))}
            <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1" className={isHovered ? "opacity-100 animate-pulse" : "opacity-20"} />
            <circle cx="100" cy="100" r="10" fill="currentColor" className={isHovered ? "opacity-90" : "opacity-10"} />
          </svg>
        );

      case "matrix":
        return (
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {Array.from({ length: 5 }).map((_, row) => 
              Array.from({ length: 5 }).map((_, col) => {
                const cx = 15 + col * 17.5;
                const cy = 15 + row * 17.5;
                const isPulse = isHovered && (row + col) % 3 === 0;
                return (
                  <motion.circle
                    key={`${row}-${col}`}
                    cx={cx}
                    cy={cy}
                    r={isPulse ? 3 : 1.5}
                    fill="currentColor"
                    className="transition-colors duration-500"
                    opacity={isHovered ? 0.8 : 0.2}
                    animate={isPulse ? { scale: [1, 1.4, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: (row + col) * 0.1 }}
                  />
                );
              })
            )}
            {isHovered && (
              <motion.path
                d="M15,15 L85,15 L85,85 L15,85 Z"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            )}
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      id="design-systems-view-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex-1 flex flex-col items-center justify-start overflow-y-auto max-h-[calc(100vh-140px)] pr-2 sm:pr-4 py-4 sm:py-8 select-none z-10"
    >
      {/* View Header */}
      <div className="w-full text-center mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-[0.25em] text-zinc-400 font-sans">
          Design Systems
        </h2>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 flex flex-col gap-12 sm:gap-16">
        
        {/* Intro Copy */}
        <div className="flex flex-col gap-3 text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-1">
            <span className="p-2.5 bg-zinc-900 border border-zinc-700 text-white rounded-full flex items-center justify-center gap-1.5 shadow-sm text-xs font-bold uppercase tracking-widest px-4 font-mono select-none">
              <Sparkles className="w-3.5 h-3.5" />
              Lead Designer & Design System Manager
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-zinc-950">
            Unifying Design Tokens & Programmatic Scaling
          </h3>
          <p className="text-zinc-605 text-sm sm:text-base leading-relaxed font-sans">
            Directing multi-tenant token pipelines and code-ready UI systems. Engineering strict foundations, reusable pattern libraries, and seamless automated component generators to bridge Figma with production React setups.
          </p>
        </div>

        {/* 60% - 40% Grid mapping to 6 Columns & 4 Columns in a 10 Column responsive system */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 sm:gap-8 lg:gap-8 w-full justify-center">
          {designSystemsData.map((project) => {
            const isHovered = hoveredCardId === project.id;
            const ProjectIcon = project.icon;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredCardId(project.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => setSelectedProjectId(project.id)}
                whileHover={{ 
                  scale: 1.018, 
                  y: -6,
                  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } 
                }}
                className={`group relative overflow-hidden rounded-2xl border ${project.layoutClass} ${
                  isHovered 
                    ? "border-zinc-900 bg-white shadow-xl shadow-zinc-100/60" 
                    : "border-zinc-200 bg-white/65 hover:bg-white backdrop-blur-md"
                } p-6 sm:p-8 flex flex-col justify-between min-h-[300px] sm:min-h-[330px] md:min-h-[350px] transition-all duration-500 cursor-pointer`}
              >
                {/* Embedded Vector Decoration / Background effects */}
                <div 
                  className={`absolute right-4 bottom-4 w-28 h-28 sm:w-44 sm:h-44 md:w-52 md:h-52 select-none opacity-20 pointer-events-none transition-all duration-700 ${
                    isHovered 
                      ? "scale-110 rotate-12 opacity-95" 
                      : "scale-100 rotate-0 grayscale"
                  }`}
                >
                  <div className={`w-full h-full flex items-center justify-center ${isHovered ? "text-indigo-650" : "text-zinc-300"}`}>
                    <div 
                      className="w-full h-full transition-colors duration-500"
                      style={
                        isHovered 
                          ? { 
                              color: "transparent",
                              backgroundImage: `linear-gradient(to top right, var(--tw-gradient-stops))`,
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent"
                            }
                          : undefined
                      }
                    >
                      {renderVectorDecoration(project.vectorType, isHovered, project.gradient)}
                    </div>
                  </div>
                </div>

                {/* Subtle outer glow on hover */}
                {isHovered && (
                  <motion.div
                    layoutId={`glow-ds-${project.id}`}
                    className={`absolute -inset-1 rounded-2xl bg-gradient-to-tr ${project.gradient} opacity-5 blur-xl -z-10`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.08 }}
                    exit={{ opacity: 0 }}
                  />
                )}

                 {/* Top Row / Badges */}
                <div className="z-10 w-full text-left">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className={`p-2.5 rounded-xl border transition-all duration-350 ${
                      isHovered 
                        ? "bg-[#18181b] border-transparent text-white scale-110 shadow-md" 
                        : "bg-zinc-100 border-zinc-200 text-zinc-805"
                    }`}>
                      <ProjectIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    
                    <span className={`text-xs font-bold tracking-widest px-2.5 py-1 rounded font-mono transition-all duration-300 ${
                      isHovered 
                        ? "bg-zinc-900 text-white" 
                        : "bg-zinc-100 text-zinc-500"
                    }`}>
                      {project.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-zinc-400 opacity-80 uppercase tracking-widest block select-none">
                      {project.category}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-950 pr-8">
                      {project.title}
                    </h4>
                    <p className={`text-sm sm:text-base font-medium leading-relaxed transition-colors duration-300 mt-2 max-w-xl ${
                      isHovered ? "text-zinc-900" : "text-zinc-500"
                    }`}>
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description & Tech Footer */}
                <div className="z-10 mt-8 w-full text-left">
                  <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed mb-6 max-w-4xl">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-zinc-150 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 select-none">
                      {project.tech.map((t, idx) => (
                        <span 
                          key={idx} 
                          className={`text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full transition-all duration-300 ${
                            isHovered 
                              ? "bg-zinc-900 text-white border border-transparent"
                              : "bg-zinc-50 text-zinc-500 border border-zinc-200/40"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className={`transition-all duration-500 transform ${
                      isHovered ? "translate-x-0.5 -translate-y-0.5 opacity-100 text-zinc-900 scale-110" : "text-zinc-400 opacity-60"
                    }`}>
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Back Button */}
      <motion.button
        onClick={onBack}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-14 sm:mt-20 bg-zinc-100 border border-zinc-200/60 hover:bg-zinc-200/50 text-zinc-800 text-xs font-bold uppercase tracking-[0.2em] px-8 py-3 rounded-full cursor-pointer transition-all shadow-xs"
      >
        ← Back to Grid
      </motion.button>
    </motion.div>
  );
}
