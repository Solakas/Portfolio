import React, { useState } from "react";
import CaseStudyLayout from "./CaseStudyLayout";
import AnimatedStatCard from "../AnimatedStatCard";
import AnimatedCounter from "../AnimatedCounter";
import ScrollReveal from "../ScrollReveal";
import { 
  Sparkles, SearchCode, Cpu, Layers, AlertTriangle, CheckCircle2, 
  XCircle, Eye, Sliders, RefreshCw, Copy, Upload, ArrowUpRight,
  Laptop, Tablet, Smartphone
} from "lucide-react";

interface FuxitCaseStudyProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function FuxitCaseStudy({ onClose, onPrev, onNext }: FuxitCaseStudyProps) {
  const [viewportSize, setViewportSize] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [iframeKey, setIframeKey] = useState<number>(0);

  const getIframeWidth = () => {
    switch (viewportSize) {
      case "tablet": return "max-w-[768px]";
      case "mobile": return "max-w-[375px]";
      default: return "w-full";
    }
  };

  const navSections = [
    { id: "summary", label: "01. Metrics" },
    { id: "problem", label: "02. Context" },
    { id: "comparison", label: "03. Competitive" },
    { id: "rationale", label: "04. Rationale" },
    { id: "prototype", label: "05. Audit Engine" },
    { id: "architecture", label: "06. Gemini Architecture" },
    { id: "impact", label: "07. Impact" }
  ];

  const meta = [
    { label: "Product", value: "fUXit AI Design Consultant" },
    { label: "Role", value: "Lead UX Designer & AI Engineer" },
    { label: "AI Engine", value: "Gemini 2.5 Flash Multimodal" },
    { label: "Framework", value: "10 Nielsen Usability Heuristics" }
  ];

  const metrics = [
    {
      value: "-85%",
      label: "Audit Time Saved",
      desc: "Reduction in manual review turnaround time by replacing manual heuristic spreadsheets with automated Gemini multimodal vision scans."
    },
    {
      value: "10/10",
      label: "Nielsen Heuristics",
      desc: "Full coverage of Jacob Nielsen's 10 usability principles encoded into structured AI extraction prompts."
    },
    {
      value: "100%",
      label: "Structured JSON Output",
      desc: "Zero hallucinated prose; Gemini vision responses strictly validated against severe pinpoint coordinates and actionable fix checklists."
    }
  ];

  const competitiveData = [
    {
      platform: "Manual UX Consultant",
      model: "Human Heuristic Spreadsheet",
      pros: "Deep domain nuance.",
      cons: "Takes 2-5 business days, costs $1,500+ per audit page.",
      tag: "Expensive"
    },
    {
      platform: "Generic ChatGPT Vision",
      model: "Open-ended Text Chat",
      pros: "Easy photo upload.",
      cons: "Generates generic paragraph prose without visual coordinate pins or severe actionable UI checklists.",
      tag: "Unstructured"
    },
    {
      platform: "Figma Linter Plugins",
      model: "Static Vector Checker",
      pros: "Checks layer names and missing styles.",
      cons: "Completely blind to visual contrast, human interaction stress, or overall composition layout.",
      tag: "Blind to UX"
    },
    {
      platform: "fUXit (Gemini 2.5)",
      model: "Structured Multimodal Vision Engine",
      pros: "Instant 5-second scan, exact X/Y pinpoint coordinates, Nielsen heuristic scoring, markdown action checklist.",
      cons: "Requires clear high-resolution UI screenshot.",
      tag: "Automated",
      isHighlight: true
    }
  ];

