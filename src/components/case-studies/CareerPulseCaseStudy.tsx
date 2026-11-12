import React from "react";
import CaseStudyLayout from "./CaseStudyLayout";
import CareerPulseDeepDive from "../CareerPulseDeepDive";
import AnimatedCounter from "../AnimatedCounter";
import ScrollReveal from "../ScrollReveal";
import { 
  Sparkles, Brain, Cpu, Database, Layers, CheckCircle2, XCircle, ShieldAlert
} from "lucide-react";

interface CareerPulseCaseStudyProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function CareerPulseCaseStudy({ onClose, onPrev, onNext }: CareerPulseCaseStudyProps) {
  const navSections = [
    { id: "summary", label: "01. Metrics" },
    { id: "problem", label: "02. Context" },
    { id: "comparison", label: "03. Competitive" },
    { id: "rationale", label: "04. Rationale" },
    { id: "prototype", label: "05. AI Simulator" },
    { id: "architecture", label: "06. Architecture" },
    { id: "impact", label: "07. Impact" }
  ];

  const meta = [
    { label: "Product", value: "CareerPulse AI Advisor" },
    { label: "Role", value: "Lead UX Designer & AI Engineer" },
    { label: "AI Engine", value: "Gemini 2.5 (gemini-2.5-flash)" },
    { label: "Database", value: "Firestore Real-time Matrices" }
  ];

  const metrics = [
    {
      value: "-85%",
      label: "Application Fatigue",
      desc: "Reduction in candidate application evaluation time by extracting hidden obligations from corporate recruiter jargon automatically."
    },
    {
      value: "98%",
      label: "Match Confidence",
      desc: "Algorithmic alignment score matching candidate salary, location, and technical skill baselines against posting requirements."
    },
    {
      value: "100%",
      label: "Session Security",
      desc: "Isolated Cloud Firestore document streams protected via Firebase JWT Auth authentication handshake."
    }
  ];

  const competitiveData = [
    {
      platform: "LinkedIn Job Match",
      model: "Basic Keyword Overlap",
      pros: "Large job index.",
      cons: "Matches keyword strings without understanding actual role requirements or salary trade-offs.",
      tag: "Superficial"
    },
    {
      platform: "Manual Job Analysis",
      model: "Human Spreadsheet",
      pros: "Thorough review.",
      cons: "Takes 30+ minutes per posting to research company background, tech stack, and interview prep.",
      tag: "Time Consuming"
    },
    {
      platform: "CareerPulse (Gemini 2.5)",
      model: "Structured Gemini Decoder",
      pros: "Instant 3-second parsing, multi-parameter Euclidean match score, risk flag detection, custom interview worksheet generation.",
      cons: "Requires pasting plain text job description.",
      tag: "Automated",
      isHighlight: true
    }
  ];

