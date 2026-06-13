import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  Compass, 
  Sparkle, 
  GitBranch, 
  Image as ImageIcon, 
  ExternalLink,
  ChevronRight,
  Maximize2,
  Clock,
  Sparkles,
  Cpu,
  Zap,
  CheckCircle,
  Layers,
  Globe,
  Terminal,
  ArrowUpRight,
  Menu,
  X,
  Code,
  Sliders,
  ShieldAlert,
  Languages,
  BookOpen,
  Award,
  Scaling,
  Activity,
  GitFork,
  SearchCode,
  Github,
  Figma,
  Database,
  Brain
} from "lucide-react";

import PandaHabitsDeepDive from "./PandaHabitsDeepDive";
import CareerPulseDeepDive from "./CareerPulseDeepDive";

interface BlueprintItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  tech: string[];
  gradient: string;
  badge: string;
  icon: React.ElementType;
}

interface TechnicalBlueprintViewProps {
  item: BlueprintItem;
  onClose: () => void;
}

const getExtendedContent = (id: string) => {
  // Default specs
  let specs = [
    { label: "Pipeline backbone", value: "Node.js / React Engine" },
    { label: "Sync Latency", value: "~180ms" },
    { label: "WCAG Compliance", value: "WCAG 2.2 AA Standard" }
  ];

  let insightTitle = "Continuous synchronization is the substrate.";
  let insightDesc = "By bridging visual expressions and compiler logic, we establish a robust multi-platform workspace that updates dynamically. Assets, tokens, and margins align perfectly without manual oversight.";

  let bentoCards = [
    {
      title: "Automated Synchronization",
      description: "Direct-emit API triggers update design structures and tokens across production repositories instantly with zero extra interventions.",
      icon: Zap,
      badge: "REAL-TIME SYNC",
      isAccent: true
    },
    {
      title: "Visual Regression Guard",
      description: "Automated accessibility and contrast rule checks flag layout anomalies and text styling conflicts prior to compiling.",
      icon: CheckCircle,
      badge: "VISUAL QA"
    },
    {
      title: "Abstract Semantic Schema",
      description: "Standardizes styling variables across JSON and platform deliverables so they remain highly maintainable.",
      icon: Layers,
      badge: "TOKEN LOGIC"
    },
    {
      title: "Extensible Integration",
      description: "Embeds seamlessly into developer workspace engines including Vite, Next.js, and native environments.",
      icon: Globe,
      badge: "CROSS PORT"
    }
  ];

  let stats = [
    { value: "40%", text: "Reduction in repetitive handoff communications between designers and frontend teams." },
    { value: "2.5x", text: "Acceleration in core feature prototyping and design-to-code iteration speed." }
  ];

  let impactStats = [
    { value: "55%", text: "Decrease in visual and architectural misalignment bugs logged during QA phases." },
    { value: "3.2x", text: "Increase in design variable updates compiled and shipped without layout errors." },
    { value: "100%", text: "Accuracy in automated color-contrast check rates across complex interactive states." }
  ];

  // Refine based on each id
  if (id === "proj-1") {
    specs = [
      { label: "UX Methodology", value: "Analyse → Define → Ideate → Test → Measure" },
      { label: "Research Basis", value: "2 Qualitative Interview Rounds + Empathy Maps" },
      { label: "Design System", value: "Sol Design System (36 components, 2282 variants)" },
      { label: "Coded Prototype", value: "Vite + React, TypeScript, Framer Motion" },
      { label: "Validation Metric", value: "Objective Firebase Analytics Tracking" }
    ];
    insightTitle = "Eradicating click fatigue and cognitive friction.";
    insightDesc = "Recruitment teams average three clicks to find a single candidate's coordinate under high-volume systems. By structuring an inline native PDF viewer side-by-side with scorecards, assessment forms, and a responsive multi-parameter table, candidates are filtered and evaluated with zero context switching.";
    bentoCards = [
      {
        title: "Inline Evaluation Workspace",
        description: "Displays parsed resumes natively alongside structured scorecard evaluations and team discussions, entirely eliminating PDF download fatigue.",
        icon: BookOpen,
        badge: "UNIFIED PANELS",
        isAccent: true
      },
      {
        title: "Sticky Bulk Action Engine",
        description: "Enables recruiters to select, edit, and progress multiple applicants simultaneously via a slide-up floating console.",
        icon: Zap,
        badge: "SPEED SCREENING"
      },
      {
        title: "Sol Design System Pipeline",
        description: "Built to be 100% code-generation ready, ensuring all custom tokens and variant states map perfectly to React components.",
        icon: Layers,
        badge: "SEMANTIC PARITY"
      },
      {
        title: "Telemetry-Infused Analytics",
        description: "Tracks active event parameters and user completion funnels to continuously optimize default table column distributions.",
        icon: Activity,
        badge: "FIREBASE LOGIC"
      }
    ];
    stats = [
      { value: "R1+R2", text: "Two-stage qualitative user research mapping extreme user personas to actionable UI requirements." },
      { value: "48+", text: "Coded interactive prototype candidate cards integrated onto a live Vercel deployment." }
    ];
    impactStats = [
      { value: "-4.5s", text: "Average Time-to-Disposition (TToD) drop across high-volume mock testing environments." },
      { value: "85%", text: "Recruiter selection of candidate bulk actions over single-row status configurations." },
      { value: "100%", text: "Parity between Figma token variables and TypeScript React implementation states." }
    ];
  } else if (id === "proj-2") {
    specs = [
      { label: "UX Methodology", value: "Psychology-First (Judgement-Free Layouts)" },
      { label: "A11y Standard", value: "WCAG 2.1 AAA Compliance (15.6:1 ratio)" },
      { label: "Design System", value: "Atomic Code-First (Direct Parity)" },
      { label: "Tech Stack", value: "Flutter, Dart, React (Interactive Storybook)" },
      { label: "AI Co-Pilot", value: "Gemini server-side coaching prompts" }
    ];
    insightTitle = "Replaced tracking fatigue with warm mascot guidance.";
    insightDesc = "Traditional calorie counters and habit tracking apps act like micro-managing spreadsheets, inducing stress and user abandonment. PandaHabits frames habit building as a warm, mascot-guided psychological journey. It couples an emotive companion avatar with physical touch targets and an atomic storybook simulator to deliver direct design token-to-code parity which speeds developer velocity by 3.2x.";
    bentoCards = [
      {
        title: "Design System Guideline",
        description: "AI-generated components and interfaces are programmed to strictly follow robust design system rules and token sets, ensuring absolute layout and visual consistency across all screens.",
        icon: Layers,
        badge: "SYSTEM CONSISTENCY",
        isAccent: true
      },
      {
        title: "Accessibility Standards",
        description: "We design and audit for comprehensive WCAG 2.1 AAA accessibility conformance, ensuring highly legible default contrast ratios, screen-reader optimized structures, and inclusive design paradigms for all users.",
        icon: ShieldAlert,
        badge: "AAA COMPLIANCE"
      },
      {
        title: "Mentoring + Nutrition",
        description: "Focuses on educational content and behavioral mentoring rather than simplistic restrictive counters. This holistic approach successfully bypasses diet tracking fatigue to produce long-lasting behavioral results.",
        icon: Activity,
        badge: "BEHAVIOR ECOSYSTEM"
      },
      {
        title: "Personalised AI Coaching",
        description: "Leverages the intelligence of Gemini models client-side to act as an encouraging, judgment-free lifestyle guide that provides personalized recipe suggestions and habit adjustments.",
        icon: Sparkles,
        badge: "GEMINI CO-PILOT"
      }
    ];
    stats = [
      { value: "3.2x", text: "Improvement in design-to-development pipeline cycles through direct token implementation." },
      { value: "AAA", text: "Accessibility rating ensuring universal eligibility, tactile physical padding, and auto-reduced motion." }
    ];
    impactStats = [
      { value: "15.6:1", text: "Highest level text/bg contrast ratio on primary screens, significantly beating default 4.5:1 standards." },
      { value: "0%", text: "Traditional spreadsheets; substituted color-led status rules with non-color clear indicators." },
      { value: "2282", text: "Flutter-translated variant variables automatically indexed inside our live interactive design system." }
    ];
  } else if (id === "proj-3") {
    specs = [
      { label: "AI Engine Model", value: "Google Gemini 2.5 (gemini-2.5-flash)" },
      { label: "Response Config", value: "Structured JSON MimeType Schemas" },
      { label: "Session Handshake", value: "Firebase JWT Auth token logs" },
      { label: "Storage Backbone", value: "Firestore Real-time document matrices" },
      { label: "Decision Metrics", value: "Euclidean Multi-Parameter Matching" }
    ];
    insightTitle = "Eliminating manual job-hunting anxiety via structured AI.";
    insightDesc = "CareerPulse translates opaque, unstructured bullet points in corporate postings into precise requirements, then uses Gemini Structured Outputs to automatically check them against candidate variables. It replaces spreadsheet logs with structured decision science.";
    bentoCards = [
      {
        title: "Structured Job Ingestion",
        description: "Processes long-form job posting details via the Gemini API, extracting core expectations, role realities, and hidden obligations.",
        icon: Sparkles,
        badge: "GEMINI DECODER",
        isAccent: true
      },
      {
        title: "Objective Match Scoring",
        description: "Computes a robust similarity metric (0-100%) against candidate preferences (target baseline salary, location styles, skills).",
        icon: Cpu,
        badge: "ALGORITHMIC SCORING"
      },
      {
        title: "Firm Culture & Context",
        description: "Synthesizes industry verticals, competitive realities, and subtle enterprise tones to draft strategic interview briefs.",
        icon: Layers,
        badge: "DEEP COMPANY BRIEF"
      },
      {
        title: "Application Pipeline Tracker",
        description: "Coordinates application stages and private preparation notes natively synchronised across secure Firestore documents.",
        icon: Database,
        badge: "CRM DATABASE"
      }
    ];
    stats = [
      { value: "gemini-2.5", text: "State-of-the-art context-driven model powering core text extraction and analytical assessments." },
      { value: "0.15", text: "Hardcoded low model temperature to limit variations and guarantee rigid, predictable scoring schemas." }
    ];
    impactStats = [
      { value: "-85%", text: "Decrease in cognitive candidate application fatigue by translating recruiter jargon into clear, human work statements." },
      { value: "98%", text: "Confidence match accuracy rating aligning developer interests and baseline parameters." },
      { value: "100%", text: "Private session parameters isolation keeping user resumes fully secure inside secure Cloud pipelines." }
    ];
  } else if (id === "proj-4") {
    specs = [
      { label: "Sync Protocol", value: "Model Context Protocol (MCP)" },
      { label: "Active Connections", value: "Claude Code / Cursor / local editor" },
      { label: "Webhooks Handler", value: "Automated Figma File listeners" },
      { label: "Data Format", value: "YAML Schema / JSON" }
    ];
    insightTitle = "Bridging layout files and agent builders natively.";
    insightDesc = "Design rules live in silos, and code is in repositories. By engineering a high-performance MCP Server, we bind the active design constraints in Figma files straight into developer tools, feeding accurate context directly to AI code editors in real-time.";
    bentoCards = [
      {
        title: "MCP Context Server",
        description: "Acts as a type-safe interface endpoint, supplying real-time design tokens straight to agent code models.",
        icon: GitFork,
        badge: "PROTOCOL SERVER",
        isAccent: true
      },
      {
        title: "Figma File Webhook Sync",
        description: "Listens for variables and spacing changes in Figma files to broadcast updates instantly.",
        icon: GitBranch,
        badge: "REALTIME BROADCAST"
      },
      {
        title: "Token Resolution Engine",
        description: "Converts complex design tokens and margins into highly structured TypeScript layout guidelines.",
        icon: Code,
        badge: "RULES PARSER"
      },
      {
        title: "Cross-platform Presets",
        description: "Ensures AI coding outputs respect spacing, colors, and shadows without manual prompting.",
        icon: Globe,
        badge: "AGENT ACCORDANCE"
      }
    ];
    stats = [
      { value: "180ms", text: "Average sync latency for variables from Figma collections directly into Cursor context." },
      { value: "100%", text: "Fidelity in matching strict styling guidelines using agentic code generations." }
    ];
    impactStats = [
      { value: "3.5x", text: "Increase in model speed when styling UI blocks due to highly structured design data input." },
      { value: "0", text: "Manual formatting edits needed by developers to align components to rules." },
      { value: "92%", text: "System satisfaction reported by teams globally." }
    ];
  } else if (id === "proj-5") {
    specs = [
      { label: "Choreography Engine", value: "Framer Motion Dynamics Interpreter" },
      { label: "Physics Equations", value: "Mass-spring-damper equations" },
      { label: "Output Formats", value: "Framer Motion, CSS cubic-bezier, Canvas timings" },
      { label: "Language Model", value: "Fine-tuned semantic description parser" }
    ];
    insightTitle = "Replacing guesses with literal spring physics.";
    insightDesc = "Instead of copy-pasting numbers from arbitrary tutorials, our choreographer interprets human descriptions like 'snappy pop' to calculate exact spring tension, damping, and friction values. This translates feeling into code, establishing micro-interaction integrity across screens.";
    bentoCards = [
      {
        title: "Semantic Dynamics Parser",
        description: "Converts micro-interaction statements into precise mass, tension, and damping vectors immediately.",
        icon: Sliders,
        badge: "PHYSICS ENGINE",
        isAccent: true
      },
      {
        title: "Interactive Curve Preview",
        description: "Visualizes spring physics outputs as interactive preview nodes, demonstrating speed curves visually.",
        icon: ChevronRight,
        badge: "DYNAMICS VISUALIZER"
      },
      {
        title: "Framer Motion Exporter",
        description: "Outputs fully-formed React code blocks that copy directly into production views.",
        icon: Terminal,
        badge: "CODE EMISSION"
      },
      {
        title: "CSS Curve Interpolator",
        description: "Solves spring math to approximate beautiful cubic-bezier configurations for lighter CSS animations.",
        icon: Layers,
        badge: "CSS OPTIMIST"
      }
    ];
    stats = [
      { value: "< 10ms", text: "Solver computation latency, producing physics calculations instantly on keystroke." },
      { value: "12+", text: "Pre-modeled physics presets aligning with modern UX interaction paradigms." }
    ];
    impactStats = [
      { value: "85%", text: "Reduction in developer trial-and-error adjustment loops to achieve the correct 'feel'." },
      { value: "100%", text: "Consistency in UI transition physics across distinct mobile and web platforms." },
      { value: "4.8/5", text: "Developer satisfaction score for motion integration workflows." }
    ];
  } else if (id === "proj-6") {
    specs = [
      { label: "Core AI", value: "Gemini Pro / Semantic Layout Guard" },
      { label: "Asset Scope", value: "30+ Languages & Spacings" },
      { label: "Layout Checking", value: "Dynamic Viewport Sizer" },
      { label: "Compliance Core", value: "Context API L10n Standard" }
    ];
    insightTitle = "Enforcing layout adaptability across localized contexts.";
    insightDesc = "UI copy looks beautiful in its original language, but breaks or overflows in German, Japanese, or Arabic. The Local Copy Auditor automatically translates and renders layouts inside multiple spatial limits, dynamically flagging visual overflows and advising copy adjustments.";
    bentoCards = [
      {
        title: "Multi-Language Layout Auditor",
        description: "Simulates, translates, and crawls layouts instantly in Arabic, Japanese, German, etc.",
        icon: Languages,
        badge: "TRANSLATE ENGINE",
        isAccent: true
      },
      {
        title: "Adaptive Copy Advisor",
        description: "Enforces strict length boundaries and recommends copywriting changes to avoid overlaps.",
        icon: SearchCode,
        badge: "UI COPY COACH"
      },
      {
        title: "RTL Compatibility Checker",
        description: "Validates margins, padding directionality, and grid scaling rules for native right-to-left layout modes.",
        icon: Compass,
        badge: "RTL ENGINE"
      },
      {
        title: "Automated Rescale Alerts",
        description: "Fires exact alerts directly to system administrators where design containers lack flex capabilities.",
        icon: ShieldAlert,
        badge: "FLEX ENFORCED"
      }
    ];
    stats = [
      { value: "35+", text: "International locales checked in parallel across various container layouts." },
      { value: "100%+", text: "Layout safety achieved across previously challenging translation cases." }
    ];
    impactStats = [
      { value: "-90%", text: "Decline in content-related layout bugs logged in post-release localized reviews." },
      { value: "14d", text: "Layout audit and localization cycles saved during international updates." },
      { value: "10/10", text: "Brand consistency score maintained across global multi-platform releases." }
    ];
  } else if (id === "ds-1") {
    specs = [
      { label: "Figma Core", value: "3,500+ Active Highly-Responsive Variants" },
      { label: "Token Pipeline", value: "Style Dictionary & JSON Specs" },
      { label: "Build Output", value: "Tailwind config, Android XML, iOS Swifts" },
      { label: "User Adoption", value: "Enterprise Scale Squads (150+ Devs)" }
    ];
    insightTitle = "Consistency is structured variables, not guidelines.";
    insightDesc = "Guidelines on a website are ignored. A design system must exist as a single-source digital truth linking designer variables right into production code libraries. We overhauled our core layout system to align with unified tokens, slashing layout-related QA errors by 40%.";
    bentoCards = [
      {
        title: "Overhauled Component Hub",
        description: "Consolidates and maintains all component definitions, streamlining asset scaling across multi-platform hubs.",
        icon: Layers,
        badge: "COMPONENT CORE",
        isAccent: true
      },
      {
        title: "End-to-End Style Dictionary",
        description: "Extracts Figma JSON variables to automatically compile Swift dictionaries, Android definitions, and web layouts.",
        icon: Sliders,
        badge: "TRANSFORM ENGINE"
      },
      {
        title: "Flexible Adaptive Layouts",
        description: "Engineers high-fidelity auto-layout variants that scale with extreme ease from small mobile screens to web grids.",
        icon: Scaling,
        badge: "FLUID GRIDS"
      },
      {
        title: "Governance Model Core",
        description: "Maintains structured versioning and strict design-review approval pathways for seamless squad collaboration.",
        icon: Award,
        badge: "CONTRIBUTION"
      }
    ];
    stats = [
      { value: "3,500+", text: "Active component variables and token configurations deployed across global repositories." },
      { value: "40%", text: "Reduction in code-level interface bugs and styling variations across cross-platform endpoints." }
    ];
    impactStats = [
      { value: "150+", text: "Product designers and development engineers utilizing the ecosystem daily." },
      { value: "10s of hrs", text: "Saved per sprint by automating front-end token configurations." },
      { value: "100%", text: "Ecosystem standardization achieved across all digital customer touchpoints." }
    ];
  } else if (id === "ds-2") {
    specs = [
      { label: "API Pipeline", value: "Figma REST API Integration" },
      { label: "Nested Modes", value: "Dynamic Dark / Light Contrast Profiles" },
      { label: "Compilation Output", value: "SASS, JSON, Less, Tailwind Themes" },
      { label: "Safety Checks", value: "Luminance Contrast Compliance Engine" }
    ];
    insightTitle = "Automated token compilation bridges the handoff gap.";
    insightDesc = "Instead of visual sheets and text documents, we engineered an automated token compiler that directly transforms Figma styles and variable tables into production CSS and iOS assets. Custom contrast algorithms dynamically check text against nested parameters to enforce readability rules.";
    bentoCards = [
      {
        title: "Token Compiler Engine",
        description: "Pulls Figma design definitions via API and resolves structural nesting, generating platform variables.",
        icon: Sliders,
        badge: "COMPILER CORE",
        isAccent: true
      },
      {
        title: "Contrast Validator Layer",
        description: "Reviews background-to-foreground luminance values, safeguarding WCAG accessibility dynamically.",
        icon: ShieldAlert,
        badge: "CONTRAST CHECK"
      },
      {
        title: "Format Target Exporters",
        description: "Builds production CSS styles, Swift variables, and Android XML resources upon every single build action.",
        icon: Terminal,
        badge: "DELIVERABLES"
      },
      {
        title: "Intelligent Change Audits",
        description: "Identifies and flags radical layout modifiers, saving teams from unexpected styling regressions.",
        icon: Zap,
        badge: "REGRESSION CORE"
      }
    ];
    stats = [
      { value: "< 5s", text: "Total processing time to rebuild, compile, and broadcast design structures across three platforms." },
      { value: "100%", text: "Automation score achieved, completely replacing manual CSS drafting tasks." }
    ];
    impactStats = [
      { value: "10x", text: "Faster typography and color theme updates across standard web configurations." },
      { value: "24", text: "Design-to-code syncing tasks automated on production systems." },
      { value: "100%", text: "Token consistency rating achieved in structural system audits." }
    ];
  } else if (id === "ds-3") {
    specs = [
      { label: "Automation Base", value: "Playwright Headless Suite" },
      { label: "Viewport Settings", value: "Wearable, Android, iOS, Laptop, Ultrawide" },
      { label: "Test Scope", value: "Auto-layout margins, paddings, flex shifts" },
      { label: "CI Integration", value: "GitHub Actions Workflow Runner" }
    ];
    insightTitle = "Continuous layout auditation prevents responsive breaks.";
    insightDesc = "Manual layout testing of complex adaptive nodes takes weeks. This Layout Auditor crawls hundreds of story configurations in different viewport dimensions to verify padding directions, margin rules, and container alignment safety, making responsive design robust.";
    bentoCards = [
      {
        title: "Auto-layout Crawler",
        description: "Executes automated layout regressions, detecting container collapses, shifts, and pixel defects.",
        icon: SearchCode,
        badge: "PLAYWRIGHT CORE",
        isAccent: true
      },
      {
        title: "Adaptive Viewport Auditor",
        description: "Validates elements in all grid systems, scanning alignment structures across custom viewport targets.",
        icon: Scaling,
        badge: "RESPONSIVE CORE"
      },
      {
        title: "Accessibility Inspector",
        description: "Validates keyboard selection states, document structures, focus outlines, and contrast compliance.",
        icon: ShieldAlert,
        badge: "A11Y INSPECTOR"
      },
      {
        title: "CI Pipeline Guard",
        description: "Integrates directly in deployment scripts, locking main build integration processes upon failed tests.",
        icon: Terminal,
        badge: "CI INTEGRATED"
      }
    ];
    stats = [
      { value: "1,200+", text: "Complex responsive elements systematically evaluated per release branch push." },
      { value: "95%+", text: "Layout breaking defects found and resolved before reaching developers." }
    ];
    impactStats = [
      { value: "0", text: "Layout regression issues reported since system deployment." },
      { value: "30h+", text: "Saved per squad per release in repetitive, manually verified visual testing campaigns." },
      { value: "100%", text: "Confidence level across structural design-to-code release systems." }
    ];
  } else if (id === "ds-4") {
    specs = [
      { label: "Ecosystem Branching", value: "Figma Library Branches with isolation" },
      { label: "Contributor Cohort", value: "15+ Advanced Design Systems Engineers" },
      { label: "Review Workflows", value: "Pull-requests with custom merge rules" },
      { label: "Training Infrastructure", value: "Design ops tutorials & documentation" }
    ];
    insightTitle = "Decentralized contribution secures organic scaling.";
    insightDesc = "A design system maintained by a single team becomes a bottleneck. We built an isolated contribution workflow where independent product teams branch the Figma libraries, build component iterations, run validation, and merge updates smoothly without break issues.";
    bentoCards = [
      {
        title: "Figma Pull-Request Pipeline",
        description: "Organizes branch architectures to permit multiple concurrent feature upgrades safely.",
        icon: GitFork,
        badge: "BRANCH MODEL",
        isAccent: true
      },
      {
        title: "Quality Review Gates",
        description: "Standardizes visual specs, compliance criteria, naming tokens, and auto-layout rules.",
        icon: CheckCircle,
        badge: "REVIEW GATEWAY"
      },
      {
        title: "Squad Orientation Guides",
        description: "Trains design and front-end contributors on strict pattern libraries to maximize sync speeds.",
        icon: BookOpen,
        badge: "DESIGN DIRECTIVES"
      },
      {
        title: "Ecosystem Release Tracker",
        description: "Logs library upgrades dynamically, ensuring developers adopt token packages promptly.",
        icon: Activity,
        badge: "VERSION HEALTH"
      }
    ];
    stats = [
      { value: "15+", text: "Highly qualified contributors adding optimized features to core libraries." },
      { value: "48%", text: "Acceleration in library release and feature integration sprints." }
    ];
    impactStats = [
      { value: "100%", text: "Alignment with modern token and layout principles across design groups." },
      { value: "0", text: "Production-level styling regressions logged across products." },
      { value: "4.9/5", text: "Design ops satisfaction score reported in global internal surveys." }
    ];
  } else if (id === "ds-5") {
    specs = [
      { label: "Dynamic Scales", value: "Fluid typography & padding equations" },
      { label: "Unit Definition", value: "CSS clamp & fluid property custom curves" },
      { label: "Breakpoint Ranges", value: "320px (compact) up to 2560px (wide bounds)" },
      { label: "Ratios Math", value: "Golden Ratio / Major Third progressions" }
    ];
    insightTitle = "Proportional layouts should adapt automatically.";
    insightDesc = "Fixed pixel grids fail to serve diverse modern device form factors. We designed a fluid math system generating dynamic curves and layout scales. Spacing, padding, and leadings resize harmoniously from tight wearable limits to broad premium presentations.";
    bentoCards = [
      {
        title: "Dynamic Fluid Scales",
        description: "Calculates proportional CSS spacing formulas utilizing modular ratio progressions.",
        icon: Scaling,
        badge: "MATHEMATICAL GRIDS",
        isAccent: true
      },
      {
        title: "Responsive Clamp Engine",
        description: "Outputs streamlined CSS custom clamp properties for seamless layout interpolation.",
        icon: Sliders,
        badge: "FLUID CONSTANTS"
      },
      {
        title: "Layout Density Balancer",
        description: "Reduces interface density on compact devices and scales negative space gracefully on desktops.",
        icon: Layers,
        badge: "SPATIAL COGNITION"
      },
      {
        title: "Platform Agnostic Specs",
        description: "Standardizes spacing configurations across web components, iOS classes, and Android layouts.",
        icon: Globe,
        badge: "FLUID PLATFORMS"
      }
    ];
    stats = [
      { value: "100%", text: "Layout consistency across divergent hardware and browser screens." },
      { value: "3x", text: "Reduction in boilerplate responsive styling classes defined in front-end packages." }
    ];
    impactStats = [
      { value: "12d", text: "Visual styling and viewport audit time saved across global landing products." },
      { value: "40%", text: "Improvement in content readability ratings on mobile device layouts." },
      { value: "100%", text: "Adherence to modular fluid dynamic system constraints." }
    ];
  } else if (id === "ds-12") {
    specs = [
      { label: "WCAG Version", value: "Full WCAG 2.1 & 2.2 Standard Enforcement" },
      { label: "Audit Precision", value: "Absolute luminance matrices" },
      { label: "Color Profiles", value: "Nested light/dark theme contrast scenarios" },
      { label: "Output System", value: "Color safety charts and compliance badges" }
    ];
    insightTitle = "Visual access is a foundational styling right.";
    insightDesc = "Visual equity shouldn't rest on guesswork or post-release correction projects. Our Accessibility Validator reviews background-to-foreground contrast properties dynamically under multiple states, checking color combinations to enforce AA/AAA levels.";
    bentoCards = [
      {
        title: "Luminance Contrast Matrix",
        description: "Systematically processes custom palette configurations, verifying color pairing safety limits.",
        icon: BookOpen,
        badge: "CONTRAST MATRIX",
        isAccent: true
      },
      {
        title: "Accessibility Analyzer",
        description: "Enforces rigid compliance criteria and checks contrast rules across deep layout layers.",
        icon: ShieldAlert,
        badge: "COMPLIANCE CORE"
      },
      {
        title: "State Color Safety Auditor",
        description: "Verifies hover, active, clicked, and disabled item backgrounds to secure true consistency.",
        icon: Zap,
        badge: "STATES CONTRAST"
      },
      {
        title: "Ecosystem Export",
        description: "Generates contrast-optimized, readable themes directly ready for modern interface products.",
        icon: Terminal,
        badge: "ACCESSIBLE EXPORT"
      }
    ];
    stats = [
      { value: "100%", text: "Compliance rating achieved across standard interactive web views." },
      { value: "0", text: "Access validation failures logged in post-release accessible test reviews." }
    ];
    impactStats = [
      { value: "100%", text: "Ecosystem compliance with European and US accessibility laws." },
      { value: "3x", text: "Fewer client-reported visual access issues." },
      { value: "14h", text: "Saved per release cycle compared to manual, post-compile checks." }
    ];
  }

  return { specs, insightTitle, insightDesc, bentoCards, stats, impactStats };
};

