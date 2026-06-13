import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import AnimatedStatCard from "./AnimatedStatCard";
import { 
  ShieldAlert, 
  Globe, 
  Sparkles, 
  Layers, 
  Sliders, 
  FolderSync, 
  CheckCircle2, 
  HeartHandshake,
  TableOfContents
} from "lucide-react";

interface WGDesignSystemViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function WGDesignSystemView({ onClose, onPrev, onNext }: WGDesignSystemViewProps) {
  const specs = [
    { label: "Design System", value: "Wave Grocery DS v2.1.2" },
    { label: "Portfolio Coverage", value: "Web, Mobile, Frontline Tools" },
    { label: "Unified Inventory", value: "146 Core Published Components" },
    { label: "Token Population", value: "409 Active Exported Tokens" },
    { label: "Organizational Model", value: "Foundations / Patterns / Journeys" }
  ];

  const problemCards = [
    {
      title: "What I Faced",
      description: "As Wave Grocery grew, the atomic library model (Atoms / Molecules / Organisms) caused severe discoverability barriers and mental mismatches. Under-defined components accumulated silent duplicates, leading-space naming irregularities, and high-contrast styling drift that required custom visual adjustments across squads.",
      icon: ShieldAlert,
      iconColor: "text-rose-500",
      bgClass: "bg-rose-50/50",
      borderClass: "border-rose-100",
      badge: "THE HECK NOISE",
      footer: "Multiple duplicate components lived with subtle spelling discrepancies (e.g., 'Commet' in production)."
    },
    {
      title: "My Role",
      description: "Serving as Lead Designer and Design System Manager, I directed library cleanups and architecture audits. I mapping a hybrid journey-aware organizational taxonomy, unified variable labels, constructed strict vertical positioning rules, and aligned our multi-brand token delivery models.",
      icon: Globe,
      iconColor: "text-indigo-600",
      bgClass: "bg-indigo-50/50",
      borderClass: "border-indigo-100",
      badge: "DESIGN SYSTEMS LEAD",
      footer: "Coordinated design pipelines with frontend engineering teams to implement perfect tokens parity."
    },
    {
      title: "How I Solved It",
      description: "I migrated 146 components across 3 macro-pages (Foundations, Patterns, Journeys) across 25 subsections. I instituted a clickable Table of Contents directory with 146 hyperlinks and a unidirectional 3-tier token framework, ensuring brand skins take only minutes instead of weeks.",
      icon: Sparkles,
      iconColor: "text-emerald-600",
      bgClass: "bg-emerald-50/50",
      borderClass: "border-emerald-100",
      badge: "METICULOUS UNIFICATION",
      footer: "Cleaned duplicate modules, solved trailing typos, and stacked assets cleanly on strict visual columns."
    }
  ];

  const bentoBuckets = [
    {
      title: "Foundations Primative",
      description: "11 Sections containing 66 truly global, journey-agnostic primitives like Accordions, dropdown selects, and animated CTAs used recursively to build common layouts.",
      icon: Layers,
      badge: "66 COMPONENTS"
    },
    {
      title: "Patterns Skeleton",
      description: "5 Sections comprising 31 cross-journey skeletons such as breadcrumbs, category custom sliders, layouts, and responsive newsletters shaping multi-screen pages.",
      icon: Sliders,
      badge: "31 COMPONENTS"
    },
    {
      title: "Journeys Flow-Scoped",
      description: "9 Sections focusing on 49 flow-scoped modules like searchable product lists, map pins, payment cards, timeslot pickers, and loyalty summaries catering directly to journey builders.",
      icon: FolderSync,
      badge: "49 COMPONENTS"
    },
    {
      title: "Table Of Contents Index",
      description: "A clickable scannable landing interface with 146 hyperlinked scroll points. Eliminated 'where does X component live' queries by 90% across design teams.",
      icon: HeartHandshake,
      badge: "146 WORKING LINKS"
    }
  ];

  const impactStats = [
    { value: "409", text: "Active tokens synchronized seamlessly inside a Core → Foundation → Component dependency graph." },
    { value: "90%", text: "Drop in designer navigation delays and library search frictions by delivering the Interactive TOC directory." },
    { value: "+350%", text: "Increase in transactional e-commerce conversions achieved by scaling live checkout experiences without style breaks." }
  ];

