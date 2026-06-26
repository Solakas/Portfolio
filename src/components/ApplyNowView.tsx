import React, { useState } from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import AnimatedStatCard from "./AnimatedStatCard";
import { motion } from "motion/react";
import { 
  BookOpen, Zap, Layers, Activity, Sliders, Cpu, 
  ChevronRight, CheckCircle, ShieldAlert, Sparkles, Building2, ArrowUpRight
} from "lucide-react";

interface ApplyNowViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function ApplyNowView({ onClose, onPrev, onNext }: ApplyNowViewProps) {
  const [activeMockupTab, setActiveMockupTab] = useState("list");

  const specs = [
    { label: "UX Methodology", value: "Analyse → Define → Ideate → Test → Measure" },
    { label: "Research Basis", value: "2 Qualitative Interview Rounds + Empathy Maps" },
    { label: "Design System", value: "Sol Design System (36 components, 2282 variants)" },
    { label: "Coded Prototype", value: "Vite + React, TypeScript, Framer Motion" },
    { label: "Validation Metric", value: "Objective Firebase Analytics Tracking" }
  ];

  const bentoCards = [
    {
      title: "Inline Evaluation Workspace",
      description: "Displays parsed resumes natively alongside structured scorecard evaluations and team discussions, entirely eliminating PDF download fatigue.",
      icon: BookOpen,
      badge: "UNIFIED PANELS",
      isAccent: true
    },
    {
      title: "Sticky Bulk Action Engine",
      description: "Enables recruiters to select, edit, and progress multiple applicants simultaneously via a slide-up floating console.",
      icon: Zap,
      badge: "SPEED SCREENING"
    },
    {
      title: "Sol Design System Pipeline",
      description: "Built to be 100% code-generation ready, ensuring all custom tokens and variant states map perfectly to React components.",
      icon: Layers,
      badge: "SEMANTIC PARITY"
    },
    {
      title: "Telemetry-Infused Analytics",
      description: "Tracks active event parameters and user completion funnels to continuously optimize default table column distributions.",
      icon: Activity,
      badge: "FIREBASE LOGIC"
    }
  ];

  const stats = [
    { value: "R1+R2", text: "Two-stage qualitative user research mapping extreme user personas to actionable UI requirements." },
    { value: "48+", text: "Coded interactive prototype candidate cards integrated onto a live Vercel deployment." }
  ];

  const impactStats = [
    { value: "-4.5s", text: "Average Time-to-Disposition (TToD) drop across high-volume mock testing environments." },
    { value: "85%", text: "Recruiter selection of candidate bulk actions over single-row status configurations." },
    { value: "100%", text: "Parity between Figma token variables and TypeScript React implementation states." }
  ];

