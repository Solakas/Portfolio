import React, { useState, useRef, useEffect } from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import AnimatedStatCard from "./AnimatedStatCard";
import { 
  Sparkles, 
  Cpu, 
  Layers, 
  Database, 
  TrendingUp,
  AlertTriangle, 
  Clock,
  CheckCircle2,
  Copy,
  Plus,
  RefreshCw,
  Upload,
  Eye,
  Settings,
  HelpCircle,
  FileText,
  Lock,
  Info
} from "lucide-react";

interface FuxitViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

interface Pinpoint {
  id: number;
  x: number; // percentage width
  y: number; // percentage height
  title: string;
  category: "Accessibility" | "Typography" | "Whitespace" | "Visual Hierarchy" | "Interaction Design";
  severity: "High" | "Medium" | "Low";
  critique: string;
  recommendation: string;
}

interface HeuristicScore {
  name: string;
  score: number; // 1-5 scale
  max: number;
  status: string;
  color: string;
}

interface AuditPreset {
  id: string;
  name: string;
  type: string;
  overallCritique: string;
  overallScore: number;
  scores: HeuristicScore[];
  pinpoints: Pinpoint[];
}

// 3 Custom High-Fidelity UI presets designed to represent design issues
const AUDIT_PRESETS: AuditPreset[] = [
  {
    id: "preset-1",
    name: "E-Commerce Checkout Hub",
    type: "Low-Contrast Transaction Form",
    overallCritique: "The e-commerce transaction form relies heavily on compact parameters and extremely dense visual groups. While this packs details onto a single fold, it creates substantial interaction stress. Standard contrast rules are routinely violated, and destructive operations sit dangerously close to core checkout completions.",
    overallScore: 68,
    scores: [
      { name: "Whitespace Balancing", score: 2, max: 5, status: "Critically Cramped", color: "text-rose-500 bg-rose-500/10" },
      { name: "Color & WCAG Contrast", score: 2, max: 5, status: "Fails AA Standards", color: "text-rose-500 bg-rose-500/10" },
      { name: "Typography Scale", score: 3, max: 5, status: "Inconsistent hierarchy", color: "text-amber-500 bg-amber-500/10" },
      { name: "Layout & Touch Targets", score: 1, max: 5, status: "Misaligned bounds", color: "text-red-500 bg-red-500/10" }
    ],
    pinpoints: [
      {
        id: 1,
        x: 48,
        y: 84,
        title: "Collision Danger: Destructive Buttons Node",
        category: "Interaction Design",
        severity: "High",
        critique: "The primary 'Complete Purchase' action is adjacent to the 'Cancel checkout' trigger, with only a 4px separator block. This creates high probability of catastrophic human mis-clicks.",
        recommendation: "Provide a minimum of 24px gap separation, use a low-impact text style for cancel, and pad the primary action button to at least 48px vertical size."
      },
      {
        id: 2,
        x: 32,
        y: 45,
        title: "Contrast Failure: Opaque Input Prompts",
        category: "Accessibility",
        severity: "High",
        critique: "The input labels utilize a hex token of #94A3B8 against a light-grey card boundary, resulting in a contrast rating of just 2.8:1.",
        recommendation: "Darken the typography value to #475569 to secure standard 4.5:1 AA readability thresholds immediately."
      },
      {
        id: 3,
        x: 82,
        y: 28,
        title: "Micro-Sized Cart Text Layout",
        category: "Typography",
        severity: "Medium",
        critique: "Item price detail items are set to 10px uppercase tracking without proportional line-height parameters, violating normal body typography scales.",
        recommendation: "Increase core font scale value to 12px with space adjustments."
      }
    ]
  },
  {
    id: "preset-2",
    name: "Neo-Brutalist SaaS Landing",
    type: "Stylized Geometric Frame",
    overallCritique: "An aggressive, highly stylized cyberpunk corporate portal. Visual elements feature robust thick borders and intense primary colors. While the style establishes a loud, distinctive creative voice, it compromises readable text flow and logical layout patterns on smaller viewports.",
    overallScore: 74,
    scores: [
      { name: "Whitespace Balancing", score: 3, max: 5, status: "Symmetric but dense", color: "text-amber-500 bg-amber-500/10" },
      { name: "Color & WCAG Contrast", score: 4, max: 5, status: "High and safe contrast", color: "text-emerald-500 bg-emerald-500/10" },
      { name: "Typography Scale", score: 2, max: 5, status: "Unbalanced weights", color: "text-rose-500 bg-rose-500/10" },
      { name: "Layout & Touch Targets", score: 3, max: 5, status: "Static positioning limit", color: "text-amber-500 bg-amber-500/10" }
    ],
    pinpoints: [
      {
        id: 1,
        x: 18,
        y: 18,
        title: "Over-Sized Hero Heading Balance",
        category: "Typography",
        severity: "Medium",
        critique: "The heading utilizes heavy display lettering that collides with absolute margins, narrowing focus area elements.",
        recommendation: "Introduce dynamic responsive typography variables (fluid rem sizing) to curb border collision boundaries."
      },
      {
        id: 2,
        x: 75,
        y: 52,
        title: "Symmetric Overlaps and Spacers",
        category: "Whitespace",
        severity: "Low",
        critique: "Brutalist shadow patterns overlap secondary text blocks, causing mild obstruction.",
        recommendation: "Set container inset guidelines to 12px padding to separate content blocks from overlapping card borders."
      }
    ]
  },
  {
    id: "preset-3",
    name: "Analytics Controller",
    type: "Cluttered Technical Panel",
    overallCritique: "A multi-column admin board representing hardware monitors. High density of indicators introduces cognitive fatigue. The layout implements robust structures but lacks visual rest zones due to overlapping elements, inconsistent border radii, and 3 simultaneous divergent font faces.",
    overallScore: 61,
    scores: [
      { name: "Whitespace Balancing", score: 1, max: 5, status: "Extremely cramped", color: "text-red-500 bg-red-500/10" },
      { name: "Color & WCAG Contrast", score: 3, max: 5, status: "Acceptable ratios", color: "text-amber-500 bg-amber-500/10" },
      { name: "Typography Scale", score: 2, max: 5, status: "Too many font faces", color: "text-rose-500 bg-rose-500/10" },
      { name: "Layout & Touch Targets", score: 2, max: 5, status: "Misaligned columns", color: "text-rose-500 bg-rose-500/10" }
    ],
    pinpoints: [
      {
        id: 1,
        x: 52,
        y: 12,
        title: "Font Chaos: Divergent Families",
        category: "Typography",
        severity: "High",
        critique: "The navigation sidebar, main charts, and header use three completely unrelated font weights/families simultaneously (Serif + Sans + Mono), eroding visual coherence.",
        recommendation: "Declare a strict typography system pairing: Inter for general UI controls, Space Grotesk for metrics display."
      },
      {
        id: 2,
        x: 88,
        y: 64,
        title: "Unpadded Metrics Grid",
        category: "Whitespace",
        severity: "High",
        critique: "Numerical analytics outputs sit right on top of their grid bounds, touching card borders and violating normal grid gutters.",
        recommendation: "Increase section padding rules to 24px and clear background gutters."
      }
    ]
  }
];

