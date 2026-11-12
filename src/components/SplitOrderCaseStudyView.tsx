import React, { useState, useEffect, useRef } from "react";
import ProjectDetailLayout from "./ProjectDetailLayout";
import AnimatedStatCard from "./AnimatedStatCard";
import { 
  ShoppingBag, 
  Sparkles, 
  Layers, 
  Cpu, 
  ArrowRight, 
  ExternalLink, 
  ShieldAlert, 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  Timer, 
  Zap, 
  Check, 
  Store, 
  Calendar, 
  DollarSign, 
  Package, 
  Shuffle, 
  BarChart3, 
  RefreshCw,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Plus,
  X,
  MapPin,
  CreditCard,
  ArrowLeftRight,
  ChevronRight,
  Info
} from "lucide-react";

interface SplitOrderCaseStudyViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function SplitOrderCaseStudyView({ onClose, onPrev, onNext }: SplitOrderCaseStudyViewProps) {
  const [activeTab, setActiveTab] = useState<"prototype" | "state">("prototype");

  // Step A Interactive State
  const [showStoreTooltip, setShowStoreTooltip] = useState<boolean>(false);
  const [tileCartCount, setTileCartCount] = useState<number>(0);

  // Step B Interactive Bottom Sheet State
  const [selectedStore, setSelectedStore] = useState<string>("FreshMart");
  const [isStoreSheetOpen, setIsStoreSheetOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("Added Organic Avocados from FreshMart");

  // Step C Interactive Sub-Cart Re-balancing State
  const [avocadoStore, setAvocadoStore] = useState<"freshmart" | "auchan">("freshmart");

  // ==========================================
  // GOOGLE ANALYTICS EVENT TRACKING
  // ==========================================
  const trackAnalyticsEvent = (eventName: string, params: Record<string, any> = {}) => {
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", eventName, {
        case_study_id: "split-order",
        case_study_title: "Designing a Unified Multi-Retailer Checkout",
        ...params,
      });
    }
  };

  const startTimeRef = useRef<number>(Date.now());
  const hasTrackedExitRef = useRef<boolean>(false);

  // 1. Track Visit (page_view & case_study_view) + 2. Track Dwell Time / Engagement
  useEffect(() => {
    startTimeRef.current = Date.now();
    hasTrackedExitRef.current = false;

    // A. Page View & Case Study View tracking
    trackAnalyticsEvent("page_view", {
      page_title: "Designing a Unified Multi-Retailer Checkout - Case Study",
      page_path: "/live-products/split-order",
      page_location: window.location.href,
    });

    trackAnalyticsEvent("case_study_view", {
      category: "UX Case Study",
      product_name: "Wave Grocery Storefront (B2C Marketplace)",
      referrer: document.referrer || "direct"
    });

    // B. Incremental Engagement Milestones (15s, 30s, 60s, 120s, 180s, 300s)
    const milestones = [15, 30, 60, 120, 180, 300];
    const milestoneTimers: NodeJS.Timeout[] = [];

    milestones.forEach((sec) => {
      const timer = setTimeout(() => {
        trackAnalyticsEvent("case_study_engagement_milestone", {
          duration_seconds: sec,
          milestone_label: `${sec}s_engaged`,
          event_category: "dwell_time"
        });
      }, sec * 1000);
      milestoneTimers.push(timer);
    });

    // C. Final Dwell Time Recording on Navigation / Exit / Tab Hide
    const recordDwellTime = () => {
      if (hasTrackedExitRef.current) return;
      hasTrackedExitRef.current = true;
      const durationSec = Math.max(1, Math.round((Date.now() - startTimeRef.current) / 1000));
      const durationMin = Number((durationSec / 60).toFixed(1));

      trackAnalyticsEvent("case_study_dwell_time", {
        duration_seconds: durationSec,
        duration_minutes: durationMin,
        event_category: "dwell_time",
        event_label: `Dwell Time: ${durationSec}s`
      });

      trackAnalyticsEvent("user_engagement", {
        engagement_time_msec: Date.now() - startTimeRef.current,
        page_path: "/live-products/split-order"
      });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        recordDwellTime();
      }
    };

    window.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", recordDwellTime);

    return () => {
      milestoneTimers.forEach(clearTimeout);
      recordDwellTime();
      window.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", recordDwellTime);
    };
  }, []);

  // 3. Track Prototype Link Clicks
  const handlePrototypeClick = (source: "header_chip" | "sandbox_button") => {
    trackAnalyticsEvent("prototype_link_click", {
      prototype_url: "https://split-order-prototype.vercel.app/",
      click_source: source,
      event_category: "conversion",
      event_label: `Prototype Clicked from ${source}`
    });
  };

  const specs = [
    { label: "Product Role", value: "Lead Product Designer" },
    { label: "Product", value: "Wave Grocery Storefront (B2C Marketplace)" },
    { label: "Team", value: "1 PM, 1 Tech Lead, 3 Eng, 1 QA" },
    { label: "Timeline", value: "Q4 2025 (4 Weeks Frame to Handoff)" },
    { label: "Validation", value: "20-User High-Fi Usability Simulation" }
  ];

  const coreImpactStats = [
    { 
      value: "+22%", 
      text: "Increase in checkout funnel conversion compared to the separate-checkout prototype model." 
    },
    { 
      value: "+18%", 
      text: "Increase in Average Order Value (AOV) driven by frictionless multi-store item bundling." 
    },
    { 
      value: "-45%", 
      text: "Reduction in checkout time-to-task by eliminating redundant payment and address entries." 
    }
  ];

  const frictionPoints = [
    {
      num: "01",
      title: "High Cognitive Load",
      desc: "Users struggle to track which items ship from where, how much each delivery costs, and why they have differing arrival windows."
    },
    {
      num: "02",
      title: "Transaction Fatigue",
      desc: "Re-entering payment methods, review screens, and delivery addresses for sequential checkouts spikes abandonment rates up to 65%."
    },
    {
      num: "03",
      title: "Grocery-Specific Constraints",
      desc: "Each supermarket has independent timeslot capacities, plastic bag environmental levies, and distinct minimum order values (MOVs)."
    }
  ];

  const competitiveAnalysis = [
    {
      platform: "Instacart",
      model: "Sequential Checkouts",
      pros: "Shows clear split groupings inside cart view.",
      cons: "High friction. Forces users through distinct checkout cycles for each store, causing cart abandonment.",
      status: "Friction Bottleneck"
    },
    {
      platform: "Amazon",
      model: "Separate Marketplace Carts",
      pros: "Keeps fulfillment orders strictly isolated.",
      cons: "Poor visibility. Users must toggle between carts via dropdowns, losing basket overview.",
      status: "Poor Visibility"
    },
    {
      platform: "Magento",
      model: "Post-Purchase Split",
      pros: "Single linear checkout layout.",
      cons: "Hidden splits. Users only discover multiple shipments after charging their card. Lacks per-store slots.",
      status: "Hidden Splits"
    },
    {
      platform: "Skroutz",
      model: "Unified Grouped Checkout",
      pros: "Clear merchant item grouping, single payment transaction with aggregated fees.",
      cons: "Lacks perishable grocery constraints: tight timeslots, store-level minimum order thresholds, and bag levies.",
      status: "Non-Grocery"
    },
    {
      platform: "Wave Grocery (Our Model)",
      model: "Unified & Shared Settings",
      pros: "Global address and payment entered once. Per-merchant timeslots, unified €100 basket minimum, live debounced slot locks.",
      cons: "Satisfies all grocery constraints with zero cognitive fatigue.",
      status: "Optimized Baseline",
      highlight: true
    }
  ];

  const personas = [
    {
      name: "Natalia, 36",
      role: "Regular Shopper",
      avatar: "🛒",
      quote: "I want convenience and speed. I'll buy from two stores if it saves me a second trip, but I won't type my credit card twice.",
      goal: "Save offline physical supermarket trips by bundling orders into one transaction.",
      pain: "Abandons cart immediately if forced into repetitive checkout forms."
    },
    {
      name: "Alexandra, 53",
      role: "House Specialist",
      avatar: "👩‍🍳",
      quote: "I need absolute clarity on fees and delivery times. I budget closely and hate surprise fees at the final review.",
      goal: "Compare store prices, lock precise delivery windows for perishable meat & produce.",
      pain: "Hidden fees, vague timeslot ranges, or surprise multi-delivery surcharges."
    },
    {
      name: "Manolo, 65",
      role: "Physical Store Buyer",
      avatar: "👴",
      quote: "I find complex technology confusing. I need to clearly see what I am buying and understand how many packages are arriving.",
      goal: "Order specialty goods from home simply without confusing digital jargon.",
      pain: "Abstract terminology like 'Sub-orders'. Requires clear 'Delivery 1' & 'Delivery 2' labeling."
    }
  ];

  const designPivots = [
    {
      title: "Dead End 1: The Multi-Checkout Model (The Instacart Route)",
      type: "deadend",
      problem: "Initial prototype forced sequential checkouts (Checkout Store A ➡️ Pay ➡️ Checkout Store B ➡️ Pay). 4 out of 5 test users got confused, thinking their card was being charged twice or gave up. 65% of test users abandoned the cart.",
      solution: "Shifted to a Unified Checkout where address, contact info, and payment are global, and only delivery-specific settings (timeslots, bags, vouchers) are configured per sub-order."
    },
    {
      title: "Dead End 2: Fragmented Minimum Order Thresholds",
      type: "deadend",
      problem: "Enforcing individual minimum order limits per retailer (e.g. €40 for Store A and €40 for Store B) to protect fulfillment margins was a catastrophic conversion killer. Users struggled to find extra items in each store just to check out.",
      solution: "Pivoted to a Unified Global Minimum Order of €100 for the entire transaction. This protected operational margins while making it effortless for shoppers to bundle across stores."
    }
  ];

  return (
    <ProjectDetailLayout
      title="Designing a Unified Multi-Retailer Checkout"
      category="Wave Grocery Storefront — B2C Marketplace"
      badge="UX CASE STUDY"
      subtitle="How we transformed a single-grocer checkout into a seamless multi-retailer marketplace checkout, boosting conversion by +22% without transaction fatigue."
      liveUrl="https://split-order-prototype.vercel.app/"
      liveUrlLabel="Open Live Prototype"
      onLiveUrlClick={() => handlePrototypeClick("header_chip")}
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
              Project Overview & Parameters
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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

        {/* SECTION 2: EXECUTIVE SUMMARY & CORE METRICS */}
        <section className="space-y-8">
          <div className="border-l-4 border-emerald-500 pl-4 select-none">
            <span className="font-mono text-xs font-bold tracking-widest text-emerald-600 uppercase block">
              01. Executive Summary & Impact
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-zinc-950">
              Transforming Single-Grocer to Multi-Retailer Marketplace
            </h3>
          </div>

          <div className="prose prose-zinc max-w-4xl text-zinc-600 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              To expand market reach and multiply catalog variety, we transformed Wave Grocery from a single-supermarket white-label storefront into a <strong>multi-retailer marketplace partner</strong>. This architectural leap enabled customers to add items from diverse supermarket chains (e.g., Makro, Auchan, Automercado) and seasonal warehouse pre-orders (e.g., Realfoods) into a <strong>single, unified digital cart</strong>.
            </p>
            <p>
              However, multi-retailer ordering typically introduces extreme friction: disjointed deliveries, separate shipping fees, distinct timeslots, and independent store minimums. By conceptualizing and testing a <strong>Unified Checkout Experience</strong> with clear pre-purchase split visualizations, we unlocked significant performance metrics:
            </p>
          </div>

          {/* Animated Impact KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {coreImpactStats.map((stat, idx) => (
              <AnimatedStatCard
                key={idx}
                value={stat.value}
                text={stat.text}
                index={idx}
              />
            ))}
          </div>
        </section>

        {/* SECTION 3: BUSINESS CONTEXT & GROCERY INSIGHT */}
        <section className="space-y-8">
          <div className="border-l-4 border-indigo-600 pl-4 select-none">
            <span className="font-mono text-xs font-bold tracking-widest text-indigo-600 uppercase block">
              02. Business Context & Strategic Insight
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-zinc-950">
              The Grocery "Multi-Homing" Phenomenon
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
              <h4 className="text-lg font-bold text-zinc-900 font-sans">
                The Business Goal: 3x Catalog Scaling
              </h4>
              <p>
                To scale catalog breadth by <strong>3x</strong> and capture new customer cohorts, the executive strategy required aggregating multiple grocery retailers on a single digital storefront. Furthermore, we needed to support seasonal warehouse pre-orders (such as gourmet holiday items booked weeks in advance) in the same cart alongside everyday perishable groceries.
              </p>
              <h4 className="text-lg font-bold text-zinc-900 font-sans pt-2">
                A Grocery-Specific Behavioral Insight
              </h4>
              <p>
                Consumer research in online grocery revealed a distinct pattern: <strong>the average consumer regularly shops from 2 to 3 different supermarkets</strong> ("multi-homing") to balance product freshness, pricing tiers, and brand exclusivity.
              </p>
              <p>
                Rather than forcing shoppers to pick one brand or manage multiple apps, our platform aggregated these fragmented grocery baskets into a <strong>single high-value digital transaction</strong>, capturing casual and offline buyers while multiplying platform transaction volume.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-3xs">
              <h4 className="font-sans font-bold text-base text-zinc-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <span>Split Checkout Friction Bottlenecks</span>
              </h4>
              <div className="space-y-5">
                {frictionPoints.map((item) => (
                  <div key={item.num} className="flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                      {item.num}
                    </span>
                    <div>
                      <h5 className="font-sans font-bold text-sm text-zinc-900">
                        {item.title}
                      </h5>
                      <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: COMPETITIVE LANDSCAPE */}
        <section className="space-y-8">
          <div className="border-l-4 border-teal-500 pl-4 select-none">
            <span className="font-mono text-xs font-bold tracking-widest text-teal-600 uppercase block">
              03. Competitive Analysis & Gap Discovery
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-zinc-950">
              Benchmarking Multi-Fulfillment Models
            </h3>
          </div>

          <div className="border border-zinc-200/80 rounded-2xl overflow-hidden bg-white shadow-3xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-zinc-50 border-b border-zinc-200 font-mono text-[10px] uppercase text-zinc-400 tracking-wider">
                  <tr>
                    <th className="p-4 sm:p-5">Platform</th>
                    <th className="p-4 sm:p-5">Checkout Model</th>
                    <th className="p-4 sm:p-5">UX Pros</th>
                    <th className="p-4 sm:p-5">Grocery Limitations</th>
                    <th className="p-4 sm:p-5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {competitiveAnalysis.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`transition-colors ${
                        row.highlight 
                          ? "bg-emerald-50/40 font-medium" 
                          : "hover:bg-zinc-50/50"
                      }`}
                    >
                      <td className="p-4 sm:p-5 font-bold text-zinc-900 whitespace-nowrap">
                        {row.platform}
                      </td>
                      <td className="p-4 sm:p-5 text-zinc-600 font-mono text-xs">
                        {row.model}
                      </td>
                      <td className="p-4 sm:p-5 text-zinc-600 max-w-xs">
                        {row.pros}
                      </td>
                      <td className="p-4 sm:p-5 text-zinc-600 max-w-sm">
                        {row.cons}
                      </td>
                      <td className="p-4 sm:p-5 whitespace-nowrap">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                          row.highlight 
                            ? "bg-emerald-100 text-emerald-800 border border-emerald-200" 
                            : "bg-zinc-100 text-zinc-600 border border-zinc-200"
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 5: PERSONAS */}
        <section className="space-y-8">
          <div className="border-l-4 border-amber-500 pl-4 select-none">
            <span className="font-mono text-xs font-bold tracking-widest text-amber-600 uppercase block">
              04. Target Personas & Value Proposition
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-zinc-950">
              Validating Across Consumer Archetypes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personas.map((persona, index) => (
              <div 
                key={index} 
                className="bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-3xs hover:border-zinc-400 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{persona.avatar}</span>
                    <div>
                      <h4 className="font-sans font-bold text-base text-zinc-900">
                        {persona.name}
                      </h4>
                      <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                        {persona.role}
                      </span>
                    </div>
                  </div>

                  <p className="font-serif italic text-zinc-700 text-xs sm:text-sm bg-zinc-50 border border-zinc-150/60 p-4 rounded-2xl leading-relaxed">
                    "{persona.quote}"
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t border-zinc-100 mt-6 text-xs text-zinc-600">
                  <div>
                    <span className="font-bold text-zinc-900 block font-sans">Core Goal:</span>
                    <span>{persona.goal}</span>
                  </div>
                  <div>
                    <span className="font-bold text-rose-600 block font-sans">Friction Risk:</span>
                    <span>{persona.pain}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: DESIGN PROCESS & KEY PIVOTS */}
        <section className="space-y-8">
          <div className="border-l-4 border-rose-500 pl-4 select-none">
            <span className="font-mono text-xs font-bold tracking-widest text-rose-600 uppercase block">
              05. The Design Process, Dead Ends & Pivots
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-zinc-950">
              Evidence-Based Iteration & Crucial Breakthroughs
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designPivots.map((pivot, idx) => (
              <div 
                key={idx}
                className="bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-3xs"
              >
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-100">
                    Failed Hypothesis & Tested Pivot
                  </span>
                  <h4 className="font-sans font-bold text-base sm:text-lg text-zinc-900">
                    {pivot.title}
                  </h4>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="bg-rose-50/50 border border-rose-100 p-4 rounded-2xl text-rose-900 space-y-1">
                    <span className="font-bold block uppercase font-mono text-[10px] text-rose-700 tracking-wider">
                      The Dead End & User Resistance:
                    </span>
                    <p className="leading-relaxed">{pivot.problem}</p>
                  </div>

                  <div className="bg-emerald-50/50 border border-emerald-100 p-4 rounded-2xl text-emerald-950 space-y-1">
                    <span className="font-bold block uppercase font-mono text-[10px] text-emerald-700 tracking-wider">
                      The Strategic Design Pivot:
                    </span>
                    <p className="leading-relaxed">{pivot.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: STEP BY STEP UX WALKTHROUGH */}
        <section className="space-y-12">
          <div className="border-l-4 border-indigo-500 pl-4 select-none">
            <span className="font-mono text-xs font-bold tracking-widest text-indigo-600 uppercase block">
              06. Concept Level Design Decisions
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-zinc-950">
              End-to-End Architectural Walkthrough
            </h3>
            <p className="text-zinc-500 text-xs sm:text-sm mt-1 max-w-3xl">
              A step-by-step breakdown of how the product design systematically resolved friction points across the customer journey from catalog discovery to the final multi-retailer order confirmation.
            </p>
          </div>

          <div className="space-y-16">
            
            {/* STEP A: Product Tile & Discovery */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-10 shadow-3xs hover:border-zinc-300 transition-all">
              {/* Content Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-zinc-900 text-white font-mono text-[10px] font-bold rounded-full uppercase tracking-wider">
                    Step A
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">
                    Catalog Discovery Phase
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-sans font-bold text-2xl text-zinc-950">
                    Product Tile & Multi-Store Discovery
                  </h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    In traditional single-retailer e-commerce, product cards present a static price per unit. In a multi-supermarket marketplace, however, the exact same SKU (e.g. Hass Avocados) is sold by three different retailers at differing prices, freshness grades, and delivery schedules. Hiding this until checkout creates cognitive disorientation.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-zinc-900">Design Decision:</strong> Replaced the conventional <code className="bg-zinc-100 px-1.5 py-0.5 rounded font-mono text-zinc-800 text-xs">€/Kg</code> badge with an active <code className="bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded font-mono text-xs font-bold border border-emerald-200">in N stores</code> aggregation indicator.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-zinc-900">Interaction Rationale:</strong> Hovering or tapping the indicator opens an instant price-comparison tooltip, letting shoppers make informed merchant choices immediately without leaving their catalog browsing loop.
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Mockup Column */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-zinc-50 border border-zinc-200/70 rounded-2xl relative min-h-[320px]">
                {/* Product Card Mockup */}
                <div className="w-full max-w-[270px] bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm space-y-4 relative transition-all duration-300 hover:shadow-md">
                  {/* Emoji / Image Placeholder */}
                  <div className="w-full h-28 bg-emerald-50/60 rounded-xl flex items-center justify-center text-4xl select-none border border-emerald-100/50">
                    🥑
                  </div>

                  <div className="space-y-1">
                    <h5 className="font-sans font-bold text-sm text-zinc-900 leading-snug">
                      Organic Avocados (Pack of 3)
                    </h5>
                    <p className="text-[11px] text-zinc-400">Class 1 • Bio Certified</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
                    <div className="relative">
                      <span className="block font-sans font-extrabold text-base text-zinc-950">
                        €3.40
                      </span>
                      {/* Interactive "in 3 stores" Badge */}
                      <button
                        onClick={() => setShowStoreTooltip(!showStoreTooltip)}
                        className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-md cursor-pointer transition-colors flex items-center gap-1 mt-0.5"
                      >
                        <span>in 3 stores</span>
                        <Info className="w-3 h-3" />
                      </button>

                      {/* Tooltip Overlay */}
                      {showStoreTooltip && (
                        <div className="absolute left-0 bottom-full mb-2 w-48 bg-zinc-900 text-white rounded-xl p-2.5 shadow-xl text-[11px] z-30 font-mono space-y-1.5 animate-in fade-in zoom-in-95 duration-200">
                          <div className="font-bold text-zinc-300 uppercase text-[9px] border-b border-zinc-800 pb-1">
                            Available Retailers:
                          </div>
                          <div className="flex justify-between items-center text-emerald-400 font-bold">
                            <span>FreshMart</span>
                            <span>€3.40 ★</span>
                          </div>
                          <div className="flex justify-between items-center text-zinc-300">
                            <span>Auchan</span>
                            <span>€3.65</span>
                          </div>
                          <div className="flex justify-between items-center text-zinc-300">
                            <span>Makro</span>
                            <span>€3.80</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Add to Cart button */}
                    <button
                      onClick={() => {
                        setTileCartCount(prev => prev + 1);
                        setToastMessage(`Added Organic Avocados from ${selectedStore}`);
                      }}
                      className="w-9 h-9 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white flex items-center justify-center font-bold text-base cursor-pointer transition-transform active:scale-90 shadow-sm"
                      title="Add to cart"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-zinc-400 mt-4 text-center">
                  💡 Click "in 3 stores" to view live merchant price comparison
                </span>
              </div>
            </div>

            {/* STEP B: Smart Defaults & Bottom Sheet */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-10 shadow-3xs hover:border-zinc-300 transition-all">
              {/* Visual Mockup Column (Left on Desktop) */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-center justify-center p-6 bg-zinc-50 border border-zinc-200/70 rounded-2xl relative min-h-[320px] overflow-hidden">
                {/* Toast Notification Mockup */}
                <div className="w-full max-w-xs bg-zinc-950 text-white rounded-2xl p-4 shadow-xl flex items-center justify-between gap-3 text-xs font-sans z-10 border border-zinc-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="truncate max-w-[170px]">{toastMessage}</span>
                  </div>
                  <button
                    onClick={() => setIsStoreSheetOpen(!isStoreSheetOpen)}
                    className="font-bold text-sky-400 hover:text-sky-300 text-xs uppercase font-mono tracking-wider cursor-pointer underline px-1 py-0.5 rounded"
                  >
                    Change
                  </button>
                </div>

                {/* Simulated Bottom Sheet Drawer */}
                {isStoreSheetOpen ? (
                  <div className="w-full max-w-xs mt-4 bg-white border border-zinc-200 rounded-2xl p-4 shadow-lg space-y-3 animate-in slide-in-from-bottom-4 duration-300">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                      <span className="font-sans font-bold text-xs text-zinc-900 uppercase tracking-wider">
                        Choose Merchant
                      </span>
                      <button 
                        onClick={() => setIsStoreSheetOpen(false)}
                        className="text-zinc-400 hover:text-zinc-700 text-xs cursor-pointer p-0.5"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="space-y-1.5 font-sans text-xs">
                      {[
                        { name: "FreshMart", price: "€3.40", tag: "Lowest Price", best: true },
                        { name: "Auchan", price: "€3.65", tag: "2 items in cart", best: false },
                        { name: "Makro", price: "€3.80", tag: "Express Hub", best: false }
                      ].map((store) => (
                        <div
                          key={store.name}
                          onClick={() => {
                            setSelectedStore(store.name);
                            setToastMessage(`Added Organic Avocados from ${store.name}`);
                            setIsStoreSheetOpen(false);
                          }}
                          className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                            selectedStore === store.name
                              ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-bold"
                              : "bg-zinc-50 border-zinc-200/80 hover:bg-zinc-100 text-zinc-700"
                          }`}
                        >
                          <div>
                            <span className="block">{store.name}</span>
                            <span className="text-[10px] text-zinc-400 font-mono font-normal">{store.tag}</span>
                          </div>
                          <div className="text-right">
                            <span>{store.price}</span>
                            {selectedStore === store.name && (
                              <span className="block text-[9px] text-emerald-600 font-mono">SELECTED</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsStoreSheetOpen(true)}
                    className="mt-6 text-xs font-mono font-semibold text-zinc-500 hover:text-zinc-800 underline cursor-pointer"
                  >
                    Click "Change" on the toast to open store sheet
                  </button>
                )}
              </div>

              {/* Content Column (Right on Desktop) */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-zinc-900 text-white font-mono text-[10px] font-bold rounded-full uppercase tracking-wider">
                    Step B
                  </span>
                  <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider">
                    Friction-Free Cart Insertion
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-sans font-bold text-2xl text-zinc-950">
                    Smart Defaulting & Interactive Bottom Sheet
                  </h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    If an app demands that users pick a store every single time they tap "Add to Cart", the user experiences severe decision fatigue and abandons the catalog. Our behavioral hypothesis proved that 80%+ of shoppers prioritize the lowest item price by default.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-zinc-900">Algorithmic Default:</strong> Automatically defaults to the merchant with the lowest price, placing items in the cart with 1 click.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-zinc-900">Immediate Reversibility:</strong> Surfaces a prominent <span className="text-sky-600 font-bold">"Change" CTA</span> on the confirmation toast. Tapping it opens a lightweight bottom sheet to re-assign the store in under 2 seconds without navigating away.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP C: Full-Page Cart Grouping */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-10 shadow-3xs hover:border-zinc-300 transition-all">
              {/* Content Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-zinc-900 text-white font-mono text-[10px] font-bold rounded-full uppercase tracking-wider">
                    Step C
                  </span>
                  <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                    Pre-Purchase Segmentation
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-sans font-bold text-2xl text-zinc-950">
                    Full-Page Cart Grouping (Sub-Carts)
                  </h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    A flat cart list creates the false assumption that all products will ship in one single bag. When couriers arrive at different times, consumers feel misled. We segmented the cart page into visually distinct **"Sub-Carts"** per merchant with dedicated branding and delivery times.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-zinc-900">Sub-Cart Split Grouping:</strong> Deliveries are branded individually (e.g. <code className="bg-zinc-100 px-1 rounded text-xs font-mono">Delivery 1 - FreshMart</code>, <code className="bg-zinc-100 px-1 rounded text-xs font-mono">Delivery 2 - Auchan</code>).
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-zinc-900">Client-Side Item Swapping:</strong> Users can tap or drag items between sub-carts, instantly triggering client-side recalculations of delivery fees and minimum order progress without server lag.
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Mockup Column */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-zinc-50 border border-zinc-200/70 rounded-2xl relative min-h-[320px]">
                {/* Visual Subcarts Box */}
                <div className="w-full max-w-sm space-y-3 select-none">
                  
                  {/* Subcart 1: FreshMart */}
                  <div className="bg-white border border-zinc-200 rounded-xl p-3.5 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-100 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-blue-100 text-blue-700 font-mono font-bold text-[10px] flex items-center justify-center">
                          F
                        </span>
                        <strong className="font-sans text-zinc-900">Delivery 1: FreshMart</strong>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                        Today 18:00
                      </span>
                    </div>

                    <div className="space-y-1 text-xs text-zinc-600">
                      {avocadoStore === "freshmart" && (
                        <div className="flex justify-between items-center py-0.5">
                          <span>🥑 Organic Avocados (x3)</span>
                          <span className="font-bold text-zinc-900">€3.40</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center py-0.5">
                        <span>🥛 Organic Whole Milk (1L)</span>
                        <span className="font-bold text-zinc-900">€1.90</span>
                      </div>
                    </div>
                  </div>

                  {/* Subcart 2: Auchan */}
                  <div className="bg-white border-2 border-dashed border-zinc-200 rounded-xl p-3.5 space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-100 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-amber-100 text-amber-700 font-mono font-bold text-[10px] flex items-center justify-center">
                          A
                        </span>
                        <strong className="font-sans text-zinc-900">Delivery 2: Auchan</strong>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
                        Tomorrow 10:00
                      </span>
                    </div>

                    <div className="space-y-1 text-xs text-zinc-600">
                      <div className="flex justify-between items-center py-0.5">
                        <span>🥚 Free-Range Eggs (x6)</span>
                        <span className="font-bold text-zinc-900">€2.60</span>
                      </div>
                      {avocadoStore === "auchan" && (
                        <div className="flex justify-between items-center py-0.5 text-emerald-700 font-medium">
                          <span>🥑 Organic Avocados (x3)</span>
                          <span className="font-bold text-zinc-900">€3.65</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Interactive Swap Button */}
                  <button
                    onClick={() => setAvocadoStore(prev => prev === "freshmart" ? "auchan" : "freshmart")}
                    className="w-full py-2 px-3 bg-white hover:bg-zinc-100 border border-zinc-200 rounded-xl text-[11px] font-mono font-bold text-zinc-700 flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-2xs"
                  >
                    <ArrowLeftRight className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Demo: Move Avocados to {avocadoStore === "freshmart" ? "Auchan" : "FreshMart"}</span>
                  </button>

                </div>
              </div>
            </div>

            {/* STEP D: Hierarchical Unified Checkout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-10 shadow-3xs hover:border-zinc-300 transition-all">
              {/* Visual Mockup Column (Left on Desktop) */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-center justify-center p-6 bg-zinc-50 border border-zinc-200/70 rounded-2xl relative min-h-[320px]">
                {/* Checkout Architecture Mockup */}
                <div className="w-full max-w-sm bg-white border border-zinc-200 rounded-2xl p-4 shadow-sm space-y-3 font-sans text-xs select-none">
                  
                  {/* Top: Global Data Bar */}
                  <div className="p-2.5 bg-zinc-100 rounded-xl flex items-center justify-between text-zinc-800">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-zinc-500" />
                      <span className="font-bold text-[11px]">Shipping & Payment</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-100">
                      ENTERED ONCE
                    </span>
                  </div>

                  {/* Middle: Side-by-Side Merchant Slots */}
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="p-2.5 rounded-xl border border-zinc-200 bg-zinc-50 space-y-1">
                      <span className="font-bold text-zinc-900 block truncate">FreshMart Slot</span>
                      <span className="text-emerald-700 font-mono font-bold block">09:00 - 11:00 AM</span>
                      <span className="text-zinc-400 block">Paper bags • Slot locked</span>
                    </div>

                    <div className="p-2.5 rounded-xl border border-zinc-200 bg-zinc-50 space-y-1">
                      <span className="font-bold text-zinc-900 block truncate">Auchan Slot</span>
                      <span className="text-emerald-700 font-mono font-bold block">10:00 - 12:00 PM</span>
                      <span className="text-zinc-400 block">No bags • Slot locked</span>
                    </div>
                  </div>

                  {/* Bottom: Dynamic Unified CTA */}
                  <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider font-mono shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors">
                    <span>Place Order (2 Deliveries)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono pt-1">
                    <span>Global MOV: €100 Met</span>
                    <span>Total Charges: 1 Click</span>
                  </div>

                </div>
              </div>

              {/* Content Column (Right on Desktop) */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-zinc-900 text-white font-mono text-[10px] font-bold rounded-full uppercase tracking-wider">
                    Step D
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">
                    Unified Transaction Closure
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-sans font-bold text-2xl text-zinc-950">
                    Hierarchical Unified Checkout Architecture
                  </h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    The Instacart model of running distinct sequential checkouts failed in user tests (65% abandonment due to transaction fatigue and fears of double-charging). Our solution split the checkout screen into a **two-tier cognitive hierarchy**.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-zinc-900">Universal Top Tier:</strong> Customer contact info, delivery address, and credit card credentials are captured globally once.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-zinc-900">Granular Split Tier:</strong> Store-specific parameters (independent timeslot windows, plastic bag environmental choices, store vouchers) are configured side-by-side.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-zinc-900">Explicit CTA Messaging:</strong> The checkout action displays <code className="bg-emerald-50 text-emerald-800 px-1 rounded text-xs font-mono font-bold">Place Order (2 Deliveries)</code>, eliminating any ambiguity before final payment execution.
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 8: INTERACTIVE PROTOTYPE & STATE MACHINE */}
        <section className="space-y-8">
          <div className="border-l-4 border-emerald-600 pl-4 select-none">
            <span className="font-mono text-xs font-bold tracking-widest text-emerald-600 uppercase block">
              07. Interactive Prototype & State Engine
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-zinc-950">
              Live Exploration Sandbox
            </h3>
          </div>

          {/* Toggle Controls */}
          <div className="flex items-center justify-between flex-wrap gap-4 select-none">
            <div className="flex items-center gap-2 p-1.5 bg-zinc-100 rounded-full border border-zinc-200 text-xs font-bold font-mono">
              <button
                onClick={() => setActiveTab("prototype")}
                className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                  activeTab === "prototype" 
                    ? "bg-white text-zinc-900 shadow-xs border border-zinc-200" 
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                Live Interactive Sandbox
              </button>
              <button
                onClick={() => setActiveTab("state")}
                className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                  activeTab === "state" 
                    ? "bg-white text-zinc-900 shadow-xs border border-zinc-200" 
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                Checkout State Machine
              </button>
            </div>

            <a
              href="https://split-order-prototype.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handlePrototypeClick("sandbox_button")}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-full transition-colors font-mono"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {activeTab === "prototype" ? (
            <div className="border border-zinc-200 rounded-3xl overflow-hidden bg-white shadow-xl">
              <div className="bg-zinc-100 border-b border-zinc-200 px-4 py-3 flex items-center justify-between text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-bold text-zinc-700">split-order-prototype.vercel.app</span>
                </div>
                <span className="hidden sm:inline text-zinc-400">Live Client-Side Simulation</span>
              </div>
              <div className="w-full h-[680px] bg-zinc-50 relative">
                <iframe 
                  src="https://split-order-prototype.vercel.app/" 
                  title="Interactive Split Order Prototype"
                  className="w-full h-full border-none"
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            <div className="bg-white border border-zinc-200/80 rounded-3xl p-8 space-y-8 shadow-3xs">
              <div className="space-y-2">
                <h4 className="font-sans font-bold text-xl text-zinc-900">
                  Multi-Retailer 15-Minute Countdown State Machine
                </h4>
                <p className="text-zinc-500 text-xs sm:text-sm">
                  Delivery slots and supermarket inventory in physical stores are volatile resources. We collaborated with backend engineering to architect a deterministic 15-minute checkout countdown state machine.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-emerald-800">State 01</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <h5 className="font-sans font-bold text-sm text-emerald-950">Active Checkout Lock</h5>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Reserves timeslots across multiple independent supermarket databases simultaneously. A unified 15-minute countdown locks slots and prevents double-booking.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-amber-800">State 02</span>
                    <Clock className="w-4 h-4 text-amber-600" />
                  </div>
                  <h5 className="font-sans font-bold text-sm text-amber-950">Graceful Expiration Warning</h5>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    At T-2 minutes without interaction, a subtle floating modal warns the user. Clicking 'Extend Session' refreshes the lease without dumping the multi-store cart.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-rose-800">State 03</span>
                    <ShieldAlert className="w-4 h-4 text-rose-600" />
                  </div>
                  <h5 className="font-sans font-bold text-sm text-rose-950">Safe Inventory Release</h5>
                  <p className="text-xs text-rose-800 leading-relaxed">
                    If session abandonment occurs, slots are instantly released back into the supermarket database pool, avoiding phantom lockouts for store personnel.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* SECTION 9: ENGINEERING COLLABORATION */}
        <section className="space-y-8">
          <div className="border-l-4 border-zinc-900 pl-4 select-none">
            <span className="font-mono text-xs font-bold tracking-widest text-zinc-400 uppercase block">
              08. Technical Engineering Collaboration
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-zinc-950">
              Co-Designing for Real-World Reliability
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-zinc-200/80 p-6 sm:p-8 rounded-3xl space-y-4 shadow-3xs">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-650">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-base text-zinc-900">
                Finite Inventory Holds
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Co-architected client-server synchronization where timeslot locks are held with 15-minute TTL tokens, decoupling UI responsiveness from legacy ERP latency.
              </p>
            </div>

            <div className="bg-white border border-zinc-200/80 p-6 sm:p-8 rounded-3xl space-y-4 shadow-3xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-base text-zinc-900">
                Debounced Validations
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Slot choices trigger 300ms debounced verification requests with localized skeleton feedback states, preventing excessive server hammering during quick swaps.
              </p>
            </div>

            <div className="bg-white border border-zinc-200/80 p-6 sm:p-8 rounded-3xl space-y-4 shadow-3xs">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700">
                <Shuffle className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-base text-zinc-900">
                Client-Side Recalculations
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Moving items between sub-carts immediately recalculates delivery fees, bag levies, and minimum thresholds directly in local state without blocking network requests.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 10: USABILITY SIMULATION RESULTS & STRATEGIC NEXT STEPS */}
        <section className="space-y-8">
          <div className="border-l-4 border-emerald-500 pl-4 select-none">
            <span className="font-mono text-xs font-bold tracking-widest text-emerald-600 uppercase block">
              09. Quantitative Validation & Key Learnings
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-zinc-950">
              Simulation Results & Long-Term Strategy
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-3xs">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-emerald-600" />
                <h4 className="font-sans font-bold text-base text-zinc-900">
                  The "Convenience vs. Cost" Trade-off
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Usability testing revealed that consumers are intensely sensitive to multiple delivery fees. Even if the checkout interaction is frictionless, paying two €4.00 shipping fees feels like a double tax.
              </p>
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 font-medium">
                <strong>Strategic Roadmap Recommendation:</strong> Design a "Consolidated Hub Delivery" model where split orders are pooled at a central logistics depot, giving customers the option for a single combined delivery at a lower fee.
              </div>
            </div>

            <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-3xs">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                <h4 className="font-sans font-bold text-base text-zinc-900">
                  Designing for Low-Tech Literacy
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Task observation with older demographics (represented by Manolo) demonstrated that conceptual terms like "Sub-orders" or "Fulfillment Groups" cause cognitive stall.
              </p>
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 font-medium">
                <strong>Clarity Guideline:</strong> Concrete delivery numbering (e.g. <code>Delivery 1</code> & <code>Delivery 2</code>) alongside clear physical store badges drastically improved comprehension and confidence.
              </div>
            </div>
          </div>
        </section>

      </div>
    </ProjectDetailLayout>
  );
}
