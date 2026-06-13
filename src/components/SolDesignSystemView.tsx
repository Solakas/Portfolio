import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import AnimatedStatCard from "./AnimatedStatCard";
import { 
  Sliders, 
  Layers, 
  Scaling, 
  Award, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  Grid, 
  ExternalLink,
  Laptop,
  Check
} from "lucide-react";

interface SolDesignSystemViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function SolDesignSystemView({ onClose, onPrev, onNext }: SolDesignSystemViewProps) {
  const specs = [
    { label: "Design File", value: "Figma Variables Engine" },
    { label: "Token Pipeline", value: "Core → Foundation → Component" },
    { label: "Code Status", value: "100% Code-Ready Production Components" },
    { label: "Build Target", value: "TypeScript & Tailwind CSS Variables" },
    { label: "Integrations", value: "Chromatic & Storybook Sandbox" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Foundation First",
      desc: "Architected a strict, unidirectional 3-tier token framework: Core (raw colors/scales) → Foundations/Semantic (mapping intent like text-subtle) → Components (inheriting variables to propagate theme swaps perfectly)."
    },
    {
      step: "02",
      title: "Authoring in Figma",
      desc: "Engineered strict Auto-Layout frames with exact interactive states (Default, Hover, Pressed, Focused, Disabled) and boolean flags to prevent layout bloat, only painting with tokenized values."
    },
    {
      step: "03",
      title: "Refactor Audit Review",
      desc: "Subjected every component to rigid QA tests: inspecting layer depths, validating exact property labels, and verifying token bounds before marking components as code-ready."
    },
    {
      step: "04",
      title: "Claude Code Generation",
      desc: "Supplied the Figma context directly to Anthropic's Claude Code helper, translating design intents 1:1 into TypeScript/React nodes. This tight loop prevents any visual or interactive drift."
    }
  ];

  const valueAxioms = [
    {
      title: "Visual Parity & Zero Drift",
      description: "With components structured with matching variance conventions, the final React implementation aligns 1:1, removing subjective interpretation during developer handoffs.",
      icon: Layers,
      badge: "ELIMINATED DRIFT"
    },
    {
      title: "Engineered for AI Coding",
      description: "Because variables and variant structures are semantic and orderly, LLMs can confidently pull, compose, and assemble interface modules with extreme speed.",
      icon: Sliders,
      badge: "AI-COORDINATED"
    },
    {
      title: "Theme Swapping at Scale",
      description: "Transitioning entire themes or updating layouts propagates across all 37 components instantaneously by updating token roots rather than manual CSS overrides.",
      icon: Scaling,
      badge: "FLUID VARIABLES"
    },
    {
      title: "Reduced UI Tech-Debt",
      description: "Dunes of redundant stylesheets are boiled down to a single clean, documented source. Over 2,290 variants reside nicely under unified Tailwind configs.",
      icon: Award,
      badge: "CLEAN DEBT"
    }
  ];

  const impactStats = [
    { value: "37", text: "Production-grade, highly-responsive components fully in unified design-to-code sync." },
    { value: "2,290", text: "Interactive variants and microstates verified across active user screens." },
    { value: "10s of hrs", text: "Estimated developer and designer collaboration hours saved per sprint by eliminating handoff friction." }
  ];

  const figmaUrl = "https://www.figma.com/design/2KSMnZQ3VwwcQJdiFI6J0q/Sol-Design-System?m=auto&t=W2lP3X33q5GTKrf1-6";
  const storybookUrl = "https://69ccd5d1cd51d872970660e1-cpcvowqpxi.chromatic.com/?path=/docs/components-accordion--docs";

