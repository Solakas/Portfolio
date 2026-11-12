import React from "react";
import CaseStudyLayout from "./CaseStudyLayout";
import PandaHabitsDeepDive from "../PandaHabitsDeepDive";
import AnimatedCounter from "../AnimatedCounter";
import ScrollReveal from "../ScrollReveal";
import { 
  Sparkles, ShieldAlert, Activity, BookOpen, Layers, Heart, 
  Code2, Brain, Hand, Palette, Smartphone
} from "lucide-react";

interface PandaHabitsCaseStudyProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function PandaHabitsCaseStudy({ onClose, onPrev, onNext }: PandaHabitsCaseStudyProps) {
  const navSections = [
    { id: "summary", label: "01. Metrics" },
    { id: "problem", label: "02. Psychology" },
    { id: "comparison", label: "03. Competitive" },
    { id: "design-lab", label: "04. Design Lab" },
    { id: "ui-mockups", label: "05. UI Mockups" },
    { id: "architecture", label: "06. Atomic Architecture" },
    { id: "impact", label: "07. Impact & A11y" }
  ];

  const meta = [
    { label: "Product", value: "PandaHabits App & DS" },
    { label: "Role", value: "Lead UX & Flutter Developer" },
    { label: "Design System", value: "Atomic Flutter Tokens" },
    { label: "A11y Baseline", value: "WCAG 2.1 AAA (48dp target)" }
  ];

  const metrics = [
    {
      value: "+38%",
      label: "Habit Retention Rate",
      desc: "Measured increase in 30-day user retention achieved by replacing clinical logging forms with warm mascot-guided micro-check-ins."
    },
    {
      value: "3.2x",
      label: "Developer Velocity",
      desc: "Reduction in sprint iteration cycles by auto-generating production Flutter Dart token files directly from unified Figma variables."
    },
    {
      value: "100%",
      label: "WCAG 2.1 AAA Pass",
      desc: "Zero contrast or touch target violations across all light and dark theme components with strict 48dp minimum hit areas."
    }
  ];

  const designLabCards = [
    {
      icon: Palette,
      badge: "A11y & Contrast",
      title: "WCAG AAA Token Audit",
      desc: "Real-time calculation of visual contrast ratios against Rice Paper groundings, ensuring all text tokens pass WCAG AAA (≥ 7.0:1) accessibility rules."
    },
    {
      icon: Hand,
      badge: "Tactile Bounds",
      title: "48dp Target Physics",
      desc: "Interactive visual verification of touch target regions, haptic feedback pulses, and TalkBack/VoiceOver screen-reader semantic traversal order."
    },
    {
      icon: Code2,
      badge: "Code Export",
      title: "Zero-Handoff Dart Snippets",
      desc: "Direct single-click copy of production-ready Flutter Dart theme classes (app_colors.dart, panda_avatar.dart) to eliminate manual developer styling translation."
    }
  ];

  const competitiveData = [
    {
      platform: "MyFitnessPal",
      model: "Strict Calorie Audit",
      pros: "Massive database.",
      cons: "Punitive red color warnings trigger guilt and high log-off abandonment.",
      tag: "Guilt-Based"
    },
    {
      platform: "Noom",
      model: "Traffic Light Colors",
      pros: "Psychology focus.",
      cons: "Strict red/green labeling creates food anxiety and chore fatigue.",
      tag: "Rigid"
    },
    {
      platform: "Habitica",
      model: "RPG Gamification",
      pros: "Fun avatar leveling.",
      cons: "Pixel art complexity overwhelms simple daily nutrition check-ins.",
      tag: "Complex"
    },
    {
      platform: "PandaHabits",
      model: "Compassionate Habit Loop",
      pros: "Soft mascot guidance, non-judgmental trend buffers, 100% WCAG AAA accessibility.",
      cons: "Requires initial 3-day baseline setup.",
      tag: "Compassionate",
      isHighlight: true
    }
  ];