  return (
    <ProjectDetailLayout
      title="Apply Now"
      category="Recruiting SaaS"
      badge="LIVE PROJECT"
      subtitle="An applicant screening tool designed as a single-page split-view workspace to reduce click fatigue."
      githubUrl="https://github.com/Solakas/Apply-Now-Platform"
      liveUrl="https://apply-now-platform-oysw.vercel.app/"
      figmaUrl="https://www.figma.com/design/Y2T29E74yMo2533yMVmJIg/Apply-Now-Platform?node-id=1-835"
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

        {/* SECTION 2: UX OPTIMIZATION STUDY & BENCHMARKS */}
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
              <div className="inline-block font-mono text-[10px] sm:text-xs font-bold text-indigo-650 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full uppercase tracking-wider">
                UX Strategy
              </div>
              <Sparkles className="w-5 h-5 text-indigo-500 animate-pulse" />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-900 leading-snug max-w-5xl">
                Formulated through a structured <span className="text-indigo-600 underline decoration-indigo-200 decoration-2 underline-offset-4">design thinking process</span> to solve complex workspace bottlenecks.
              </h2>
              
              <div className="py-2 border-l-2 border-indigo-500/30 pl-4 space-y-1">
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">
                  Core Methodology
                </span>
                <p className="text-lg sm:text-xl font-serif italic text-indigo-600 font-semibold tracking-wide">
                  “Analyse → Define → Ideate → Test → Measure”
                </p>
              </div>

              <p className="text-zinc-650 text-sm sm:text-base leading-relaxed max-w-4xl">
                Optimizes candidate evaluation with dense statistical dashboards, quick bulk progressions, and native side-by-side scorecard workspaces.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: CORE BENCHMARKING GRID */}
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
                    <Icon className="w-5 h-5 stroke-[1.5] text-indigo-500" />
                  </div>
                  <div className="space-y-4">
                    <div className="inline-block font-mono text-xs text-zinc-500 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded-md tracking-wider uppercase">
                      {card.badge}
                    </div>
                    <h4 className="text-xl font-extrabold tracking-tight text-zinc-950">
                      {card.title}
                    </h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SECTION 4: THE PROCESS / CASE STUDY */}
        <div className="mt-16 pt-16 border-t border-zinc-200/40 space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-12 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-zinc-950 leading-tight">
                Designing for Recruiters and Managers.
              </h2>
            </div>
            
            <div className="lg:col-span-6 space-y-6">
              <p className="text-zinc-650 text-sm sm:text-base leading-relaxed">
                Recruiters need to filter applications quickly, while hiring managers require detailed scorecards and candidate info.
              </p>
              <p className="text-zinc-650 text-sm sm:text-base leading-relaxed">
                To understand their needs, we interviewed recruiters and managers to map layout pain points. Based on their feedback, we focused on two main requirements: reducing the number of clicks needed to view information and enabling a side-by-side evaluation grid.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-6 bg-zinc-50 border border-zinc-200 p-8 rounded-3xl">
              <h3 className="font-mono text-xs font-bold uppercase text-zinc-400 tracking-wider">
                EXTREME USER PERSONAS & DIRECT QUOTES
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 border-l-2 border-indigo-505 bg-white shadow-3xs space-y-2 rounded-r-xl">
                  <p className="font-mono text-xs font-bold text-zinc-800">Sarah — High Volume Retail Recruiter</p>
                  <p className="text-zinc-500 italic text-xs leading-relaxed">
                    "Speed is everything; I need to process 100 applications in an hour. If I have to click three times just to see a candidate's phone number, the UI has failed me completely."
                  </p>
                </div>
                
                <div className="p-4 border-l-2 border-emerald-505 bg-white shadow-3xs space-y-2 rounded-r-xl">
                  <p className="font-mono text-xs font-bold text-zinc-805">Marcus — Principal Engineering Manager</p>
                  <p className="text-zinc-500 italic text-xs leading-relaxed">
                    "Raw resumes are only half the story. I spend precious time jumping to external portfolios. I need a unified, split-screen evaluation pane where I can compare GitHub repositories directly alongside my scorecard parameters."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* INTERACTIVE WORKSPACE VIEW DEMORAMA */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-zinc-950 tracking-tight">The Sol-Designed Candidate Workspace.</h3>
              <p className="text-zinc-550 text-xs sm:text-sm">Explore interactive high-fidelity screen outputs built directly using the code-aligned Sol Design System.</p>
            </div>

            <div className="flex flex-wrap gap-2.5 p-1.5 bg-zinc-150/50 rounded-2xl max-w-2xl border border-zinc-200/50">
              {[
                { id: "list", label: "Candidates List view", desc: "A clean high-density grid tracking all applications" },
                { id: "bulk", label: "Bulk Action Console", desc: "Slider overlay to progression batches instantly" },
                { id: "info", label: "Candidate Info view", desc: "Split pane linking native resumes side-by-side" },
                { id: "notes", label: "Team Notes & Threads", desc: "Collaborative comment engine with active tagging" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveMockupTab(tab.id)}
                  className={`flex-1 text-xs font-bold px-4 py-3 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    activeMockupTab === tab.id 
                      ? "bg-zinc-900 text-white shadow-xs" 
                      : "text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
                  }`}
                >
                  {tab.label.split(" ")[0]} View
                </button>
              ))}
            </div>

            <div className="border border-zinc-200 bg-zinc-100 rounded-3xl p-4 sm:p-6 overflow-hidden flex flex-col items-center justify-center min-h-[320px] sm:min-h-[460px] relative shadow-inner">
              {activeMockupTab === "list" && (
                <img 
                  src="/assets/Candidates List.png"
                  alt="Candidates List view showing high-density grid layout and real-time filters"
                  referrerPolicy="no-referrer"
                  className="rounded-xl shadow-md border border-zinc-200 max-h-full max-w-full object-contain"
                />
              )}
              {activeMockupTab === "bulk" && (
                <img 
                  src="/assets/Candidates List - Bulk Actions.png"
                  alt="Candidates List with progress action console overlay active"
                  referrerPolicy="no-referrer"
                  className="rounded-xl shadow-md border border-zinc-200 max-h-full max-w-full object-contain"
                />
              )}
              {activeMockupTab === "info" && (
                <img 
                  src="/assets/Candidate info page.png"
                  alt="Candidate details containing native inline PDF viewer"
                  referrerPolicy="no-referrer"
                  className="rounded-xl shadow-md border border-zinc-200 max-h-full max-w-full object-contain"
                />
              )}
              {activeMockupTab === "notes" && (
                <img 
                  src="/assets/Candidate info page - Team Notes.png"
                  alt="Team discussion chat module in active evaluation side pane"
                  referrerPolicy="no-referrer"
                  className="rounded-xl shadow-md border border-zinc-200 max-h-full max-w-full object-contain"
                />
              )}
            </div>

            <div className="bg-white border border-zinc-200 p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-zinc-900 text-sm tracking-tight font-sans">
                  {activeMockupTab === "list" && "Candidates Grid Overview"}
                  {activeMockupTab === "bulk" && "Bulk Actions Drawer Overlay"}
                  {activeMockupTab === "info" && "Split-Screen Resume Workspace"}
                  {activeMockupTab === "notes" && "Team Discussion Comment Thread"}
                </h4>
                <p className="text-zinc-500 text-xs mt-1">
                  {activeMockupTab === "list" && "Displays real-time pipeline categories, scores, experience filters, and custom columns in a dense table."}
                  {activeMockupTab === "bulk" && "Action floating pane slides up when multiple candidate rows are selected, accelerating bulk candidate progressions."}
                  {activeMockupTab === "info" && "Displays parsed resumes natively side-by-side with structured scorecards, making candidate scoring completely seamless."}
                  {activeMockupTab === "notes" && "Team evaluation remarks section. Encourages collaborative hassan sync threads with precise user mentions."}
                </p>
              </div>
            </div>
          </div>

          {/* IMPACT & METRICS FOOTER INDEX */}
          <div className="pt-12 border-t border-zinc-200/40">
            <h3 className="font-mono text-xs font-bold text-zinc-400 tracking-wider uppercase mb-8 select-none">
              Vercel Specs & Benchmarks
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

      </div>
    </ProjectDetailLayout>
  );
}
