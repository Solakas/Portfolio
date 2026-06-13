import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import AnimatedStatCard from "./AnimatedStatCard";
import { Sliders, ShieldAlert, Terminal, Zap, BookOpen } from "lucide-react";

interface SemanticTokenViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function SemanticTokenView({ onClose, onPrev, onNext }: SemanticTokenViewProps) {
  const specs = [
    { label: "API Pipeline", value: "Figma REST API Integration" },
    { label: "Nested Modes", value: "Dynamic Dark / Light Contrast Profiles" },
    { label: "Compilation Output", value: "SASS, JSON, Less, Tailwind Themes" },
    { label: "Safety Checks", value: "Luminance Contrast Compliance Engine" }
  ];

  const bentoCards = [
    {
      title: "Token Compiler Engine",
      description: "Pulls Figma design definitions via API and resolves structural nesting, generating platform variables.",
      icon: Sliders,
      badge: "COMPILER CORE",
      isAccent: true
    },
    {
      title: "Contrast Validator Layer",
      description: "Reviews background-to-foreground luminance values, safeguarding WCAG accessibility dynamically.",
      icon: ShieldAlert,
      badge: "CONTRAST CHECK"
    },
    {
      title: "Format Target Exporters",
      description: "Builds production CSS styles, Swift variables, and Android XML resources upon every single build action.",
      icon: Terminal,
      badge: "DELIVERABLES"
    },
    {
      title: "Intelligent Change Audits",
      description: "Identifies and flags radical layout modifiers, saving teams from unexpected styling regressions.",
      icon: Zap,
      badge: "REGRESSION CORE"
    }
  ];

  const impactStats = [
    { value: "10x", text: "Faster typography and color theme updates across standard web configurations." },
    { value: "24", text: "Design-to-code syncing tasks automated on production systems." },
    { value: "100%", text: "Token consistency rating achieved in structural system audits." }
  ];

  return (
    <ProjectDetailLayout
      title="Semantic Token Compiler"
      category="Token Infrastructure"
      badge="TOKEN COMPILER"
      subtitle="Refactoring high-friction handoffs with an automated token pipeline compiling dark/light aliases directly into platform-ready configs."
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
      hideSubtitles={true}
    >
      <div className="space-y-24 mt-12 text-left">
        
        {/* SECTION 1: SPECIFICATIONS */}
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
              <div className="inline-block font-mono text-[10px] sm:text-xs font-bold text-cyan-600 bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-full uppercase tracking-wider">
                Pipeline Automation
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-900 leading-snug">
                Automated token compilation bridges the handoff gap.
              </h2>
              <p className="text-zinc-650 text-sm sm:text-base leading-relaxed">
                Instead of visual sheets and text documents, we engineered an automated token compiler that directly transforms Figma styles and variable tables into production CSS and iOS assets. Custom contrast algorithms dynamically check text against nested parameters to enforce readability rules.
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
            Automation Speeds & Accuracy Percentages
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
