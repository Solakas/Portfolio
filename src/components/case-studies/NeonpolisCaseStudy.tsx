import React, { useState } from "react";
import CaseStudyLayout from "./CaseStudyLayout";
import AnimatedCounter from "../AnimatedCounter";
import ScrollReveal from "../ScrollReveal";
import { 
  Sparkles, Gamepad2, Cpu, Layers, Dices, RefreshCw, CheckCircle2, XCircle, Shield
} from "lucide-react";

interface NeonpolisCaseStudyProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function NeonpolisCaseStudy({ onClose, onPrev, onNext }: NeonpolisCaseStudyProps) {
  const [iframeKey, setIframeKey] = useState(0);

  const navSections = [
    { id: "summary", label: "01. Metrics" },
    { id: "problem", label: "02. Context" },
    { id: "comparison", label: "03. Competitive" },
    { id: "rationale", label: "04. Rationale" },
    { id: "prototype", label: "05. Playable MVP" },
    { id: "architecture", label: "06. Architecture" },
    { id: "impact", label: "07. Impact" }
  ];

  const meta = [
    { label: "Product", value: "Neonpolis Digital Board Game" },
    { label: "Role", value: "Lead Designer & Prototyper" },
    { label: "Influence", value: "King of Tokyo Tactile Mechanics" },
    { label: "Timeline", value: "3 Days Rapid Sprint" }
  ];

  const metrics = [
    {
      value: "3 Days",
      label: "Rapid Prototyping Sprint",
      desc: "Accelerated development from paper rules translation to a live functional React/Vite deployment on Vercel."
    },
    {
      value: "48 Cards",
      label: "Interaction Logic Rules",
      desc: "Complete card deck designed with explicit timing resolution order filters (Shields → Passives → Actives)."
    },
    {
      value: "3-Roll",
      label: "Dice Loop Simulator",
      desc: "Satisfying core roll loop with selective keeping buffers and damage triggers configured visually."
    }
  ];

  const competitiveData = [
    {
      platform: "Physical Tabletop",
      model: "Manual Dice & Tokens",
      pros: "Tactile social feel.",
      cons: "High setup time, manual health math tracking, easy to miscalculate card combos.",
      tag: "Manual Math"
    },
    {
      platform: "Tabletop Simulator",
      model: "Generic 3D Physics",
      pros: "Full 3D movement.",
      cons: "Cluttered UI, complex 3D camera controls, zero automated rule enforcement.",
      tag: "Cluttered"
    },
    {
      platform: "Neonpolis Web MVP",
      model: "Dedicated State-Gated Web UI",
      pros: "Instant loading, state-machine enforced rulebook, 3-roll dice buffer, zero setup friction.",
      cons: "Simplified 2D board view.",
      tag: "Optimized",
      isHighlight: true
    }
  ];