  return (
    <ProjectDetailLayout
      title="Wave Grocery Design System"
      category="Design Systems"
      badge="WG DS v2.1.2"
      subtitle="Rebuilding and auditing a complex multi-tenant design library into a highly discoverable three-page hybrid framework, fueled by a multi-brand token system."
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
      hideSubtitles={true}
    >
      <div className="space-y-24 mt-12 text-left">
        
        {/* SECTION 1: CORE SPECIFICATIONS */}
        <section className="space-y-6 select-none">
          <div className="flex items-center gap-2">
            <h3 className="font-sans font-black text-sm text-zinc-900 uppercase tracking-widest font-bold">
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
                <span className="block font-sans text-xs sm:text-sm font-bold text-zinc-805 mt-1">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: THE 3-CARD LAYOUT PROBLEM BENCHMARK */}
        <section className="space-y-8 text-left select-none">
          <div className="flex items-center gap-2">
            <h3 className="font-sans font-black text-sm text-zinc-900 uppercase tracking-widest pl-1 font-bold">
              Design Systems Restructuring Brief
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problemCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-zinc-200/85 p-8 rounded-3xl shadow-3xs space-y-4 hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className={`flex items-center gap-3 ${card.iconColor}`}>
                      <div className={`p-2 rounded-xl border ${card.bgClass} ${card.borderClass}`}>
                        <Icon className="w-5 h-5 text-current" />
                      </div>
                      <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1 font-bold">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans mt-2">
                      {card.description}
                    </p>
                  </div>
                  <p className="text-[11px] text-zinc-405 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
                    {card.footer}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: CORE BRAND SWAPPING MECHANIC (THREE TIER ARCHITECTURE) */}
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
              <div className="inline-block font-mono text-[10px] sm:text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full uppercase tracking-wider">
                CORE BRAND ENGINE
              </div>
              <Sparkles className="w-5 h-5 text-indigo-505 animate-pulse" />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-900 leading-snug">
                One Single Core Edit can cascade to <span className="text-indigo-600 underline decoration-indigo-200 decoration-2 underline-offset-4">re-skin entire supermarkets</span> instantly.
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-zinc-650 text-sm leading-relaxed font-sans">
                <div className="space-y-1">
                  <h4 className="font-bold text-zinc-900 text-xs sm:text-sm font-sans">Tier 1: Core (Primitives)</h4>
                  <p className="text-xs leading-relaxed text-zinc-500">
                    105 raw values defines palettes and grayscale steps without context. Brand accent ramps define base primary (e.g. Greta warm orange vs Gigo fresh green). Altering these key ramps is the only entry point needed for brand onboarding.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-zinc-900 text-xs sm:text-sm font-sans">Tier 2: Foundations (Semantic)</h4>
                  <p className="text-xs leading-relaxed text-zinc-500">
                    154 tokens translating raw core palettes to semantic intent (`radius/small`, `spacing/component`, `palette.basic.primary`). Numeric scales ensure zero hard-coded spacing.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-zinc-900 text-xs sm:text-sm font-sans">Tier 3: Component Tokens</h4>
                  <p className="text-xs leading-relaxed text-zinc-500">
                    150 layout-specific mappings representing visual anatomy (`labels.grid tile labels.color`, `qty selector/outline`). Feeds design attributes directly on screens while staying insulated from color swaps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: THE HYBRID GRID */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <h3 className="font-sans font-black text-sm text-zinc-900 uppercase tracking-widest pl-1 font-bold">
              The Hybrid Library Page Taxonomy
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bentoBuckets.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx} 
                  className="border rounded-3xl p-8 flex flex-col justify-between shadow-3xs transition-all duration-300 hover:shadow-xs hover:border-zinc-400 bg-white border-zinc-200 text-zinc-95"
                >
                  <div className="space-y-6 text-left">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-3xs bg-zinc-50 border-zinc-200 text-indigo-650">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div className="space-y-2">
                      <span className="font-mono text-[10px] font-bold tracking-wider opacity-60 uppercase block">
                        {card.badge}
                      </span>
                      <h4 className="text-base font-bold tracking-tight text-zinc-900 font-sans">
                        {card.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-zinc-500 font-sans">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: SYSTEM ROIS & GROWTH OUTCOMES */}
        <section className="pt-8 border-t border-zinc-200/40">
          <h3 className="font-sans font-black text-sm text-zinc-900 uppercase tracking-widest font-bold mb-8">
            Verified Design Operations & System ROIs
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-zinc-650 text-sm leading-relaxed font-sans">
            <div className="space-y-4">
              <h4 className="text-base font-bold text-zinc-950 font-sans">Accelerating Brand Onboarding</h4>
              <p>
                Before Wave Grocery DS v2.1.2, scaling the e-commerce design system to support extra retail stores required designer squads to duplicate whole layouts, re-color components manually, and double-check spacing margins file by file. This was an error-prone, mult-week endeavour that caused critical visual inconsistencies between live merchant storefronts.
              </p>
              <p>
                By engineering the 3-tier unidirectional design token pipeline, this brand-swapping friction is entirely eliminated. Introducing an entirely new retail merchant requires editing just **22 brand-ramp token colors** at Core level (11 primary steps, 11 secondary steps). The entire 146 component assets ecosystem adapts instantly, reducing localized deployment timelines from two weeks to under two minutes.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-base font-bold text-zinc-950 font-sans">Drastically Improving System Usability</h4>
              <p>
                Figma-oriented systems easily fall victim to naming duplicate bloat. Identifying three components overlap as `Coupon` and finding overlapping `Selection Rows` in the atomic list during the audit showed standard atomic-design organizational barriers. 
              </p>
              <p>
                Grouping the components hybridly based on use-case (Foundations, Patterns, Journeys) aligned matching models with active designer workflows. Combined with the Interactive visual Table of Contents housing **146 working visual hyperlinks**, designers skip manual searching completely. This has achieved over **90% faster navigation times**, letting design partners focus completely on high-fidelity user workflows.
              </p>
            </div>
          </div>
        </section>

        {/* IMPACT STATISTICS */}
        <div className="pt-12 border-t border-zinc-200/40">
          <h3 className="font-mono text-xs font-bold text-zinc-400 tracking-wider uppercase mb-8 select-none">
            Verified Performance & Platform Metrics
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