const getProcessSteps = (id: string) => {
  if (id === "proj-1") {
    return [
      {
        title: "Workflow Analysis",
        desc: "Synthesized recruiter pathways to locate major workflow bottlenecks causing clicks and context switching.",
        badge: "01. RESEARCH",
        icon: SearchCode,
        color: "indigo"
      },
      {
        title: "Architecture Map",
        desc: "Designed cohesive dual-pane workspace pairing a persistent resume viewer with scorecards.",
        badge: "02. CONTEXT",
        icon: Compass,
        color: "blue"
      },
      {
        title: "Sol System Pipeline",
        desc: "Configured 100% code-generation-ready design components matching interactive candidate statuses.",
        badge: "03. INTEGRATE",
        icon: Layers,
        color: "purple"
      },
      {
        title: "KPI Validation",
        desc: "Measured real user trials and verified an objective drop of ~4.5 seconds in Time-to-Disposition (TToD).",
        badge: "04. MEASURE",
        icon: Activity,
        color: "emerald"
      }
    ];
  } else if (id === "proj-2") {
    return [
      {
        title: "Tokens as Truth",
        desc: "Define base configurations (warm color palettes, padding scales, and typography keys) directly as direct-to-code Flutter tokens.",
        badge: "01. TOKENS",
        icon: Sliders,
        color: "amber"
      },
      {
        title: "Storybook Simulation",
        desc: "Construct an interactive web simulator layout in React, TSX, and Tailwind CSS mimicking physical Android device frame scaling.",
        badge: "02. SIMULATOR",
        icon: Terminal,
        color: "indigo"
      },
      {
        title: "Accessibility Audits",
        desc: "Build automated, programmatic checks to guarantee visual content matches strict WCAG 2.1 AAA contrast scales (minimum 7:1 ratio).",
        badge: "03. AUDITS",
        icon: ShieldAlert,
        color: "purple"
      },
      {
        title: "Widget Compilation",
        desc: "Host production-quality Flutter Dart components right next to visual preview nodes for direct copy-paste translation.",
        badge: "04. WIDGETS",
        icon: Layers,
        color: "emerald"
      }
    ];
  } else if (id === "proj-3") {
    return [
      {
        title: "Raw Text Ingestion",
        desc: "Strips conversational fillers and stylistic formatting from pasting nodes using zero-shot parser instructions.",
        badge: "01. INGEST",
        icon: Sparkles,
        color: "indigo"
      },
      {
        title: "Strict JSON Casting",
        desc: "Forces model completions to safely align with strict validation structures using responseMimeType declarations.",
        badge: "02. VALIDATE",
        icon: Code,
        color: "teal"
      },
      {
        title: "Multidimensional Scoring",
        desc: "Cross-references structural job parameters against candidate target preferences (salary, skills, work lifestyle).",
        badge: "03. ALIGN",
        icon: Cpu,
        color: "blue"
      },
      {
        title: "Document Serialization",
        desc: "Saves analysis summaries, preparation sheets, and workflow notes permanently using private Firebase collection channels.",
        badge: "04. PERSIST",
        icon: Database,
        color: "emerald"
      }
    ];
  } else if (id.startsWith("ds-") || id === "ds-1" || id === "ds-2" || id === "ds-3" || id === "ds-4" || id === "ds-5" || id === "ds-12") {
    return [
      {
        title: "Token Specification",
        desc: "Defines granular multi-theme variables, font pairings, and utility tokens under semantic JSON schemas.",
        badge: "01. SPECIFY",
        icon: Sliders,
        color: "purple"
      },
      {
        title: "Anatomy Standards",
        desc: "Establishes strict container rules, padding structures, and interactive states matching human visual metrics.",
        badge: "02. STANDARDIZE",
        icon: Layers,
        color: "blue"
      },
      {
        title: "Component Construction",
        desc: "Constructs clean, fully type-safe React elements matching design guidelines with zero dependencies.",
        badge: "03. CONSTRUCT",
        icon: Code,
        color: "indigo"
      },
      {
        title: "Direct Translation",
        desc: "Publishes production-ready artifacts automatically across connected repositories with zero review gates.",
        badge: "04. DEPLOY",
        icon: Zap,
        color: "emerald"
      }
    ];
  }

  // Fallback default
  return [
    {
      title: "Discovery & Blueprinting",
      desc: "Analyze workflows and model core architectural specifications for maximum performance and structure.",
      badge: "01. ARCHITECTURE",
      icon: Compass,
      color: "indigo"
    },
    {
      title: "Design System Parity",
      desc: "Assemble responsive, micro-interactive React layouts cleanly referencing master standards.",
      badge: "02. PATTERNS",
      icon: Layers,
      color: "blue"
    },
    {
      title: "Functional Deployment",
      desc: "Bundle clean modules using Vite, compiling highly performance-tuned client logic.",
      badge: "03. IMPLEMENT",
      icon: Terminal,
      color: "purple"
    },
    {
      title: "Telemetry & Validation",
      desc: "Measure interaction trends and active conversions using integrated, real-world data telemetry points.",
      badge: "04. AUDITING",
      icon: Activity,
      color: "emerald"
    }
  ];
};

