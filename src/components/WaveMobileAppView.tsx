import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import AnimatedStatCard from "./AnimatedStatCard";
import { ShieldAlert, Smartphone, Sparkles, Layers, Cpu, CheckCircle } from "lucide-react";

interface WaveMobileAppViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function WaveMobileAppView({ onClose, onPrev, onNext }: WaveMobileAppViewProps) {
  const specs = [
    { label: "My Role", value: "Lead Product Designer" },
    { label: "Platform Type", value: "Native iOS & Android White-Label Apps" },
    { label: "Variables Scale", value: "300+ Core Components, 1000+ Variants" },
    { label: "Token System", value: "3-Tier Variable Tokens Architecture" },
    { label: "Audit Standards", value: "ADA & WCAG 2.1 AA Compliant" }
  ];

  const bentoCards = [
    {
      title: "Three-Tier Design Tokens",
      description: "Implemented custom theme parameters allowing instant brand styling swaps in minutes (colors, fonts, borders, shadows) while remaining in a unified codebase.",
      icon: Layers,
      badge: "MULTI-BRAND PATTERNS"
    },
    {
      title: "Weighted Products Flow",
      description: "Designed a lightweight dual-selection toggle which lets users choose between ordering by quantity (count) or exact weight (grams/oz), complete with picker preference comments.",
      icon: Cpu,
      badge: "GROCERY SPECIFIC"
    },
    {
      title: "Tactile Native Micro-Animations",
      description: "Crafted swift feedback states for cart interaction, swipe-to-delete layouts, and transitional skeletal placeholders to eliminate perceived wait times.",
      icon: Sparkles,
      badge: "ERGONOMIC INTERACTIONS"
    },
    {
      title: "Dietary and Allergy Profiles",
      description: "Created interactive filtering profiles that highlight healthy items or flag allergen conflicts across diverse grocery catalogs.",
      icon: CheckCircle,
      badge: "USER PERSONALIZATION"
    }
  ];

  const impactStats = [
    { value: "4.7★", text: "Average Rating attained globally across Google Play and Apple App Store deployments." },
    { value: "+130%", text: "Increase in consumer purchase conversion rate compared to standard mobile browser flows." },
    { value: "-70%", text: "Reduction in client onboarding design and deployment engineering cycles via token automation." }
  ];

  return (
    <ProjectDetailLayout
      title="Wave Grocery Mobile App"
      category="Multi-Brand Native Applications"
      badge="LIVE B2B2C MOBILE SUITE"
      subtitle="Designing native iOS and Android white-label apps using a centralized design system that scales across multiple retail brands."
      tenantUrl="https://apps.apple.com/gr/app/thanopoulos/id6477913151?l=el"
      tenantUrlLabel="Thanopoulos (iOS)"
      tenantUrl2="https://play.google.com/store/apps/details?id=uk.lamart.store"
      tenantUrlLabel2="LaMart (Android)"
      productPageUrl="https://www.wavegrocery.com/mobile-application"
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
                <span className="block font-sans text-xs sm:text-sm font-bold text-zinc-805 mt-1">
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
                <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1 font-bold">What I Faced</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans mt-2">
                Grocery e-commerce needs to deploy white-label apps for multiple competitive retailers out of a single codebase. Simple logo swaps weren't enough. We faced the challenge of providing unique visual identity, diverse catalogs, and separate checkout parameters without visual replication.
              </p>
            </div>
            <p className="text-[11px] text-zinc-405 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Retail projects traditionally drag down design velocity by requiring custom bespoke updates for each separate brand.
            </p>
          </div>

          {/* CARD 2: MY ROLE */}
          <div className="bg-white border border-zinc-200/85 p-8 rounded-3xl shadow-3xs space-y-4 hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-indigo-650">
                <div className="p-2 bg-indigo-55 rounded-xl border border-indigo-100/50">
                  <Smartphone className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1 font-bold">My Role</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans mt-2">
                As the Lead Product Designer, I owned the mobile design strategy and tokens implementation. I designed, engineered, and structured a localized variable token architecture in Figma that automated complete brand styles (fonts, spacing, border-widths, primary colors) natively for iOS & Android engineers.
              </p>
            </div>
            <p className="text-[11px] text-zinc-405 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Coordinated token-mapping directly with mobile engineers to guarantee flawless translation from Figma variables to native code.
            </p>
          </div>

          {/* CARD 3: HOW I SOLVED IT */}
          <div className="bg-white border border-zinc-200/85 p-8 rounded-3xl shadow-3xs space-y-4 hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-emerald-700">
                <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100/50">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1 font-bold">How I Solved It</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans mt-2">
                I formulated a three-tier variable tokens structure (Global → Semantic → Component Overrides), separating structural layouts from visual presets. This enabled retailers to choose between distinct styles (e.g., modern pill-shaped rounded vs. classic serif sharp-edged structure) with zero custom coding.
              </p>
            </div>
            <p className="text-[11px] text-zinc-405 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Accompanied the launch with bespoke, grocery-specific flows (weight-toggles, dietary segments) to maximize user accessibility.
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
              <div className="inline-block font-mono text-[10px] sm:text-xs font-bold text-indigo-150 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full uppercase tracking-wider">
                Hiring Manager Briefing
              </div>
              <Sparkles className="w-5 h-5 text-indigo-505 animate-pulse" />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-900 leading-snug max-w-5xl">
                A design system focusing on <span className="text-indigo-600 underline decoration-indigo-200 decoration-2 underline-offset-4">fast deployment and brand customization</span>.
              </h2>
              <p className="text-zinc-640 text-sm sm:text-base leading-relaxed max-w-4xl font-sans">
                This project shows how to design scalable, platform-agnostic architectures. Instead of treating mobile design as static screens, we built a configurable design system. By structuring design system tokens at the foundation, we allowed the team to deploy customized brand experiences without rewriting code.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: CORE BENCHMARKING GRID */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <h3 className="font-sans font-black text-sm text-zinc-900 uppercase tracking-widest pl-1">
              UX Solutions & Features Deployed
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bentoCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx} 
                  className="border rounded-3xl p-8 flex flex-col justify-between shadow-3xs transition-all duration-300 hover:shadow-xs hover:border-zinc-400 bg-white border-zinc-200 text-zinc-95"
                >
                  <div className="space-y-6 text-left">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-3xs bg-zinc-50 border-zinc-200 text-indigo-600">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div className="space-y-2">
                      <span className="font-mono text-[10px] font-bold tracking-wider opacity-60 uppercase">
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
        </div>

        {/* STATS FOOTER INDEX */}
        <div className="pt-12 border-t border-zinc-200/40">
          <h3 className="font-mono text-xs font-bold text-zinc-400 tracking-wider uppercase mb-8 select-none">
            Verified Mobile Impact Metrics
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
