import React, { useState } from "react";
import CaseStudyLayout from "./CaseStudyLayout";
import AnimatedStatCard from "../AnimatedStatCard";
import AnimatedCounter from "../AnimatedCounter";
import ScrollReveal from "../ScrollReveal";
import { 
  Sparkles, Zap, Layers, Activity, BookOpen, CheckCircle2, XCircle, 
  ChevronRight, ArrowUpRight, Cpu, Sliders, ShieldAlert, Code2, Users, FileText, LayoutGrid
} from "lucide-react";

interface ApplyNowCaseStudyProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function ApplyNowCaseStudy({ onClose, onPrev, onNext }: ApplyNowCaseStudyProps) {
  const [activeMockupTab, setActiveMockupTab] = useState("list");

  const navSections = [
    { id: "summary", label: "01. Metrics" },
    { id: "problem", label: "02. Context" },
    { id: "comparison", label: "03. Competitive" },
    { id: "rationale", label: "04. Rationale" },
    { id: "prototype", label: "05. Prototype" },
    { id: "architecture", label: "06. DX Architecture" },
    { id: "impact", label: "07. Impact" }
  ];

  const meta = [
    { label: "Product", value: "Apply Now ATS SaaS" },
    { label: "Role", value: "Lead UX Designer & Systems Architect" },
    { label: "Tech Stack", value: "Vite + React, TypeScript, Sol DS" },
    { label: "Timeline", value: "4 Weeks (Design → Code)" }
  ];

  const metrics = [
    {
      value: "-4.5s",
      label: "Time-to-Disposition",
      desc: "Reduction in candidate evaluation time per resume achieved through side-by-side split screen inspection."
    },
    {
      value: "85%",
      label: "Bulk Action Usage",
      desc: "Recruiter selection of slide-up console over single-row status menus during high-volume screening."
    },
    {
      value: "100%",
      label: "Design-to-Code Parity",
      desc: "1:1 token mapping between Sol Design System variables in Figma and TypeScript React component states."
    }
  ];

  const competitiveData = [
    {
      platform: "Greenhouse",
      model: "Modal Overlay",
      pros: "Rich candidate scoring forms.",
      cons: "Modal covers application list, blocking context switching.",
      tag: "Friction"
    },
    {
      platform: "Lever",
      model: "Kanban Columns",
      pros: "Visual pipeline progression.",
      cons: "Requires clicking into separate URLs for resume PDFs.",
      tag: "Multi-tab"
    },
    {
      platform: "Workable",
      model: "Full Page Nav",
      pros: "Clean typography.",
      cons: "Page reloads between applicants cause severe click fatigue.",
      tag: "Reloads"
    },
    {
      platform: "Apply Now (Sol)",
      model: "Unified Split Workspace",
      pros: "Inline split pane, sticky bulk action engine, zero page reloads.",
      cons: "Requires desktop screen width (1024px+).",
      tag: "Optimized",
      isHighlight: true
    }
  ];

  const mockupTabs = [
    { 
      id: "list", 
      label: "Candidates Grid View", 
      title: "Candidates Grid Overview",
      desc: "Displays real-time pipeline categories, scores, experience filters, and custom columns in a high-density, scannable table.",
      image: "/assets/Candidates List.png" 
    },
    { 
      id: "bulk", 
      label: "Bulk Action Console", 
      title: "Bulk Actions Drawer Overlay",
      desc: "Action floating pane slides up when multiple candidate rows are selected, accelerating bulk candidate progressions.",
      image: "/assets/Candidates List - Bulk Actions.png" 
    },
    { 
      id: "info", 
      label: "Candidate Info View", 
      title: "Split-Screen Resume Workspace",
      desc: "Displays parsed resumes natively side-by-side with structured scorecards, making candidate scoring completely seamless.",
      image: "/assets/Candidate info page.png" 
    },
    { 
      id: "notes", 
      label: "Team Notes & Threads", 
      title: "Team Discussion Comment Thread",
      desc: "Team evaluation remarks section. Encourages collaborative sync threads with precise user mentions.",
      image: "/assets/Candidate info page - Team Notes.png" 
    }
  ];

  const activeTabObj = mockupTabs.find(t => t.id === activeMockupTab) || mockupTabs[0];

