import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import AnimatedStatCard from "./AnimatedStatCard";
import { Sliders, GitFork, GitBranch, Code, Globe, Cpu } from "lucide-react";

interface McpSyncViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function McpSyncView({ onClose, onPrev, onNext }: McpSyncViewProps) {
  const specs = [
    { label: "Sync Protocol", value: "Model Context Protocol (MCP)" },
    { label: "Active Connections", value: "Claude Code / Cursor / local editor" },
    { label: "Webhooks Handler", value: "Automated Figma File listeners" },
    { label: "Data Format", value: "YAML Schema / JSON" }
  ];

  const bentoCards = [
    {
      title: "MCP Context Server",
      description: "Acts as a type-safe interface endpoint, supplying real-time design tokens straight to agent code models.",
      icon: GitFork,
      badge: "PROTOCOL SERVER",
      isAccent: true
    },
    {
      title: "Figma File Webhook Sync",
      description: "Listens for variables and spacing changes in Figma files to broadcast updates instantly.",
      icon: GitBranch,
      badge: "REALTIME BROADCAST"
    },
    {
      title: "Token Resolution Engine",
      description: "Converts complex design tokens and margins into highly structured TypeScript layout guidelines.",
      icon: Code,
      badge: "RULES PARSER"
    },
    {
      title: "Cross-platform Presets",
      description: "Ensures AI coding outputs respect spacing, colors, and shadows without manual prompting.",
      icon: Globe,
      badge: "AGENT ACCORDANCE"
    }
  ];

  const impactStats = [
    { value: "3.5x", text: "Increase in model speed when styling UI blocks due to highly structured design data input." },
    { value: "0", text: "Manual formatting edits needed by developers to align components to rules." },
    { value: "92%", text: "System satisfaction reported by teams globally." }
  ];

  return (
    <ProjectDetailLayout
      title="MCP Figma Sync"
      category="AI Engineering"
      badge="LIVE PROJECT"
      subtitle="Engineering a Model Context Protocol server that plugs Figma token payloads straight into Claude Code and Cursor contexts, syncing designers and AI developers instantly."
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
              <div className="inline-block font-mono text-[10px] sm:text-xs font-bold text-indigo-650 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full uppercase tracking-wider">
                MCP Protocol Core
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-900 leading-snug">
                Bridging layout files and agent builders natively.
              </h2>
              <p className="text-zinc-650 text-sm sm:text-base leading-relaxed">
                Design rules live in silos, and code is in repositories. By engineering a high-performance MCP Server, we bind the active design constraints in Figma files straight into developer tools, feeding accurate context directly to AI code editors in real-time.
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
            Sync Performance & Pipeline Milestones
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
