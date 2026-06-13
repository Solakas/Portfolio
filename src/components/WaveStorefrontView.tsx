import React from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import AnimatedStatCard from "./AnimatedStatCard";
import { ShieldAlert, Globe, Sparkles, Layers, Cpu, Search } from "lucide-react";

interface WaveStorefrontViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function WaveStorefrontView({ onClose, onPrev, onNext }: WaveStorefrontViewProps) {
  const specs = [
    { label: "My Role", value: "Lead Product Designer" },
    { label: "Platform Type", value: "Responsive Web Storefront E-commerce" },
    { label: "Sync Support", value: "50,000+ Real-Time SKUs ERP Sync" },
    { label: "Theme Configs", value: "30+ Merchant Customization Variables" },
    { label: "Design Status", value: "Fully Parity with Native Mobile UI" }
  ];

  const bentoCards = [
    {
      title: "CMS Theme Engine",
      description: "Designed over 30 configuration variables (logo positioning, grid vs. list cards, font pairings, border radius weights) managed directly from the store-manager SaaS panel.",
      icon: Layers,
      badge: "PLATFORM CONFIGURATION"
    },
    {
      title: "Intelligent Autocomplete",
      description: "Implemented a contextual fuzzy search bar displaying instant product categories, brand matches, and quick basket additions without loading separate query pages.",
      icon: Search,
      badge: "PRODUCT DISCOVERY"
    },
    {
      title: "Preparation Selections",
      description: "Created extensible cart-drawer components allowing customers to select counter preparation options like 'finely grated' or 'thick steak cuts' on counter foods.",
      icon: Cpu,
      badge: "GROCERY ERGONOMICS"
    },
    {
      title: "ERP Sync & Safe Substitute",
      description: "Structured a graceful substitute-selection prompt duringcheckout, letting customers specify alternate preferences ('refund', 'contact', 'AI recommended') up front.",
      icon: Globe,
      badge: "INVENTORY RISK MITIGATION"
    }
  ];

  const impactStats = [
    { value: "+350%", text: "Increase in overall digital order volumes recorded across tier-1 chains (e.g., ANEDIK Kritikos Supermarkets)." },
    { value: "-25%", text: "Reduction in shopping cart abandonment rate by offering an immersive, sliding quick-checkout drawer." },
    { value: "50k+", text: "Real-time SKU catalog sizes updated seamlessly from local retail POS and ERP systems." }
  ];

  return (
    <ProjectDetailLayout
      title="Wave Grocery Web App"
      category="Responsive E-commerce Storefront"
      badge="LIVE WEB PLATFORM"
      subtitle="Designing high-conversion responsive web e-commerce storefronts supporting massive product catalogs, customizable food preparation preferences, and deep ERP integration."
      tenantUrl="https://www.thanopoulos.gr/"
      tenantUrlLabel="Thanopoulos App"
      tenantUrl2="https://www.lamartfood.co.uk/"
      tenantUrlLabel2="LaMart App"
      productPageUrl="https://www.wavegrocery.com/ordering-and-storefront"
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
                Online grocery buyers expect the familiarity and personal selection of physical stores. Real-world e-commerce templates fail at managing mass SKU catalogs, variable weight products, custom kitchen preparations, and pricing synced across fluctuating retail stocks.
              </p>
            </div>
            <p className="text-[11px] text-zinc-405 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Without custom grocery UX mechanisms, users abandon shopping carts due to confusing checkout experiences.
            </p>
          </div>

          {/* CARD 2: MY ROLE */}
          <div className="bg-white border border-zinc-200/85 p-8 rounded-3xl shadow-3xs space-y-4 hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-indigo-650">
                <div className="p-2 bg-indigo-55 rounded-xl border border-indigo-100/50">
                  <Globe className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1 font-bold">My Role</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans mt-2">
                As the Lead Product Designer, I led the core layout design and theme engine parameters. I structured custom layouts for search cataloging, responsive cart sheets, and substitute selection cards while keeping all visual definitions strictly linked to our shared token style library.
              </p>
            </div>
            <p className="text-[11px] text-zinc-405 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Collaborated directly with front-end engineers to ensure perfect, performance-optimized visual loading.
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
                I designed a modular theme layout with 30+ CMS variables allowing custom imagery adjustments, rapid search autocompletion shortcuts, inline cutting indicators, and a robust pre-checkout substitute selector that eliminated delivery dispute frictions.
              </p>
            </div>
            <p className="text-[11px] text-zinc-405 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
              Enabled full multi-device usability across mobile web, desktop, and tablets with zero layout break points.
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
                Balancing complex corporate inventory with <span className="text-indigo-600 underline decoration-indigo-200 decoration-2 underline-offset-4">humble and intuitive consumer usability</span>.
              </h2>
              <p className="text-zinc-640 text-sm sm:text-base leading-relaxed max-w-4xl font-sans">
                For a hiring manager analyzing complex SaaS capabilities, this storefront showcases my expertise in transactional UX design. Shopping for groceries is physically exhausting, and digitizing it can amplify friction if customers are faced with stock anomalies or dense layout grids. I focused on humanizing the interface—automating predictive search, building seamless preparation custom toggles directly on the card drawers, and mitigating stockouts.
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
            Verified Storefront Conversion Impact
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