  return (
    <CaseStudyLayout
      title="Designing an Applicant Tracking System (ATS) Workspace"
      subtitle="How we solved recruiter click fatigue and PDF download friction by building a high-density, split-screen React workspace powered by Sol Design System tokens."
      tag="B2B SaaS Case Study"
      meta={meta}
      navSections={navSections}
      liveUrl="https://apply-now-platform-oysw.vercel.app/"
      githubUrl="https://github.com/Solakas/Apply-Now-Platform"
      figmaUrl="https://www.figma.com/design/Y2T29E74yMo2533yMVmJIg/Apply-Now-Platform?node-id=1-835"
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
    >
      {/* 01. EXECUTIVE SUMMARY & CORE METRICS */}
      <ScrollReveal>
        <section id="summary" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              01
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Executive Summary & Core Metrics
            </h2>
          </div>

          <div className="prose prose-zinc max-w-none text-zinc-650 text-base leading-relaxed space-y-4">
            <p>
              Recruiters processing high-volume hiring pipelines waste up to <strong>30% of their daily working hours</strong> simply opening, closing, and downloading PDF resumes from legacy Applicant Tracking Systems (ATS). Existing tools rely on modal popups or full page reloads that sever candidate context and cause severe click fatigue.
            </p>
            <p>
              <strong>Apply Now</strong> was designed as a single-page split-workspace platform. By placing candidate applications, parsed resumes, and evaluation scorecards in side-by-side synchronous panes, we achieved the following validated metrics:
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
            <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              02
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              The Business Context & Problem Statement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-6 text-zinc-650 text-base leading-relaxed">
              <h3 className="text-lg font-bold text-zinc-900">High-Volume Recruitment Bottlenecks</h3>
              <p>
                High-growth SaaS companies and retail enterprises receive hundreds of applicant resumes weekly. Standard recruitment software forces hiring managers through a 4-step click loop per candidate:
              </p>
              <ol className="list-decimal list-inside space-y-2 font-medium text-zinc-800 pl-2">
                <li>Click candidate row in table</li>
                <li>Wait for modal popup or page navigation</li>
                <li>Download PDF resume to local disk to view formatting</li>
                <li>Close preview, reopen scorecard modal, and enter disposition score</li>
              </ol>
              <p>
                This fragmented interaction model leads to cognitive fatigue, delayed candidate responses, and high drop-off rates in recruitment throughput.
              </p>
            </div>

            <div className="md:col-span-5 bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest">
                QUALITATIVE RECRUITER INSIGHTS
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-zinc-50/80 border border-zinc-200/80 space-y-2">
                  <span className="text-xs font-bold text-indigo-650 font-mono">Sarah — High-Volume Recruiter</span>
                  <p className="text-xs text-zinc-650 italic leading-relaxed">
                    "Speed is everything; I need to process 100 applications in an hour. If I have to click three times just to see a candidate's phone number, the UI has failed me completely."
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50/80 border border-zinc-200/80 space-y-2">
                  <span className="text-xs font-bold text-emerald-700 font-mono">Marcus — Engineering Director</span>
                  <p className="text-xs text-zinc-650 italic leading-relaxed">
                    "Raw resumes are only half the story. I need a split view where I can evaluate scorecard parameters alongside GitHub links without tab switching."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 03. COMPETITIVE UX ANALYSIS */}
      <ScrollReveal>
        <section id="comparison" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              03
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Competitive UX Analysis Matrix
            </h2>
          </div>

          <p className="text-zinc-650 text-base leading-relaxed max-w-3xl">
            We benchmarked major market ATS platforms to map how resume viewing and status updates are architected across desktop screen real estate.
          </p>