  return (
    <CaseStudyLayout
      title="Automating UI/UX Heuristic Audits via Gemini Multimodal Vision"
      subtitle="How we engineered an AI-powered design consultant that scans screenshots, calculates Nielsen usability scores, and pins actionable UI bug reports in 5 seconds."
      tag="AI Tooling & UX Case Study"
      meta={meta}
      navSections={navSections}
      liveUrl="https://f-u-xit.vercel.app/"
      liveUrlLabel="Live Web Tool"
      githubUrl="https://github.com/Solakas/fUXit"
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
    >
      {/* 01. EXECUTIVE SUMMARY & CORE METRICS */}
      <ScrollReveal>
        <section id="summary" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              01
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Executive Summary & Core Metrics
            </h2>
          </div>

          <div className="prose prose-zinc max-w-none text-zinc-650 text-base leading-relaxed space-y-4">
            <p>
              Design reviews and usability audits are traditionally bottlenecked by manual evaluation. Product designers and QA engineers spend hours taking screenshots, checking contrast ratios manually, and filing ticket backlogs.
            </p>
            <p>
              <strong>fUXit</strong> automates this workflow using Gemini 2.5 Flash's multimodal vision capabilities. By forcing Gemini to output strict coordinate JSON schemas matching <strong>Jacob Nielsen's 10 Usability Heuristics</strong>, we achieved the following results:
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

      {/* 02. BUSINESS CONTEXT & PROBLEM STATEMENT */}
      <ScrollReveal>
        <section id="problem" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              02
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              The Business Context & Problem Statement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-6 text-zinc-650 text-base leading-relaxed">
              <h3 className="text-lg font-bold text-zinc-900">The Heuristic Audit Bottleneck</h3>
              <p>
                In fast-paced sprint cycles, design teams frequently ship user interfaces without undergoing formal accessibility or interaction audits. Manual audits are skipped because:
              </p>
              <ul className="list-disc list-inside space-y-2 font-medium text-zinc-800 pl-2">
                <li>They require hours of meticulous element-by-element inspection.</li>
                <li>Senior designers' time is too expensive for routine contrast & padding checks.</li>
                <li>Feedback is often delivered as vague subjective comments rather than structured actionable tickets.</li>
              </ul>
            </div>

            <div className="md:col-span-5 bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest">
                SOLUTION ARCHITECTURE
              </h3>
              <div className="space-y-3 text-xs text-zinc-650">
                <p className="leading-relaxed">
                  <strong>fUXit</strong> bridges this gap by acting as an instant 24/7 AI Design Consultant. Simply drop a screenshot, and the Gemini 2.5 engine highlights visual bugs directly on the image with pinpoints.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 03. COMPETITIVE ANALYSIS MATRIX */}
      <ScrollReveal>
        <section id="comparison" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              03
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Competitive Analysis & Audit Methods
            </h2>
          </div>