  return (
    <CaseStudyLayout
      title="Translating Physical Board Game Mechanics to a Digital Web Interface"
      subtitle="How we co-designed Neonpolis in a 3-day rapid sprint with ChatGPT, turning tactile King of Tokyo dice physics and card decks into a state-gated web MVP."
      tag="Game UX & AI Co-Design Case Study"
      meta={meta}
      navSections={navSections}
      liveUrl="https://neonpolis-4u4d.vercel.app/"
      liveUrlLabel="Play Live Game"
      githubUrl="https://github.com/Solakas/neonpolis"
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
    >
      {/* 01. EXECUTIVE SUMMARY & CORE METRICS */}
      <ScrollReveal>
        <section id="summary" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-orange-700 bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              01
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Executive Summary & Core Metrics
            </h2>
          </div>

          <div className="prose prose-zinc max-w-none text-zinc-650 text-base leading-relaxed space-y-4">
            <p>
              Digitizing physical board games often leads to two extremes: either hyper-complex 3D simulators that feel clumsy, or sterile digital text menus that strip away tactile satisfaction.
            </p>
            <p>
              <strong>Neonpolis</strong> translates physical dice rolling and deck shop economics into a responsive web MVP. Built in a 3-day sprint using ChatGPT as a game balance co-designer, it achieved the following metrics:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {metrics.map((m, idx) => (
              <div key={idx} className="bg-white border border-zinc-200/80 rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:border-zinc-400 transition-all">
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight font-sans">
                    <AnimatedCounter value={m.value} />
                  </span>
                  <h3 className="font-bold text-zinc-800 text-sm mt-1 uppercase tracking-wider font-mono">
                    {m.label}
                  </h3>
                </div>
                <p className="text-zinc-500 text-xs sm:text-sm mt-4 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* 02. PROBLEM STATEMENT */}
      <ScrollReveal>
        <section id="problem" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-orange-700 bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              02
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              The Context & Tactical Inspiration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-6 text-zinc-650 text-base leading-relaxed">
              <h3 className="text-lg font-bold text-zinc-900">King of Tokyo Digital Challenge</h3>
              <p>
                King of Tokyo relies on tactile physical satisfaction: holding custom 6-sided dice, choosing which faces to keep across 3 rolls, and spending energy points on card shop passives.
              </p>
              <p>
                Our goal was to preserve this visceral decision loop inside a lightweight browser interface without requiring heavy 3D rendering engines.
              </p>
            </div>

            <div className="md:col-span-5 bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest">
                UX LAYOUT TRIAD
              </h3>
              <ul className="space-y-2 text-xs text-zinc-650">
                <li><strong>Left Sidebar:</strong> Shop economics & active card deck</li>
                <li><strong>Center Arena:</strong> Active monster combat state & dice roll buffer</li>
                <li><strong>Right Column:</strong> Health (HP) & Victory Points (VP) track</li>
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 03. COMPETITIVE MATRIX */}
      <ScrollReveal>
        <section id="comparison" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-orange-700 bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              03
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Competitive Analysis Matrix
            </h2>
          </div>

          <div className="overflow-x-auto border border-zinc-200 rounded-3xl bg-white shadow-xs">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-zinc-50/80 border-b border-zinc-200 font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
                  <th className="p-4 pl-6">Platform</th>
                  <th className="p-4">Engine Model</th>
                  <th className="p-4">Pros</th>
                  <th className="p-4 pr-6">Cons</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/70 text-sm text-zinc-700">
                {competitiveData.map((row, idx) => (
                  <tr key={idx} className={row.isHighlight ? "bg-orange-50/40 font-medium" : "hover:bg-zinc-50/50"}>
                    <td className="p-4 pl-6 font-bold text-zinc-900">
                      {row.platform}
                    </td>
                    <td className="p-4 font-mono text-xs text-zinc-600">
                      {row.model}
                    </td>
                    <td className="p-4 text-zinc-600">
                      {row.pros}
                    </td>
                    <td className="p-4 pr-6 text-zinc-600">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase mr-2 ${row.isHighlight ? "bg-orange-100 text-orange-800" : "bg-red-50 text-red-700"}`}>
                        {row.tag}
                      </span>
                      {row.cons}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </ScrollReveal>

      {/* 04. DESIGN RATIONALE */}
      <ScrollReveal>
        <section id="rationale" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-orange-700 bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              04
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Design Rationale & State Engine Choice
            </h2>
          </div>

          <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-mono text-xs font-bold text-orange-700 bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider border border-orange-100">
                Decision #1: Pure Functional Reducer vs Imperative Object Mutators
              </span>
              <span className="text-xs font-mono text-zinc-400 font-bold">Game Engine Design</span>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed">
              We chose a pure functional Redux-style state reducer where every dice roll, card buy, and health deduction returns an immutable state copy. This eliminates illegal game states and guarantees 100% deterministic turn replays.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* 05. LIVE GAME PROTOTYPE */}
      <ScrollReveal>
        <section id="prototype" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-orange-700 bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              05
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Playable Web MVP Prototype
            </h2>
          </div>

          <p className="text-zinc-650 text-base leading-relaxed max-w-4xl">
            Test-drive the live Neonpolis game engine below. Play a full turn loop with dice rolls, card purchases, and monster health tracking hosted natively on Vercel.
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-orange-700 uppercase">
                Interactive Game Sandbox
              </span>
              <button
                onClick={() => setIframeKey(k => k + 1)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-xs font-bold text-zinc-700 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Game State
              </button>
            </div>

            <div className="border border-zinc-200 rounded-3xl overflow-hidden bg-zinc-950 shadow-xl h-[650px] relative">
              <iframe
                key={iframeKey}
                src="https://neonpolis-4u4d.vercel.app/"
                title="Neonpolis Live Game"
                className="w-full h-full border-none bg-zinc-950"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 06. STATE ENGINE ARCHITECTURE */}
      <ScrollReveal>
        <section id="architecture" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-orange-700 bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              06
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              State Engine & Performance Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-zinc-200 rounded-3xl p-6 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-700">
                <Dices className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base">Dice Roll Resolver</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Manages 3-stage dice rolling buffers, lock/keep toggles, and automatic resolution of Heart, Energy, and Claw damage faces.
              </p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-3xl p-6 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-700">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base">Shop & Passive Card Engine</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                48 unique card objects with automated energy cost validation, deck reshuffling, and active passive bonus calculations.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 07. IMPACT & LESSONS */}
      <ScrollReveal>
        <section id="impact" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-orange-700 bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              07
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Impact & Rapid Sprint Lessons
            </h2>
          </div>

          <div className="bg-white border border-zinc-200/80 rounded-3xl p-8 space-y-6 shadow-xs">
            <h3 className="text-xl font-bold tracking-tight text-zinc-900">Zero GPU Lag & Infinite Replayability</h3>
            <p className="text-xs text-zinc-650 leading-relaxed">
              By foregoing heavy WebGL/Three.js 3D physics in favor of CSS transform springs and pure React reducers, Neonpolis runs at a consistent 60fps on mobile browsers and desktop monitors alike without draining battery life.
            </p>
          </div>
        </section>
      </ScrollReveal>
    </CaseStudyLayout>
  );
}