  return (
    <CaseStudyLayout
      title="CareerPulse: AI-Powered Job Decoder & Match Intelligence"
      subtitle="An AI-powered application that decodes corporate job postings, extracts hidden role risks, computes objective candidate match scores, and generates tailored interview prep using Gemini 2.5."
      tag="AI Product & UX Case Study"
      meta={meta}
      navSections={navSections}
      liveUrl="https://career-pulse-one.vercel.app/"
      liveUrlLabel="Live Web App"
      githubUrl="https://github.com/Solakas/CareerPulse"
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
    >
      {/* 01. EXECUTIVE SUMMARY & CORE METRICS */}
      <ScrollReveal>
        <section id="summary" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              01
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Executive Summary & Core Metrics
            </h2>
          </div>

          <div className="prose prose-zinc max-w-none text-zinc-650 text-base leading-relaxed space-y-4">
            <p>
              Job postings are notorious for uninformative corporate jargon, inflated skill requirements, and buried obligations. Software engineers spend endless hours applying to positions that turn out to be poor cultural or compensation fits.
            </p>
            <p>
              <strong>CareerPulse</strong> decodes job postings using Gemini 2.5 Flash's structured JSON schemas. It maps role obligations against candidate profiles to compute an objective match score and generate strategic interview worksheets.
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
            <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              02
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              The Business Context & Problem Statement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-6 text-zinc-650 text-base leading-relaxed">
              <h3 className="text-lg font-bold text-zinc-900">Deciphering Job Jargon</h3>
              <p>
                Candidates spend hours analyzing job postings asking themselves critical questions:
              </p>
              <ol className="list-decimal list-inside space-y-2 font-medium text-zinc-800 pl-2">
                <li>What is the actual day-to-day work, free of recruiter fluff and corporate speak?</li>
                <li>Does this role match my salary target, location style, and technical stack preferences?</li>
                <li>What specific interview preparation topics should I focus on?</li>
              </ol>
            </div>

            <div className="md:col-span-5 bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest">
                AI SOLUTION ARCHITECTURE
              </h3>
              <p className="text-xs text-zinc-650 leading-relaxed">
                <strong>CareerPulse</strong> decodes job postings using Gemini 2.5 Flash's structured JSON schemas. It maps role obligations against candidate profiles to compute an objective match score.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 03. COMPETITIVE MATRIX */}
      <ScrollReveal>
        <section id="comparison" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              03
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Competitive Matrix
            </h2>
          </div>

          <div className="overflow-x-auto border border-zinc-200 rounded-3xl bg-white shadow-xs">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-zinc-50/80 border-b border-zinc-200 font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
                  <th className="p-4 pl-6">Platform</th>
                  <th className="p-4">Matching Model</th>
                  <th className="p-4">Pros</th>
                  <th className="p-4 pr-6">Cons</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/70 text-sm text-zinc-700">
                {competitiveData.map((row, idx) => (
                  <tr key={idx} className={row.isHighlight ? "bg-blue-50/40 font-medium" : "hover:bg-zinc-50/50"}>
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
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase mr-2 ${row.isHighlight ? "bg-blue-100 text-blue-800" : "bg-red-50 text-red-700"}`}>
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

      {/* 04. DESIGN RATIONALE & MATCHING ALGORITHM */}
      <ScrollReveal>
        <section id="rationale" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              04
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Design Rationale & Matching Algorithm
            </h2>
          </div>

          <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-100">
                Decision #1: Euclidean Multi-Parameter Matching vs Single Score
              </span>
              <span className="text-xs font-mono text-zinc-400 font-bold">Algorithmic Design</span>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed">
              Instead of presenting an opaque AI number, CareerPulse breaks down the match score into 4 weighted vectors: Tech Stack Fit (35%), Salary & Compensation Alignment (30%), Location & Remote Style (20%), and Cultural/Growth Expectations (15%).
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* 05. INTERACTIVE SIMULATOR */}
      <ScrollReveal>
        <section id="prototype" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              05
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Interactive AI CareerPulse Simulator
            </h2>
          </div>

          <p className="text-zinc-650 text-base leading-relaxed max-w-4xl">
            Test-drive the AI-powered CareerPulse workspace below. Experience how Gemini 2.5 structured JSON parsing automatically extracts unadvertised role responsibilities, computes multi-parameter alignment scores, and builds personalized interview briefing worksheets in real-time.
          </p>

          <CareerPulseDeepDive />
        </section>
      </ScrollReveal>

      {/* 06. DX ARCHITECTURE */}
      <ScrollReveal>
        <section id="architecture" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              06
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Gemini 2.5 & Firestore Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-zinc-200 rounded-3xl p-6 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base">Gemini 2.5 Flash API</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Utilizes the fast 2.5 Flash model for sub-3 second JSON responses with strict TypeScript interfaces.
              </p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-3xl p-6 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base">Cloud Firestore Realtime Sync</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Stores evaluations, candidate target profiles, and saved postings in real-time user-isolated collections.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 07. IMPACT & SECURITY */}
      <ScrollReveal>
        <section id="impact" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              07
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Impact & Security
            </h2>
          </div>

          <div className="bg-white border border-zinc-200/80 rounded-3xl p-8 space-y-6 shadow-xs">
            <h3 className="text-xl font-bold tracking-tight text-zinc-900">Data Privacy & Firebase Auth</h3>
            <p className="text-xs text-zinc-650 leading-relaxed">
              Candidate Target Profiles and saved job scans are strictly isolated via Firebase Auth security rules to protect user confidentiality during job hunts.
            </p>
          </div>
        </section>
      </ScrollReveal>
    </CaseStudyLayout>
  );
}
