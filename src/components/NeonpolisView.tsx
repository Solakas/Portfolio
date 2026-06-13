import React, { useState } from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import AnimatedStatCard from "./AnimatedStatCard";
import { 
  Sparkles, 
  Gamepad2, 
  Cpu, 
  Layers, 
  Database, 
  TrendingUp, 
  Dices,
  RefreshCw,
  Lock,
  Info,
  Shield,
  Search,
  BookOpen,
  ArrowRight,
  GitBranch
} from "lucide-react";

interface NeonpolisViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function NeonpolisView({ onClose, onPrev, onNext }: NeonpolisViewProps) {
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"architecture" | "systems">("systems");

  const specs = [
    { label: "Role", value: "Lead Designer & Prototyper" },
    { label: "Timeline", value: "3 Days Rapid Sprint" },
    { label: "Game Influence", value: "King of Tokyo" },
    { label: "Design Stack", value: "Figma Make & ChatGPT" },
    { label: "Deployment", value: "Vercel Playable MVP" }
  ];

  const bentoCards = [
    {
      title: "State-Based Rules Engine",
      description: "Converted tactile card logic and combat steps into testable state machines. The UI dynamically gates actions, hiding illegal moves during timing windows.",
      icon: Cpu,
      badge: "JSON PLAYBOOKS",
      isAccent: true
    },
    {
      title: "Visceral Dice Simulator",
      description: "Recreated the physical satisfaction of shaking dice with a 3-roll loop, selective keeping buffers, lightweight roll physics, and instantaneous stat feedback.",
      icon: Dices,
      badge: "TACTILE FEEL"
    },
    {
      title: "Symmetric Board IA Layout",
      description: "Structured interface density: Left sidebar handles shop economics/deck, Center holds active arena states, and Right maintains Victory Track progression.",
      icon: Layers,
      badge: "INFORMATION ARCHITECTURE"
    },
    {
      title: "AI Co-Designer Playbook",
      description: "Co-authored all 48 custom character and card effect flows with ChatGPT. Ran simulations of complex card interactions (e.g., dynamic shield passives).",
      icon: Sparkles,
      badge: "COLLABORATIVE INTELLIGENCE"
    }
  ];

  const impactStats = [
    { value: "3 Days", text: "Rapid prototyping sprint going instantly from raw paper rules translation to a secure fully functional Vercel deploy." },
    { value: "48 Cards", text: "Complete interaction logic charts designed with explicit timing resolution order filters (Shields → Passives → Actives)." },
    { value: "3-Roll", text: "Satisfying core loop with selective buffers and damage triggers configured visually to replace complex spreadsheet lists." }
  ];