          <div className="overflow-x-auto border border-zinc-200 rounded-3xl bg-white shadow-xs">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-zinc-50/80 border-b border-zinc-200 font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
                  <th className="p-4 pl-6">Platform</th>
                  <th className="p-4">UX Layout Model</th>
                  <th className="p-4">Pros</th>
                  <th className="p-4 pr-6">Cons & Friction Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/70 text-sm text-zinc-700">
                {competitiveData.map((row, idx) => (
                  <tr key={idx} className={row.isHighlight ? "bg-emerald-50/40 font-medium" : "hover:bg-zinc-50/50"}>
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
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase mr-2 ${row.isHighlight ? "bg-emerald-100 text-emerald-800" : "bg-red-50 text-red-700"}`}>
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

      {/* 04. DESIGN RATIONALE & TRADE-OFFS */}
      <ScrollReveal>
        <section id="rationale" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              04
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Design Rationale & Trade-offs
            </h2>
          </div>

          <p className="text-zinc-650 text-base leading-relaxed max-w-3xl">
            Guided by our <strong>Design Rationale Framework</strong> (Context ➔ Options ➔ Evidence ➔ Reasoning ➔ Trade-offs ➔ Validation), here are the key decisions made during product development:
          </p>

          <div className="space-y-8">
            {/* Decision 1 */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider border border-indigo-100">
                  Decision #1: Split-Screen Resume Inspector
                </span>
                <span className="text-xs font-mono text-zinc-400 font-bold">Architecture Choice</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-bold text-zinc-900 text-base">Options Considered</h4>
                  <ul className="space-y-2 text-xs text-zinc-600">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span><strong>Option A (Modal Popups):</strong> Clean layout, but obscures table list context.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span><strong>Option B (New Page Routes):</strong> Full page dedicated view, causes route reloads and lost scroll state.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Option C (Inline Dual Pane) [SELECTED]:</strong> Table list on left (40%), interactive resume & scorecard on right (60%).</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 bg-zinc-50 border border-zinc-200/80 p-4 rounded-2xl">
                  <h4 className="font-bold text-zinc-900 text-xs uppercase font-mono tracking-wider text-zinc-500">
                    Reasoning & Trade-offs
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    <strong>Reasoning:</strong> Recruiters need to maintain table position while reviewing candidates sequentially using keyboard shortcuts (`j`/`k`).
                  </p>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    <strong>Known Compromise:</strong> Split-screen layout requires minimum viewport width of 1024px. On mobile devices, layout gracefully collapses into single stacked cards.
                  </p>
                </div>
              </div>
            </div>

            {/* Decision 2 */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider border border-indigo-100">
                  Decision #2: Slide-up Floating Bulk Action Engine
                </span>
                <span className="text-xs font-mono text-zinc-400 font-bold">Speed Screening Choice</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-bold text-zinc-900 text-base">Options Considered</h4>
                  <ul className="space-y-2 text-xs text-zinc-600">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span><strong>Option A (Header Fixed Actions Bar):</strong> Requires scrolling back to top to trigger actions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Option B (Floating Slide-up Console) [SELECTED]:</strong> Appears at bottom center as soon as &gt;1 checkbox is checked.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 bg-zinc-50 border border-zinc-200/80 p-4 rounded-2xl">
                  <h4 className="font-bold text-zinc-900 text-xs uppercase font-mono tracking-wider text-zinc-500">
                    Reasoning & Validation
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    <strong>Reasoning:</strong> Keeps action triggers within immediate mouse radius, eliminating distance travelled across 27" screens.
                  </p>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    <strong>Validation Metric:</strong> 85% of recruiters selected bulk action progressions over row-level menus during high-volume testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 05. INTERACTIVE WORKSPACE PROTOTYPE */}
      <ScrollReveal>
        <section id="prototype" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              05
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Interactive Workspace Prototype & Screens
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 p-1.5 bg-zinc-150/60 rounded-2xl border border-zinc-200 max-w-2xl">
              {mockupTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveMockupTab(tab.id)}
                  className={`flex-1 text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    activeMockupTab === tab.id
                      ? "bg-zinc-900 text-white shadow-xs"
                      : "text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="border border-zinc-200 bg-zinc-100 rounded-3xl p-4 sm:p-6 overflow-hidden flex flex-col items-center justify-center min-h-[340px] sm:min-h-[480px] shadow-inner">
              <img
                src={activeTabObj.image}
                alt={activeTabObj.title}
                referrerPolicy="no-referrer"
                className="rounded-2xl shadow-lg border border-zinc-200 max-h-full max-w-full object-contain"
              />
            </div>

            <div className="bg-white border border-zinc-200 p-6 rounded-2xl space-y-1">
              <h4 className="font-bold text-zinc-900 text-sm font-sans">
                {activeTabObj.title}
              </h4>
              <p className="text-zinc-500 text-xs sm:text-sm">
                {activeTabObj.desc}
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 06. DX & SOL DESIGN SYSTEM ARCHITECTURE */}
      <ScrollReveal>
        <section id="architecture" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              06
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              DX & Sol Design System Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-zinc-200 rounded-3xl p-6 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base">Token-to-Code Parity</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Every UI component in Apply Now maps 1:1 with variables in the <strong>Sol Design System</strong> (36 components, 2,282 variants). Colors, semantic spacing grids (`app_spacing`), and status pills use hardcoded TypeScript interfaces.
              </p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-3xl p-6 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base">React & TypeScript Implementation</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Built using Vite + React 19, TypeScript, and Framer Motion layout animations. Fully deployed on Vercel with real-time route transitions and zero runtime dependencies on heavy UI frameworks.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 07. IMPACT, ANALYTICS & REFLECTION */}
      <ScrollReveal>
        <section id="impact" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              07
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Impact, Analytics & Reflections
            </h2>
          </div>

          <div className="bg-white border border-zinc-200/80 rounded-3xl p-8 space-y-6 shadow-xs">
            <h3 className="text-xl font-bold tracking-tight text-zinc-900">Key Takeaways & Lessons Learned</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-zinc-650">
              <div className="space-y-2">
                <h4 className="font-bold text-zinc-900 text-base">What Worked Well</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  The side-by-side split workspace completely transformed recruiter speed during testing sessions, cutting review cycles by nearly 5 seconds per applicant.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-zinc-900 text-base">What We Would Do Differently</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Incorporate automatic keyboard shortcut onboarding tooltips directly into table header rows for first-time recruiters.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </CaseStudyLayout>
  );
}
