import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import { 
  Zap, 
  Gauge, 
  Timer, 
  ShieldCheck, 
  CheckCircle2, 
  Activity, 
  Target, 
  Award, 
  Sparkles, 
  Scaling, 
  Users, 
  Layers, 
  Globe, 
  Cpu, 
  Sliders, 
  Database, 
  BookOpen,
  TrendingUp,
  Lock
} from "lucide-react";

interface AnimatedStatCardProps {
  key?: any;
  value: string;
  text: string;
  index: number;
}

// Global rule helper to assign hyper-relevant icons dynamically
function getIconForMetric(value: string, text: string) {
  const t = text.toLowerCase();
  const v = value.toLowerCase();

  if (v.includes("s") || t.includes("speed") || t.includes("fast") || t.includes("load") || t.includes("sprint")) {
    return Zap;
  }
  if (v.includes("d") || t.includes("time") || t.includes("cycle") || t.includes("day")) {
    return Timer;
  }
  if (t.includes("satisfaction") || t.includes("standardization") || t.includes("standard") || t.includes("consistency")) {
    return Award;
  }
  if (t.includes("private") || t.includes("secure") || t.includes("isolation")) {
    return Lock;
  }
  if (t.includes("accuracy") || t.includes("precision") || t.includes("match") || t.includes("comply") || t.includes("compliance")) {
    return Target;
  }
  if (t.includes("contributor") || t.includes("user") || t.includes("designer") || t.includes("squad") || t.includes("team")) {
    return Users;
  }
  if (t.includes("bug") || t.includes("failure") || t.includes("violation") || t.includes("disruption") || t.includes("shift") || t.includes("overlap")) {
    return ShieldCheck;
  }
  if (t.includes("token") || t.includes("file") || t.includes("data") || t.includes("sync")) {
    return Database;
  }
  if (t.includes("fluid") || t.includes("viewport") || t.includes("grid") || t.includes("rescal") || t.includes("adapt")) {
    return Scaling;
  }
  if (t.includes("automation") || t.includes("automate") || t.includes("task") || t.includes("crawler")) {
    return Sliders;
  }
  if (t.includes("contrast") || t.includes("access") || t.includes("luminance")) {
    return Globe;
  }

  // Fallback defaults
  if (v.includes("%")) return Sparkles;
  if (v.includes("+") || v.includes("x")) return TrendingUp;
  if (v === "0" || v === "none") return CheckCircle2;

  return Cpu;
}

export default function AnimatedStatCard({ value, text, index }: AnimatedStatCardProps) {
  const IconComponent = getIconForMetric(value, text);

  // Assign clean contextual border/icon colors based on index/type to avoid identical gray themes
  const colorThemes = [
    { bg: "bg-indigo-50 border-indigo-100/60 text-indigo-650", iconText: "text-indigo-600" },
    { bg: "bg-emerald-50 border-emerald-100/60 text-emerald-700", iconText: "text-emerald-600" },
    { bg: "bg-amber-50 border-amber-100/60 text-amber-700", iconText: "text-amber-605" }
  ];

  const theme = colorThemes[index % colorThemes.length];

  return (
    <div className="border border-zinc-200 bg-white rounded-3xl p-10 flex flex-col justify-between shadow-3xs group hover:border-zinc-400 hover:shadow-2xs transition-all duration-300">
      <div className="space-y-6">
        {/* Dynamic Contextual Icon */}
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border group-hover:scale-105 transition-all ${theme.bg}`}>
          <IconComponent className="w-5 h-5 stroke-[2]" />
        </div>
        
        {/* Metric & Description */}
        <div className="space-y-3">
          <span className="block font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            <AnimatedCounter value={value} />
          </span>
          <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
