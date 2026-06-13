import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Smartphone, 
  Globe, 
  Sliders, 
  Users, 
  ArrowUpRight, 
  Sparkles,
  Zap,
  Activity,
  Award,
  Lock,
  Database
} from "lucide-react";
import WaveMobileAppView from "./WaveMobileAppView";
import WaveStorefrontView from "./WaveStorefrontView";
import WaveManagementView from "./WaveManagementView";
import WavePickerView from "./WavePickerView";
import AnimatedStatCard from "./AnimatedStatCard";

interface ProductsViewProps {
  onBack: () => void;
}

interface Product {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  company: string;
  description: string;
  tech: string[];
  gradient: string;
  icon: React.ElementType;
  vectorType: "orbit" | "concentric" | "matrix" | "flow";
  badgeColor: string;
  iconColor: string;
  statLeft: string;
  statRight: string;
}

const liveProductsData: Product[] = [
  {
    id: "app",
    title: "Wave Grocery Mobile App",
    subtitle: "Native Multi-Brand iOS & Android",
    badge: "mobile app",
    company: "Desquared SA",
    description: "Designed systemic core components and tokenized architectures deployed across white-label native applications for major supermarket chains. Features highly customizable brand layouts, offline state management, and ergonomic physical interactions.",
    tech: ["Multi-Brand System", "Token Architecture", "Native App Design", "WCAG AA"],
    gradient: "from-indigo-600 via-blue-500 to-sky-500",
    icon: Smartphone,
    vectorType: "orbit",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-150",
    iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
    statLeft: "1M+ Active Shoppers",
    statRight: "300+ Core Tokens"
  },
  {
    id: "storefront",
    title: "Wave Grocery Web App",
    subtitle: "Responsive Retail Storefront",
    badge: "web app",
    company: "Desquared SA",
    description: "Structured configurable storefront web app layouts supporting 50k+ daily real-time ERP product syncs, predictive fast lookup, customizable grocery preparation values, and multi-device usability.",
    tech: ["Web E-commerce", "Theme Parameters", "Search UX", "Cart Systems"],
    gradient: "from-emerald-600 via-teal-500 to-emerald-450",
    icon: Globe,
    vectorType: "flow",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-150",
    iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
    statLeft: "50k+ Live SKUs Synced",
    statRight: "-25% Abandonment Rate"
  },
  {
    id: "management",
    title: "Wave Grocery Admin Panel",
    subtitle: "Operational B2B Enterprise Console",
    badge: "SaaS Software",
    company: "Desquared SA",
    description: "Refactored complex warehouse settings, logistics timeslots, role-based scoping, capacity safeguards, and WYSIWYG Flyer content publishers into simple, human web utilities for non-technical retail personnel.",
    tech: ["B2B SaaS Panels", "Capacity Calendars", "WYSIWYG Flyer builder", "RBAC Presets"],
    gradient: "from-amber-600 via-orange-500 to-yellow-500",
    icon: Sliders,
    vectorType: "concentric",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    iconColor: "text-amber-600 bg-amber-50 border-amber-100",
    statLeft: "99.9% SLA Guarded",
    statRight: "<1h Operator Onboarding"
  },
  {
    id: "picker",
    title: "Wave Grocery Picker App",
    subtitle: "Ergonomic Frontline Picking Software",
    badge: "mobile app",
    company: "Desquared SA",
    description: "Designed a hands-free high-density mobile scanning utility for physical retail floors. shadow-researched with active supermarket personnel to organize shelf locations into continuous non-backtracking physical routes.",
    tech: ["Fulfillment App", "Aisle Routing", "Tactile Scans", "AI Substitutes"],
    gradient: "from-rose-600 via-pink-500 to-rose-450",
    icon: Users,
    vectorType: "matrix",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-150",
    iconColor: "text-rose-600 bg-rose-50 border-rose-100",
    statLeft: "Tactile Audio Scans",
    statRight: "-30% Effort Reduction"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    filter: "blur(3px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.7, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

export default function ProductsView({ onBack }: ProductsViewProps) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  if (selectedProduct) {
    const currentIndex = liveProductsData.findIndex(p => p.id === selectedProduct);
    const onPrev = currentIndex > 0 ? () => setSelectedProduct(liveProductsData[currentIndex - 1].id) : undefined;
    const onNext = currentIndex < liveProductsData.length - 1 ? () => setSelectedProduct(liveProductsData[currentIndex + 1].id) : undefined;
    const handleClose = () => setSelectedProduct(null);

    switch (selectedProduct) {
      case "app":
        return <WaveMobileAppView onClose={handleClose} onPrev={onPrev} onNext={onNext} />;
      case "storefront":
        return <WaveStorefrontView onClose={handleClose} onPrev={onPrev} onNext={onNext} />;
      case "management":
        return <WaveManagementView onClose={handleClose} onPrev={onPrev} onNext={onNext} />;
      case "picker":
        return <WavePickerView onClose={handleClose} onPrev={onPrev} onNext={onNext} />;
      default:
        return null;
    }
  }

  const renderProductVector = (type: string, isHovered: boolean, gradient: string) => {
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
      id="products-view-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex-1 flex flex-col items-center justify-start overflow-y-auto max-h-[calc(100vh-140px)] pr-2 sm:pr-4 py-4 sm:py-8 select-none z-10"
    >
      {/* View Header */}
      <div className="w-full text-center mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-[0.25em] text-zinc-400 font-sans">
          Live Products
        </h2>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 flex flex-col gap-12 sm:gap-16">
        
        {/* Intro Copy */}
        <div className="flex flex-col gap-3 text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-1">
            <span className="p-2.5 bg-zinc-900 border border-zinc-700 text-white rounded-full flex items-center justify-center gap-1.5 shadow-sm text-xs font-bold uppercase tracking-widest px-4 font-mono select-none animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              Lead Designer & Design System Manager
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-zinc-950">
            Delivering Production-Ready Products at Scale
          </h3>
          <p className="text-zinc-650 text-sm sm:text-base leading-relaxed font-sans mt-1">
            In my role as <strong className="text-zinc-900">Lead Designer</strong> and <strong className="text-zinc-900">Design System Manager</strong>, I drove the design system definitions, token architectures, and fluid omnichannel experiences for these major live products—safeguarding cohesive UI uniformity across web, mobile, and frontline operational tools.
          </p>
        </div>

        {/* 2x2 Grid of Product Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto"
        >
          {liveProductsData.map((project) => {
            const isHovered = hoveredCardId === project.id;
            const ProjectIcon = project.icon;

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCardId(project.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => setSelectedProduct(project.id)}
                whileHover={{ 
                  scale: 1.018, 
                  y: -6,
                  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } 
                }}
                className={`group relative overflow-hidden rounded-2xl border ${
                  isHovered 
                    ? "border-zinc-900 bg-white shadow-xl shadow-zinc-100/60" 
                    : "border-zinc-200 bg-white/65 hover:bg-white backdrop-blur-md"
                } p-6 sm:p-8 flex flex-col justify-between min-h-[300px] sm:min-h-[330px] md:min-h-[350px] transition-all duration-500 cursor-pointer w-full text-left`}
              >
                {/* Embedded Colored-to-Grayscale Canvas Graphics */}
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
                  <div className={`w-full h-full flex items-center justify-center ${isHovered ? `text-indigo-500` : "text-zinc-400"}`}>
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
                      {renderProductVector(project.vectorType, isHovered, project.gradient)}
                    </div>
                  </div>
                </div>

                {/* Subtle outer glow that shines colors on hover */}
                {isHovered && (
                  <motion.div
                    layoutId={`glow-${project.id}`}
                    className={`absolute -inset-1 rounded-2xl bg-gradient-to-tr ${project.gradient} opacity-5 blur-xl -z-10`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.08 }}
                    exit={{ opacity: 0 }}
                  />
                )}

                {/* Card Header & Metadata */}
                <div className="z-10 w-full">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className={`p-2.5 rounded-xl border transition-all duration-300 ${
                      isHovered 
                        ? `bg-zinc-900 border-transparent text-white scale-110 shadow-md` 
                        : `${project.iconColor} text-zinc-805`
                    }`}>
                      <ProjectIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    
                    <span className={`text-xs font-bold tracking-widest px-2.5 py-1 rounded border font-mono transition-all duration-300 uppercase ${
                      isHovered 
                        ? `bg-zinc-900 text-white border-zinc-900` 
                        : `${project.badgeColor}`
                    }`}>
                      {project.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-950 flex items-center gap-2">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-zinc-400" />
                    </h4>
                    <p className={`text-sm sm:text-base font-medium leading-relaxed transition-colors duration-305 ${
                      isHovered ? "text-zinc-900" : "text-zinc-500"
                    }`}>
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-zinc-650 text-xs sm:text-sm mt-4 leading-relaxed font-sans max-w-md">
                    {project.description}
                  </p>
                </div>

                {/* Description & Tech Footer */}
                <div className="z-10 mt-8 w-full">
                  <div className="pt-4 border-t border-zinc-200/60 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 select-none">
                      {project.tech.map((t, idx) => (
                        <span 
                          key={idx} 
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full transition-all duration-300 ${
                            isHovered 
                              ? "bg-zinc-100 text-zinc-900 font-bold border border-zinc-300/40"
                              : "bg-zinc-50 text-zinc-500 border border-zinc-200/40"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="relative z-10 flex items-center justify-between text-[10px] text-zinc-400 font-mono">
                      <span>{project.statLeft}</span>
                      <span className="hidden sm:inline-block mx-1.5 opacity-60">|</span>
                      <span className="font-bold text-zinc-800 text-xs sm:text-[10px]">
                        {project.statRight}
                      </span>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Dynamic Metrics Section with Animated Counters */}
        <div className="pt-12 border-t border-zinc-200/40">
          <h3 className="font-mono text-xs font-extrabold text-zinc-400 tracking-widest uppercase mb-8 text-center select-none">
            Verified Production Performance KPIs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
            <AnimatedStatCard
              value="+350%"
              text="Increase in digital transaction ordering volumes safely sustained across large physical grocery chains."
              index={0}
            />
            <AnimatedStatCard
              value="-30%"
              text="Optimized routing loop time saved, directly preserving frontline physical ergonomics and picker fatigue."
              index={1}
            />
            <AnimatedStatCard
              value="4.7★"
              text="Average App Store & Google Play user ratings sustained over multiple white-labeled supermarket deployments."
              index={2}
            />
          </div>
        </div>

      </div>

      {/* Back Button */}
      <motion.button
        onClick={onBack}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="mt-14 sm:mt-20 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white text-xs font-bold uppercase tracking-[0.25em] px-9 py-3.5 rounded-full cursor-pointer transition-all duration-300 shadow-md flex items-center gap-2 select-none"
      >
        <span>Back to Home</span>
      </motion.button>
    </motion.div>
  );
}
