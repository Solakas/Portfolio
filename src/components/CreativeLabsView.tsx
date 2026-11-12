import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  Plane, 
  PenTool,
  Sparkles
} from "lucide-react";
import BorderGlow from "./BorderGlow";

interface CreativeLabsViewProps {
  onBack?: () => void;
}

interface LabProject {
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
  url: string;
}

const labsData: LabProject[] = [
  {
    id: "lab-1",
    title: "Pegasus Aviation",
    category: "Elite Private Aviation",
    subtitle: "A luxury jet charter landing page with high-tech aerospace UI and elite aesthetic.",
    description: "Rise above the limits of commercial travel. Built with Claude and Higgsfield MCP. Features a HUD-style interface, scroll animations, and a sleek booking form for an ultra-exclusive Jet Card Program.",
    tech: ["Claude 3.5 Sonnet", "Higgsfield MCP", "3D Scroll Animation", "Luxury UI", "React", "Framermotion"],
    gradient: "from-blue-600 via-sky-500 to-indigo-800",
    badge: "AEROSPACE UI",
    icon: Plane,
    layoutClass: "col-span-1 md:col-span-6 lg:col-span-6",
    vectorType: "orbit",
    url: "https://pegasus-drab.vercel.app/"
  },
  {
    id: "lab-2",
    title: "Calliope",
    category: "Luxury Craftsmanship",
    subtitle: "A sophisticated, minimalist landing page for a premium aerospace-grade titanium writing instrument.",
    description: "Born from the convergence of aerospace engineering and classical artistry. Developed via Claude + Higgsfield MCP. Emphasizes premium materials and exclusive access, tailored for collectors.",
    tech: ["Claude 3.5 Sonnet", "Higgsfield MCP", "3D Scroll Animation", "Minimalist Design", "React", "WebGL"],
    gradient: "from-amber-600 via-yellow-500 to-orange-800",
    badge: "LUXURY PRODUCT",
    icon: PenTool,
    layoutClass: "col-span-1 md:col-span-6 lg:col-span-6",
    vectorType: "flow",
    url: "https://calliope-6mpi5nj0x-solakas-projects.vercel.app/"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 35, 
    filter: "blur(4px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
} as const;

export default function CreativeLabsView({ onBack }: CreativeLabsViewProps) {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const handleExternalClick = (eventName: string, label: string) => {
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", eventName, {
        event_category: "outbound_link",
        event_label: label,
      });
    }
  };

  const renderVectorDecoration = (type: string, isHovered: boolean, gradient: string) => {
    switch (type) {
      case "orbit":
        return (
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="50" rx="36" ry="14" stroke="currentColor" strokeWidth="1" opacity={isHovered ? "0.8" : "0.2"} transform="rotate(-25 50 50)" />
            <ellipse cx="50" cy="50" rx="36" ry="14" stroke="currentColor" strokeWidth="1" opacity={isHovered ? "0.8" : "0.2"} transform="rotate(25 50 50)" />
            <circle cx="50" cy="50" r="10" fill="currentColor" opacity={isHovered ? "0.9" : "0.3"} />
            {isHovered && (
              <>
                <motion.circle cx="20" cy="35" r="3" fill="currentColor" animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
                <motion.circle cx="80" cy="65" r="3" fill="currentColor" animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.75 }} />
              </>
            )}
          </svg>
        );

      case "flow":
        return (
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,25 C35,25 35,75 60,75 C85,75 85,25 110,25" stroke="currentColor" strokeWidth="1.5" opacity={isHovered ? "0.8" : "0.25"} />
            <path d="M10,50 C35,50 35,50 60,50 C85,50 110,50" stroke="currentColor" strokeWidth="1" opacity={isHovered ? "0.6" : "0.15"} />
            <path d="M10,75 C35,75 35,25 60,25 C85,25 85,75 110,75" stroke="currentColor" strokeWidth="1.5" opacity={isHovered ? "0.8" : "0.25"} strokeDasharray="3 3" />
            
            {isHovered && (
              <motion.circle cx="35" cy="50" r="3.5" fill="currentColor" animate={{ cx: [10, 110] }} transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }} />
            )}
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      id="creative-labs-view-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex-1 flex flex-col items-center justify-start overflow-y-auto max-h-[calc(100vh-140px)] pr-2 sm:pr-4 py-4 sm:py-8 select-none z-10"
    >
      {/* View Header */}
      <div className="w-full text-center mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-[0.25em] text-zinc-400 font-sans">
          Creative Labs
        </h2>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 flex flex-col gap-12 sm:gap-16">
        
        {/* Intro Copy */}
        <div className="flex flex-col gap-3 text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-1">
            <span className="p-2.5 bg-zinc-900 border border-zinc-700 text-white rounded-full flex items-center justify-center gap-1.5 shadow-sm text-xs font-bold uppercase tracking-widest px-4 font-mono select-none">
              <Sparkles className="w-3.5 h-3.5" />
              3D Animation & AI Experiments
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-zinc-950">
            Pushing the Boundaries of Interactive Design
          </h3>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Exploring new paradigms in digital experiences through immersive 3D animations, WebGL, and state-of-the-art AI generated concepts. From elite aviation to luxury craftsmanship.
          </p>
        </div>

        {/* Multi-Scale Asymmetrical Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 w-full"
        >
          {labsData.map((lab) => {
            const isHovered = hoveredCardId === lab.id;
            const ProjectIcon = lab.icon as React.ComponentType<{ className?: string }>;

            const getGlowConfig = (id: string) => {
              switch (id) {
                case "lab-1":
                  return {
                    glowColor: "220 80 70",
                    colors: ['#2563eb', '#6366f1', '#06b6d4']
                  };
                case "lab-2":
                  return {
                    glowColor: "40 80 65",
                    colors: ['#d97706', '#eab308', '#9a3412']
                  };
                default:
                  return {
                    glowColor: "40 80 80",
                    colors: ['#c084fc', '#f472b6', '#38bdf8']
                  };
              }
            };
            const glowConfig = getGlowConfig(lab.id);

            return (
              <motion.div
                key={lab.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -6,
                  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } 
                }}
                className={`h-full ${lab.layoutClass}`}
              >
                <BorderGlow
                  edgeSensitivity={30}
                  glowColor={glowConfig.glowColor}
                  backgroundColor={isHovered ? "white" : "rgba(255, 255, 255, 0.65)"}
                  borderRadius={16}
                  glowRadius={50}
                  glowIntensity={0.8}
                  colors={glowConfig.colors}
                  onMouseEnter={() => setHoveredCardId(lab.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  onClick={() => {
                    handleExternalClick("creative_labs_click", lab.id);
                    window.open(lab.url, "_blank");
                  }}
                  className={`group w-full h-full p-6 sm:p-8 flex flex-col justify-between min-h-[300px] sm:min-h-[330px] md:min-h-[350px] transition-all duration-500 cursor-pointer text-left ${
                    isHovered 
                      ? "shadow-xl shadow-zinc-100/60 border-zinc-950" 
                      : "border-zinc-200"
                  }`}
                >
                  {/* Embedded Colored-To-Grayscale Canvas Graphics (The colorize effect) */}
                  <div 
                    className={`absolute right-4 bottom-4 w-28 h-28 sm:w-44 sm:h-44 md:w-52 md:h-52 select-none opacity-20 pointer-events-none transition-all duration-700 ${
                      isHovered 
                        ? `scale-110 rotate-12 opacity-95 text-transparent bg-clip-text bg-gradient-to-tr ${lab.gradient}` 
                        : "scale-100 rotate-0 grayscale contrast-125 brightness-95 text-zinc-400"
                    }`}
                    style={{
                      backgroundImage: isHovered ? "none" : "",
                    }}
                  >
                    {/* If hovered, colors active on the decoration through mask-like styles */}
                    <div className={`w-full h-full flex items-center justify-center ${isHovered ? `text-orange-500` : "text-zinc-400"}`}>
                      <div 
                        className={`w-full h-full transition-colors duration-500 ${
                          isHovered ? "text-gradient bg-gradient-to-tr " + lab.gradient : "text-zinc-300"
                        }`}
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
                        {renderVectorDecoration(lab.vectorType, isHovered, lab.gradient)}
                      </div>
                    </div>
                  </div>

                  {/* Top Row / Badges */}
                  <div className="z-10 w-full">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className={`p-2.5 rounded-xl border transition-all duration-300 ${
                        isHovered 
                          ? `bg-[#18181b] border-transparent text-white scale-110 shadow-md` 
                          : "bg-zinc-100 border-zinc-200 text-zinc-800"
                      }`}>
                        <ProjectIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      
                      <span className={`text-xs font-bold tracking-widest px-2.5 py-1 rounded font-mono transition-all duration-300 ${
                        isHovered 
                          ? `bg-zinc-900 text-white` 
                          : "bg-zinc-100 text-zinc-500"
                      }`}>
                        {lab.badge}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-950 pr-8">
                        {lab.title}
                      </h4>
                      <p className={`text-sm sm:text-base font-medium leading-relaxed transition-colors duration-300 mt-2 max-w-none w-full ${
                        isHovered ? "text-zinc-900" : "text-zinc-500"
                      }`}>
                        {lab.subtitle}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-4 max-w-none w-full">
                      {lab.description}
                    </p>
                  </div>

                  {/* Description & Tech Footer */}
                  <div className="z-10 mt-8 w-full">
                    <div className="pt-4 border-t border-zinc-100/80 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 select-none">
                        {lab.tech.map((t, idx) => (
                          <span 
                            key={idx} 
                            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full transition-all duration-300 ${
                              isHovered 
                                ? "bg-zinc-100/80 text-zinc-900 font-bold border border-zinc-300/40"
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
                </BorderGlow>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Back Button */}
      {onBack && (
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="my-14 sm:my-20 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white text-xs font-bold uppercase tracking-[0.25em] px-9 py-3.5 rounded-full cursor-pointer transition-all duration-300 shadow-md flex items-center gap-2 select-none"
        >
          <span>← Back to Home</span>
        </motion.button>
      )}
    </motion.div>
  );
}
