import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Cpu, 
  Layers, 
  Minimize2, 
  Terminal, 
  TrendingUp, 
  Activity, 
  ArrowUpRight, 
  Zap, 
  Maximize2, 
  Sparkles, 
  GitMerge, 
  RotateCw, 
  SlidersHorizontal,
  ChevronRight
} from "lucide-react";

interface SpecRowProps {
  label: string;
  value: string;
}

function SpecRow({ label, value }: SpecRowProps) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-zinc-200/60 text-xs font-mono">
      <span className="text-zinc-400 capitalize">{label}</span>
      <span className="font-semibold text-zinc-900">{value}</span>
    </div>
  );
}

export default function ManifestoView() {
  const [activeTab, setActiveTab] = useState<"light" | "dark">("light");
  const [simulating, setSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);

  const startSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    setSimulationStep(0);
    
    const interval = setInterval(() => {
      setSimulationStep(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setSimulating(false);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  return (
    <div id="manifesto-view-container" className="w-full bg-[#FCFCFC] text-zinc-900 select-text overflow-x-hidden">
      
      {/* SECTION 1: HERO / THE ENGINE */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6 sm:px-8 border-b border-zinc-100 relative">
        {/* Absolute Coordinate Label for Tech aesthetic */}
        <div className="absolute top-6 left-6 sm:left-8 text-[9px] font-mono text-zinc-400 select-none">
          SYS_REF: [ENG_01.INF_CANVAS]
        </div>
        <div className="absolute top-6 right-6 sm:right-8 text-[9px] font-mono text-zinc-400 select-none">
          LATENCY_VAL: &lt;420ms
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-4">
          
          {/* Left Column (35% width approximately) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div className="space-y-4">
              <span className="px-3 py-1 bg-zinc-900 text-white text-[10px] font-bold font-mono uppercase tracking-widest rounded select-none">
                SECTION 01
              </span>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-zinc-950 uppercase font-sans">
                THE ENGINE
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-md">
                We combine design files with live code to create a responsive web environment where design decisions are synchronized automatically.
              </p>
            </div>

            {/* Metadata Spec Table */}
            <div className="border border-zinc-200/80 rounded-2xl p-5 bg-white/60 backdrop-blur-md shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-200 mb-2">
                <span className="text-[10px] font-bold font-mono text-zinc-400 tracking-wider">ENGINE METRICS</span>
                <Cpu className="w-3.5 h-3.5 text-zinc-400" />
              </div>
              <div className="divide-y divide-zinc-100">
                <SpecRow label="LLM Backbone" value="Gemini 2.5 Pro / Specialist Agent" />
                <SpecRow label="Latent Space Engine" value="1536-D Semantic Context Mapping" />
                <SpecRow label="Unified Token Density" value="8,200+ Active Code References" />
                <SpecRow label="Compilation Engine" value="Real-time Node Compiler (<420ms)" />
                <SpecRow label="WCAG Standard Target" value="APCA 60+ Universal Contrast" />
              </div>
            </div>
          </div>

          {/* Right Column (65% width approximately) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 leading-[1.05]">
                Maintaining UI consistency across multiple products.
              </h1>
              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
                Design consistency is hard to maintain when teams scale. Traditional workflows isolate design files from code bases, causing handoff friction. To solve this, design systems should bridge design intent and frontend code automatically by syncing layout parameters and tokens directly.
              </p>
            </div>

            {/* Interactive Specs Simulator Block */}
            <div className="border border-zinc-250/90 rounded-2xl bg-white p-6 md:p-8 space-y-6 shadow-sm border-dashed">
              <div className="flex items-center justify-between font-mono text-xs text-zinc-500 border-b border-zinc-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold text-zinc-800 uppercase tracking-widest">LIVE_COMPILER_SANDBOX</span>
                </div>
                <span>STATUS: READY</span>
              </div>

              <div className="p-4 bg-zinc-950 rounded-xl space-y-3 font-mono text-zinc-400 text-xs min-h-[110px] relative overflow-hidden">
                {simulating ? (
                  <div className="space-y-1">
                    <p className="text-emerald-400">[SYSTEM] Invoking code token synthesis engine...</p>
                    <p className="text-zinc-400">[SYNTH] Resolving 1536 context variables...</p>
                    {simulationStep >= 30 && <p className="text-zinc-400">[WCAG] Reviewing relative luminance contrast scores...</p>}
                    {simulationStep >= 70 && <p className="text-zinc-500">[COMPILE] Serializing Tailwind-ready token properties...</p>}
                    {simulationStep === 100 && <p className="text-emerald-400 font-bold">[SUCCESS] Assembly synced under 420ms.</p>}
                  </div>
                ) : (
                  <p className="text-zinc-500 select-none">
                    // Click Trigger compilation below to compile tokens against target environments and verify parity live.
                  </p>
                )}

                {/* Simulated scanning progress bar */}
                {simulating && (
                  <div className="absolute bottom-0 left-0 h-1 bg-emerald-500 transition-all duration-150" style={{ width: `${simulationStep}%` }} />
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={startSimulation}
                  disabled={simulating}
                  className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 border shadow-xs cursor-pointer ${
                    simulating 
                      ? "bg-zinc-100 border-zinc-200 text-zinc-400" 
                      : "bg-zinc-900 border-zinc-900 hover:bg-zinc-800 text-white"
                  }`}
                >
                  <RotateCw className={`w-3.5 h-3.5 ${simulating ? "animate-spin" : ""}`} />
                  <span>TRIGGER_COMPILATION</span>
                </button>
                <div className="flex-1 flex items-center justify-end">
                  <span className="text-[10px] font-mono text-zinc-450 uppercase tracking-wide">
                    Simulate active synchronization flow
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              <div className="p-6 bg-zinc-50 border border-zinc-200/50 rounded-2xl relative">
                <div className="text-5xl sm:text-6xl font-black text-zinc-950 tracking-tighter">64%</div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mt-2 font-mono">
                  Context-Switching Reduction
                </div>
                <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
                  Eliminating structural friction between dynamic canvas layouts and front-end repo variables.
                </p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200/50 rounded-2xl relative">
                <div className="text-5xl sm:text-6xl font-black text-zinc-950 tracking-tighter">12+</div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mt-2 font-mono">
                  Concurrent Production Systems
                </div>
                <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
                  Active workspaces and decentralized design portals compiling layout tokens live to production squads.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: THE INSIGHT / SUBSTRATE */}
      <section className="py-24 md:py-36 max-w-7xl mx-auto px-6 sm:px-8 border-b border-zinc-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side (Content Panel) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-[0.25em] block select-none">
              02. THE INSIGHT
            </span>
            <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-950 font-sans leading-none">
              AI as an assistant in design systems.
            </h3>
            <p className="text-zinc-650 text-sm sm:text-base leading-relaxed">
              Instead of using AI only for chat, it can assist in validating layouts. It can check spacing rules, contrast compliance, and text alignment in real-time, helping developers build more reliable interfaces.
            </p>
            
            <div className="pt-4 border-t border-zinc-100 flex items-center gap-4 text-xs font-mono">
              <span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 rounded text-zinc-500">
                Self-Correcting Spacing
              </span>
              <span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 rounded text-zinc-500">
                Luminance Checks
              </span>
            </div>
          </div>

          {/* Right Side (Large visual placeholder) */}
          <div className="lg:col-span-7">
            <div className="relative group/substrate overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg p-6 md:p-10 min-h-[340px] flex flex-col justify-between">
              
              {/* Aesthetic Grid overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.05]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #181c20 1px, transparent 1px),
                    linear-gradient(to bottom, #181c20 1px, transparent 1px)
                  `,
                  backgroundSize: "24px 24px"
                }}
              />

              {/* Dynamic canvas element representation using HTML & CSS coordinates */}
              <div className="flex-1 flex flex-col items-center justify-center py-6 relative">
                {/* Visual Circle with coordinate markers */}
                <div className="w-48 h-48 rounded-full border border-dashed border-zinc-350 flex items-center justify-center p-3 relative select-none">
                  {/* Interactive tracking lines */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-px border-l border-dashed border-zinc-200" />
                  <div className="absolute left-0 right-0 top-1/2 h-px border-t border-dashed border-zinc-200" />
                  
                  {/* Outer Pulsing Aura */}
                  <div className="absolute inset-2 border border-zinc-300 rounded-full animate-pulse" />
                  
                  {/* Target Node */}
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border-4 border-white shadow-lg flex items-center justify-center text-white text-[10px] font-mono z-10 font-bold">
                    AI
                  </div>
                  
                  {/* Distance tags on corners */}
                  <span className="absolute top-2 left-6 text-[8px] font-mono text-zinc-400 bg-white px-1">X: 184</span>
                  <span className="absolute bottom-2 right-6 text-[8px] font-mono text-zinc-400 bg-white px-1">Y: 420</span>
                </div>
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400 border-t border-zinc-100 pt-4 mt-4">
                <span>MAT_CANVAS_VIEWPORT</span>
                <span>ROT_VECTOR: 32.14°</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: THE SOLUTION / INFINITE CANVAS */}
      <section className="py-24 md:py-36 max-w-7xl mx-auto px-6 sm:px-8 border-b border-zinc-100">
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-[0.25em] block select-none">
            03. THE SOLUTION
          </span>
          <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-950 font-sans">
            Connecting Layouts, Tokens, and Components
          </h3>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Connecting layouts, tokens, and components under a single standard to simplify UI development.
          </p>
        </div>

        {/* BENTO BOX GRID CONSTRAINTS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto">
          
          {/* Card A: Large Vertical Card (Left Column - Spans 5 columns) */}
          <div className="col-span-1 md:col-span-12 lg:col-span-5 border border-zinc-200/80 bg-white rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-zinc-900 hover:shadow-lg transition-all duration-300">
            <div className="space-y-4">
              <div className="p-3 bg-zinc-100 w-fit rounded-xl text-zinc-900 relative">
                <SlidersHorizontal className="w-6 h-6" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
                Fast UI Prototyping
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Quickly translate layout descriptions into clean React components without manual setup.
              </p>
            </div>

            {/* Visual placeholder matching layout specification */}
            <div className="mt-8 pt-4 bg-zinc-50 border border-zinc-100 rounded-xl p-4 font-mono text-[10px] space-y-1 text-zinc-400">
              <span className="text-zinc-300 uppercase block text-[8px] font-bold tracking-wider mb-2">// INTENT_COORD_FLOW</span>
              <div className="flex justify-between border-b border-zinc-100 pb-1">
                <span>INPUT_PHRASE:</span>
                <span className="text-zinc-700">"Split card layout center balanced"</span>
              </div>
              <div className="flex justify-between border-b border-zinc-100 pb-1 pt-1">
                <span>PARSED_AST:</span>
                <span className="text-zinc-700">LAYOUT_GRID_MATCH</span>
              </div>
              <div className="flex justify-between pt-1">
                <span>STATUS:</span>
                <span className="text-emerald-500 font-bold">SYNCHRONIZED</span>
              </div>
            </div>
          </div>

          {/* Cards Panel (Right Column - Spans 7 columns) */}
          <div className="col-span-1 md:col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            
            {/* Card B: Wide Card (Across both columns at the top) */}
            <div className="col-span-1 sm:col-span-2 border border-zinc-900 bg-zinc-950 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 shadow-xl">
              <div className="space-y-4">
                <div className="p-3 bg-zinc-900 w-fit rounded-xl text-emerald-450 border border-zinc-800">
                  <Activity className="w-6 h-6 text-emerald-400" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Responsive Layouts
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                  Calculate typography scaling and spacing dynamically to ensure screens look correct across different viewports.
                </p>
              </div>

              {/* Dynamic typography scale list */}
              <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono select-none">
                <span className="text-zinc-500">SCALE: 1.618 GOLDEN</span>
                <div className="flex gap-4">
                  <span className="text-xs text-zinc-400">clamp(1.5rem, 5vw, 3rem)</span>
                  <span className="text-xs font-bold text-emerald-400">ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Card C: Square Small Card 1 */}
            <div className="border border-zinc-200 bg-white rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-900 hover:shadow-md transition-all duration-350">
              <div className="space-y-4">
                <div className="p-3.5 bg-zinc-50 w-fit rounded-lg border border-zinc-100">
                  <Maximize2 className="w-5 h-5 text-zinc-700" />
                </div>
                <h5 className="font-mono font-bold text-xs uppercase tracking-wider text-zinc-400">
                  Layout Integrity
                </h5>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Ensures columns and grids do not collapse on smaller viewports.
                </p>
              </div>
            </div>

            {/* Card D: Square Small Card 2 */}
            <div className="border border-zinc-200 bg-white rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-900 hover:shadow-md transition-all duration-350">
              <div className="space-y-4">
                <div className="p-3.5 bg-zinc-50 w-fit rounded-lg border border-zinc-100">
                  <Sparkles className="w-5 h-5 text-zinc-700" />
                </div>
                <h5 className="font-mono font-bold text-xs uppercase tracking-wider text-zinc-400">
                  Token Sync
                </h5>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  Keeps design tokens synchronized with frontend stylesheets.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: THE IMPACT / QUANTIFYING CREATIVITY */}
      <section className="py-24 md:py-36 bg-zinc-950 text-white relative">
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px"
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20 relative z-10">
          
          {/* Header Layout */}
          <div className="space-y-4 text-center max-w-xl mx-auto">
            <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-[0.25em] block select-none">
              04. THE IMPACT
            </span>
            <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-white font-sans">
              Project Outcomes
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Performance metrics across projects.
            </p>
          </div>

          {/* Large Stat Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-zinc-800 max-w-5xl mx-auto">
            
            {/* Stat Column 1 */}
            <div className="md:px-8 pt-8 md:pt-0 space-y-3 first:pt-0">
              <span className="text-6xl sm:text-7xl font-sans font-black tracking-tighter text-white block select-none">
                40%
              </span>
              <h5 className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-bold">
                DESIGN TIME SAVED
              </h5>
              <p className="text-zinc-500 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
                Reduced time spent setting up styles and coding components.
              </p>
            </div>

            {/* Stat Column 2 */}
            <div className="md:px-8 pt-8 md:pt-0 space-y-3">
              <span className="text-6xl sm:text-7xl font-sans font-black tracking-tighter text-white block select-none">
                3.2x
              </span>
              <h5 className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-bold">
                ITERATION SPEED
              </h5>
              <p className="text-zinc-500 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
                Faster style updates directly in the codebase without manual edits.
              </p>
            </div>

            {/* Stat Column 3 */}
            <div className="md:px-8 pt-8 md:pt-0 space-y-3">
              <span className="text-6xl sm:text-7xl font-sans font-black tracking-tighter text-white block select-none">
                98%
              </span>
              <h5 className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-bold">
                TEAM ADOPTION
              </h5>
              <p className="text-zinc-500 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
                Adoption rate by engineering and design teams using shared tokens.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
