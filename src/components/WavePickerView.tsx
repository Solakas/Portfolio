import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import AnimatedStatCard from "./AnimatedStatCard";
import { ShieldAlert, Smartphone, Sparkles, Layers, Cpu, CheckCircle } from "lucide-react";

interface WavePickerViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function WavePickerView({ onClose, onPrev, onNext }: WavePickerViewProps) {
  const specs = [
    { label: "My Role", value: "Lead Product Designer" },
    { label: "Product Type", value: "Android Mobile Picking Software" },
    { label: "Field Research", value: "On-Site shadowing and physical floor interviews" },
    { label: "Locating System", value: "Shelf-Location Architecture (Aisle-Bay-Shelf-Bin)" },
    { label: "Feedback Loop", value: "Multisensory Haptic and Sound Scanning verify" }
  ];

  const bentoCards = [
    {
      title: "One-Hand Thumb Navigation",
      description: "Designed all active interfaces (scans, replacements, skip steps) comfortably within standard thumb reach, leaving the picker's other hand free to handle heavy grocery cargo.",
      icon: Smartphone,
      badge: "PHYSICAL ERGONOMICS"
    },
    {
      title: "Shelf Coordinates mapping",
      description: "Redesigned the picker display to explicitly show Aisle, Bay, Shelf, and Bin coordinates, guiding workers along continuous non-backtracking paths through physical spaces.",
      icon: Layers,
      badge: "ROUTE OPTIMIZATION"
    },
    {
      title: "Frictionless AI Substitution",
      description: "Implemented custom prompt sheets suggesting valid, policy-compliant substitutes with photos and locations instantly when items are out of stock.",
      icon: Cpu,
      badge: "STOCK-OUT MANAGEMENT"
    },
    {
      title: "Interactive Batch Picking",
      description: "Created multi-order interfaces to organize up to 6 orders simultaneously in individual color-coded storage totes on one single store loop.",
      icon: CheckCircle,
      badge: "OPERATIONAL SCALE"
    }
  ];

  const impactStats = [
    { value: "-30%", text: "Reduction in physical picking time, allowing workers to complete more routes with far less physical strain." },
    { value: "100%", text: "Picking and staging accuracy attained through hardware barcode camera scans." },
    { value: "-$0.5", text: "Saved on average fulfillment cost per individual supermarket customer order." }
  ];

  return (
    <ProjectDetailLayout
      title="Wave Grocery Picker App"
      category="Android Picking & Fulfillment"
      badge="FRONT-LINE UTILITY"
      subtitle="Shadowing retail pickers in physical aisles, translating daily store constraints into an Android utility that optimizes picking routes and effort."
      productPageUrl="https://www.wavegrocery.com/picking-software-for-online-grocery-stores"
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
      hideSubtitles={true}
    >
      <div className="space-y-24 mt-12 text-left">
        
        {/* SECTION 1: SPECIFICATIONS MATRIX */}
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
                frontline warehouse and store pickers face severe physical exhaustion. Duringpeak hours, they ran through grocery aisles pushing heavy carts, backtracking frequently due to disjointed item locations. One worker said: “The only way I can do better in my job is to run.”
              </p>
            </div>
            <p className="text-[11px] text-zinc-405 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Running is dangerous, unsustainable, increases picker turnover, and causes picking and staging catalog errors.
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
                As the Lead Product Designer, I spent active shifts shadowing supermarket pickers inside retail locations. This design-led research gave me deep empathy for frontline constraints. I designed the tactile scanning feedback mechanisms, the thumb-optimized layouts, and coordinates search sheets.
              </p>
            </div>
            <p className="text-[11px] text-zinc-405 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Shifted focus entirely from forcing pickers to move faster towards building software that minimized physical effort.
            </p>
          </div>

          {/* CARD 3: HOW I SOLVED IT */}
          <div className="bg-white border border-zinc-200/85 p-8 rounded-3xl shadow-3xs space-y-4 hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-emerald-700">
                <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100/50">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1 font-bold font-bold">How I Solved It</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans mt-2">
                I formulated an aisle-routing path guiding pickers in non-backtracking loops, integrated distinct multisensory scanning feedbacks (success pings vs sound buzzers), and designed an instantaneous 1-tap customer approval substitute screen.
              </p>
            </div>
            <p className="text-[11px] text-zinc-405 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              frontline workers reported lower physical exhaustion, resulting in higher employee retention and flawless accuracy.
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
                Hiring Manager Briefing (Personal Note)
              </div>
              <Sparkles className="w-5 h-5 text-indigo-505 animate-pulse" />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-900 leading-snug max-w-5xl">
                UX improvements that support <span className="text-indigo-600 underline decoration-indigo-200 decoration-2 underline-offset-4">frontline supermarket staff</span>.
              </h2>
              <p className="text-zinc-640 text-sm sm:text-base leading-relaxed max-w-4xl font-sans">
                This project is a great example of design in the field. I shadowed pickers in supermarkets to understand their workday constraints. Designing for workers on their feet requires ergonomics: screens must be readable on the move and actions must be easy to perform with one hand. By optimization of routes, we reduced physical backtracking and walking distances.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: CORE BENCHMARKING GRID */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <h3 className="font-sans font-black text-sm text-zinc-900 uppercase tracking-widest pl-1 font-bold">
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
                      <h4 className="text-base font-bold tracking-tight text-zinc-900 font-sans font-bold">
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
            Verified Frontline Picker Impact Metrics
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
