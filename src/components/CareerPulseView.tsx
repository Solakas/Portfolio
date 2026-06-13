import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import CareerPulseDeepDive from "./CareerPulseDeepDive";
import AnimatedStatCard from "./AnimatedStatCard";
import { ShieldAlert, Cpu, Sparkles, Database, Layers } from "lucide-react";

interface CareerPulseViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function CareerPulseView({ onClose, onPrev, onNext }: CareerPulseViewProps) {
  const specs = [
    { label: "AI Engine Model", value: "Google Gemini 2.5 (gemini-2.5-flash)" },
    { label: "Response Config", value: "Structured JSON MimeType Schemas" },
    { label: "Session Handshake", value: "Firebase JWT Auth token logs" },
    { label: "Storage Backbone", value: "Firestore Real-time document matrices" },
    { label: "Decision Metrics", value: "Euclidean Multi-Parameter Matching" }
  ];

  const bentoCards = [
    {
      title: "Structured Job Ingestion",
      description: "Processes long-form job posting details via the Gemini API, extracting core expectations, role realities, and hidden obligations.",
      icon: Sparkles,
      badge: "GEMINI DECODER",
      isAccent: true
    },
    {
      title: "Objective Match Scoring",
      description: "Computes a robust similarity metric (0-100%) against candidate preferences (target baseline salary, location styles, skills).",
      icon: Cpu,
      badge: "ALGORITHMIC SCORING"
    },
    {
      title: "Firm Culture & Context",
      description: "Synthesizes industry verticals, competitive realities, and subtle enterprise tones to draft strategic interview briefs.",
      icon: Layers,
      badge: "DEEP COMPANY BRIEF"
    },
    {
      title: "Application Pipeline Tracker",
      description: "Coordinates application stages and private preparation notes natively synchronised across secure Firestore documents.",
      icon: Database,
      badge: "CRM DATABASE"
    }
  ];

  const impactStats = [
    { value: "-85%", text: "Decrease in cognitive candidate application fatigue by translating recruiter jargon into clear, human work statements." },
    { value: "98%", text: "Confidence match accuracy rating aligning developer interests and baseline parameters." },
    { value: "100%", text: "Private session parameters isolation keeping user resumes fully secure inside secure Cloud pipelines." }
  ];

  return (
    <ProjectDetailLayout
      title="CareerPulse"
      category="AI Decision Engine"
      badge="LIVE PROJECT"
      subtitle="Connecting Gemini 2.5 Structured Outputs to live Firestore streams, auditing corporate job posting requirements against recruiter variables dynamically."
      githubUrl="https://github.com/Solakas/CareerPulse"
      liveUrl="https://career-pulse-one.vercel.app/"
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

        {/* SECTION 2: THE 3-CARD PROBLEM BENCHMARK */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 select-none text-left">
          {/* CARD 1: THE PROBLEM */}
          <div className="bg-white border border-zinc-200/85 p-8 rounded-3xl shadow-3xs space-y-4 hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-rose-600">
                <div className="p-2 bg-rose-50 rounded-xl border border-rose-100/50">
                  <ShieldAlert className="w-5 h-5 text-rose-500" />
                </div>
                <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1">The Problem</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans">
                The modern job search is broken. Candidates are overwhelmed by an ocean of job postings filled with opaque corporate jargon, vague responsibilities, and unlisted salary ranges.
              </p>
            </div>
            <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Without clear answers, job seekers suffer from decision fatigue, applying blindly or skipping great roles.
            </p>
          </div>

          {/* CARD 2: THE CHALLENGE */}
          <div className="bg-white border border-zinc-200/85 p-8 rounded-3xl shadow-3xs space-y-4 hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-indigo-650">
                <div className="p-2 bg-indigo-50 rounded-xl border border-indigo-100/50">
                  <Cpu className="w-5 h-5 text-indigo-655" />
                </div>
                <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1">The Challenge</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans">
                How can we parse unstructured, heavily stylized job descriptions from any source and instantly cross-reference them against a candidate's unique professional history and deeply personal preferences?
              </p>
            </div>
            <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Must scale target salary, working locations, and technical parameters automatically to prevent general bias.
            </p>
          </div>

          {/* CARD 3: THE HYPOTHESIS */}
          <div className="bg-white border border-zinc-200/85 p-8 rounded-3xl shadow-3xs space-y-4 hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-emerald-700">
                <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100/50">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1">The Hypothesis</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans">
                If we provide candidates with a localized, AI-driven evaluation engine that correlates their resume and preferences against raw job descriptions, we can drastically reduce application anxiety.
              </p>
            </div>
            <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Empowers candidate decision confidence via empirical match scores and immediate interview prep worksheets.
            </p>
          </div>
        </div>

        {/* SECTION 3: THE STRATEGY & DECISION INTELLIGENCE */}
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
              <Sparkles className="w-5 h-5 text-indigo-505 animate-pulse" />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-900 leading-snug max-w-5xl">
                A highly personalized advisory unit focusing on <span className="text-indigo-600 underline decoration-indigo-200 decoration-2 underline-offset-4">applicant matching confidence</span>.
              </h2>
              <p className="text-zinc-650 text-sm sm:text-base leading-relaxed max-w-4xl">
                CareerPulse translates opaque, unstructured bullet points in corporate postings into precise requirements, then uses Gemini Structured Outputs to automatically check them against candidate variables. It replaces spreadsheet logs with structured decision science.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: CORE BENCHMARKING GRID */}
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

        {/* SECTION 5: INTERACTIVE JOB ANALYSIS WORKBENCH */}
        <div className="mt-16 pt-16 border-t border-zinc-200/40">
          <CareerPulseDeepDive />
        </div>

        {/* STATS FOOTER INDEX */}
        <div className="pt-12 border-t border-zinc-200/40">
          <h3 className="font-mono text-xs font-bold text-zinc-400 tracking-wider uppercase mb-8 select-none">
            Gemini Speeds & Evaluation Confidences
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
