import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import AnimatedStatCard from "./AnimatedStatCard";
import { Sliders, Languages, SearchCode, Compass, ShieldAlert, Globe } from "lucide-react";

interface CopyLocalizerViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function CopyLocalizerView({ onClose, onPrev, onNext }: CopyLocalizerViewProps) {
  const specs = [
    { label: "Core AI", value: "Gemini Pro / Semantic Layout Guard" },
    { label: "Asset Scope", value: "30+ Languages & Spacings" },
    { label: "Layout Checking", value: "Dynamic Viewport Sizer" },
    { label: "Compliance Core", value: "Context API L10n Standard" }
  ];

  const bentoCards = [
    {
      title: "Multi-Language Layout Auditor",
      description: "Simulates, translates, and crawls layouts instantly in Arabic, Japanese, German, etc.",
      icon: Languages,
      badge: "TRANSLATE ENGINE",
      isAccent: true
    },
    {
      title: "Adaptive Copy Advisor",
      description: "Enforces strict length boundaries and recommends copywriting changes to avoid overlaps.",
      icon: SearchCode,
      badge: "UI COPY COACH"
    },
    {
      title: "RTL Compatibility Checker",
      description: "Validates margins, padding directionality, and grid scaling rules for native right-to-left layout modes.",
      icon: Compass,
      badge: "RTL ENGINE"
    },
    {
      title: "Automated Rescale Alerts",
      description: "Fires exact alerts directly to system administrators where design containers lack flex capabilities.",
      icon: ShieldAlert,
      badge: "FLEX ENFORCED"
    }
  ];

  const impactStats = [
    { value: "-90%", text: "Decline in content-related layout bugs logged in post-release localized reviews." },
    { value: "14d", text: "Layout audit and localization cycles saved during international updates." },
    { value: "10/10", text: "Brand consistency score maintained across global multi-platform releases." }
  ];

  return (
    <ProjectDetailLayout
      title="Local Copy Auditor"
      category="Internationalization SaaS"
      badge="LIVE PROJECT"
      subtitle="Refactoring complex locale file bundles into a spatial visual sandbox auditing German layouts, Japanese line breaks, and Arabic RTL orientations dynamically."
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
      hideSubtitles={true}
    >
      <div className="space-y-24 mt-12 text-left">
        
        {/* SECTION 1: SPECIFICATIONS MATRIX */}
        <section className="space-y-6 select-none">
          <div className="flex items-center gap-2">
            <h3 className="font-sans font-black text-sm text-zinc-900 uppercase tracking-widest">
              Core Specifications
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specs.map((spec, index) => (
              <div 
                key={index}
                className="bg-white border border-zinc-200/80 p-5 rounded-2xl shadow-3xs"
              >
                <span className="block font-mono text-[9px] uppercase tracking-wider text-zinc-400 font-bold">
                  {spec.label}
                </span>
                <span className="block font-sans text-xs sm:text-sm font-bold text-zinc-805 mt-1">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: INSIGHT CALLOUT */}
        <div className="relative border border-zinc-200 bg-zinc-50/40 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-sm shadow-zinc-100/50 group select-none transition-all duration-300">
          <div 
            className="absolute inset-0 opacity-40 pointer-events-none" 
            style={{ 
              backgroundImage: 'radial-gradient(circle, #e4e4e7 1.2px, transparent 1.2px)', 
              backgroundSize: '24px 24px' 
            }} 
          />
          <div className="relative space-y-6">
            <div className="flex items-center justify-between">
              <div className="inline-block font-mono text-[10px] sm:text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                Fluid Typography
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-900 leading-snug">
                Enforcing layout adaptability across localized contexts.
              </h2>
              <p className="text-zinc-650 text-sm sm:text-base leading-relaxed">
                UI copy looks beautiful in its original language, but breaks or overflows in German, Japanese, or Arabic. The Local Copy Auditor automatically translates and renders layouts inside multiple spatial limits, dynamically flagging visual overflows and advising copy adjustments.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: CORE BENCHMARKING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bentoCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx} 
                className="border rounded-3xl p-8 flex flex-col justify-between shadow-3xs transition-all duration-300 hover:shadow-xs hover:border-zinc-400 bg-white border-zinc-200 text-zinc-950"
              >
                <div className="space-y-6 text-left">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-3xs bg-zinc-50 border-zinc-200 text-indigo-600">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] font-bold tracking-wider opacity-60 uppercase">
                      {card.badge}
                    </span>
                    <h4 className="text-base font-bold tracking-tight">
                      {card.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-zinc-500">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* IMPACT STATISTICS */}
        <div className="pt-12 border-t border-zinc-200/40">
          <h3 className="font-mono text-xs font-bold text-zinc-400 tracking-wider uppercase mb-8 select-none">
            Copy Audit & Layout Sizing Benchmarks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactStats.map((stat, idx) => (
              <AnimatedStatCard
                key={idx}
                value={stat.value}
                text={stat.text}
                index={idx}
              />
            ))}
          </div>
        </div>

      </div>
    </ProjectDetailLayout>
  );
}