  return (
    <ProjectDetailLayout
      title="NeonPolis"
      category="AI Game Co-Designer"
      badge="BOARD GAME MVP"
      subtitle="Translating the tactical feel of the physical board game King of Tokyo into a playful, fast, and highly readable web experience. Powered by ChatGPT co-writing, Figma Make, and Vercel modular deployment."
      githubUrl="https://github.com/Solakas/neonpolis"
      liveUrl="https://neonpolis-4u4d.vercel.app/"
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
      hideSubtitles={true}
    >
      <div className="space-y-24 mt-12 text-left">
        
        {/* SECTION 1: CORE SPECIFICATIONS MATRIX */}
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

        {/* SECTION 2: THE 3-CARD PROBLEM BENCHMARK */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 select-none text-left">
          {/* THE PROBLEM */}
          <div className="bg-white border border-zinc-200/85 p-8 rounded-3xl shadow-3xs space-y-4 hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-amber-600">
                <div className="p-2 bg-amber-50 rounded-xl border border-amber-100/50">
                  <Shield className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1">The Problem</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans">
                Physical board games thrive on high-fidelity social cues and tactile feedback (shaking dice, placing tokens). Traditional online translations flatten this, resulting in busy interfaces and confusing rule queues.
              </p>
            </div>
            <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Cluttered overlays and lack of visual feedback are standard pain points in digital table games.
            </p>
          </div>

          {/* THE CHALLENGE */}
          <div className="bg-white border border-zinc-200/85 p-8 rounded-3xl shadow-3xs space-y-4 hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-red-650">
                <div className="p-2 bg-red-50 rounded-xl border border-red-100/50">
                  <Gamepad2 className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1">The Challenge</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans">
                How do we condense over forty distinct item rules, state progression limits, and dice behaviors into a browser workspace while preserving physical tension and providing perfect accessibility?
              </p>
            </div>
            <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Must map rules, micro-interactions, and visual markers in a strict design system without lag.
            </p>
          </div>

          {/* THE HYPOTHESIS */}
          <div className="bg-white border border-zinc-200/85 p-8 rounded-3xl shadow-3xs space-y-4 hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-emerald-750">
                <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100/50">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1">The Hypothesis</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans">
                By modeling card effects as functional state payloads and designing a direct responsive board schema (Left Economy, Right Victory Road, Center Arena), we can guide players organically.
              </p>
            </div>
            <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Using AI as a co-pilot helps exhaustively map rule systems and edge cases in a fraction of normal timelines.
            </p>
          </div>
        </div>

        {/* SECTION 3: THE STRATEGY OVERVIEW */}
        <div className="relative border border-zinc-200 bg-zinc-50/40 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-sm shadow-zinc-100/50 group select-none transition-all duration-300 hover:border-zinc-350">
          <div 
            className="absolute inset-0 opacity-45 pointer-events-none" 
            style={{ 
              backgroundImage: 'radial-gradient(circle, #e4e4e7 1.2px, transparent 1.2px)', 
              backgroundSize: '24px 24px' 
            }} 
          />
          
          <div className="relative space-y-6">
            <div className="flex items-center justify-between">
              <div className="inline-block font-mono text-[10px] sm:text-xs font-bold text-orange-650 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full uppercase tracking-wider">
                Sprint Strategy Overview
              </div>
              <TrendingUp className="w-5 h-5 text-orange-500" />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-900 leading-snug max-w-5xl">
                Breathing <span className="text-orange-600 underline decoration-orange-200 decoration-2 underline-offset-4 font-extrabold">tactile delight</span> into standard digital system wireframes.
              </h2>
              <p className="text-zinc-650 text-sm sm:text-base leading-relaxed max-w-4xl font-sans">
                NeonPolis represents a deliberate exercise in translating analog system rules to direct browser interactions. Over a rigorous three-day sprint, the physical game board was decompiled into responsive grids. Rather than mimicking complex 3D rendering engines, focus was placed on micro-animations, color states alerts, and immediate touch targets, producing an accessible digital playground built hand-in-hand with AI.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: BENTO SPECIFICATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {bentoCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx} 
                className="border border-zinc-200 bg-white rounded-3xl p-8 flex flex-col justify-between shadow-xs group hover:border-zinc-400 hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-6 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-200 shadow-2xs text-zinc-900 group-hover:scale-105 transition-all">
                    <Icon className="w-5 h-5 stroke-[1.5] text-orange-600" />
                  </div>
                  <div className="space-y-4">
                    <div className="inline-block font-mono text-xs text-zinc-500 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded-md tracking-wider uppercase">
                      {card.badge}
                    </div>
                    <h4 className="text-xl font-extrabold tracking-tight text-zinc-950">
                      {card.title}
                    </h4>
                    <p className="text-zinc-500 text-sm leading-relaxed font-sans">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SECTION 5: PLAYABLE MVP SANDBOX FRAME (THE MAIN REQUIREMENT) */}
        <div id="neonpolis-active-sandbox" className="space-y-12 pt-16 border-t border-zinc-205/40">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold tracking-widest text-[#ea580c] uppercase block">
                02. NEONPOLIS DESKTOP ACTIVE PLAYGROUND
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-zinc-950 flex items-center gap-2">
                <span>Playable Browser Sandbox</span>
                <span className="text-[10px] tracking-wider py-1 px-2.5 rounded-md bg-orange-100 text-orange-700 font-mono font-black uppercase border border-orange-200/50">
                  Live Preview
                </span>
              </h3>
              <p className="text-zinc-500 text-sm max-w-2xl font-sans">
                Interact with the actual, deployed Neonpolis MVP below. Standard 3-roll loop, action gating, character grids, and automatic card trackers are fully functional.
              </p>
            </div>

            {/* Quick Actions */}
            <button
              onClick={() => setIframeKey(p => p + 1)}
              className="flex items-center gap-1.5 px-4.5 py-2 bg-zinc-900 border border-zinc-800 text-white rounded-xl text-xs font-bold hover:bg-zinc-850 transition-all select-none self-start cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Sandbox</span>
            </button>
          </div>

          <div className="flex justify-center w-full">
            <div className="w-full transition-all duration-300">
              
              {/* Browser top bar simulation */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-t-2xl p-4 flex items-center justify-between select-none shadow-md">
                <div className="flex items-center gap-6">
                  {/* Window Control buttons */}
                  <div className="flex gap-2">
                    <span className="w-3 h-3 bg-rose-500 rounded-full block" />
                    <span className="w-3 h-3 bg-amber-400 rounded-full block" />
                    <span className="w-3 h-3 bg-emerald-500 rounded-full block" />
                  </div>
                  
                  {/* Tab header */}
                  <div className="hidden sm:flex items-center gap-2 bg-zinc-900 border-t border-l border-r border-zinc-850 rounded-t-lg px-4 py-1.5 text-zinc-350 text-xs font-medium font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                    <span>NeonPolis Live App</span>
                  </div>
                </div>

                {/* Secured address bar */}
                <div className="bg-zinc-900 border border-zinc-850 text-xs text-zinc-400 px-4 py-1.5 rounded-xl flex items-center gap-2 font-mono w-full max-w-md mx-4 justify-between truncate">
                  <div className="flex items-center gap-1.5 truncate">
                    <Lock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className="truncate select-all text-zinc-300 font-sans">https://neonpolis-4u4d.vercel.app/</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 px-1.5 py-0.5 bg-emerald-950/40 border border-emerald-950/50 rounded font-black shrink-0 uppercase tracking-widest leading-none">
                    SECURE SSL
                  </span>
                </div>

                {/* Instance Label */}
                <div className="hidden md:flex items-center gap-2 text-zinc-400 font-mono text-[10px] font-bold">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-emerald-400">ACTIVE BOARD GAME INSTANCE</span>
                </div>
              </div>

              {/* Iframe wrapper */}
              <div className="bg-white border-b border-l border-r border-zinc-250 rounded-b-2xl shadow-2xl relative overflow-hidden bg-zinc-50">
                <iframe
                  key={iframeKey}
                  src="https://neonpolis-4u4d.vercel.app/"
                  title="NeonPolis Live Active Playboard"
                  className="w-full h-[750px] border-0 outline-0 block relative z-10"
                  referrerPolicy="no-referrer"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-downloads"
                />
              </div>

              <div className="text-center text-[11px] text-zinc-400 mt-3 font-medium select-none flex items-center justify-center gap-2">
                <Info className="w-3.5 h-3.5 text-zinc-400" />
                <span>Responsive frame embedding direct production Vercel nodes. Experience atomic game design cycles securely.</span>
              </div>

            </div>
          </div>

        </div>

        {/* SECTION 6: IN-DEPTH CONDENSED CASE STUDY NAVIGATOR */}
        <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-10 select-none">
          <div className="border-b border-zinc-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-[10px] font-bold text-orange-600 uppercase tracking-wider block">RESEARCH & DEEP DIVE</span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-zinc-950 font-sans tracking-tight">Rapid Case Study Journal</h4>
            </div>
            
            {/* Tabs Selector Navigation */}
            <div className="flex bg-zinc-100 border border-zinc-200 p-1.5 rounded-xl font-mono text-[11px]">
              <button
                onClick={() => setActiveTab("systems")}
                className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer ${
                  activeTab === "systems"
                    ? "bg-zinc-950 text-white shadow-3xs"
                    : "text-zinc-650 hover:text-zinc-950"
                }`}
              >
                Systems & Interaction
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer ${
                  activeTab === "architecture"
                    ? "bg-zinc-950 text-white shadow-3xs"
                    : "text-zinc-650 hover:text-zinc-950"
                }`}
              >
                Build & AI Co-Pilot
              </button>
            </div>
          </div>

          <div className="mt-8">
            {activeTab === "systems" && (
              <div className="space-y-8 animate-fade-in text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-zinc-800">
                      <BookOpen className="w-5 h-5 text-orange-600 shrink-0" />
                      <h5 className="font-sans font-extrabold text-sm uppercase tracking-wider text-zinc-900">User Research & Sourcing Analysis</h5>
                    </div>
                    <ul className="space-y-3 pl-1 font-sans text-xs sm:text-sm text-zinc-600 leading-relaxed list-none">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span><strong>Source Mechanics:</strong> Extensively documented King of Tokyo board rules, player tracking cards, and dice resolution phases.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span><strong>Root Pain Points:</strong> Pinpointed massive viewport confusion common in traditional systems (such as Tabletop Simulator) with hard-to-read cards.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span><strong>Priority Features:</strong> Solved visual fatigue by enforcing flat cards layouts, high-contrast markers, and static shop meters.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-zinc-800">
                      <Cpu className="w-5 h-5 text-orange-600 shrink-0" />
                      <h5 className="font-sans font-extrabold text-sm uppercase tracking-wider text-zinc-900">Rules Precision Logic</h5>
                    </div>
                    <ul className="space-y-3 pl-1 font-sans text-xs sm:text-sm text-zinc-600 leading-relaxed list-none">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span><strong>Dynamic Turn Loop:</strong> Rigid 3-roll state loops with keep/discard toggles and light animations matching real dice shaker parameters.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span><strong>Timeline Resolution Order:</strong> Built timing gates filtering card rules. Combat steps follow strict buffers orders (Shields → Passives → Actives).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span><strong>Action Guardrails:</strong> UI button arrays dynamically hide unavailable or illegal selections, preventing timing logic errors completely.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
                )}

            {activeTab === "architecture" && (
              <div className="space-y-6 animate-fade-in text-left">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-zinc-50/50 hover:bg-zinc-50/100 transition-all border border-zinc-200/50 p-6 rounded-2xl space-y-3.5">
                    <div className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-orange-600 shrink-0" />
                      <span className="font-mono text-[10px] font-bold text-zinc-550 uppercase tracking-wider">Figma Make Integration</span>
                    </div>
                    <h6 className="font-sans font-extrabold text-sm text-zinc-900">Custom Vector Assets</h6>
                    <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed font-sans">
                      Generated game board mock layout components inside Figma, utilizing variants for card states and dice results directly aligned with the final Vercel code blocks.
                    </p>
                  </div>

                  <div className="bg-zinc-50/50 hover:bg-zinc-50/100 transition-all border border-zinc-200/50 p-6 rounded-2xl space-y-3.5">
                    <div className="flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-orange-600 shrink-0" />
                      <span className="font-mono text-[10px] font-bold text-zinc-550 uppercase tracking-wider">AI Co-Pilot Scripting</span>
                    </div>
                    <h6 className="font-sans font-extrabold text-sm text-zinc-900">ChatGPT Rule Books Drafting</h6>
                    <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed font-sans">
                      Used ChatGPT as an active co-designer to exhaustively test card edge-cases, calculate statistical board-balances, and code structured JSON templates.
                    </p>
                  </div>

                  <div className="bg-zinc-50/50 hover:bg-zinc-50/100 transition-all border border-zinc-200/50 p-6 rounded-2xl space-y-3.5">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-orange-600 shrink-0" />
                      <span className="font-mono text-[10px] font-bold text-zinc-550 uppercase tracking-wider">Automation Pipeline</span>
                    </div>
                    <h6 className="font-sans font-extrabold text-sm text-zinc-900">Make Workspace Delivery</h6>
                    <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed font-sans">
                      Constructed automatic Make parameters to export design tokens directly into Vercel web files, cutting out manual copying work.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* STATS IMPACT METRICS FOOTER */}
        <div className="pt-12 border-t border-zinc-200/40">
          <h3 className="font-mono text-xs font-bold text-zinc-400 tracking-wider uppercase mb-8 select-none">
            Sprint Velocities & Operational Volumes
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
