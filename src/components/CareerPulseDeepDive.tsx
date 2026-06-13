import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { 
  Brain, 
  Cpu, 
  Layers, 
  Settings, 
  Code, 
  Sparkles, 
  Database, 
  ArrowRight, 
  Info, 
  Lock, 
  Globe, 
  Laptop, 
  Smartphone, 
  Tablet, 
  RefreshCw,
  Workflow,
  CheckCircle,
  ShieldCheck
} from "lucide-react";

export default function CareerPulseDeepDive() {
  const [viewportSize, setViewportSize] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [iframeKey, setIframeKey] = useState<number>(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleReloadIframe = () => {
    setIframeKey(prev => prev + 1);
  };

  const getIframeWidth = () => {
    switch (viewportSize) {
      case "mobile": return "max-w-md h-[680px]";
      case "tablet": return "max-w-2xl h-[700px]";
      default: return "max-w-full h-[650px]";
    }
  };

  return (
    <div className="mt-16 pt-16 border-t border-zinc-200/60 space-y-24 text-left">
      
      {/* SECTION 1: FEATURES GRID ANALYSIS */}
      <motion.section 
        initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        <div className="border-l-4 border-indigo-650 pl-4 select-none">
          <span className="font-mono text-xs font-bold tracking-widest text-indigo-600 uppercase block">
            01. PLATFORM CAPABILITIES
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-zinc-950">
            Core Interactive Modules
          </h3>
          <p className="text-zinc-500 text-xs sm:text-sm mt-1">Refined UI mechanisms that deliver critical matches with high telemetry efficiency.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-none">
          {/* Card 1 */}
          <div className="bg-white border border-zinc-200 p-6 rounded-2xl flex gap-4 hover:border-zinc-350 hover:shadow-xs transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100/50">
              <Brain className="w-5 h-5 text-indigo-650" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-zinc-950 font-sans tracking-tight">Instant Job Decoding ("The Career Advisor")</h4>
              <p className="text-[12px] text-zinc-500 leading-relaxed font-sans">
                Users simply paste raw, unstructured HR requirements. CareerPulse executes server-side parsing to decompose long generic descriptions into core tech requirements, typical day operations, and unadvertised commitments.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-zinc-200 p-6 rounded-2xl flex gap-4 hover:border-zinc-350 hover:shadow-xs transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100/50">
              <Workflow className="w-5 h-5 text-[#15803D]" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-zinc-950 font-sans tracking-tight">Objective Match Scoring (0-100%)</h4>
              <p className="text-[12px] text-zinc-500 leading-relaxed font-sans">
                Correlates the parsed job features recursively with the candidate's exact target parameters. Delivers an objective suitability score based on real compatibility weights rather than generic recruiter keyword optimization.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-zinc-200 p-6 rounded-2xl flex gap-4 hover:border-zinc-350 hover:shadow-xs transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100/50">
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-zinc-950 font-sans tracking-tight">Deep Corporate Culture Insight</h4>
              <p className="text-[12px] text-zinc-500 leading-relaxed font-sans">
                Isolates tone signatures across HR posting templates. Exposes potential management style preferences, structural trade-offs, and custom interview briefing materials optimized specifically for the candidate's background.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-zinc-200 p-6 rounded-2xl flex gap-4 hover:border-zinc-350 hover:shadow-xs transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100/50">
              <Database className="w-5 h-5 text-orange-600" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-zinc-950 font-sans tracking-tight">System Tracking & Evaluation CRM</h4>
              <p className="text-[12px] text-zinc-500 leading-relaxed font-sans">
                A persistent relational pipeline that archives scanned jobs, stores compatibility calculations, tracks real progression states (e.g., Interviewing, Offered), and retains private post-interview briefs.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: LIVE INTERACTIVE IFRAME */}
      <motion.section 
        initial={{ opacity: 0, y: 35, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5 select-none">
            <span className="font-mono text-xs font-bold tracking-widest text-indigo-600 uppercase block">
              02. THE INTERACTIVE WORKSPACE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-zinc-950">
              Live App Prototype
            </h3>
            <p className="text-zinc-500 text-xs sm:text-sm">
              Interact with the fully deployed match environment, connected natively to Firestore and Firebase Auth services.
            </p>
          </div>

          {/* Device and Reload Utils */}
          <div className="flex items-center gap-2 bg-zinc-50 p-1 rounded-xl border border-zinc-200">
            <button
              onClick={() => setViewportSize("desktop")}
              className={`p-2 rounded-lg flex items-center gap-1.5 text-[10.5px] font-bold transition-all ${
                viewportSize === "desktop" ? "bg-white text-indigo-700 shadow-3xs border border-zinc-200/50" : "text-zinc-400 hover:text-zinc-650"
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              Desktop
            </button>
            <button
              onClick={() => setViewportSize("tablet")}
              className={`p-2 rounded-lg flex items-center gap-1.5 text-[10.5px] font-bold transition-all ${
                viewportSize === "tablet" ? "bg-white text-indigo-700 shadow-3xs border border-zinc-200/50" : "text-zinc-400 hover:text-zinc-650"
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              Tablet
            </button>
            <button
              onClick={() => setViewportSize("mobile")}
              className={`p-2 rounded-lg flex items-center gap-1.5 text-[10.5px] font-bold transition-all ${
                viewportSize === "mobile" ? "bg-white text-indigo-700 shadow-3xs border border-zinc-200/50" : "text-zinc-400 hover:text-zinc-650"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              Mobile
            </button>
            
            <div className="w-px h-5 bg-zinc-200 mx-1" />
            
            <button
              onClick={handleReloadIframe}
              className="p-2 text-zinc-400 hover:text-indigo-600 rounded-lg transition-colors"
              title="Reload sandbox application"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Browser Device Wrapper Chrome */}
        <div className="flex justify-center w-full">
          <div className={`w-full ${getIframeWidth()} transition-all duration-300`}>
            
            {/* Topbar Tab layout */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-t-2xl p-3 flex items-center gap-2 select-none shadow-md">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 bg-rose-500 rounded-full block" />
                <span className="w-2.5 h-2.5 bg-amber-400 rounded-full block" />
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full block" />
              </div>
              
              <div className="bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 px-3.5 py-1 rounded-lg flex items-center gap-1.5 font-mono w-2/3 max-w-sm mx-auto justify-between truncate">
                <span className="truncate">https://career-pulse-one.vercel.app/</span>
                <Lock className="w-3 h-3 text-[#10b981]" />
              </div>
            </div>

            {/* Iframe View */}
            <div className="bg-white border-l border-r border-b border-zinc-250 rounded-b-2xl shadow-xl relative overflow-hidden bg-zinc-50">
              <iframe
                key={iframeKey}
                ref={iframeRef}
                src="https://career-pulse-one.vercel.app/"
                title="CareerPulse Applet Viewport"
                className="w-full h-[650px] border-0 outline-0 block relative z-10"
                referrerPolicy="no-referrer"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-downloads"
              />
            </div>

            <div className="text-center text-[11px] text-zinc-400 mt-3 font-medium select-none flex items-center justify-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-zinc-400" />
              <span>Fully interactable live prototype loaded straight from production host.</span>
            </div>

          </div>
        </div>
      </motion.section>

    </div>
  );
}