  return (
    <CaseStudyLayout
      title="Building a Psychology-First Habit Tracker & Flutter Design System"
      subtitle="How we eliminated tracking fatigue and diet guilt by pairing warm mascot guidance with an atomic, zero-handoff code-first architecture."
      tag="Health Tech & Design System Case Study"
      meta={meta}
      navSections={navSections}
      liveUrl="https://panda-habits-web.vercel.app/"
      liveUrlLabel="Live Storybook"
      githubUrl="https://github.com/Solakas/PandaHabits"
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
    >
      {/* 01. EXECUTIVE SUMMARY & CORE METRICS */}
      <ScrollReveal>
        <section id="summary" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              01
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Executive Summary & Core Metrics
            </h2>
          </div>

          <div className="prose prose-zinc max-w-none text-zinc-650 text-base leading-relaxed space-y-4">
            <p>
              Most health and nutrition applications behave like digital audit ledgers. They bombard users with clinical spreadsheets, rigid calorie thresholds, and subtle visual punishment for missing arbitrary goals. This leads directly to <strong>tracking burnout and self-sabotage</strong>.
            </p>
            <p>
              <strong>PandaHabits</strong> was designed to shift focus from strict calculation to <strong>sustainable habit psychology</strong>. By pairing a warm Panda mascot companion with non-judgmental habit streaks and a Flutter atomic design system, we achieved the following results:
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

      {/* 02. PSYCHOLOGY-FIRST HABIT FRAMEWORK */}
      <ScrollReveal>
        <section id="problem" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              02
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              The Psychology-First Habit Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-6 text-zinc-650 text-base leading-relaxed">
              <h3 className="text-lg font-bold text-zinc-900">Why Spreadsheet Tracking Fails</h3>
              <p>
                When a user logs a high-calorie meal in traditional apps, the interface responds with red warnings and negative calorie balances. Behavioral psychology shows this triggers an <i>all-or-nothing mindset</i>: the user feels they have already "failed," leading to overeating and app abandonment.
              </p>
              <h3 className="text-lg font-bold text-zinc-900">The PandaHabits Behavioral Shift</h3>
              <ul className="space-y-3 font-medium text-zinc-800">
                <li className="flex items-start gap-2.5">
                  <Brain className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>The "Why" Over the "What":</strong> Identifying emotional eating triggers and stress patterns is vastly more valuable than logging single calories.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Mascot Buffer:</strong> The friendly Panda avatar acts as an emotional buffer, softening data collection and removing tracking guilt.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Heart className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Positive Reinforcement:</strong> Highlighting daily streaks and milestone roadmaps as micro-wins releases dopamine to solidify habit loops.</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-5 bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest">
                BRAND COLOR PSYCHOLOGY
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#111827] border border-zinc-700" />
                    <span className="font-mono font-bold text-zinc-800">Panda Ink (#111827)</span>
                  </div>
                  <span className="text-zinc-600 font-medium">Grounding text (15.6:1 ratio)</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#F9FAFB] border border-zinc-300" />
                    <span className="font-mono font-bold text-zinc-800">Rice Paper (#F9FAFB)</span>
                  </div>
                  <span className="text-zinc-600 font-medium">Warm non-sterile background</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#15803D]" />
                    <span className="font-mono font-bold text-zinc-800">Bamboo Green (#15803D)</span>
                  </div>
                  <span className="text-zinc-600 font-medium">Growth & vitality CTAs</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#0D9488]" />
                    <span className="font-mono font-bold text-zinc-800">Mindful Teal (#0D9488)</span>
                  </div>
                  <span className="text-zinc-600 font-medium">Psychology insights & reflection</span>
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
            <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              03
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Competitive Analysis & Behavioral Matrix
            </h2>
          </div>

          <div className="overflow-x-auto border border-zinc-200 rounded-3xl bg-white shadow-xs">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-zinc-50/80 border-b border-zinc-200 font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
                  <th className="p-4 pl-6">Platform</th>
                  <th className="p-4">Interaction Paradigm</th>
                  <th className="p-4">Pros</th>
                  <th className="p-4 pr-6">Behavioral Downside</th>
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

      {/* 04. PANDAHABITS DESIGN LAB & FLUTTER TOKENS */}
      <ScrollReveal>
        <section id="design-lab" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              04
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              PandaHabits Design Lab & Flutter Tokens
            </h2>
          </div>

          {/* 3 DESCRIPTIVE CARDS FOR DESIGN LAB */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {designLabCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="bg-white border border-zinc-200/80 rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:border-emerald-600/40 transition-all">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                        <Icon className="w-5 h-5 text-[#15803D]" />
                      </div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                        {card.badge}
                      </span>
                    </div>
                    <h3 className="font-bold text-zinc-900 text-base font-sans pt-1">
                      {card.title}
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <PandaHabitsDeepDive mode="design-lab" />
        </section>
      </ScrollReveal>

      {/* 05. HIGH-FIDELITY MOBILE LAYOUT SHOWCASE */}
      <ScrollReveal>
        <section id="ui-mockups" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              05
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              High-Fidelity Mobile Layout Showcase
            </h2>
          </div>

          <PandaHabitsDeepDive mode="ui-mockups" />
        </section>
      </ScrollReveal>

      {/* 06. ATOMIC ARCHITECTURE */}
      <ScrollReveal>
        <section id="architecture" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              06
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Atomic "Figma-less" Flutter Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-zinc-200 rounded-3xl p-6 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base">Atoms to Pages</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Design tokens automatically map directly to Dart constants, ensuring complete synchronization between design files and Flutter builds.
              </p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-3xl p-6 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base">Code Export Engine</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Developers can copy ready-to-use Flutter widget code snippets directly from the Design Lab interface with a single click.
              </p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-3xl p-6 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base">Multi-Platform Ready</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Built natively for iOS, Android, and Web target viewports using Flutter's multi-platform rendering engine.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 07. IMPACT & A11Y */}
      <ScrollReveal>
        <section id="impact" className="space-y-8 scroll-mt-28">
          <div className="flex items-center gap-3 border-b border-zinc-200/80 pb-4">
            <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
              07
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Impact & WCAG 2.1 AAA Baseline
            </h2>
          </div>

          <div className="bg-white border border-zinc-200/80 rounded-3xl p-8 space-y-6 shadow-xs">
            <h3 className="text-xl font-bold tracking-tight text-zinc-900">Accessibility First Architecture</h3>
            <p className="text-xs text-zinc-650 leading-relaxed">
              Every color pairing and touch surface in PandaHabits was audited against WCAG 2.1 AAA accessibility rules. Interactive touch targets maintain a minimum 48dp physical bounding box, and text elements support 200% elastic font scaling without breaking UI layouts.
            </p>
          </div>
        </section>
      </ScrollReveal>
    </CaseStudyLayout>
  );
}