export default function FuxitView({ onClose, onPrev, onNext }: FuxitViewProps) {
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [selectedPresetId, setSelectedPresetId] = useState<string>("preset-1");
  const [activePreset, setActivePreset] = useState<AuditPreset>(AUDIT_PRESETS[0]);
  const [hoveredPinpointId, setHoveredPinpointId] = useState<number | null>(null);
  const [selectedPinpointId, setSelectedPinpointId] = useState<number | null>(1);
  const [copiedReports, setCopiedReports] = useState<boolean>(false);
  
  // Custom uploaded image simulator states
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadSteps, setUploadSteps] = useState<string>("Awaiting file...");
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- Start of Interactive Nested App State Hooks ---
  // Preset 1: Checkout Hub Panel
  const [checkoutEmail, setCheckoutEmail] = useState<string>("");
  const [checkoutCard, setCheckoutCard] = useState<string>("");
  const [checkoutCvv, setCheckoutCvv] = useState<string>("");
  const [checkoutStatus, setCheckoutStatus] = useState<string | null>(null);

  // Preset 2: Neo-Brutalist SaaS
  const [brutalistCount, setBrutalistCount] = useState<number>(18);
  const [selectedBrutalistTheme, setSelectedBrutalistTheme] = useState<"CYBER" | "NEO" | "RETRO">("CYBER");

  // Preset 3: Cluttered Analytics
  const [activeTechnicalTab, setActiveTechnicalTab] = useState<string>("mono");
  const [analyticsMultiplier, setAnalyticsMultiplier] = useState<number>(85);
  const [liveServerLogs, setLiveServerLogs] = useState<string[]>([
    "Socket handshake established.",
    "DB connection response ok in 36ms.",
    "Hardware temperature nominal."
  ]);
  const [logInputText, setLogInputText] = useState<string>("");
  // --- End of Interactive Nested App State Hooks ---

  // Synchronize preset layout switching
  const handlePresetChange = (presetId: string) => {
    setSelectedPresetId(presetId);
    setUploadedImageUrl(null);
    const selected = AUDIT_PRESETS.find(p => p.id === presetId);
    if (selected) {
      setActivePreset(selected);
      setSelectedPinpointId(selected.pinpoints[0]?.id || null);
    }
  };

  // Generate markdown report for clipboard copying
  const handleCopyMarkdown = () => {
    const report = `
# fUXit AI Design Audit Report: ${activePreset.name}
**Type:** ${activePreset.type}
**Overall Heuristic Score:** ${activePreset.overallScore}/100

## Heuristic Diagnostics Breakdown:
${activePreset.scores.map(s => `- **${s.name}:** ${s.score}/5 (${s.status})`).join("\n")}

## Overall Critique Summary:
${activePreset.overallCritique}

## Key Visual Violations Detected:
${activePreset.pinpoints.map((p, idx) => `
### ${idx + 1}. [${p.category}] ${p.title}
- **Severity:** [${p.severity}]
- **Issue Location:** Relative X: ${p.x}%, Y: ${p.y}%
- **Critique:** ${p.critique}
- **Recommendation:** ${p.recommendation}
`).join("\n")}

---
*Report auto-generated by fUXit Pro Visual Co-Pilot.*
`;
    navigator.clipboard.writeText(report);
    setCopiedReports(true);
    setTimeout(() => setCopiedReports(false), 2000);
  };

  // Custom User Image Upload Handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedImageUrl(event.target?.result as string);
      triggerFakeAiAnalysis(file.name);
    };
    reader.readAsDataURL(file);
  };

  // Drag and Drop handlers
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImageUrl(event.target?.result as string);
        triggerFakeAiAnalysis(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger Gemini Vision AI Auditor Simulation
  const triggerFakeAiAnalysis = (filename: string) => {
    setIsUploading(true);
    setUploadProgress(10);
    setUploadSteps("Initializing secure visual container...");

    const steps = [
      { p: 25, label: `Extracting screenshots layout frames for: ${filename}...` },
      { p: 50, label: "Feeding direct pixel matrix to Google's Gemini 2.5 Flash API..." },
      { p: 75, label: "Generating structured JSON outputs via Pydantic model schemas..." },
      { p: 90, label: "Synthesizing custom coordinate overlays and recommendations..." },
      { p: 100, label: "Report successfully calculated!" }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setUploadProgress(steps[currentStep].p);
        setUploadSteps(steps[currentStep].label);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsUploading(false);
          // Set dynamic computed results for the uploaded screenshot
          setActivePreset({
            id: "preset-uploaded",
            name: `Audit: ${filename.slice(0, 18)}...`,
            type: "Custom Upload Analysis File",
            overallCritique: "The uploaded screen highlights moderate structural alignments. While typography bounds are readable, whitespace scaling is severely mismatched on gutters sections, which introduces friction under smaller bounds.",
            overallScore: 82,
            scores: [
              { name: "Whitespace Balancing", score: 4, max: 5, status: "Good micro spacing", color: "text-emerald-500 bg-emerald-500/10" },
              { name: "Color & WCAG Contrast", score: 3, max: 5, status: "Some contrast fails", color: "text-amber-500 bg-amber-500/10" },
              { name: "Typography Scale", score: 4, max: 5, status: "Balanced readable scale", color: "text-emerald-500 bg-emerald-500/10" },
              { name: "Layout & Touch Targets", score: 3, max: 5, status: "Inconsistent padding rules", color: "text-amber-500 bg-amber-500/10" }
            ],
            pinpoints: [
              {
                id: 1,
                x: 35,
                y: 32,
                title: "Custom Review: Layout Gutter Drift",
                category: "Whitespace",
                severity: "Medium",
                critique: "The left margin spacer values do not correspond to the central text align arrays, causing a jagged vertical reading line.",
                recommendation: "Enforce a strict 24px grid layout gutter alignment variable across all sections blocks."
              },
              {
                id: 2,
                x: 65,
                y: 72,
                title: "Accent Contrast Under-ratio",
                category: "Accessibility",
                severity: "High",
                critique: "The visual badges sit on light grey parameters yielding low contrast levels that fail WCAG AAA targets.",
                recommendation: "Ensure background color values are lightened or text colors values darkenned."
              }
            ]
          });
          setSelectedPinpointId(1);
        }, 800);
      }
    }, 900);
  };

  // Canvas Click Handler (Adds dynamic custom pinpoints)
  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isUploading) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);

    const newId = activePreset.pinpoints.length > 0 ? Math.max(...activePreset.pinpoints.map(p => p.id)) + 1 : 1;
    const newPinpoint: Pinpoint = {
      id: newId,
      x: x,
      y: y,
      title: `Manual Audit Flag #${newId}`,
      category: "Interaction Design",
      severity: "Medium",
      critique: `Designer placed custom pinpoint coordinate at pixel space matching Relative width X: ${x}%, height Y: ${y}%.`,
      recommendation: "Review the local bounding metrics at this visual area against Sol Design System standards."
    };

    const updatedPreset = {
      ...activePreset,
      pinpoints: [...activePreset.pinpoints, newPinpoint]
    };
    setActivePreset(updatedPreset);
    setSelectedPinpointId(newId);
  };

  const specs = [
    { label: "AI Engine", value: "Google Gemini 2.5 Flash" },
    { label: "Input Token Payload", value: "Image Base64 URI + Heuristic parameters" },
    { label: "Response Output", value: "Structured JSON (Strict output constraint)" },
    { label: "Storage Handshake", value: "LocalStorage Persistent Reports Archive" },
    { label: "Evaluation Criteria", value: "Nielsen Heuristics & WCAG AA Guidelines" }
  ];

  const impactStats = [
    { value: "-60%", text: "Reduction in repetitive Figma markup cycles, putting immediate interactive code requirements of audit lists in CI/CD feeds." },
    { value: "95%", text: "Auditing precision in identifying major alignment gaps, inconsistent component border metrics, and touch margins overrides." },
    { value: "+18%", text: "Direct developer output acceleration by removing semantic hand-off debates between engineering and designer teams." }
  ];

  return (
    <ProjectDetailLayout
      title="fUXit"
      category="AI Design Consultant"
      badge="LIVE PROJECT"
      subtitle="Google Gemini 2.5 Flash model visual feedback workspace auditing screenshot layouts, identifying contrast violations, and mapping overlay pinpoints dynamically with LocalStorage persistent tracks."
      githubUrl="https://github.com/Solakas/fUXit-"
      liveUrl="https://f-u-xit.vercel.app/"
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
      hideSubtitles={true}
    >
      <div className="space-y-24 mt-12 text-left">
        
        {/* SECTION 1: CORE SPECIFICATIONS MATRIX */}
        <section className="space-y-6 select-none">
          <div className="flex items-center gap-2">
            <h3 className="font-sans font-black text-sm text-zinc-900 uppercase tracking-widest animate-pulse">
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
              <div className="flex items-center gap-3 text-rose-600">
                <div className="p-2 bg-rose-50 rounded-xl border border-rose-100/50">
                  <AlertTriangle className="w-5 h-5 text-rose-500" />
                </div>
                <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1">The Problem</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans">
                Design-to-code translations yield numerous visual regressions. Software developers often miss critical guidelines constraints (spacing rules, text contrast, touch sizes) until product launch.
              </p>
            </div>
            <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Manual UX audits are expensive, slow, and delay release timelines indefinitely in heavy tech setups.
            </p>
          </div>

          {/* THE CHALLENGE */}
          <div className="bg-white border border-zinc-200/85 p-8 rounded-3xl shadow-3xs space-y-4 hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-indigo-650">
                <div className="p-2 bg-indigo-50 rounded-xl border border-indigo-100/50">
                  <Cpu className="w-5 h-5 text-indigo-555" />
                </div>
                <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1">The Challenge</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans">
                How do we leverage standard vision models to review raw, unstructured screenshot mockups and return precise, mathematical visual coordinate positions of errors aligned with WCAG standard criteria?
              </p>
            </div>
            <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Must map pixel density and aspect scales cleanly over any responsive layout canvas dynamically.
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
                By prompting Gemini 2.5 Flash to act as a Senior UI Specialist and return a strictly structured JSON violation array with relative layout percentages, we can draw immediate responsive markers over visual errors.
              </p>
            </div>
            <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Empowers dev velocity through automatic, immediate code recommendations right inside the preview pipeline.
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
              <div className="inline-block font-mono text-[10px] sm:text-xs font-bold text-indigo-650 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full uppercase tracking-wider">
                Auditor Strategy
              </div>
              <TrendingUp className="w-5 h-5 text-indigo-500" />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-900 leading-snug max-w-5xl">
                Bridging the engineering divide with <span className="text-indigo-600 underline decoration-indigo-200 decoration-2 underline-offset-4">automated visual diagnostics</span>.
              </h2>
              <p className="text-zinc-650 text-sm sm:text-base leading-relaxed max-w-4xl">
                fUXit operates by mapping layout designs directly into a cognitive audit loop. By combining multi-parameter heuristics with structured schemas, it turns aggressive screenshot uploads into clear, interactive bug lists complete with copy-paste instructions, contrast repairs, and space fixes.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: THE NESTED FUXIT CLIENT ACTIVE SANDBOX */}
        <section id="fuxit-workspace-section" className="space-y-8 pt-12 border-t border-zinc-200/40">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold tracking-widest text-purple-600 bg-purple-50 px-2.5 py-1 border border-purple-100 rounded uppercase block w-fit">
                fUXit Pro Live Sandbox
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Embedded Live Sandbox Demo
              </h2>
              <p className="text-zinc-550 text-sm sm:text-base max-w-2xl">
                Explore the production fUXit live app integrated directly below inside our secure sandbox mockup. Leverage the expert AI screenshot critique co-pilot instantly.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  setIframeKey(p => p + 1);
                }}
                className="flex items-center gap-2 px-4.5 py-2.5 bg-zinc-900 hover:bg-zinc-805 text-white text-xs font-bold rounded-xl shadow-2xs cursor-pointer transition-all flex items-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Live Sandbox</span>
              </button>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <div className="w-full transition-all duration-300">
              
              {/* Browser top/window bar simulation */}
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
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                    <span>fUXit Pro Live Dashboard</span>
                  </div>
                </div>

                {/* Secured address bar */}
                <div className="bg-zinc-900 border border-zinc-850 text-xs text-zinc-400 px-4 py-1.5 rounded-xl flex items-center gap-2 font-mono w-full max-w-md mx-4 justify-between truncate">
                  <div className="flex items-center gap-1.5 truncate">
                    <Lock className="w-3.5 h-3.5 text-emerald-450 shrink-0" />
                    <span className="truncate select-all text-zinc-300 font-sans">https://f-u-xit.vercel.app/</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 px-1.5 py-0.5 bg-emerald-950/40 border border-emerald-950/50 rounded font-black shrink-0 uppercase tracking-widest leading-none">
                    SECURE SSL
                  </span>
                </div>

                {/* Instance Label */}
                <div className="hidden md:flex items-center gap-2 text-zinc-400 font-mono text-[10px] font-bold">
                  <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse shrink-0" />
                  <span className="text-purple-400">ACTIVE GEMINI ENGINE</span>
                </div>
              </div>

              {/* Iframe wrapper */}
              <div className="bg-white border-b border-l border-r border-zinc-250 rounded-b-2xl shadow-2xl relative overflow-hidden bg-zinc-900">
                <iframe
                  key={iframeKey}
                  src="https://f-u-xit.vercel.app/"
                  title="fUXit Live App Web Sandbox"
                  className="w-full h-[760px] border-0 outline-0 block relative z-10"
                  referrerPolicy="no-referrer"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-downloads"
                />
              </div>

              <div className="text-center text-[11px] text-zinc-400 mt-3 font-medium select-none flex items-center justify-center gap-2">
                <Info className="w-3.5 h-3.5 text-zinc-500" />
                <span>Responsive frame embedding direct production Vercel nodes. Experience the live AI-driven diagnostic system securely.</span>
              </div>

            </div>
          </div>

          <div style={{ display: "none" }} className="hidden">
            <div>
              <div>

              {/* Secure Active Screenshot Canvas Display Area */}
              <div 
                className="relative bg-zinc-900 rounded-3xl border border-zinc-800 aspect-video overflow-hidden flex flex-col items-center justify-center select-none group cursor-crosshair min-h-[380px]"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={handleCanvasClick}
              >
                {isUploading ? (
                  /* AI Diagnostic Analyzer Loading Overlay */
                  <div className="absolute inset-0 z-40 bg-zinc-950/90 flex flex-col items-center justify-center p-8 space-y-6 animate-fade-in">
                    <div className="p-4 bg-purple-950/40 border border-purple-900/60 rounded-3xl relative">
                      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                      <Sparkles className="w-5 h-5 text-purple-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="text-center space-y-2">
                      <h4 className="text-zinc-100 font-sans font-bold text-sm tracking-wide">Gemini 2.5 Visual Audit Engine Active</h4>
                      <p className="text-purple-400 font-mono text-xs font-bold animate-pulse max-w-md mx-auto leading-relaxed">{uploadSteps}</p>
                    </div>
                    <div className="w-full max-w-xs bg-zinc-900 h-1.5 rounded-full overflow-hidden border border-zinc-800">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-indigo-500 h-full transition-all duration-300 rounded-full"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 font-bold">{uploadProgress}% computed</span>
                  </div>
                ) : null}

                {/* Grid guidelines decoration on upload cover */}
                <div className="absolute inset-0 border border-zinc-800/40 pointer-events-none" />
                <div className="absolute inset-0 flex" style={{ backgroundImage: 'radial-gradient(rgba(147, 51, 234, 0.08) 1.2px, transparent 1.2px)', backgroundSize: '16px 16px' }} />

                 {/* If custom image uploaded */}
                 {uploadedImageUrl ? (
                  <img
                    src={uploadedImageUrl}
                    alt="Custom screenshot audit target"
                    className="w-full h-full object-contain object-center z-10 select-none pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  /* High Fidelity HTML Visual screenshots Simulator mapping to Presets styling to look identical */
                  <div 
                    onClick={(e) => e.stopPropagation()}
                    className="w-full h-full relative z-10 p-4 sm:p-5 flex flex-col justify-between text-left select-text"
                  >
                    
                    {/* Simulator Header */}
                    <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                        <span className="font-mono text-[10px] text-zinc-300 font-bold uppercase tracking-wider">{activePreset.name} (Nested App)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-purple-950/40 border border-purple-900/60 rounded text-[8px] font-mono text-purple-400 font-bold uppercase tracking-widest tracking-wide">
                          Live Sandbox App
                        </span>
                        <div className="px-2.5 py-0.5 bg-zinc-800 border border-zinc-700/60 rounded text-[9px] font-mono text-zinc-400">
                          Viewport: 100% Fluid
                        </div>
                      </div>
                    </div>

                    {/* Rendering LIVE interactive nested applications that coordinates point to */}
                    {selectedPresetId === "preset-1" && (
                      <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full space-y-3 py-3" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-baseline justify-between">
                          <h4 className="text-sm font-sans font-black tracking-tight text-white uppercase">Checkout Balance</h4>
                          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Item price: $99.00</span>
                        </div>
                        
                        {checkoutStatus ? (
                          <div className="bg-emerald-950/40 border border-emerald-900 px-3.5 py-3 rounded-xl space-y-2 text-center">
                            <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest">🎉 Checkout Success!</p>
                            <p className="text-[10px] text-zinc-400 leading-normal">Your order has been compiled. Let's see how our a11y contrast rules marked this checkout screen flow.</p>
                            <button 
                              onClick={() => {
                                setCheckoutStatus(null);
                                setCheckoutEmail("");
                                setCheckoutCard("");
                                setCheckoutCvv("");
                              }}
                              className="px-3 py-1 bg-zinc-800 hover:bg-zinc-750 text-white rounded text-[10px] font-bold uppercase cursor-pointer"
                            >
                              Restart Transaction
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            {/* Input Form with deliberate contrast violation (#94A3B8 on lightish/grey card - we use text-zinc-400 and text-zinc-500 tags to show the failure) */}
                            <div>
                              <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-1 select-none">
                                email prompt (fail contrast check #94A3B8)
                              </label>
                              <input 
                                type="email"
                                value={checkoutEmail}
                                onChange={(e) => setCheckoutEmail(e.target.value)}
                                placeholder="enter your email..."
                                className="w-full h-8 px-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 focus:outline-none focus:border-zinc-700 font-sans"
                              />
                            </div>

                            <div>
                              <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-1 select-none">
                                credit card number
                              </label>
                              <input 
                                type="text"
                                value={checkoutCard}
                                onChange={(e) => setCheckoutCard(e.target.value)}
                                placeholder="4111 2222 3333 4444"
                                className="w-full h-8 px-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 focus:outline-none focus:border-zinc-700 font-sans"
                              />
                            </div>

                            <div className="flex gap-2.5">
                              {/* Extreme spacing and danger collision point: Complete transaction next to cancel button with just 4px separator block */}
                              <button 
                                onClick={() => {
                                  if (checkoutEmail && checkoutCard) {
                                    setCheckoutStatus("success");
                                  } else {
                                    alert("Please fill out the checkout fields to complete the interactive template simulation!");
                                  }
                                }}
                                className="h-10 w-full bg-rose-950/20 border border-rose-900/40 rounded-xl flex items-center justify-center cursor-pointer hover:bg-rose-900/10 transition-all active:scale-98"
                              >
                                <span className="font-mono text-[9px] text-rose-500 font-extrabold uppercase">Complete Purchase</span>
                              </button>
                              
                              <button 
                                onClick={() => {
                                  setCheckoutEmail("");
                                  setCheckoutCard("");
                                  setCheckoutCvv("");
                                }}
                                className="h-10 w-1/3 bg-zinc-850 hover:bg-zinc-805 text-zinc-400 border border-zinc-800 rounded-xl flex items-center justify-center cursor-pointer transition-all active:scale-98"
                              >
                                <span className="font-mono text-[9px] text-zinc-500 font-bold uppercase">Cancel</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {selectedPresetId === "preset-2" && (
                      <div className="flex-1 flex flex-col sm:flex-row items-center justify-between gap-4 py-4 font-sans" onClick={(e) => e.stopPropagation()}>
                        <div className="space-y-3.5 max-w-xs w-full">
                          <div className="space-y-1">
                            <span className="inline-block px-2 py-0.5 bg-indigo-950/30 border border-indigo-900 text-indigo-400 text-[8.5px] font-black uppercase tracking-wider rounded">
                              CYBERPUNK FRAME
                            </span>
                            <h4 className="text-sm sm:text-base font-black text-white uppercase tracking-tight">
                              Neo-Brutalist Layout Console
                            </h4>
                          </div>

                          {/* Dynamic slider / control setting count */}
                          <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800/80 space-y-2">
                            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                              <span>ACTIVE CYBER NODES:</span>
                              <span className="font-bold text-indigo-400">{brutalistCount}</span>
                            </div>
                            <div className="flex gap-1.5 pt-1">
                              <button 
                                onClick={() => setBrutalistCount(prev => Math.max(1, prev - 1))}
                                className="flex-1 h-7 rounded bg-zinc-800 hover:bg-zinc-750 text-white font-bold text-xs flex items-center justify-center cursor-pointer"
                              >
                                -
                              </button>
                              <button 
                                onClick={() => setBrutalistCount(prev => prev + 1)}
                                className="flex-1 h-7 rounded bg-indigo-600 hover:bg-indigo-550 text-white font-bold text-xs flex items-center justify-center cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Brutalist custom avatar display rendering */}
                        <div className="w-1/2 sm:w-1/3 aspect-square bg-zinc-900 border-2 border-zinc-750 p-3 rounded-xl shadow-[4px_4px_0px_#4f46e5] relative flex flex-col items-center justify-between transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#4f46e5]">
                          <span className="text-[10px] font-mono font-black text-indigo-400 uppercase tracking-widest block self-start">TAGS VIEW</span>
                          <div className="bg-zinc-950 px-2 py-1.5 border border-zinc-800 rounded font-mono text-[9px] text-emerald-450 font-black tracking-trough uppercase text-center animate-pulse">
                            ACTIVE PROTO
                          </div>
                          <span className="text-[9px] text-zinc-400 truncate">{brutalistCount} Nodes Live</span>
                        </div>
                      </div>
                    )}

                    {selectedPresetId === "preset-3" && (
                      <div className="flex-1 flex flex-col gap-3 py-3 font-mono text-[10px]" onClick={(e) => e.stopPropagation()}>
                        
                        {/* Tab header utilizing 3 mismatched font families at once as highlighted in the error audit! */}
                        <div className="grid grid-cols-3 gap-2 border-b border-zinc-850 pb-2">
                          <button 
                            onClick={() => setActiveTechnicalTab("serif")}
                            className={`px-2 py-1.5 rounded transition-all cursor-pointer font-serif flex flex-col justify-between items-start ${
                              activeTechnicalTab === "serif" ? "bg-amber-950/30 border border-amber-900 text-amber-350" : "bg-zinc-900 text-zinc-500"
                            }`}
                          >
                            <span className="text-[8px] uppercase tracking-wider">Tab A:</span>
                            <span className="font-bold">Serif Handshake</span>
                          </button>

                          <button 
                            onClick={() => setActiveTechnicalTab("mono")}
                            className={`px-2 py-1.5 rounded transition-all cursor-pointer font-mono flex flex-col justify-between items-start ${
                              activeTechnicalTab === "mono" ? "bg-purple-950/30 border border-purple-900 text-purple-350" : "bg-zinc-900 text-zinc-500"
                            }`}
                          >
                            <span className="text-[8px] uppercase tracking-wider">Tab B:</span>
                            <span className="font-bold">Monospace Accu</span>
                          </button>

                          <button 
                            onClick={() => setActiveTechnicalTab("sans")}
                            className={`px-2 py-1.5 rounded transition-all cursor-pointer font-sans flex flex-col justify-between items-start ${
                              activeTechnicalTab === "sans" ? "bg-emerald-950/30 border border-emerald-900 text-emerald-350" : "bg-zinc-900 text-zinc-500"
                            }`}
                          >
                            <span className="text-[8px] uppercase tracking-wider">Tab C:</span>
                            <span className="font-bold">Standard Sans</span>
                          </button>
                        </div>

                        {/* Interactive dynamic slider control for simulated multipliers */}
                        <div className="flex items-center gap-3 bg-zinc-900 p-2 rounded-xl border border-zinc-850">
                          <span className="text-zinc-400 shrink-0 select-none">CONTROLLER INTENSITY:</span>
                          <input 
                            type="range"
                            min="20"
                            max="120"
                            value={analyticsMultiplier}
                            onChange={(e) => setAnalyticsMultiplier(Number(e.target.value))}
                            className="flex-1 accent-purple-500 bg-zinc-800 h-1 rounded-lg cursor-pointer"
                          />
                          <span className="text-zinc-200 font-black shrink-0">{analyticsMultiplier}%</span>
                        </div>

                        {/* Interactive Logs Area */}
                        <div className="space-y-1.5 flex-1 flex flex-col min-h-[110px]">
                          <div className="flex-1 bg-zinc-950/80 border border-zinc-850 p-2 rounded-lg font-mono text-[8px] sm:text-[9px] text-zinc-400 overflow-y-auto max-h-[90px] space-y-1">
                            {liveServerLogs.map((log, lIdx) => (
                              <div key={lIdx} className="leading-tight text-left">
                                <span className="text-zinc-650">[{new Date().toLocaleTimeString()}]</span> {log}
                              </div>
                            ))}
                          </div>

                          <form 
                            onSubmit={(e) => {
                              e.preventDefault();
                              if (logInputText.trim()) {
                                setLiveServerLogs(prev => [...prev, logInputText.trim()]);
                                setLogInputText("");
                              }
                            }}
                            className="flex gap-1.5"
                          >
                            <input 
                              type="text"
                              value={logInputText}
                              onChange={(e) => setLogInputText(e.target.value)}
                              placeholder="Type custom terminal server log item..."
                              className="flex-1 bg-zinc-900 border border-zinc-800 px-2 py-1 text-[9px] text-zinc-300 rounded focus:outline-none placeholder-zinc-600 font-mono"
                            />
                            <button 
                              type="submit"
                              className="px-2.5 py-1 bg-zinc-800 hover:bg-zinc-750 text-zinc-200 text-[9px] rounded font-bold cursor-pointer uppercase font-mono"
                            >
                              Add Log
                            </button>
                          </form>
                        </div>

                      </div>
                    )}

                    {/* Canvas Help tag info */}
                    <div className="border-t border-zinc-850 pt-2 flex items-center justify-between select-none">
                      <span className="text-[9px] font-mono text-zinc-500 flex items-center gap-1.5">
                        <HelpCircle className="w-3 h-3 text-purple-400" />
                        <span>Interactive coordinate mapper sandbox active. Click screenshot anywhere to test adding custom pinpoints.</span>
                      </span>
                    </div>

                  </div>
                )}

                {/* Overlayer Coordinates pinpoint bubbles */}
                {activePreset.pinpoints.map(pinpoint => {
                  const isHovered = hoveredPinpointId === pinpoint.id;
                  const isSelected = selectedPinpointId === pinpoint.id;
                  
                  return (
                    <button
                      key={pinpoint.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPinpointId(pinpoint.id);
                      }}
                      onMouseEnter={() => setHoveredPinpointId(pinpoint.id)}
                      onMouseLeave={() => setHoveredPinpointId(null)}
                      className={`absolute z-35 flex items-center justify-center h-8 w-8 rounded-full border-2 text-xs font-black font-mono transition-all duration-300 select-none shadow-md ${
                        isSelected
                          ? "bg-purple-600 border-white text-white scale-125 z-40 shadow-purple-500/40 outline-none ring-4 ring-purple-600/20"
                          : isHovered
                          ? "bg-purple-500 border-zinc-100 text-white scale-115"
                          : pinpoint.severity === "High"
                          ? "bg-rose-950/90 border-rose-500 text-rose-400"
                          : pinpoint.severity === "Medium"
                          ? "bg-amber-95/90 border-amber-500 text-amber-400"
                          : "bg-zinc-950/90 border-zinc-500 text-zinc-400"
                      }`}
                      style={{
                        left: `${pinpoint.x}%`,
                        top: `${pinpoint.y}%`,
                        transform: "translate(-50%, -50%)"
                      }}
                    >
                      <span>{pinpoint.id}</span>
                      
                      {/* Anchor beacon dynamic alert glow rings only on active selections */}
                      {isSelected && (
                        <div className="absolute -inset-2.5 rounded-full border border-purple-500 animate-ping opacity-45 pointer-events-none" />
                      )}
                    </button>
                  );
                })}

              </div>

            </div>

            {/* Right Box: Heuristic audits details and side information cards synced */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left border-l border-zinc-850/60 lg:pl-6">
              
              {/* Presets summary score breakdown */}
              <div className="space-y-4 bg-zinc-900/60 p-5 rounded-2xl border border-zinc-850 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <h4 className="text-zinc-100 text-sm font-sans font-bold flex items-center gap-2">
                    <Eye className="w-4 h-4 text-purple-400" />
                    <span>Diagnostics Overview</span>
                  </h4>
                  <div className="flex items-baseline gap-1 bg-zinc-800 py-1 px-2.5 rounded-lg border border-zinc-750 font-mono">
                    <span className="text-lg font-black text-purple-400 leading-none">{activePreset.overallScore}</span>
                    <span className="text-[10px] text-zinc-500">/100</span>
                  </div>
                </div>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans mt-1">
                  {activePreset.overallCritique}
                </p>
              </div>

              {/* Grid with category scores meters */}
              <div className="space-y-3.5">
                <h5 className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase font-black pl-1">
                  CORE HEURISTICS METRIC SHIELDS
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePreset.scores.map((stat, idx) => (
                    <div 
                      key={idx} 
                      className="bg-zinc-900 border border-zinc-850 p-4 rounded-xl flex flex-col justify-between"
                    >
                      <div className="flex justify-between items-start gap-1">
                        <span className="font-sans text-xs text-zinc-300 font-semibold leading-tight">{stat.name}</span>
                        <span className="text-[10px] font-mono font-bold text-zinc-500 shrink-0">{stat.score}/5</span>
                      </div>
                      <div className="mt-3 flex items-center justify-between gap-2.5">
                        <div className="flex gap-1 flex-1">
                          {Array.from({ length: stat.max }).map((_, starIdx) => (
                            <div 
                              key={starIdx} 
                              className={`h-1.5 flex-1 rounded-sm ${
                                starIdx < stat.score
                                  ? "bg-purple-500"
                                  : "bg-zinc-800"
                              }`}
                            />
                          ))}
                        </div>
                        <span className={`text-[9px] font-mono font-black uppercase px-2 py-0.5 rounded ${stat.color} shrink-0`}>
                          {stat.status.split(" ")[0]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sync Highlighting Violations item card details panel */}
              <div className="space-y-4 mt-2 flex-1">
                <h5 className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase font-black pl-1">
                  VIOLATION OVERLAYS ANNOTATIONS {`(${activePreset.pinpoints.length})`}
                </h5>

                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                  {activePreset.pinpoints.map(pinpoint => {
                    const isSelected = selectedPinpointId === pinpoint.id;
                    const isHovered = hoveredPinpointId === pinpoint.id;
                    
                    return (
                      <div
                        key={pinpoint.id}
                        onClick={() => setSelectedPinpointId(pinpoint.id)}
                        onMouseEnter={() => setHoveredPinpointId(pinpoint.id)}
                        onMouseLeave={() => setHoveredPinpointId(null)}
                        className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer select-none text-left relative ${
                          isSelected
                            ? "bg-purple-950/20 border-purple-500/70 shadow-sm"
                            : isHovered
                            ? "bg-zinc-900 border-zinc-750"
                            : "bg-zinc-900/50 border-zinc-850 hover:bg-zinc-900 hover:border-zinc-800"
                        }`}
                      >
                        {/* Selected vertical accent strip */}
                        {isSelected && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 rounded-l-xl" />
                        )}

                        <div className="flex justify-between items-start mb-2 gap-2">
                          <div className="flex items-center gap-2">
                            <span className={`h-5 w-5 rounded-md flex items-center justify-center font-mono text-[10px] font-black shrink-0 ${
                              isSelected
                                ? "bg-purple-600 text-white"
                                : "bg-zinc-800 text-zinc-400"
                            }`}>
                              {pinpoint.id}
                            </span>
                            <span className="font-sans font-bold text-zinc-200 text-xs sm:text-sm tracking-tight truncate max-w-[200px]">
                              {pinpoint.title}
                            </span>
                          </div>
                          
                          <span className={`text-[8.5px] font-mono font-bold px-2 py-0.5 rounded uppercase shrink-0 ${
                            pinpoint.severity === "High"
                              ? "bg-rose-950/60 text-rose-400 border border-rose-900/40"
                              : pinpoint.severity === "Medium"
                              ? "bg-amber-950/60 text-amber-400 border border-amber-900/40"
                              : "bg-zinc-800 text-zinc-450"
                          }`}>
                            {pinpoint.severity} Alert
                          </span>
                        </div>

                        {isSelected && (
                          <div className="space-y-3 mt-3 ml-7 pt-2.5 border-t border-zinc-850/60 animate-fade-in font-sans">
                            <div className="space-y-1">
                              <span className="text-[10px] font-mono font-semibold text-zinc-500 uppercase tracking-widest block">DIAGNOSTIC CRITIQUE</span>
                              <p className="text-zinc-350 text-xs leading-relaxed">{pinpoint.critique}</p>
                            </div>
                            <div className="space-y-1">
                              <span className="text-[10px] font-mono font-semibold text-zinc-500 uppercase tracking-widest block text-purple-400">GEMINI FIX PROPOSAL</span>
                              <p className="text-zinc-350 text-xs leading-relaxed font-sans">{pinpoint.recommendation}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
          </div>
        </section>

        {/* STATS IMPACT METRICS FOOTER */}
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
