import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Brain, 
  Code, 
  SearchCode, 
  ArrowUpRight, 
  Terminal,
  Activity,
  Gamepad2
} from "lucide-react";
import TechnicalBlueprintView from "./TechnicalBlueprintView";
import ApplyNowView from "./ApplyNowView";
import PandaHabitsView from "./PandaHabitsView";
import CareerPulseView from "./CareerPulseView";
import FuxitView from "./FuxitView";
import NeonpolisView from "./NeonpolisView";
import BorderGlow from "./BorderGlow";

interface ProjectsViewProps {
  onBack: () => void;
}

interface Project {
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

const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Apply Now",
    category: "Featured B2B SaaS Product Design",
    subtitle: "Enterprise Applicant Tracking System (ATS) eliminating high-volume recruitment click fatigue via a unified split-screen workspace, built with Claude Code & backed by a live telemetry-tracked React prototype.",
    description: "Formulated through a structured 5-stage SaaS UX process (Analyse → Define → Ideate → Test → Measure) to solve real business bottlenecks. Features high-density data visualizations, quick bulk progressions, and zero context switching workflows. Proves mastery over commercial SaaS metrics, design token parity via Sol Design System, and modern software-engineering disciplines.",
    tech: ["B2B SaaS Design", "Claude Code Engine", "Live React Prototype", "Telemetry (Firebase Logs)", "Sol Design System", "UX Case Study"],
    gradient: "from-blue-600 via-indigo-500 to-cyan-500",
    badge: "React SaaS App",
    icon: Sparkles,
    layoutClass: "col-span-1 md:col-span-12 lg:col-span-12",
    vectorType: "waveform"
  },
  {
    id: "proj-2",
    title: "Panda Habits",
    category: "AI Powered Nutrition Coach",
    subtitle: "Psychology-first habit builder and food diary built dynamically with an atomic code-driven design system. Replaces guilt-inducing spreadsheets with mascot-guided micro-streaks.",
    description: "Formulated through a Zero-Figma workflow with exact token-to-widget parity. Enforces WCAG 2.1 AAA hardcoded accessibility contrast checks (15.6:1 ratio) and customizable touch physics inside a companion interactive React simulator.",
    tech: ["Cursor", "Google Antigravity", "Flutter App", "Psychology Design", "A11y (WCAG AAA)", "Zero-Figma Flow"],
    gradient: "from-emerald-600 via-teal-500 to-emerald-800",
    badge: "Android Flutter App",
    icon: Activity,
    layoutClass: "col-span-1 md:col-span-8 lg:col-span-8",
    vectorType: "flow"
  },
  {
    id: "proj-3",
    title: "CareerPulse",
    category: "AI Career Advisor",
    subtitle: "AI-powered job decision engine that translates opaque corporate postings into personalized match matrices, risk analyses, and prep worksheets.",
    description: "Leverages Google Gemini Structured Outputs to cross-reference unstructured job descriptions against developer profiles. Generates objective Match Scores (0-100%), auto-synthesizes risk/reward friction alerts, and extracts day-to-day role realities to bypass application fatigue.",
    tech: ["Google AI Studio", "Back Office", "AI Assistant", "Gemini 2.5", "Firebase Auth"],
    gradient: "from-indigo-600 via-blue-500 to-indigo-800",
    badge: "AI CAREER COACH",
    icon: Brain,
    layoutClass: "col-span-1 md:col-span-4 lg:col-span-4",
    vectorType: "network"
  },
  {
    id: "proj-7",
    title: "fUXit",
    category: "AI Design Consultant",
    subtitle: "Sophisticated web application leveraging Google's Gemini to provide instant, expert-level UI/UX feedback on any application screenshot as a professional co-pilot.",
    description: "At its core, fUXit sends user-uploaded screenshots to the Gemini 2.5 Flash model inside structured JSON payloads. Instructs the AI to act as a senior UI/UX expert and return annotated image pinpoint coordinates, dynamic heuristic scores across core design pillars, and copy-pasteable markdown violation lists compiled in a seamless dark client interface.",
    tech: ["Google AI Studio", "Gemini 2.5", "AI Assistant", "Design Critique"],
    gradient: "from-purple-600 via-pink-500 to-indigo-500",
    badge: "AI Design Assistant",
    icon: SearchCode,
    layoutClass: "col-span-1 md:col-span-6 lg:col-span-6",
    vectorType: "matrix"
  },
  {
    id: "proj-8",
    title: "Neonpolis",
    category: "AI Game Co-Designer",
    subtitle: "Translating character effects, mechanics rules, and physical board-game table-feel into a playable, responsive browser prototype powered by ChatGPT and Figma integration.",
    description: "Born from an excitement for game design methodologies. Translates King of Tokyo's fast, tactile table-feel to the browser, optimizing card systems, UI readability scales, dynamic 3-roll dice loops, and custom-mapped visual rules matrices.",
    tech: ["Figma Make", "Cursor", "Interaction Design", "Game Design"],
    gradient: "from-orange-500 via-rose-500 to-red-650",
    badge: "BOARD GAME MVP",
    icon: Gamepad2,
    layoutClass: "col-span-1 md:col-span-6 lg:col-span-6",
    vectorType: "orbit"
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
};