  return (
    <ProjectDetailLayout
      title="Sol Design System"
      category="Design Systems"
      badge="SOL SYSTEM v1.0.0"
      subtitle="Bridging Figma design files and React code directly through precise token frameworks and automated Claude Code generation to achieve 100% component-to-code parity."
      figmaUrl={figmaUrl}
      liveUrl={storybookUrl}
      liveUrlLabel="Story Book"
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
      hideSubtitles={true}
    >
      <div className="space-y-24 mt-12 text-left">
        
        {/* SECTION 1: CORE SPECIFICATIONS */}
        <section className="space-y-6 select-none">
          <div className="flex items-center gap-2">
            <h3 className="font-sans font-black text-sm text-zinc-900 uppercase tracking-widest font-bold">
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
                <span className="block font-sans text-xs sm:text-sm font-bold text-zinc-805 mt-1">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: ROI & PORTFOLIO INSIGHTS */}
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
              <div className="inline-block font-mono text-[10px] sm:text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full uppercase tracking-wider">
                DESIGN SYSTEM ROI & IMPACT
              </div>
              <Sparkles className="w-5 h-5 text-indigo-500 animate-pulse" />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-900 leading-snug max-w-5xl">
                Scaling Design Consistency to <span className="text-indigo-600 underline decoration-indigo-200 decoration-2 underline-offset-4">Accelerate Product Deliveries</span> without layout drift.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-650 text-sm leading-relaxed font-sans">
                <p>
                  In modern software structures, the gap between what designers map in Figma and what engineers implement is an expensive bottleneck. By tokenizing raw values at the core level and leveraging an automated code-generation loop, we eliminated visual and interactive drift entirely. Designers and developers communicate under the exact same semantic syntax, paving the path for lightning-fast product updates.
                </p>
                <p>
                  This system is not just an asset library—it is a production multiplier. By linking our token system to Storybook and automated testing suites, onboarding layout changes is fully automated. This ensures 100% responsiveness on any viewport, saving valuable developer resources and allowing teams to focus on core business logic.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: THE END-TO-END PROCESS TIMELINE */}
        <section className="space-y-8 select-none">
          <div className="flex items-center gap-2">
            <h3 className="font-sans font-black text-sm text-zinc-900 uppercase tracking-widest font-bold">
              The Code-Ready Process
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white border border-zinc-200/80 p-6 sm:p-8 rounded-3xl shadow-3xs hover:border-zinc-450 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-4xl font-black font-mono text-zinc-155 opacity-75 block">
                    {step.step}
                  </span>
                  <h4 className="text-lg font-bold font-sans text-zinc-950 tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-zinc-100 flex items-center gap-1.5 text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                  <span className="font-mono text-[9px] uppercase tracking-wider font-semibold">Standard Verified</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: SYSTEM CAPABILITIES BENTO */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <h3 className="font-sans font-black text-sm text-zinc-900 uppercase tracking-widest pl-1 font-bold">
              Engineering Capabilities Deployed
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueAxioms.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx} 
                  className="border rounded-3xl p-8 flex flex-col justify-between shadow-3xs transition-all duration-300 hover:shadow-xs hover:border-zinc-400 bg-white border-zinc-200 text-zinc-95"
                >
                  <div className="space-y-6 text-left">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-3xs bg-zinc-50 border-zinc-200 text-indigo-650">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div className="space-y-2">
                      <span className="font-mono text-[10px] font-bold tracking-wider opacity-60 uppercase block">
                        {card.badge}
                      </span>
                      <h4 className="text-base font-bold tracking-tight text-zinc-900 font-sans">
                        {card.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-zinc-500 font-sans">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: STORYBOOK LIVE INTRACTIVE PREVIEW SANDBOX */}
        <section className="space-y-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="p-1 px-2.5 bg-zinc-900 text-white rounded text-[10px] uppercase font-mono tracking-wider font-bold">Interactive Sandbox</span>
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-zinc-950 tracking-tight pt-1">
                Storybook Workspace Playground
              </h3>
              <p className="text-zinc-500 text-xs sm:text-sm">
                Explore production components, controls, and accessibility variants linked 1:1 with Figma tokens.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href={storybookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-white border border-zinc-250 hover:border-zinc-950 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-3xs cursor-pointer font-mono text-zinc-805"
              >
                <span>External Storybook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a 
                href={figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-zinc-950 hover:bg-zinc-900 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-3xs cursor-pointer font-mono"
              >
                <span>Figma Workspace</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Browser / Iframe Mockup Container */}
          <div className="border border-zinc-200 rounded-3xl shadow-lg bg-zinc-50 overflow-hidden select-none">
            {/* Browser top-bar */}
            <div className="bg-zinc-100 px-6 py-3.5 border-b border-zinc-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-450 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              </div>
              
              {/* Mock Address bar */}
              <div className="bg-white border border-zinc-200/60 shadow-3xs text-[10px] sm:text-xs font-mono text-zinc-400 rounded-lg px-4 py-1 flex items-center gap-2 max-w-lg w-full justify-between">
                <div className="flex items-center gap-1.5 truncate">
                  <Laptop className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="text-zinc-600 truncate">{storybookUrl}</span>
                </div>
                <span className="text-emerald-500 font-bold flex items-center gap-1 text-[9px] uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  secured
                </span>
              </div>

              <div className="flex items-center gap-1.5 pr-2">
                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full inline-block" />
                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full inline-block" />
                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full inline-block" />
              </div>
            </div>

            {/* Sandbox iframe frame */}
            <div className="w-full h-[550px] relative bg-white">
              <iframe 
                src={storybookUrl}
                title="Sol Design System Storybook Sandbox Frame"
                className="absolute inset-0 w-full h-full border-0"
                referrerPolicy="no-referrer"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </section>

        {/* SECTION 6: IMPACT STATISTICS */}
        <div className="pt-12 border-t border-zinc-200/40">
          <h3 className="font-mono text-xs font-bold text-zinc-400 tracking-wider uppercase mb-8 select-none">
            Verified Design Operations Success Measures
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