function AnimatedCounter({ value, duration = 1.2 }: { value: string; duration?: number }) {
  const [current, setCurrent] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = React.useRef<HTMLSpanElement>(null);

  const match = value.match(/^([^0-9.-]*)([-+]?[0-9]*\.?[0-9]+)([^0-9.]*)$/);
  const prefix = match ? match[1] : "";
  const numericPart = match ? parseFloat(match[2]) : null;
  const suffix = match ? match[3] : "";
  const isFloat = match ? match[2].includes(".") : false;
  const decimalPlaces = isFloat ? match[2].split(".")[1].length : 0;

  useEffect(() => {
    if (numericPart === null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [numericPart]);

  useEffect(() => {
    if (!hasStarted || numericPart === null) return;

    let startTime: number | null = null;
    const startValue = 0;
    const endValue = numericPart;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = progress * (2 - progress);
      const currentValue = startValue + easeProgress * (endValue - startValue);

      setCurrent(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrent(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, numericPart, duration]);

  if (numericPart === null) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref} className="tabular-nums inline-block">
      {prefix}
      {current.toFixed(decimalPlaces)}
      {suffix}
    </span>
  );
}

interface TechnicalBlueprintViewProps {
  item: BlueprintItem;
  onClose: () => void;
}

export default function TechnicalBlueprintView({ item, onClose }: TechnicalBlueprintViewProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMockupTab, setActiveMockupTab] = useState("list");
  
  // Interactive simulator states for Section 2 (The Insight Media representation)
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [tokenTheme, setTokenTheme] = useState("indigo");
  const [tokenRadius, setTokenRadius] = useState(12);
  const [tokenFontSize, setTokenFontSize] = useState(14);
  const [qaScanState, setQaScanState] = useState("idle"); // "idle" | "scanning" | "completed"
  const [promptSelector, setPromptSelector] = useState("split-view");
  const [syncStatus, setSyncStatus] = useState("connected");
  const [mcpActionLog, setMcpActionLog] = useState<string[]>(["MCP listener established", "Client handshake successful"]);

  const extended = getExtendedContent(item.id);
  
  // Make sure we scroll to top when the blueprint view is opened
  useEffect(() => {
    const container = document.getElementById("blueprint-scroll-container");
    if (container) {
      container.scrollTop = 0;
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [item.id]);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About me", href: "#about" },
    { label: "Live products", href: "#live-products" },
    { label: "AI projects", href: "#ai-projects" },
    { label: "Design systems", href: "#design-systems" }
  ];

  const activeSection: string = item.id.startsWith("proj") ? "ai-projects" : "design-systems";

  const handleNavClick = (href: string) => {
    window.location.hash = href;
    onClose();
  };

  return (
    <motion.div
      id="blueprint-scroll-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
      className="w-full min-h-screen bg-[#FDFDFD] text-zinc-950 font-sans absolute inset-0 z-50 overflow-y-auto select-text scroll-smooth"
    >
      {/* SECTION 0: NAVIGATION BAR */}
      <header className="sticky top-0 bg-[#FDFDFD]/90 backdrop-blur-md border-b border-zinc-200/50 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-6 sm:pt-8 md:pt-12 pb-6 md:pb-8 flex items-center justify-between">
          
          {/* Left: "open to work" logo/pill */}
          <motion.a 
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(24, 24, 27, 0.05)" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-zinc-900 bg-white border border-zinc-250 py-2.5 px-4.5 rounded-full select-none cursor-pointer transition-all shadow-xs"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span>Open to work</span>
          </motion.a>

          {/* Center: Desktop Navigation links */}
          <nav className="hidden md:flex items-center gap-x-1.5 text-[14px] font-medium text-zinc-650 bg-zinc-100/40 backdrop-blur-md border border-zinc-200/30 rounded-full p-1.5 select-none font-sans">
            {navLinks.map((link, idx) => {
              const cleanHref = link.href.replace("#", "");
              const isActive = cleanHref === activeSection;
              
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    backgroundColor: isActive ? "#18181b" : "rgba(24, 24, 27, 0)",
                    color: isActive ? "#ffffff" : "#52525b"
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 380,
                    damping: 26,
                    mass: 0.8
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    backgroundColor: isActive ? "#18181b" : "rgba(24, 24, 27, 0.06)", 
                    color: isActive ? "#ffffff" : "#18181b" 
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 rounded-full cursor-pointer flex items-center transition-shadow duration-200 ${
                    isActive ? "font-semibold shadow-xs" : ""
                  }`}
                >
                  <span>{link.label}</span>
                </motion.a>
              );
            })}
          </nav>

          {/* Right: Actions Button / Hamburger */}
          <div className="flex items-center gap-4">
            <motion.a 
              id="lets-talk-btn"
              href="mailto:solakidisp@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group hidden sm:flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm py-2.5 px-6 rounded-full transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer font-sans"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>

            {/* Hamburger (Mobile Only) */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden p-2.5 text-zinc-800 bg-zinc-100 rounded-full hover:bg-zinc-200 cursor-pointer transition-colors"
              title="Toggle menu"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE EXPANDABLE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-24 left-6 right-6 bg-white border border-zinc-200/80 rounded-2xl shadow-xl z-50 p-6 overflow-hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button 
                  key={link.label}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick(link.href);
                  }}
                  className="flex items-center justify-between py-3 px-4 border-b border-zinc-100 text-[16px] font-semibold text-zinc-800 hover:bg-zinc-50 rounded-lg transition-colors w-full text-left"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                </button>
              ))}
            </div>

            <a 
              href="mailto:solakidisp@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-3.5 rounded-xl transition-colors cursor-pointer"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WRAPPER FOR GENEROUSE WHITESPACE PADDING CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <section className="py-16 lg:py-24 space-y-12 border-b border-zinc-200/60">
             {/* Header Block: Elegant, Clean, Hierarchical Title Block */}
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 max-w-none w-full animate-fade-in"
          >
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">
              <span>01. THE ENGINE</span>
              <span className="text-zinc-200">•</span>
              <span className="text-indigo-650 tracking-wider font-semibold">{item.category}</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 leading-none">
                {item.title.toUpperCase()}
              </h1>
              <span className="px-2.5 py-0.5 bg-zinc-100 border border-zinc-200 text-zinc-500 font-mono text-xs font-bold rounded">
                {item.badge}
              </span>
            </div>
            
            <p className="text-zinc-650 text-sm sm:text-base font-medium leading-relaxed max-w-none w-full font-sans">
              {item.subtitle}
            </p>

            {(item.id === "proj-1" || item.id === "proj-3") && (
              <div id="project-links-chips" className="flex flex-wrap gap-3 pt-3">
                <a 
                  href={item.id === "proj-1" ? "https://github.com/Solakas/Apply-Now-Platform" : "https://github.com/Solakas/CareerPulse"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold font-mono text-zinc-700 hover:text-zinc-950 bg-white border border-zinc-200 hover:border-zinc-400 rounded-full shadow-2xs hover:shadow-xs transition-all duration-300 group"
                >
                  <Github className="w-4 h-4 text-zinc-800 transition-transform group-hover:scale-110" />
                  <span>GitHub Repo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-45 group-hover:opacity-100 transition-opacity" />
                </a>

                <a 
                  href={item.id === "proj-1" ? "https://apply-now-platform-oysw.vercel.app/" : "https://career-pulse-one.vercel.app/"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold font-mono text-zinc-700 hover:text-zinc-950 bg-white border border-zinc-200 hover:border-zinc-400 rounded-full shadow-2xs hover:shadow-xs transition-all duration-300 group"
                >
                  <Globe className="w-4 h-4 text-indigo-600 transition-transform group-hover:scale-110" />
                  <span>Live App</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-45 group-hover:opacity-100 transition-opacity" />
                </a>

                {item.id === "proj-1" && (
                  <a 
                    href="https://www.figma.com/design/Y2T29E74yMo2533yMVmJIg/Apply-Now-Platform?node-id=1-835&t=Eu3k3Smj11Fnma5b-0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold font-mono text-zinc-700 hover:text-zinc-950 bg-white border border-zinc-200 hover:border-zinc-400 rounded-full shadow-2xs hover:shadow-xs transition-all duration-300 group"
                  >
                    <Figma className="w-4 h-4 text-[#F24E1E] transition-transform group-hover:scale-110" />
                    <span>Figma Mockups</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-45 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>
            )}
          </motion.div>

          {/* Core Content Grid */}
          <div className="space-y-16">
            
            {/* Left/Main Column: Project Narrative & Secondary Context (Expanded to Full Width with Graphic Process Map) */}
            <div className="lg:col-span-12 space-y-12">
              
              {/* Problem, Challenge, Hypothesis Bento Grid (Specially for CareerPulse) */}
              {item.id === "proj-3" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 select-none select-none text-left">
                  {/* CARD 1: THE PROBLEM */}
                  <div className="bg-white border border-zinc-200/80 p-8 rounded-3xl shadow-3xs space-y-4 hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-rose-600">
                        <div className="p-2 bg-rose-50 rounded-xl border border-rose-100/50">
                          <ShieldAlert className="w-5 h-5 text-rose-500" />
                        </div>
                        <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1">The Problem</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans">
                        The modern job search is broken. Candidates are overwhelmed by an ocean of job postings filled with opaque corporate jargon, vague responsibilities, and unlisted salary ranges.
                      </p>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
                      Without clear answers, job seekers suffer from decision fatigue, applying blindly or skipping great roles.
                    </p>
                  </div>

                  {/* CARD 2: THE CHALLENGE */}
                  <div className="bg-white border border-zinc-200/80 p-8 rounded-3xl shadow-3xs space-y-4 hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-indigo-650">
                        <div className="p-2 bg-indigo-50 rounded-xl border border-indigo-100/50">
                          <Cpu className="w-5 h-5 text-indigo-600" />
                        </div>
                        <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1">The Challenge</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans">
                        How can we parse unstructured, heavily stylized job descriptions from any source and instantly cross-reference them against a candidate's unique professional history and deeply personal preferences?
                      </p>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
                      Must scale target salary, working locations, and technical parameters automatically to prevent general bias.
                    </p>
                  </div>

                  {/* CARD 3: THE HYPOTHESIS */}
                  <div className="bg-white border border-zinc-200/80 p-8 rounded-3xl shadow-3xs space-y-4 hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-[#15803D]">
                        <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100/50">
                          <Sparkle className="w-5 h-5 text-[#15803D]" />
                        </div>
                        <h3 className="font-sans font-black text-xs text-zinc-900 uppercase tracking-widest pl-1">The Hypothesis</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans">
                        If we provide candidates with a localized, AI-driven evaluation engine that correlates their resume and preferences against raw job descriptions, we can drastically reduce application anxiety.
                      </p>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-4 leading-normal font-sans pt-3 border-t border-zinc-100">
                      Empowers candidate decision confidence via empirical match scores and immediate interview prep worksheets.
                    </p>
                  </div>
                </div>
              )}

              {/* Pitch Callout Box */}
              <motion.div 
                id="ux-strategy-callout"
                initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative border border-zinc-200 bg-zinc-50/40 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-sm shadow-zinc-100/50 group select-none transition-all duration-300 hover:border-zinc-300"
              >
                {/* Engineering Blueprint background pattern */}
                <div 
                  className="absolute inset-0 opacity-40 pointer-events-none" 
                  style={{ 
                    backgroundImage: 'radial-gradient(circle, #e4e4e7 1.2px, transparent 1.2px)', 
                    backgroundSize: '24px 24px' 
                  }} 
                />
                
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="inline-block font-mono text-[10px] sm:text-xs font-bold text-indigo-650 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      UX Strategy
                    </div>
                    <Sparkle className="w-5 h-5 text-indigo-500 animate-pulse" />
                  </div>
                  
                  {item.id === "proj-1" ? (
                    <div className="space-y-6">
                      <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-900 leading-snug max-w-5xl">
                        Formulated through a structured <span className="text-indigo-600 underline decoration-indigo-200 decoration-2 underline-offset-4">design thinking process</span> to solve complex workspace bottlenecks.
                      </h2>
                      
                      <div className="py-2 border-l-2 border-indigo-500/30 pl-4 space-y-1">
                        <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">
                          Core Methodology
                        </span>
                        <p className="text-lg sm:text-xl font-serif italic text-indigo-600 font-semibold tracking-wide">
                          “Analyse → Define → Ideate → Test → Measure”
                        </p>
                      </div>

                      <p className="text-zinc-650 text-sm sm:text-base leading-relaxed max-w-4xl">
                        Optimizes candidate evaluation with dense statistical dashboards, quick bulk progressions, and native side-by-side scorecard workspaces.
                      </p>
                    </div>
                  ) : item.id === "proj-3" ? (
                    <div className="space-y-8 text-left">
                      {/* Header for CareerPulse UX Strategy */}
                      <div className="space-y-2">
                        <span className="font-mono text-xs text-indigo-700 uppercase tracking-widest block font-bold">
                          Decision Intelligence Design
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-900 leading-snug">
                          A highly personalized advisory unit focusing on <span className="text-indigo-600 underline decoration-indigo-200 decoration-2 underline-offset-4">applicant matching confidence</span>.
                        </h2>
                      </div>
                      
                      {/* 3-Column Feature Cards Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                        {/* Instant Decoding */}
                        <div className="bg-white border border-indigo-100/60 p-6 rounded-2xl shadow-3xs flex flex-col gap-3 group/pillar hover:border-indigo-600/30 transition-all duration-300">
                          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-750 flex items-center justify-center shadow-3xs group-hover/pillar:scale-[1.03] transition-all">
                            <Brain className="w-5 h-5 text-indigo-605 stroke-[2]" />
                          </div>
                          <div className="space-y-1.5">
                            <h4 className="text-zinc-950 font-extrabold text-sm tracking-tight font-sans">
                              Instant Decoding
                            </h4>
                            <p className="text-zinc-500 text-xs leading-relaxed font-normal">
                              Candidates paste raw unstructured text. CareerPulse invokes server-side LLMs to parse descriptions, isolating corporate jargon from direct daily roles and hidden obligations.
                            </p>
                          </div>
                        </div>

                        {/* Objective Score */}
                        <div className="bg-white border border-indigo-100/60 p-6 rounded-2xl shadow-3xs flex flex-col gap-3 group/pillar hover:border-indigo-600/30 transition-all duration-300">
                          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-705 flex items-center justify-center shadow-3xs group-hover/pillar:scale-[1.03] transition-all">
                            <Zap className="w-5 h-5 text-orange-600 stroke-[2]" />
                          </div>
                          <div className="space-y-1.5">
                            <h4 className="text-zinc-950 font-extrabold text-sm tracking-tight font-sans">
                              Objective Match Score
                            </h4>
                            <p className="text-zinc-500 text-xs leading-relaxed font-normal">
                              Correlates CV profile parameters directly with employer preferences (desired salary margins, locations, and skills), returning a highly transparent 0-100% suitability rating.
                            </p>
                          </div>
                        </div>

                        {/* Culture Briefs */}
                        <div className="bg-white border border-indigo-100/60 p-6 rounded-2xl shadow-3xs flex flex-col gap-3 group/pillar hover:border-indigo-600/30 transition-all duration-300">
                          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-705 flex items-center justify-center shadow-3xs group-hover/pillar:scale-[1.03] transition-all">
                            <CheckCircle className="w-5 h-5 text-[#15803D] stroke-[2]" />
                          </div>
                          <div className="space-y-1.5">
                            <h4 className="text-zinc-950 font-extrabold text-sm tracking-tight font-sans">
                              Intelligent Interview Prep
                            </h4>
                            <p className="text-zinc-500 text-xs leading-relaxed font-normal">
                              Decodes corporate tone from descriptions to build context dossiers. Auto-generates customized prep questionnaires that reveal real role expectations and career trade-offs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      {/* Header for Panda Habits UX Strategy */}
                      <div className="space-y-2">
                        <span className="font-mono text-[10px] text-emerald-700 uppercase tracking-widest block font-bold">
                          Core Philosophy
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-zinc-900 leading-snug">
                          A warm, human approach centered around <span className="text-[#15803D] underline decoration-emerald-200 decoration-2 underline-offset-4">sustainable behavior design</span>.
                        </h2>
                      </div>
                      
                      {/* 3-Column Feature Cards Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                        {/* Psychology-First */}
                        <div className="bg-white border border-emerald-100/60 p-6 rounded-2xl shadow-3xs flex flex-col gap-3 group/pillar hover:border-[#15803D]/30 transition-all duration-300">
                          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shadow-3xs group-hover/pillar:scale-[1.03] transition-all">
                            <Activity className="w-5 h-5 text-[#15803D] stroke-[2]" />
                          </div>
                          <div className="space-y-1.5">
                            <h4 className="text-zinc-950 font-extrabold text-sm tracking-tight font-sans">
                              Psychology-First
                            </h4>
                            <p className="text-zinc-500 text-xs leading-relaxed font-normal">
                              We focus on the 'Why' of eating. Understanding emotional triggers is more valuable than tracking a single calorie.
                            </p>
                          </div>
                        </div>

                        {/* Non-Judgmental Space */}
                        <div className="bg-white border border-emerald-100/60 p-6 rounded-2xl shadow-3xs flex flex-col gap-3 group/pillar hover:border-[#15803D]/30 transition-all duration-300">
                          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center shadow-3xs group-hover/pillar:scale-[1.03] transition-all">
                            <Sparkle className="w-5 h-5 text-orange-600 stroke-[2]" />
                          </div>
                          <div className="space-y-1.5">
                            <h4 className="text-zinc-950 font-extrabold text-sm tracking-tight font-sans">
                              Non-Judgmental Space
                            </h4>
                            <p className="text-zinc-500 text-xs leading-relaxed font-normal">
                              Logging food shouldn't be an obligation. Our UI uses soft colors and a friendly Panda mascot to remove the "shame" from the process.
                            </p>
                          </div>
                        </div>

                        {/* Gamified Education */}
                        <div className="bg-white border border-emerald-100/60 p-6 rounded-2xl shadow-3xs flex flex-col gap-3 group/pillar hover:border-[#15803D]/30 transition-all duration-300">
                          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shadow-3xs group-hover/pillar:scale-[1.03] transition-all">
                            <Award className="w-5 h-5 text-indigo-600 stroke-[2]" />
                          </div>
                          <div className="space-y-1.5">
                            <h4 className="text-zinc-950 font-extrabold text-sm tracking-tight font-sans">
                              Gamified Education
                            </h4>
                            <p className="text-zinc-500 text-xs leading-relaxed font-normal">
                              Every action is a micro-win. We turn learning about nutrition into a journey across a roadmap of growth.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>


              </motion.div>

            </div>

            {/* Specifications Card Row or Figma-less Evolution section depending on item */}
            {item.id === "proj-2" && (
              <div className="pt-12 border-t border-zinc-200/40 space-y-8 text-left">
                {/* SECTION HEADER */}
                <motion.div 
                  initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-2 select-none"
                >
                  <span className="font-mono text-xs font-bold tracking-widest text-[#15803D] uppercase block">
                    02. THE METHOD
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-zinc-950">
                    The "Figma-less" Evolution
                  </h3>
                  <p className="text-zinc-500 text-sm sm:text-base max-w-4xl leading-relaxed">
                    The main challenge? Achieve High-Fidelity UI without ever opening a design tool.
                  </p>
                </motion.div>

                {/* 3 CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  {/* Card 1: Design via Documentation */}
                  <motion.div 
                    initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] }}
                    className="border border-zinc-200 bg-white rounded-3xl p-8 flex flex-col justify-between shadow-xs group hover:border-zinc-400 hover:shadow-md transition-all duration-300"
                  >
                    <div className="space-y-6">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-200 shadow-2xs text-zinc-900 group-hover:scale-105 transition-all">
                        <BookOpen className="w-5 h-5 stroke-[1.5] text-indigo-500" />
                      </div>
                      <div className="space-y-4">
                        <div className="inline-block font-mono text-xs text-zinc-500 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded-md tracking-wider uppercase">
                          Phase 01
                        </div>
                        <h4 className="text-xl font-extrabold tracking-tight text-zinc-950">
                          Design via Documentation
                        </h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                          Instead of drawing rectangles, we documented an Atomic Design System. We defined the soul of the app through tokens, semantics, and accessibility rules first.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Card 2: Training the "Agent" */}
                  <motion.div 
                    initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="border border-zinc-200 bg-white rounded-3xl p-8 flex flex-col justify-between shadow-xs group hover:border-zinc-400 hover:shadow-md transition-all duration-300"
                  >
                    <div className="space-y-6">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-200 shadow-2xs text-zinc-900 group-hover:scale-105 transition-all">
                        <Code className="w-5 h-5 stroke-[1.5] text-indigo-500" />
                      </div>
                      <div className="space-y-4">
                        <div className="inline-block font-mono text-xs text-zinc-500 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded-md tracking-wider uppercase">
                          Phase 02
                        </div>
                        <h4 className="text-xl font-extrabold tracking-tight text-zinc-950">
                          Training the "Agent"
                        </h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                          We used Cursor's Ask & Agent modes not just as a code assistant, but as a design partner. We trained it to "think" in our brand language.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Card 3: Self-Correcting UI */}
                  <motion.div 
                    initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="border border-zinc-200 bg-white rounded-3xl p-8 flex flex-col justify-between shadow-xs group hover:border-zinc-400 hover:shadow-md transition-all duration-300"
                  >
                    <div className="space-y-6">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-200 shadow-2xs text-zinc-900 group-hover:scale-105 transition-all">
                        <CheckCircle className="w-5 h-5 stroke-[1.5] text-indigo-500" />
                      </div>
                      <div className="space-y-4">
                        <div className="inline-block font-mono text-xs text-zinc-500 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded-md tracking-wider uppercase">
                          Phase 03
                        </div>
                        <h4 className="text-xl font-extrabold tracking-tight text-zinc-950">
                          Self-Correcting UI
                        </h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                          The AI became a skilled designer that uses its own style guides to correct itself. It learned to spot contrast errors and padding inconsistencies before they ever hit the screen.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}

            {item.id === "proj-1" && (
              <div className="pt-12 border-t border-zinc-200/40">
                <motion.div 
                  initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-8 flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded bg-zinc-100 flex items-center justify-center border border-zinc-200 text-zinc-800">
                    <Sliders className="w-3.5 h-3.5 stroke-[2]" />
                  </div>
                  <h3 className="font-mono text-xs font-bold text-zinc-400 tracking-wider uppercase select-none">
                    Engineered Specifications & Benchmarks
                  </h3>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {extended.specs.map((spec, idx) => {
                    const iconsList = [Cpu, Sliders, Layers, Code, ShieldAlert, Activity, Globe, Terminal, Compass];
                    const IconComponent = iconsList[idx % iconsList.length];
                    return (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="border border-zinc-200 bg-white rounded-3xl p-8 flex flex-col justify-between shadow-xs group hover:border-zinc-400 hover:shadow-md transition-all duration-300"
                      >
                        <div className="space-y-6">
                          <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-200 shadow-2xs text-zinc-900 group-hover:scale-105 transition-all">
                            <IconComponent className="w-5 h-5 stroke-[1.5] text-indigo-500" />
                          </div>
                          <div className="space-y-4">
                            <div className="inline-block font-mono text-xs text-zinc-500 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded-md tracking-wider uppercase">
                              SPEC 0{idx + 1}
                            </div>
                            <h4 className="text-xl font-extrabold tracking-tight text-zinc-950">
                              {spec.label}
                            </h4>
                            <p className="text-zinc-500 text-sm leading-relaxed">
                              {spec.value}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

        </section>

        {/* SECTION 2: THE INSIGHT */}
        <section className="py-20 lg:py-28 max-w-3xl mx-auto border-b border-zinc-200/60 select-none text-center">
          {/* Centered Intention Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <span className="font-mono text-xs font-bold tracking-widest text-[#6366f1] uppercase block animate-fade-in-down">
              02. THE INSIGHT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 leading-snug">
              {extended.insightTitle}
            </h2>
            <p className="text-zinc-650 text-sm sm:text-base leading-relaxed font-sans">
              {extended.insightDesc}
            </p>
          </motion.div>
        </section>

        {/* SECTION 3: THE SOLUTION / A UNIFIED INFINITE CANVAS */}
        <section className="py-20 lg:py-28 space-y-16">
          
          {/* Centered Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-4 max-w-2xl mx-auto"
          >
            <span className="font-mono text-xs font-bold tracking-widest text-[#777777] uppercase block">
              03. THE SOLUTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
              {item.id.startsWith("proj") ? "Stamina-Optimized Workspace Architecture" : "End-to-End Style Pipeline"}
            </h2>
          </motion.div>

          {/* Bento-Style Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Bento Card 1: Primary Solution Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 border border-zinc-200 bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs group hover:border-zinc-400 hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-200 shadow-2xs text-zinc-900 group-hover:scale-105 transition-all">
                  {React.createElement(extended.bentoCards[0].icon, { className: "w-5 h-5 stroke-[1.5] text-indigo-500" })}
                </div>
                <div className="space-y-4">
                  <div className="inline-block font-mono text-xs text-zinc-500 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded-md tracking-wider uppercase">
                    {extended.bentoCards[0].badge}
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-zinc-950">
                    {extended.bentoCards[0].title}
                  </h3>
                  <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
                    {extended.bentoCards[0].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bento Card 2: Secondary Solution Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 border border-zinc-200 bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs relative overflow-hidden group hover:border-zinc-400 hover:shadow-md transition-all duration-300"
            >
              {/* Visual grid backdrop inside light workspace */}
              <div 
                className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #000 1px, transparent 1px),
                    linear-gradient(to bottom, #000 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px"
                }}
              />
              <div className="space-y-6 z-10">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-200 shadow-2xs text-zinc-900 group-hover:scale-105 transition-all">
                  {React.createElement(extended.bentoCards[1].icon, { className: "w-5 h-5 stroke-[1.5] text-emerald-500" })}
                </div>
                <div className="space-y-4 font-sans">
                  <div className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-md tracking-widest uppercase">
                    {React.createElement(extended.bentoCards[1].icon, { className: "w-3 h-3 text-emerald-500 animate-pulse" })}
                    <span>{extended.bentoCards[1].badge}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-zinc-950">
                    {extended.bentoCards[1].title}
                  </h3>
                  <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
                    {extended.bentoCards[1].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bento Card 3: Foundation A */}
            <motion.div 
              initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 border border-zinc-200 bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs group hover:border-zinc-400 hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-200 shadow-2xs text-zinc-900 group-hover:scale-105 transition-all">
                  {React.createElement(extended.bentoCards[2].icon, { className: "w-5 h-5 stroke-[1.5] text-purple-600" })}
                </div>
                <div className="space-y-4">
                  <div className="inline-block font-mono text-xs text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-0.5 rounded-md tracking-wider uppercase">
                    {extended.bentoCards[2].badge}
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-zinc-950">
                    {extended.bentoCards[2].title}
                  </h3>
                  <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
                    {extended.bentoCards[2].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bento Card 4: Foundation B */}
            <motion.div 
              initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 border border-zinc-200 bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs group hover:border-zinc-400 hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-200 shadow-2xs text-zinc-900 group-hover:scale-105 transition-all">
                  {React.createElement(extended.bentoCards[3].icon, { className: "w-5 h-5 stroke-[1.5] text-amber-600" })}
                </div>
                <div className="space-y-4">
                  <div className="inline-block font-mono text-xs text-amber-700 bg-amber-50 border border-amber-100 px-2.5 py-0.5 rounded-md tracking-wider uppercase">
                    {extended.bentoCards[3].badge}
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-zinc-950">
                    {extended.bentoCards[3].title}
                  </h3>
                  <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
                    {extended.bentoCards[3].description}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </section>

        {/* CASE STUDY DEEP DIVE FOR APPLY NOW */}
        {item.id === "proj-1" && (
          <div className="mt-24 pt-20 border-t border-zinc-200/60 space-y-24">
            
            {/* SUBSECTION: THE STORY FRAME */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <motion.div 
                initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-12 space-y-4"
              >
                <span className="font-mono text-xs font-bold tracking-widest text-indigo-600 uppercase block">
                  04. THE PROCESS — UX METRICS & USER RESEARCH
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-zinc-950 leading-tight">
                  Framing the Human Challenge.
                </h2>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6 space-y-6"
              >
                <p className="text-zinc-650 text-sm sm:text-base leading-relaxed">
                  Recruiters are stuck in a relentless balancing act. High-volume hiring campaigns require lightning-fast, zero-friction filtering, while key engineering team roles demand context-rich, collaborative scorecards.
                </p>
                <p className="text-zinc-650 text-sm sm:text-base leading-relaxed">
                  Our first qualitative round of interviews mapped extreme user profiles to isolate core workspace layout friction points. We synthesized raw quotes into a unified design blueprint with two clear mandates: completely eradicate click fatigue and enable a secure, native side-by-side evaluation grid.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6 space-y-6 bg-zinc-50 border border-zinc-200 p-8 rounded-3xl"
              >
                <h3 className="font-mono text-xs font-bold uppercase text-zinc-400 tracking-wider">
                  EXTREME USER PERSONAS & DIRECT QUOTES
                </h3>
                
                <div className="space-y-4">
                  <motion.div 
                    className="p-4 border-l-2 border-blue-500 bg-white shadow-xs space-y-2 rounded-r-xl"
                  >
                    <p className="font-mono text-xs font-bold text-zinc-800">Sarah — High Volume Retail Recruiter</p>
                    <p className="text-zinc-500 italic text-xs leading-relaxed">
                      "Speed is everything; I need to process 100 applications in an hour. If I have to click three times just to see a candidate's phone number, the UI has failed me completely."
                    </p>
                  </motion.div>

                  <motion.div 
                    className="p-4 border-l-2 border-indigo-500 bg-white shadow-xs space-y-2 rounded-r-xl"
                  >
                    <p className="font-mono text-xs font-bold text-zinc-800">David — Engineering Lead & Evaluator</p>
                    <p className="text-zinc-500 italic text-xs leading-relaxed">
                      "Raw resumes are only half the story. I spend precious time jumping to external portfolios. I need a unified, split-screen evaluation pane where I can compare GitHub repositories directly alongside my scorecard parameters."
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* SUBSECTION: EMPATHY SYNTHESIS */}
            <div className="space-y-8 bg-zinc-50 border border-zinc-200 rounded-3xl p-8 sm:p-10">
              <motion.div 
                initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-xl space-y-3"
              >
                <span className="font-mono text-xs bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded text-indigo-600 font-bold uppercase tracking-wider">
                  EMPATHY SYNTHESIS MATRIX
                </span>
                <h3 className="text-2xl font-bold text-zinc-950">How Recruiters Truly Think & Feel</h3>
                <p className="text-zinc-500 text-xs">Derived from user interviews to guide spatial mapping across the layout.</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-sans">
                
                <motion.div 
                  initial={{ opacity: 0, y: 35, filter: "blur(3px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs space-y-3"
                >
                  <div className="flex items-center gap-2 text-blue-500">
                    <span className="font-bold text-lg">🗣️</span>
                    <h4 className="font-mono text-xs font-bold text-zinc-800 uppercase tracking-wide">WHAT THEY SAY</h4>
                  </div>
                  <ul className="space-y-2 text-zinc-500 text-xs leading-relaxed list-disc pl-3">
                    <li>"We need to filter unqualified applicants instantly"</li>
                    <li>"Our historical database is a major mess to search"</li>
                    <li>"ATS parsing rejects highly qualified people"</li>
                  </ul>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 35, filter: "blur(3px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs space-y-3"
                >
                  <div className="flex items-center gap-2 text-indigo-500">
                    <span className="font-bold text-lg">🤔</span>
                    <h4 className="font-mono text-xs font-bold text-zinc-800 uppercase tracking-wide">WHAT THEY THINK</h4>
                  </div>
                  <ul className="space-y-2 text-zinc-500 text-xs leading-relaxed list-disc pl-3">
                    <li>"I hope the hiring manager actually reviews my interview summaries"</li>
                    <li>"If we don't speed up candidate tracking, we lose key talent"</li>
                    <li>"Recruiter data entries must be standard to keep value"</li>
                  </ul>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 35, filter: "blur(3px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs space-y-3"
                >
                  <div className="flex items-center gap-2 text-purple-500">
                    <span className="font-bold text-lg">🤚🏻</span>
                    <h4 className="font-mono text-xs font-bold text-zinc-800 uppercase tracking-wide">WHAT THEY DO</h4>
                  </div>
                  <ul className="space-y-2 text-zinc-500 text-xs leading-relaxed list-disc pl-3">
                    <li>Rely heavily on high-speed "Candidates List" row searches</li>
                    <li>Apply the "six-second rule" before making first disposition</li>
                    <li>Trigger extensive bulk progressions or emails</li>
                  </ul>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 35, filter: "blur(3px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs space-y-3"
                >
                  <div className="flex items-center gap-2 text-pink-500">
                    <span className="font-bold text-lg">💜</span>
                    <h4 className="font-mono text-xs font-bold text-zinc-800 uppercase tracking-wide">WHAT THEY FEEL</h4>
                  </div>
                  <ul className="space-y-2 text-zinc-500 text-xs leading-relaxed list-disc pl-3">
                    <li>Severely frustrated by constant PDF external downloads</li>
                    <li>Overwhelmed by messy, dense, unaligned dashboard layouts</li>
                    <li>Relieved when single pane binds candidate resume & notes</li>
                  </ul>
                </motion.div>

              </div>
            </div>

            {/* SUBSECTION: THE INTERACTIVE SHOWCASE (PORTFOLIO MEDIA SHOWCASE) */}
            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3 max-w-xl"
              >
                <span className="font-mono text-xs font-bold tracking-widest text-[#777777] uppercase block">
                  05. PLATFORM HIGH-FIDELITY MOCKUPS & DELIVERABLES
                </span>
                <h2 className="text-3xl font-black text-zinc-950 tracking-tight">The Sol-Designed Candidate Workspace.</h2>
                <p className="text-zinc-500 text-sm">Explore interactive high-fidelity screen outputs built directly using the code-aligned Sol Design System.</p>
              </motion.div>

              {/* Mockup switcher navigation system */}
              <motion.div 
                initial={{ opacity: 0, y: 25, filter: "blur(2px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-2 border-b border-zinc-200 pb-4"
              >
                {[
                  { id: "list", label: "Candidates List view", desc: "A clean high-density grid tracking all applications" },
                  { id: "bulk", label: "Bulk Action Console", desc: "Slider overlay to progression batches instantly" },
                  { id: "info", label: "Candidate Info view", desc: "Split pane linking native resumes side-by-side" },
                  { id: "notes", label: "Team Notes & Threads", desc: "Collaborative comment engine with active tagging" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveMockupTab(tab.id)}
                    className={`px-4 py-2.5 rounded-xl text-left border cursor-pointer transition-all ${
                      activeMockupTab === tab.id
                        ? "bg-zinc-950 border-zinc-950 text-white shadow-xs"
                        : "bg-white border-zinc-250/70 text-zinc-650 hover:border-zinc-400 hover:text-zinc-950"
                    }`}
                  >
                    <p className="text-xs font-bold">{tab.label}</p>
                  </button>
                ))}
              </motion.div>

              {/* Image Preview Window featuring Framer Motion */}
              <motion.div 
                initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="border border-zinc-200 rounded-3xl bg-zinc-50 overflow-hidden shadow-xl shadow-zinc-200/50 max-w-5xl mx-auto relative group"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMockupTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="aspect-[16/10] w-full flex items-center justify-center p-4 sm:p-6"
                  >
                    {activeMockupTab === "list" && (
                      <img
                        src="/assets/Candidates List.png"
                        alt="Candidates List view showing high-density grid layout and real-time filters"
                        referrerPolicy="no-referrer"
                        className="rounded-xl shadow-md border border-zinc-200 max-h-full max-w-full object-contain"
                      />
                    )}
                    {activeMockupTab === "bulk" && (
                      <img
                        src="/assets/Candidates List - Bulk Actions.png"
                        alt="Candidates List with progress action console overlay active"
                        referrerPolicy="no-referrer"
                        className="rounded-xl shadow-md border border-zinc-200 max-h-full max-w-full object-contain"
                      />
                    )}
                    {activeMockupTab === "info" && (
                      <img
                        src="/assets/Candidate info page.png"
                        alt="Candidate details containing native inline PDF viewer"
                        referrerPolicy="no-referrer"
                        className="rounded-xl shadow-md border border-zinc-200 max-h-full max-w-full object-contain"
                      />
                    )}
                    {activeMockupTab === "notes" && (
                      <img
                        src="/assets/Candidate info page - Team Notes.png"
                        alt="Team discussion chat module in active evaluation side pane"
                        referrerPolicy="no-referrer"
                        className="rounded-xl shadow-md border border-zinc-200 max-h-full max-w-full object-contain"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
                
                <div className="bg-white border-t border-zinc-200 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h4 className="font-mono text-xs font-bold text-zinc-900 uppercase">
                      {activeMockupTab === "list" && "Candidates List — Global Pipeline Overview"}
                      {activeMockupTab === "bulk" && "Bulk Actions Console — High-Speed Processing"}
                      {activeMockupTab === "info" && "Candidates Info View — Contextual Split Pane"}
                      {activeMockupTab === "notes" && "Team Notes Hub — Rich Thread & Tag Collaboration"}
                    </h4>
                    <p className="text-zinc-500 text-xs mt-1">
                      {activeMockupTab === "list" && "Displays real-time pipeline categories, scores, experience filters, and custom columns in a dense table."}
                      {activeMockupTab === "bulk" && "Action floating pane slides up when multiple candidate rows are selected, accelerating bulk candidate progressions."}
                      {activeMockupTab === "info" && "A unified split view pairing inline resumes on the left with evaluations, scorecard tabs, and notes on the right."}
                      {activeMockupTab === "notes" && "Deep integration of interactive thread comments, reply states, likes, and a quick-rating dashboard."}
                    </p>
                  </div>
                  
                  <a
                    href="https://apply-now-platform-oysw.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-full py-2 px-5 text-xs font-bold flex items-center gap-2 select-none group/btn cursor-pointer transition-all duration-300 shadow-sm"
                  >
                    <span>Launch Live Prototype</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* SUBSECTION: THE TELEMETRY FRAMEWORK */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-12 border-t border-b border-zinc-200/80">
              <motion.div 
                initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6 space-y-6"
              >
                <span className="font-mono text-xs font-bold text-indigo-650 uppercase tracking-widest block">
                  06. THE TELEMETRY FRAMEWORK
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-zinc-950">
                  Firebase Event Telemetry & Validation Funnels
                </h3>
                <p className="text-zinc-850 text-sm sm:text-base leading-relaxed">
                  Rather than trusting abstract opinions during testing, we engineered a rigorous quantitative telemetry tracking layout via <strong>Firebase Analytics</strong>. This allows us to map user actions against precise product objectives:
                </p>
                
                <div className="space-y-4 font-mono text-xs">
                  <div className="border border-zinc-250 p-4 bg-white rounded-xl space-y-1.5 shadow-3xs">
                    <span className="font-bold text-indigo-650 block">THE HIGH-VOLUME SCREEN FUNNEL</span>
                    <p className="text-zinc-700 text-xs leading-relaxed">
                      Tracks user row toggles → floating overlay load → <code>bulk_action_triggered</code>. Measures batch-progression speed and efficiency.
                    </p>
                  </div>

                  <div className="border border-zinc-250 p-4 bg-white rounded-xl space-y-1.5 shadow-3xs">
                    <span className="font-bold text-blue-650 block">THE DEEP EVALUATION FUNNEL</span>
                    <p className="text-zinc-700 text-xs leading-relaxed">
                      Tracks candidate click → split screen scroll → scorecard input → <code>team_note_posted</code>. Measures friction-free workflow completion limits.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="lg:col-span-6 space-y-6">
                <motion.h4 
                  initial={{ opacity: 0, y: 15, filter: "blur(2px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-10px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="font-mono text-xs font-bold text-zinc-400 tracking-wider uppercase mb-2"
                >
                  MEASURABLE UX METRICS & KPI TARGETS
                </motion.h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* KPI Card 1 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 35, filter: "blur(3px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="border border-zinc-200 bg-white rounded-3xl p-6 flex flex-col justify-between shadow-xs group hover:border-zinc-400 hover:shadow-md transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center border border-zinc-200 shadow-3xs text-zinc-900 group-hover:scale-105 transition-all">
                        <Clock className="w-4 h-4 stroke-[1.5] text-[#6366f1]" />
                      </div>
                      <div className="space-y-2">
                        <div className="inline-block font-mono text-[10px] text-zinc-500 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded uppercase tracking-wider font-semibold">
                          Avg TToD Drop
                        </div>
                        <h4 className="text-lg font-extrabold tracking-tight text-zinc-950">
                          Dropped by <AnimatedCounter value="~4.5s" />
                        </h4>
                        <p className="text-zinc-500 text-xs leading-relaxed">
                          Average Time-to-Disposition drop across high-volume mock testing environments.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* KPI Card 2 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 35, filter: "blur(3px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="border border-zinc-200 bg-white rounded-3xl p-6 flex flex-col justify-between shadow-xs group hover:border-zinc-400 hover:shadow-md transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50/50 flex items-center justify-center border border-emerald-100 shadow-3xs text-zinc-900 group-hover:scale-105 transition-all">
                        <Zap className="w-4 h-4 stroke-[1.5] text-emerald-500" />
                      </div>
                      <div className="space-y-2">
                        <div className="inline-block font-mono text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded uppercase tracking-wider font-semibold">
                          Bulk Adoption
                        </div>
                        <h4 className="text-lg font-extrabold tracking-tight text-zinc-950">
                          <AnimatedCounter value="85%" /> Adoption Rate
                        </h4>
                        <p className="text-zinc-500 text-xs leading-relaxed">
                          Recruiter selection of candidate bulk actions over single-row status configurations.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* KPI Card 3 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 35, filter: "blur(3px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="border border-zinc-200 bg-white rounded-3xl p-6 flex flex-col justify-between shadow-xs group hover:border-zinc-400 hover:shadow-md transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-50/50 flex items-center justify-center border border-purple-100 shadow-3xs text-zinc-900 group-hover:scale-105 transition-all">
                        <Sliders className="w-4 h-4 stroke-[1.5] text-purple-600" />
                      </div>
                      <div className="space-y-2">
                        <div className="inline-block font-mono text-[10px] text-purple-700 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded uppercase tracking-wider font-semibold">
                          Customization
                        </div>
                        <h4 className="text-lg font-extrabold tracking-tight text-zinc-950">
                          <AnimatedCounter value="62%" /> Layout Edits
                        </h4>
                        <p className="text-zinc-500 text-xs leading-relaxed">
                          Table column layout active personalization rates tracking custom data preferences.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* KPI Card 4 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 35, filter: "blur(3px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="border border-zinc-200 bg-white rounded-3xl p-6 flex flex-col justify-between shadow-xs group hover:border-zinc-400 hover:shadow-md transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-50/50 flex items-center justify-center border border-amber-100 shadow-3xs text-zinc-900 group-hover:scale-105 transition-all">
                        <Activity className="w-4 h-4 stroke-[1.5] text-amber-600" />
                      </div>
                      <div className="space-y-2">
                        <div className="inline-block font-mono text-[10px] text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded uppercase tracking-wider font-semibold">
                          Collaboration
                        </div>
                        <h4 className="text-lg font-extrabold tracking-tight text-zinc-950">
                          <AnimatedCounter value="3.4" /> posts / applicant
                        </h4>
                        <p className="text-zinc-500 text-xs leading-relaxed">
                          Rich team thread collaboration, reply activity, and interactive scorecard tagging depth.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>

            {/* NEW DEDICATED SECTION: 07. PROJECT RETROSPECTIVE & LESSONS */}
            <div className="py-16 md:py-24 border-b border-zinc-200/80 space-y-12 select-none">
              <motion.div 
                initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-3xl space-y-4"
              >
                <span className="font-mono text-xs font-bold text-indigo-650 uppercase tracking-widest block">
                  07. PROJECT RETROSPECTIVE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 font-sans leading-tight">
                  What I Learned From This Project
                </h2>
                <p className="text-zinc-800 text-sm sm:text-base leading-relaxed">
                  Building the <strong>Apply Now Enterprise Platform</strong> highlighted the critical intersection between visual systems design, deep interaction mechanics, and code-level synchronization.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Takeaway Card 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 35, filter: "blur(3px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white border border-zinc-200/85 p-6 sm:p-8 rounded-3xl shadow-sm shadow-zinc-100/50 hover:shadow-md hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-105 flex items-center justify-center text-indigo-650">
                      <Layers className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-base font-bold text-zinc-950 font-sans tracking-tight">
                        Token-Level Systems over Static Artboards
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-750 leading-relaxed font-sans">
                        Static component designs and high-fidelity artboards look spectacular but introducing them without developer synchronization often yields layout regressions. Establishing the <strong>Sol Design System</strong> as a code-ready, token-level single source of truth completely eliminated transition delays, ensuring absolute viewport compliance.
                      </p>
                    </div>
                  </div>
                  <div className="font-mono text-xs text-zinc-500 font-semibold tracking-wider uppercase pt-4 border-t border-zinc-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    SYSTEMS COHERENCE OBJECTIVE
                  </div>
                </motion.div>

                {/* Takeaway Card 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 35, filter: "blur(3px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white border border-zinc-200/85 p-6 sm:p-8 rounded-3xl shadow-sm shadow-zinc-100/50 hover:shadow-md hover:border-zinc-350 transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-105 flex items-center justify-center text-emerald-650">
                      <Activity className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-base font-bold text-zinc-950 font-sans tracking-tight">
                        Replacing Gut Feelings with Quantitative Telemetry
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-750 leading-relaxed font-sans">
                        UX and styling value must be proven, not assumed. Direct-emit Firebase Event funnels allowed us to trace user screen-interactions in real-time, validating that customized table columns and bulk sliders dropped the Average Time-to-Disposition by 4.5 seconds per candidate.
                      </p>
                    </div>
                  </div>
                  <div className="font-mono text-xs text-zinc-500 font-semibold tracking-wider uppercase pt-4 border-t border-zinc-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    QUANT LEVEL UX METRICS
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        )}

        {item.id === "proj-2" && (
          <PandaHabitsDeepDive />
        )}

        {item.id === "proj-3" && (
          <CareerPulseDeepDive />
        )}

      </div> {/* END OF MAX-W-7th WRAPPER */}

      {/* SECTION 4: 04. THE IMPACT (Full-width Pure Black Dark Mode) */}
      <section className="bg-neutral-950 text-white py-24 lg:py-32 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 mb-20"
          >
            <span className="font-mono text-xs font-bold tracking-widest text-[#777777] uppercase block">
              04. THE IMPACT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
              Quantifying Design.
            </h2>
          </motion.div>

          {/* Three-Column Metric Grid with numbers on one row and descriptions below */}
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4 md:gap-0 divide-x divide-zinc-900 border-b border-zinc-900/60 pb-6 text-center md:text-left">
              {/* Metric 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="md:pr-12"
              >
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white block tracking-tight leading-none whitespace-nowrap">
                  <AnimatedCounter value={extended.impactStats[0].value} />
                </span>
              </motion.div>

              {/* Metric 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="px-4 md:px-12"
              >
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white block tracking-tight leading-none whitespace-nowrap">
                  <AnimatedCounter value={extended.impactStats[1].value} />
                </span>
              </motion.div>

              {/* Metric 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="pl-4 md:pl-12"
              >
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white block tracking-tight leading-none whitespace-nowrap">
                  <AnimatedCounter value={extended.impactStats[2].value} />
                </span>
              </motion.div>
            </div>

            {/* Descriptions Row */}
            <div className="grid grid-cols-3 gap-4 md:gap-0 divide-x divide-zinc-900 text-center md:text-left">
              <div className="md:pr-12">
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans max-w-xs mx-auto md:mx-0">
                  {extended.impactStats[0].text}
                </p>
              </div>
              <div className="px-4 md:px-12">
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans max-w-xs mx-auto md:mx-0">
                  {extended.impactStats[1].text}
                </p>
              </div>
              <div className="pl-4 md:pl-12">
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans max-w-xs mx-auto md:mx-0">
                  {extended.impactStats[2].text}
                </p>
              </div>
            </div>
          </div>

          {/* Core Footer return CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-24 pt-12 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <p className="font-mono text-xs text-zinc-500">
              © NEUROFLOW DIGITAL SYSTEM LABS. ALL RIGHTS RESERVED.
            </p>
            <button
              id="footer-back-btn"
              onClick={onClose}
              className="bg-white hover:bg-zinc-250 text-neutral-950 text-xs font-bold px-6 py-3 rounded-full font-mono transition-all cursor-pointer flex items-center gap-2"
            >
              <span>← RETURN_TO_GALLERY</span>
            </button>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