export default function ProjectsView({ onBack }: ProjectsViewProps) {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject) {
    const currentIndex = projectsData.findIndex(p => p.id === selectedProject.id);
    const onPrev = currentIndex > 0 ? () => setSelectedProject(projectsData[currentIndex - 1]) : undefined;
    const onNext = currentIndex < projectsData.length - 1 ? () => setSelectedProject(projectsData[currentIndex + 1]) : undefined;
    const handleClose = () => setSelectedProject(null);

    switch (selectedProject.id) {
      case "proj-1":
        return <ApplyNowView onClose={handleClose} onPrev={onPrev} onNext={onNext} />;
      case "proj-2":
        return <PandaHabitsView onClose={handleClose} onPrev={onPrev} onNext={onNext} />;
      case "proj-3":
        return <CareerPulseView onClose={handleClose} onPrev={onPrev} onNext={onNext} />;
      case "proj-7":
        return <FuxitView onClose={handleClose} onPrev={onPrev} onNext={onNext} />;
      case "proj-8":
        return <NeonpolisView onClose={handleClose} onPrev={onPrev} onNext={onNext} />;
      default:
        return (
          <TechnicalBlueprintView 
            item={selectedProject} 
            onClose={handleClose} 
          />
        );
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

      case "network":
        return (
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="15" y1="50" x2="50" y2="15" stroke="currentColor" strokeWidth={isHovered ? "1.5" : "1"} opacity={isHovered ? "0.8" : "0.2"} />
            <line x1="50" y1="15" x2="85" y2="50" stroke="currentColor" strokeWidth={isHovered ? "1.5" : "1"} opacity={isHovered ? "0.8" : "0.2"} />
            <line x1="85" y1="50" x2="50" y2="85" stroke="currentColor" strokeWidth={isHovered ? "1.5" : "1"} opacity={isHovered ? "0.8" : "0.2"} />
            <line x1="50" y1="85" x2="15" y2="50" stroke="currentColor" strokeWidth={isHovered ? "1.5" : "1"} opacity={isHovered ? "0.8" : "0.2"} />
            <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="0.5" opacity={isHovered ? "0.3" : "0.1"} />
            <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="0.5" opacity={isHovered ? "0.3" : "0.1"} />

            <circle cx="15" cy="50" r="4.5" fill="currentColor" opacity={isHovered ? "1" : "0.4"} className="transition-all duration-300" />
            <circle cx="50" cy="15" r="4.5" fill="currentColor" opacity={isHovered ? "1" : "0.4"} />
            <circle cx="85" cy="50" r="4.5" fill="currentColor" opacity={isHovered ? "1" : "0.4"} />
            <circle cx="50" cy="85" r="4.5" fill="currentColor" opacity={isHovered ? "1" : "0.4"} />
            <circle cx="50" cy="50" r="6" fill="currentColor" className={isHovered ? "opacity-90 saturate-150 animate-pulse text-zinc-950" : "opacity-20"} />
          </svg>
        );

      case "concentric":
        return (
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" opacity={isHovered ? "0.8" : "0.15"} />
            <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1.5" opacity={isHovered ? "0.9" : "0.25"} strokeDasharray={isHovered ? "4 4" : ""} />
            <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="1" opacity={isHovered ? "0.8" : "0.2"} />
            <circle cx="50" cy="50" r="6" fill="currentColor" opacity={isHovered ? "0.95" : "0.3"} />
            {isHovered && (
              <motion.line 
                x1="50" y1="50" x2="90" y2="50" 
                stroke="currentColor" 
                strokeWidth="1.5"
                animate={{ rotate: 360 }}
                style={{ transformOrigin: "50px 50px" }}
                transition={{ duration: 7, ease: "linear", repeat: Infinity }}
              />
            )}
          </svg>
        );

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
      id="projects-view-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex-1 flex flex-col items-center justify-start overflow-y-auto max-h-[calc(100vh-140px)] pr-2 sm:pr-4 py-4 sm:py-8 select-none z-10"
    >
      {/* View Header */}
      <div className="w-full text-center mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-[0.25em] text-zinc-400 font-sans">
          AI Projects & Workflows
        </h2>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 flex flex-col gap-12 sm:gap-16">
        
        {/* Intro Copy */}
        <div className="flex flex-col gap-3 text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-1">
            <span className="p-2.5 bg-zinc-900 border border-zinc-700 text-white rounded-full flex items-center justify-center gap-1.5 shadow-sm text-xs font-bold uppercase tracking-widest px-4 font-mono select-none">
              <Sparkles className="w-3.5 h-3.5" />
              AI Native Design Engineering
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-zinc-950">
            Intelligent Agentic Workflows & Cognitive Prototypes
          </h3>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Harnessing Google Gemini Structured Outputs and multi-modal models to realize complex systems: from <strong className="text-zinc-900">fUXit</strong> UX heuristic consultants to custom <strong className="text-zinc-900">CareerPulse</strong> role-indexing copilots and game simulation engines.
          </p>
        </div>

        {/* Multi-Scale Asymmetrical Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 w-full"
        >
          {projectsData.map((project) => {
            const isHovered = hoveredCardId === project.id;
            const ProjectIcon = project.icon as React.ComponentType<{ className?: string }>;

            const getGlowConfig = (id: string) => {
              switch (id) {
                case "proj-1":
                  return {
                    glowColor: "220 80 70",
                    colors: ['#2563eb', '#6366f1', '#06b6d4']
                  };
                case "proj-2":
                  return {
                    glowColor: "155 80 65",
                    colors: ['#059669', '#14b8a6', '#064e3b']
                  };
                case "proj-3":
                  return {
                    glowColor: "235 80 65",
                    colors: ['#4f46e5', '#3b82f6', '#3730a3']
                  };
                case "proj-7":
                  return {
                    glowColor: "295 80 70",
                    colors: ['#9333ea', '#ec4899', '#6366f1']
                  };
                case "proj-8":
                  return {
                    glowColor: "15 80 65",
                    colors: ['#f97316', '#f43f5e', '#b91c1c']
                  };
                default:
                  return {
                    glowColor: "40 80 80",
                    colors: ['#c084fc', '#f472b6', '#38bdf8']
                  };
              }
            };
            const glowConfig = getGlowConfig(project.id);

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -6,
                  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } 
                }}
                className={`h-full ${project.layoutClass}`}
              >
                <BorderGlow
                      edgeSensitivity={30}
                      glowColor={glowConfig.glowColor}
                      backgroundColor={isHovered ? "white" : "rgba(255, 255, 255, 0.65)"}
                      borderRadius={16}
                      glowRadius={50}
                      glowIntensity={0.8}
                      colors={glowConfig.colors}
                      onMouseEnter={() => setHoveredCardId(project.id)}
                      onMouseLeave={() => setHoveredCardId(null)}
                      onClick={() => setSelectedProject(project)}
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
                            ? `scale-110 rotate-12 opacity-95 text-transparent bg-clip-text bg-gradient-to-tr ${project.gradient}` 
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
                              isHovered ? "text-gradient bg-gradient-to-tr " + project.gradient : "text-zinc-300"
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
                            {renderVectorDecoration(project.vectorType, isHovered, project.gradient)}
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
                            {project.badge}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-950 pr-8">
                            {project.title}
                          </h4>
                          <p className={`text-sm sm:text-base font-medium leading-relaxed transition-colors duration-300 mt-2 max-w-none w-full ${
                            isHovered ? "text-zinc-900" : "text-zinc-500"
                          }`}>
                            {project.subtitle}
                          </p>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-4 max-w-none w-full">
                          {project.description}
                        </p>
                      </div>

                      {/* Description & Tech Footer */}
                      <div className="z-10 mt-8 w-full">
                        {/* Hero card expands description space cleanly */}
                        {project.id === "proj-1" && (
                          <div className="space-y-6 mb-6">
                            {/* Recruiter-focused SaaS Strategy Board */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5 border-t border-zinc-150">
                              <div className="bg-zinc-50/70 hover:bg-zinc-50/100 border border-zinc-200/50 p-4 rounded-xl transition-all space-y-2 select-none">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                  <span className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider">SaaS UX METRICS</span>
                                </div>
                                <h5 className="text-sm font-bold text-zinc-950">Recruiter Ergonomics</h5>
                                <p className="text-xs text-zinc-500 leading-normal font-sans">
                                  Engineered to slash <strong>Time-to-Disposition (TToD)</strong> and context overhead through unified split-screen workspaces and high-density dashboards.
                                </p>
                              </div>
                              
                              <div className="bg-zinc-50/70 hover:bg-zinc-50/100 border border-zinc-200/50 p-4 rounded-xl transition-all space-y-2 select-none">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                  <span className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider">PROTOTYPING DEPTH</span>
                                </div>
                                <h5 className="text-sm font-bold text-zinc-950">Live React / TS Sandbox</h5>
                                <p className="text-xs text-zinc-500 leading-normal font-sans">
                                  Not just static mockups. Experience a <strong>fully interactive production build</strong> featuring scorecard entries, sticky bulk actions, and active event telemetry.
                                </p>
                              </div>

                              <div className="bg-zinc-50/70 hover:bg-zinc-50/100 border border-zinc-200/50 p-4 rounded-xl transition-all space-y-2 select-none">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                  <span className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider">MODERN WORKFLOW</span>
                                </div>
                                <h5 className="text-sm font-bold text-zinc-950">Claude Code Execution</h5>
                                <p className="text-xs text-zinc-500 leading-normal font-sans">
                                  Build-aligned utilizing premium agentic terminal tool synchronization, ensuring 100% token and component state parity under clean standards.
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Panda Habits extends description space cleanly with USPs */}
                        {project.id === "proj-2" && (
                          <div className="space-y-6 mb-6">
                            {/* Panda Habits USP Board */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5 border-t border-zinc-150">
                              <div className="bg-zinc-50/70 hover:bg-zinc-50/100 border border-zinc-200/50 p-4 rounded-xl transition-all space-y-2 select-none">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                  <span className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider">HABIT PSYCHOLOGY</span>
                                </div>
                                <h5 className="text-sm font-bold text-zinc-950">Psychology Design</h5>
                                <p className="text-xs text-zinc-500 leading-normal font-sans">
                                  Uses a psychology-first habit builder that replaces guilt-inducing tracking with mascot-guided streaks and rewarding milestone loops.
                                </p>
                              </div>
                              
                              <div className="bg-zinc-50/70 hover:bg-zinc-50/100 border border-zinc-200/50 p-4 rounded-xl transition-all space-y-2 select-none">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                                  <span className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider">DESIGN TO CODE</span>
                                </div>
                                <h5 className="text-sm font-bold text-zinc-950">Zero-Figma Parity</h5>
                                <p className="text-xs text-zinc-500 leading-normal font-sans">
                                  Direct token-to-widget engine integration enforces absolute component parity between the design library assets and the compiled interactive prototype.
                                </p>
                              </div>

                              <div className="bg-zinc-50/70 hover:bg-zinc-50/100 border border-zinc-200/50 p-4 rounded-xl transition-all space-y-2 select-none">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                  <span className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider">A11y SAFEGUARDS</span>
                                </div>
                                <h5 className="text-sm font-bold text-zinc-950">AAA Accessibility Standards</h5>
                                <p className="text-xs text-zinc-500 leading-normal font-sans">
                                  Hardcodes strict WCAG 2.1 AAA color contrast validation (15.6:1 ratio) and customizable touch ergonomics into the interactive app layout.
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="pt-4 border-t border-zinc-100/80 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 select-none">
                            {project.tech.map((t, idx) => (
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
      <motion.button
        onClick={onBack}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="mt-14 sm:mt-20 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white text-xs font-bold uppercase tracking-[0.25em] px-9 py-3.5 rounded-full cursor-pointer transition-all duration-300 shadow-md flex items-center gap-2 select-none"
      >
        <span>← Back to Home</span>
      </motion.button>
    </motion.div>
  );
}