          <div className="overflow-x-auto border border-zinc-200 rounded-3xl bg-white shadow-xs">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-zinc-50/80 border-b border-zinc-200 font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
                  <th className="p-4 pl-6">Audit Method</th>
                  <th className="p-4">Output Structure</th>
                  <th className="p-4">Pros</th>
                  <th className="p-4 pr-6">Cons</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/70 text-sm text-zinc-700">
                {competitiveData.map((row, idx) => (
                  <tr key={idx} className={row.isHighlight ? "bg-purple-50/40 font-medium" : "hover:bg-zinc-50/50"}>
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
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase mr-2 ${row.isHighlight ? "bg-purple-100 text-purple-800" : "bg-red-50 text-red-700"}`}>
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

      {/* 04. DESIGN RATIONALE & PROMPT ARCHITECTURE */}
      <ScrollReveal>
        <section id="rationale" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              04
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Design Rationale & Prompt Architecture
            </h2>
          </div>

          <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-wider border border-purple-100">
                Decision #1: Strict JSON Schema Enforcement vs Unstructured Text
              </span>
              <span className="text-xs font-mono text-zinc-400 font-bold">AI System Prompt Choice</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-zinc-900 text-base">Options Considered</h4>
                <ul className="space-y-2 text-xs text-zinc-600">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Option A (Free Prose Chat):</strong> Generates long paragraphs. Hard to parse into interactive UI pinpoints.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Option B (Strict JSON Schema) [SELECTED]:</strong> Forces Gemini 2.5 Flash to output precise X/Y percentage coordinates, Nielsen scores (1-5), and actionable markdown recommendations.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3 bg-zinc-50 border border-zinc-200/80 p-4 rounded-2xl">
                <h4 className="font-bold text-zinc-900 text-xs uppercase font-mono tracking-wider text-zinc-500">
                  Reasoning & Outcome
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  <strong>Reasoning:</strong> By constraining LLM temperature to 0.2 and providing structured TypeScript interfaces in the system prompt, we eliminate hallucinated text and render interactive pinpoints on top of the uploaded screenshot dynamically.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 05. INTERACTIVE AUDIT ENGINE PROTOTYPE & LIVE WORKSPACE */}
      <ScrollReveal>
        <section id="prototype" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              05
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Interactive Screenshot Audit Engine
            </h2>
          </div>

          <p className="text-zinc-650 text-base leading-relaxed max-w-4xl">
            Test-drive the AI-powered fUXit heuristic audit engine below. Experience how Gemini 2.5 multimodal vision scans UI screenshots in 5 seconds to pinpoint accessibility violations, touch target collisions, and typography flaws with severity ratings and actionable fix checklists.
          </p>

          {/* LIVE DEPLOYED APP IFRAME WORKSPACE */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold tracking-widest text-purple-700 uppercase block">
                  LIVE INTERACTIVE WORKSPACE
                </span>
                <h3 className="text-xl font-bold text-zinc-900 font-sans">
                  Live App Prototype
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm">
                  Interact with the fully deployed fUXit web tool, hosted natively on Vercel.
                </p>
              </div>

              {/* Viewport & Refresh controls */}
              <div className="flex items-center gap-2 bg-zinc-50 p-1.5 rounded-xl border border-zinc-200">
                <button
                  onClick={() => setViewportSize("desktop")}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                    viewportSize === "desktop" ? "bg-white text-purple-700 shadow-xs border border-zinc-200" : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  <Laptop className="w-3.5 h-3.5" />
                  Desktop
                </button>
                <button
                  onClick={() => setViewportSize("tablet")}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                    viewportSize === "tablet" ? "bg-white text-purple-700 shadow-xs border border-zinc-200" : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  <Tablet className="w-3.5 h-3.5" />
                  Tablet
                </button>
                <button
                  onClick={() => setViewportSize("mobile")}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                    viewportSize === "mobile" ? "bg-white text-purple-700 shadow-xs border border-zinc-200" : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  Mobile
                </button>

                <div className="w-px h-5 bg-zinc-200 mx-1" />

                <button
                  onClick={() => setIframeKey(k => k + 1)}
                  className="p-1.5 text-zinc-500 hover:text-purple-700 rounded-lg transition-colors cursor-pointer"
                  title="Reload fUXit application"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="border border-zinc-200 rounded-3xl overflow-hidden bg-zinc-950 shadow-xl min-h-[550px] relative transition-all duration-300 flex justify-center items-center">
              <div className={`w-full h-[600px] transition-all duration-300 ${getIframeWidth()}`}>
                <iframe
                  key={iframeKey}
                  src="https://f-u-xit.vercel.app/"
                  title="fUXit Live Web Application"
                  className="w-full h-full border-none bg-[#09090B]"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 06. GEMINI 2.5 MULTIMODAL DX ARCHITECTURE */}
      <ScrollReveal>
        <section id="architecture" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              06
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Gemini 2.5 Multimodal Vision Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-zinc-200 rounded-3xl p-6 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base">Multimodal Encoding</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Screenshots are converted to base64 images client-side and transmitted directly to Gemini 2.5 Flash with standard system instructions detailing Nielsen's 10 heuristics.
              </p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-3xl p-6 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base">Markdown Ticket Export</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Generated audit reports can be copied with one click as structured GitHub/Jira Markdown tickets ready for sprint backlog allocation.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 07. IMPACT & FUTURE ROADMAP */}
      <ScrollReveal>
        <section id="impact" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              07
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Impact & Future Roadmap
            </h2>
          </div>

          <div className="bg-white border border-zinc-200/80 rounded-3xl p-8 space-y-6 shadow-xs">
            <h3 className="text-xl font-bold tracking-tight text-zinc-900">Next Evolution: Figma Plugin Sync</h3>
            <p className="text-xs text-zinc-650 leading-relaxed">
              The next phase of fUXit will connect via Model Context Protocol (MCP) directly into Figma, allowing designers to trigger heuristic audits inside their design canvas before handing off assets to development.
            </p>
          </div>
        </section>
      </ScrollReveal>
    </CaseStudyLayout>
  );
}
