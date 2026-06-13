import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import AnimatedStatCard from "./AnimatedStatCard";
import { Sliders, Terminal, ChevronRight, Layers, Clapperboard, Award } from "lucide-react";

interface PromptMotionViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function PromptMotionView({ onClose, onPrev, onNext }: PromptMotionViewProps) {
  const specs = [
    { label: "Choreography Engine", value: "Framer Motion Dynamics Interpreter" },
    { label: "Physics Equations", value: "Mass-spring-damper equations" },
    { label: "Output Formats", value: "Framer Motion, CSS cubic-bezier, Canvas timings" },
    { label: "Language Model", value: "Fine-tuned semantic description parser" }
  ];

  const bentoCards = [
    {
      title: "Semantic Dynamics Parser",
      description: "Converts micro-interaction statements into precise mass, tension, and damping vectors immediately.",
      icon: Sliders,
      badge: "PHYSICS ENGINE",
      isAccent: true
    },
    {
      title: "Interactive Curve Preview",
      description: "Visualizes spring physics outputs as interactive preview nodes, demonstrating speed curves visually.",
      icon: ChevronRight,
      badge: "DYNAMICS VISUALIZER"
    },
    {
      title: "Framer Motion Exporter",
      description: "Outputs fully-formed React code blocks that copy directly into production views.",
      icon: Terminal,
      badge: "CODE EMISSION"
    },
    {
      title: "CSS Curve Interpolator",
      description: "Solves spring math to approximate beautiful cubic-bezier configurations for lighter CSS animations.",
      icon: Layers,
      badge: "CSS OPTIMIST"
    }
  ];

  const impactStats = [
    { value: "85%", text: "Reduction in developer trial-and-error adjustment loops to achieve the correct 'feel'." },
    { value: "100%", text: "Consistency in UI transition physics across distinct mobile and web platforms." },
    { value: "4.8/5", text: "Developer satisfaction score for motion integration workflows." }
  ];

  return (
    <ProjectDetailLayout
      title="Prompt-to-Motion"
      category="Interaction Engineering"
      badge="LIVE PROJECT"
      subtitle="Building an interactive choreography engine solver translating semantic physical tokens like 'bouncy' and 'snappy' into accurate Framer spring matrices instantly."
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
                <span className="block font-sans text-xs sm:text-sm font-bold text-zinc-800 mt-1">
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
                Interaction Physics
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-900 leading-snug">
                Replacing guesses with literal spring physics.
              </h2>
              <p className="text-zinc-650 text-sm sm:text-base leading-relaxed">
                Instead of copy-pasting numbers from arbitrary tutorials, our choreographer interprets human descriptions like 'snappy pop' to calculate exact spring tension, damping, and friction values. This translates feeling into code, establishing micro-interaction integrity across screens.
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
            Spring Physics & Animation Solver Benchmarks
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
