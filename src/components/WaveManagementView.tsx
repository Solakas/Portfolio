import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import AnimatedStatCard from "./AnimatedStatCard";
import { ShieldAlert, AppWindow, Sparkles, Layers, Cpu, Users } from "lucide-react";

interface WaveManagementViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function WaveManagementView({ onClose, onPrev, onNext }: WaveManagementViewProps) {
  const specs = [
    { label: "My Role", value: "Lead Product Designer" },
    { label: "Platform Type", value: "B2B SaaS Admin Panel & CMS Suite" },
    { label: "Target Users", value: "Store Admins, Managers, Marketplace Operators" },
    { label: "Fulfillment Control", value: "Active SLA Warning & Safeguards" },
    { label: "Security Guard", value: "5 role-based preset configurations (RBAC)" }
  ];

  const bentoCards = [
    {
      title: "Store Scoping Navigation",
      description: "Structured a global store-selector dropdown which filters all active timeslots, products, and queues, completely preventing layout cross-editing errors.",
      icon: Users,
      badge: "INFORMATION ARCHITECTURE"
    },
    {
      title: "Interactive Capacity Sheet",
      description: "Replaced massive grid tables with an interactive calendar layout allowing managers to drag capacity allocations in real-time.",
      icon: Cpu,
      badge: "DELIVERY CAPACITY OPS"
    },
    {
      title: "WYSIWYG Flyer Builder",
      description: "Built a drag-and-drop marketing workspace where storefront managers can place products directly into promotional leaflets to auto-publish web banner deals.",
      icon: Layers,
      badge: "CONTENT MANAGEMENT"
    },
    {
      title: "Restricted Role Control",
      description: "Implemented a 5-tier role hierarchy (e.g. Wave Admin, Picker User, Phone Portal) with optimized interfaces tailored purely to their task focus.",
      icon: AppWindow,
      badge: "SECURITY DESIGN"
    }
  ];

  const impactStats = [
    { value: "<1h", text: "Store Manager onboarding and training time, reduced significantly from raw training periods spanning multiple days." },
    { value: "99.9%", text: "Fulfillment SLA Uptime maintained through automated early capacity indicator alerts." },
    { value: "-30%", text: "Reduction in omnichannel back-office order processing overhead across all operational teams." }
  ];

  return (
    <ProjectDetailLayout
      title="Wave Grocery Admin Panel"
      category="B2B SaaS Admin Panel & CMS"
      badge="LIVE OPERATIONAL SUITE"
      subtitle="Rebuilding complex warehouse configurations, logistics slots, roles, and flyers into a clean operations dashboard."
      productPageUrl="https://www.wavegrocery.com/management-software-for-online-grocery-business"
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
                <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1 font-bold font-bold">What I Faced</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans mt-2">
                Supermarket managers are busy, non-technical personnel who handle physical operations first. Legacy retail administrative panels overwhelmed them with dense tables, causing high error rates—such as blockading wrong deliveries or setting incorrect localized pricing.
              </p>
            </div>
            <p className="text-[11px] text-zinc-405 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              User errors on delivery and catalog settings directly impact daily customer order fulfillment SLAs.
            </p>
          </div>

          {/* CARD 2: MY ROLE */}
          <div className="bg-white border border-zinc-200/85 p-8 rounded-3xl shadow-3xs space-y-4 hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-indigo-650">
                <div className="p-2 bg-indigo-55 rounded-xl border border-indigo-100/50">
                  <AppWindow className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1 font-bold">My Role</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans mt-2">
                As the Lead Product Designer, I focused on reducing cognitive load and simplifying complex operations. I mapped the user mental model to restructure the layout architecture, co-designed visual calendaring controls, and established access safeguards to keep operators safe.
              </p>
            </div>
            <p className="text-[11px] text-zinc-405 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Balanced multi-user task scopes securely by engineering granular, custom role-based dashboards.
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
                I introduced global store-selectors to automatically scope settings, replaced tables with visual drag-and-drop schedules with warning alerts, built a custom WYSIWYG promo flyer maker, and designed 5 preset role dashboards minimizing mistakes.
              </p>
            </div>
            <p className="text-[11px] text-zinc-405 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Allowed supermarket franchises to deploy with near-zero training time for non-technical personnel.
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
              <Sparkles className="w-5 h-5 text-indigo-550 animate-pulse" />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-900 leading-snug max-w-5xl">
                Simplifying logistics settings into a <span className="text-indigo-600 underline decoration-indigo-200 decoration-2 underline-offset-4">clear dashboard</span>.
              </h2>
              <p className="text-zinc-640 text-sm sm:text-base leading-relaxed max-w-4xl font-sans">
                This management suite shows how I approach complex enterprise layout logic. Instead of nesting settings in endless preference tables, I redesigned the interface so store operators can complete tasks quickly and with fewer errors, reducing onboarding and operational overhead.
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
            Verified Admin Panel SaaS Impact
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
