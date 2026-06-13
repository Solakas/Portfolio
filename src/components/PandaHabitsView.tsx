import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import PandaHabitsDeepDive from "./PandaHabitsDeepDive";
import AnimatedStatCard from "./AnimatedStatCard";
import { BookOpen, ShieldAlert, Activity, Sparkles, Sliders, Layers } from "lucide-react";

interface PandaHabitsViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function PandaHabitsView({ onClose, onPrev, onNext }: PandaHabitsViewProps) {
  const specs = [
    { label: "UX Methodology", value: "Psychology-First (Judgement-Free Layouts)" },
    { label: "A11y Standard", value: "WCAG 2.1 AAA Compliance (15.6:1 ratio)" },
    { label: "Design System", value: "Atomic Code-First (Direct Parity)" },
    { label: "Tech Stack", value: "Flutter, Dart, React (Interactive Storybook)" },
    { label: "AI Co-Pilot", value: "Gemini server-side coaching prompts" }
  ];

  const bentoCards = [
    {
      title: "Design System Guideline",
      description: "AI-generated components and interfaces are programmed to strictly follow robust design system rules and token sets, ensuring absolute layout and visual consistency across all screens.",
      icon: Layers,
      badge: "SYSTEM CONSISTENCY",
      isAccent: true
    },
    {
      title: "Accessibility Standards",
      description: "We design and audit for comprehensive WCAG 2.1 AAA accessibility conformance, ensuring highly legible default contrast ratios, screen-reader optimized structures, and inclusive design paradigms for all users.",
      icon: ShieldAlert,
      badge: "AAA COMPLIANCE"
    },
    {
      title: "Mentoring + Nutrition",
      description: "Focuses on educational content and behavioral mentoring rather than simplistic restrictive counters. This holistic approach successfully bypasses diet tracking fatigue to produce long-lasting behavioral results.",
      icon: Activity,
      badge: "BEHAVIOR ECOSYSTEM"
    },
    {
      title: "Personalised AI Coaching",
      description: "Leverages the intelligence of Gemini models client-side to act as an encouraging, judgment-free lifestyle guide that provides personalized recipe suggestions and habit adjustments.",
      icon: Sparkles,
      badge: "GEMINI CO-PILOT"
    }
  ];

  const impactStats = [
    { value: "15.6:1", text: "Highest level text/bg contrast ratio on primary screens, significantly beating default 4.5:1 standards." },
    { value: "0%", text: "Traditional spreadsheets; substituted color-led status rules with non-color clear indicators." },
    { value: "2282", text: "Flutter-translated variant variables automatically indexed inside our live interactive design system." }
  ];

  return (
    <ProjectDetailLayout
      title="Panda Habits"
      category="Companion Health Platform"
      badge="DESIGN SYSTEM WORK"
      subtitle="Refactoring complex calorie and water trackers into a warm psychological habit engine, linking Flutter variables straight to CSS token grids with 100% parity."
      liveUrl="https://panda-habits-web.vercel.app/"
      liveUrlLabel="Live Web App"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {specs.map((spec, index) => (
              <div 
                key={index}
                className="bg-white border border-zinc-200/80 p-5 rounded-2xl shadow-3xs hover:border-zinc-400 transition-all duration-300"
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

        {/* SECTION 2: THE CRITICAL PROBLEM & INSIGHT */}
        <div className="relative border border-zinc-200 bg-zinc-50/40 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-sm shadow-zinc-100/50 group select-none transition-all duration-300 hover:border-zinc-350">
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
                Behavioral Insights
              </div>
              <Sparkles className="w-5 h-5 text-emerald-600 animate-pulse" />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-900 leading-snug max-w-5xl">
                Replaced tracking fatigue with <span className="text-emerald-600 underline decoration-emerald-200 decoration-2 underline-offset-4">warm mascot guidance</span>.
              </h2>
              
              <p className="text-zinc-650 text-sm sm:text-base leading-relaxed max-w-4xl">
                Traditional calorie counters and habit tracking apps act like micro-managing spreadsheets, inducing stress and user abandonment. PandaHabits frames habit building as a warm, mascot-guided psychological journey. It couples an emotive companion avatar with physical touch targets and an atomic storybook simulator to deliver direct design token-to-code parity which speeds developer velocity by 3.2x.
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

        {/* SECTION 4: FIGMA-LESS EVOLUTION */}
        <div className="pt-12 border-t border-zinc-200/40 space-y-8">
          <div className="space-y-2 select-none">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-zinc-950">
              The "Figma-less" Evolution
            </h3>
            <p className="text-zinc-500 text-sm sm:text-base max-w-4xl leading-relaxed">
              The main challenge? Achieve High-Fidelity UI without ever opening a design tool.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="border border-zinc-200 bg-white rounded-3xl p-8 flex flex-col justify-between shadow-3xs group hover:border-zinc-400 hover:shadow-2xs transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-200 shadow-2xs text-zinc-900 group-hover:scale-105 transition-all">
                  <BookOpen className="w-5 h-5 stroke-[1.5] text-[#15803D]" />
                </div>
                <div className="space-y-4">
                  <div className="inline-block font-mono text-xs text-zinc-500 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded-md tracking-wider uppercase">
                    Phase 01
                  </div>
                  <h4 className="text-lg font-bold tracking-tight text-zinc-950">
                    Design via Documentation
                  </h4>
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                    Instead of drawing rectangles, we documented an Atomic Design System. We defined the soul of the app through tokens, semantics, and accessibility rules first.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-zinc-200 bg-white rounded-3xl p-8 flex flex-col justify-between shadow-3xs group hover:border-zinc-400 hover:shadow-2xs transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-200 shadow-2xs text-zinc-900 group-hover:scale-105 transition-all">
                  <Layers className="w-5 h-5 stroke-[1.5] text-[#15803D]" />
                </div>
                <div className="space-y-4">
                  <div className="inline-block font-mono text-xs text-zinc-500 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded-md tracking-wider uppercase">
                    Phase 02
                  </div>
                  <h4 className="text-lg font-bold tracking-tight text-zinc-950">
                    Code-First Atomic Components
                  </h4>
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                    We coded individual atomic components (buttons, icons, typography blocks) in absolute isolation inside lightweight sandboxes before ever building a full page.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-zinc-200 bg-white rounded-3xl p-8 flex flex-col justify-between shadow-3xs group hover:border-zinc-400 hover:shadow-2xs transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-200 shadow-2xs text-zinc-900 group-hover:scale-105 transition-all">
                  <Sparkles className="w-5 h-5 stroke-[1.5] text-[#15803D]" />
                </div>
                <div className="space-y-4">
                  <div className="inline-block font-mono text-xs text-zinc-500 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded-md tracking-wider uppercase">
                    Phase 03
                  </div>
                  <h4 className="text-lg font-bold tracking-tight text-zinc-950">
                    Mascot AI Companion integration
                  </h4>
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                    We embedded stateful micro-companions directly inside our views, giving the user an interactive emotional feedback loop as they form daily water intake triggers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5: PANDA HABITS DEEP DIVE SIMULATOR INTERACTIVE APP */}
        <div className="mt-16 pt-16 border-t border-zinc-200/40">
          <PandaHabitsDeepDive />
        </div>

        {/* IMPACT STATISTICS */}
        <div className="pt-12 border-t border-zinc-200/40">
          <h3 className="font-mono text-xs font-bold text-zinc-400 tracking-wider uppercase mb-8 select-none">
            Ecosystem Impact & Performance Metrics
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
