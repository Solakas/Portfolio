import { motion, AnimatePresence } from "motion/react";
import { 
  Linkedin, 
  Github, 
  Youtube, 
  Mail, 
  MapPin, 
  Briefcase, 
  Calendar, 
  Layers, 
  ShieldAlert, 
  Sparkles, 
  BookOpen, 
  Award, 
  ChevronRight,
  Code2,
  Terminal,
  Cpu,
  Tv
} from "lucide-react";
import { useState } from "react";

interface AboutViewProps {
  onBack: () => void;
  userEmail?: string;
}

const timelineContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
} as const;

const timelineItemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 400, damping: 25 } 
  }
} as const;

type TabType = "experience" | "skills" | "education";

export default function AboutView({ onBack, userEmail = "solakidisp@gmail.com" }: AboutViewProps) {
  const [imgError, setImgError] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("experience");

  return (
    <motion.div
      id="about-view-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex-1 flex flex-col items-center justify-start overflow-y-auto max-h-[calc(100vh-140px)] pr-2 sm:pr-4 py-4 sm:py-8 select-none z-10"
    >
      {/* View Header */}
      <div className="w-full text-center mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-[0.25em] text-zinc-400">
          About Me
        </h2>
      </div>

      {/* Main Two-Column Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start max-w-6xl mx-auto px-4">
        
        {/* Left Column (Visual/Identity) */}
        <div className="hidden lg:flex col-span-1 md:col-span-12 lg:col-span-5 flex-col items-center justify-center gap-y-6">
          
          {/* Portrait Image with Abstract Backdrop Blob */}
          <div className="relative w-full h-auto max-w-[340px] sm:max-w-[420px] flex items-center justify-center bg-transparent">
            {/* Animated paint stroke backdrop with smooth entrance and floating loop */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: [0.9, 1.05, 0.95, 1],
                opacity: 0.85,
                rotate: [0, 6, -6, 0],
                y: [0, -8, 8, 0],
                x: [0, 4, -4, 0]
              }}
              transition={{
                scale: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 1.0 },
                rotate: { duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
                y: { duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
                x: { duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
              }}
              className="absolute inset-[10%] z-0 select-none pointer-events-none flex items-center justify-center"
            >
              <svg 
                viewBox="0 0 200 200" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-full h-full text-zinc-100 fill-current"
              >
                <path 
                  d="M44.7,-74.6C57.5,-68.1,67.2,-55.4,74.7,-41.4C82.1,-27.4,87.2,-12.1,88.4,3.7C89.6,19.5,86.8,35.8,79.1,49.2C71.3,62.6,58.6,73,44.1,80C29.6,87,14.8,90.6,-0.5,91.3C-15.8,92,-31.6,89.9,-45.8,82.8C-60,75.7,-72.7,63.7,-80.7,49.2C-88.7,34.7,-92.1,17.3,-91.3,0.5C-90.5,-16.4,-85.4,-32.8,-76,-46.3C-66.5,-59.8,-52.7,-70.5,-38,-75.9C-23.3,-81.4,-7.8,-81.5,4.7,-82.9C17.1,-84.3,31.9,-81.1,44.7,-74.6Z" 
                  transform="translate(100 100)" 
                />
              </svg>
            </motion.div>

            {/* Profile Photo over backdrop with clean reveal animation */}
            {!imgError ? (
              <div className="relative overflow-hidden rounded-2xl w-full h-auto flex items-center justify-center z-10 transition-all duration-300">
                <motion.img
                  initial={{ scale: 1.1, opacity: 0, y: 15 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1
                  }}
                  src="/assets/Full body shot 5.png"
                  onError={() => setImgError(true)}
                  className="w-full h-auto object-contain relative z-10 drop-shadow-md select-none pointer-events-none"
                  alt="Panagiotis"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual wipe/revealer curtain component - slides vertical up & out */}
                <motion.div
                  initial={{ scaleY: 1 }}
                  animate={{ scaleY: 0 }}
                  transition={{ 
                    duration: 0.9, 
                    ease: [0.76, 0, 0.24, 1]
                  }}
                  style={{ transformOrigin: "top" }}
                  className="absolute inset-0 bg-zinc-950 z-20 pointer-events-none"
                />
              </div>
            ) : (
              <div className="absolute inset-4 rounded-3xl bg-zinc-100 border border-dashed border-zinc-200 flex flex-col items-center justify-center p-4 text-center z-10 select-none">
                <span className="text-3xl text-zinc-400 mb-2">👤</span>
                <p className="text-zinc-500 text-xs font-mono">[Full body shot 5.png]</p>
              </div>
            )}
          </div>

        </div>

        {/* Right Column (Content/Professional Bio) */}
        <div className="col-span-1 md:col-span-12 lg:col-span-7 flex flex-col items-start gap-y-6 sm:gap-y-8">
          
          <div className="flex flex-col gap-y-2.5 w-full">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
              Hi, I’m Panagiotis
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-zinc-500 font-medium text-sm sm:text-base leading-relaxed">
              <span className="flex items-center gap-1.5 text-zinc-800">
                <Briefcase className="w-4 h-4 text-zinc-400" />
                Lead Designer - Wave Grocery
              </span>
              <span className="hidden sm:inline text-zinc-300">|</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-zinc-400" />
                Thessaloniki, Greece
              </span>
            </div>

            {/* Social Icons & Email Contact Bar */}
            <div className="flex items-center gap-3 relative z-20 mt-2">
              <motion.a
                href="https://www.linkedin.com/in/solakidis-panagiotis-830b69326/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-900 transition-colors shadow-xs"
                title="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </motion.a>
              <motion.a
                href="https://github.com/Solakas"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-900 transition-colors shadow-xs"
                title="GitHub"
              >
                <Github className="w-4.5 h-4.5" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@UX-AIDesigner"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-900 transition-colors shadow-xs"
                title="YouTube"
              >
                <Youtube className="w-4.5 h-4.5" />
              </motion.a>
              <motion.a
                href={`mailto:${userEmail}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-900 transition-colors shadow-xs"
                title="Email"
              >
                <Mail className="w-4.5 h-4.5" />
              </motion.a>
            </div>
          </div>

          {/* Core Biography summary (Enriched with military-grade precision) */}
          <div className="border-l-2 border-zinc-900 pl-4 py-1 max-w-2xl bg-zinc-50/50 pr-4 rounded-r-lg">
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
              AI-native UX Designer and Systems Architect with over 6 years of experience designing complex platforms and high-density e-commerce solutions. Expert in bridging design and code by leveraging AI workflows (<strong className="text-zinc-900">Claude</strong>, <strong className="text-zinc-900">Cursor</strong>, <strong className="text-zinc-900">Figma Make</strong>) to ship functional, production-ready React prototypes. Architect of the multi-branded Wave Grocery Design System. Former Hellenic Air Force Officer, bringing structured precision and leadership to high-performance product squads.
            </p>
          </div>

          {/* INTERACTIVE RESUME NAVIGATION TABS */}
          <div className="w-full flex flex-col gap-y-6 mt-2 max-w-2xl">
            <div className="flex items-center justify-start bg-zinc-100/60 p-1.5 rounded-xl border border-zinc-200/40 w-full xs:w-auto overflow-x-auto select-none no-scrollbar">
              <button
                onClick={() => setActiveTab("experience")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "experience"
                    ? "bg-zinc-900 text-white shadow-xs"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Experience
              </button>
              
              <button
                onClick={() => setActiveTab("skills")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "skills"
                    ? "bg-zinc-900 text-white shadow-xs"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                <Cpu className="w-4 h-4" />
                Skills Grid
              </button>

              <button
                onClick={() => setActiveTab("education")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "education"
                    ? "bg-zinc-900 text-white shadow-xs"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/20"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Education & Background
              </button>
            </div>

            {/* TAB CONTENT WITH ANIMATE PRESENCE */}
            <div className="min-h-[350px] w-full relative">
              <AnimatePresence mode="wait">
                
                {/* EXPERIENCE TAB */}
                {activeTab === "experience" && (
                  <motion.div
                    key="experience"
                    variants={timelineContainerVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="space-y-6 sm:space-y-8"
                  >
                    {/* Role 1 */}
                    <motion.div 
                      variants={timelineItemVariants}
                      className="group relative pl-6 border-l border-zinc-200 hover:border-zinc-900 transition-colors pb-2"
                    >
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-300 border-2 border-white group-hover:bg-zinc-900 group-hover:scale-110 transition-all" />
                      
                      <h4 className="font-serif text-lg font-bold text-zinc-900 mb-0.5">
                        Lead Product Designer & Systems Architect
                      </h4>
                      
                      <p className="text-zinc-650 font-medium text-xs sm:text-sm uppercase tracking-wider text-zinc-500 mb-1">
                        Desquared SA
                      </p>

                      <div className="mb-3.5">
                        <span className="inline-flex items-center gap-1.5 text-xs text-zinc-450 font-mono select-none">
                          <Calendar className="w-3.5 h-3.5 text-zinc-400/80" />
                          Oct 2023 – Present · <span className="text-zinc-700 font-semibold">2 yrs 8 mos</span>
                        </span>
                      </div>
                      
                      <ul className="space-y-2 text-zinc-650 text-sm leading-relaxed font-normal">
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-400 shrink-0 mt-1">▪</span>
                          <span>Explore and integrate cutting-edge, AI-native solutions to optimize user onboarding and design-to-code pipelines, leveraging tools like <strong className="text-zinc-900">Claude</strong>, <strong className="text-zinc-900">Cursor</strong>, and <strong className="text-zinc-905">Figma Make</strong> to accelerate layout generation and interactive prototyping.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-400 shrink-0 mt-1">▪</span>
                          <span>Spearheaded the design strategy, refactoring audits, and continuous maintenance of the <strong className="text-zinc-900">Wave Grocery Design System (WG DS)</strong>—scaling the library to <strong className="text-zinc-900">146 core components</strong> and over <strong className="text-zinc-900">3,500+ interactive variants</strong> with guaranteed 1:1 code readiness and unidirectional token architectures.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-400 shrink-0 mt-1">▪</span>
                          <span>Manage and mentor a high-performing design team, establishing modern token governance models and streamlined contribution pipelines for multi-brand products.</span>
                        </li>
                      </ul>
                    </motion.div>

                    {/* Role 2 */}
                    <motion.div 
                      variants={timelineItemVariants}
                      className="group relative pl-6 border-l border-zinc-200 hover:border-zinc-900 transition-colors pb-2"
                    >
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-300 border-2 border-white group-hover:bg-zinc-900 group-hover:scale-110 transition-all" />
                      
                      <h4 className="font-serif text-lg font-bold text-zinc-900 mb-0.5">
                        Product Designer & Systems Designer
                      </h4>
                      
                      <p className="text-zinc-650 font-medium text-xs sm:text-sm uppercase tracking-wider text-zinc-500 mb-1">
                        Desquared SA
                      </p>

                      <div className="mb-3.5">
                        <span className="inline-flex items-center gap-1.5 text-xs text-zinc-450 font-mono select-none">
                          <Calendar className="w-3.5 h-3.5 text-zinc-400/80" />
                          July 2020 – Oct 2023 · <span className="text-zinc-700 font-semibold">3 yrs 3 mos</span>
                        </span>
                      </div>
                      
                      <ul className="space-y-2 text-zinc-650 text-sm leading-relaxed font-normal">
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-400 shrink-0 mt-1">▪</span>
                          <span>Crafted and structured the multi-branded <strong className="text-zinc-900">Wave Grocery Design System</strong> from the ground up, establishing a single, unified codebase-aligned component core that enables deep brand customization and extreme visual flexibility for multiple retail clients.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-400 shrink-0 mt-1">▪</span>
                          <span>Directed the complete redesign of both the responsive web storefront and native mobile applications, aligning complex e-commerce interactions with modern premium aesthetics.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-400 shrink-0 mt-1">▪</span>
                          <span>Orchestrated end-to-end product feature lifecycles from initial user analysis to high-fidelity UI layout and rigorous QA validation, shipping high-impact solutions like <strong className="text-zinc-950">Intelligent Search</strong>, <strong className="text-zinc-950">Edit Order</strong>, and <strong className="text-zinc-950">Product Personalization</strong>.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-400 shrink-0 mt-1">▪</span>
                          <span>Championed strict design heuristics and pixel-level quality control, securing full cross-platform design-to-code parity and uncompromised accessibility syncs (<strong className="text-zinc-900">WCAG & ADA guidelines</strong>).</span>
                        </li>
                      </ul>
                    </motion.div>

                    {/* Role 3 */}
                    <motion.div 
                      variants={timelineItemVariants}
                      className="group relative pl-6 border-l border-zinc-200 hover:border-zinc-900 transition-colors"
                    >
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-300 border-2 border-white group-hover:bg-zinc-900 group-hover:scale-110 transition-all" />
                      
                      <h4 className="font-serif text-lg font-bold text-zinc-900 flex items-center gap-1.5 mb-0.5">
                        Lieutenant (Anti-Aircraft Missile Systems)
                        <ShieldAlert className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                      </h4>
                      
                      <p className="text-zinc-650 font-medium text-xs sm:text-sm uppercase tracking-wider text-zinc-500 mb-1">
                        Hellenic Air Force
                      </p>

                      <div className="mb-3.5">
                        <span className="inline-flex items-center gap-1.5 text-xs text-zinc-450 font-mono select-none">
                          <Calendar className="w-3.5 h-3.5 text-zinc-400/80" />
                          2016 – 2020 · <span className="text-zinc-700 font-semibold">4 yrs</span>
                        </span>
                      </div>
                      
                      <ul className="space-y-2 text-zinc-650 text-sm leading-relaxed font-normal">
                        <li className="flex items-start gap-2">
                          <span className="text-zinc-400 shrink-0 mt-1">▪</span>
                          <span>Commanded military units, operating advanced real-time software systems and target telemetry hardware under high-velocity conditions.</span>
                        </li>
                        <li className="flex items-start gap-2">
                           <span className="text-zinc-400 shrink-0 mt-1">▪</span>
                           <span>Led military daily briefings, maintenance syncs, and drills—developing rigorous accountability, technical discipline, alignment, and command structure.</span>
                         </li>
                       </ul>
                    </motion.div>
                  </motion.div>
                )}

                {/* SKILLS TAB */}
                {activeTab === "skills" && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    {/* Category 1 */}
                    <div className="border border-zinc-200/50 bg-white/50 rounded-xl p-5 hover:border-zinc-900/40 transition-colors duration-300 shadow-xs">
                      <div className="flex items-center gap-2 mb-3.5">
                        <Layers className="w-4 h-4 text-zinc-600" />
                        <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-zinc-800">
                          Design Systems & Token governance
                        </h5>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {["Figma Variables", "Component Scaling", "Token-to-Code Parity", "UI Architecture", "Design Versioning", "Auto-Layout V4", "Refactoring Ops", "Sol Design System"].map(skill => (
                          <span key={skill} className="text-xs bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-600 transition-colors px-2.5 py-1.5 rounded-lg font-medium cursor-default">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Category 2 */}
                    <div className="border border-zinc-200/50 bg-white/50 rounded-xl p-5 hover:border-zinc-900/40 transition-colors duration-300 shadow-xs">
                      <div className="flex items-center gap-2 mb-3.5">
                        <Terminal className="w-4 h-4 text-zinc-600" />
                        <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-zinc-800">
                          Technical Design Ops (DX)
                        </h5>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {["React Prototyping", "Cursor Dev", "Claude Code", "MCP Integrations", "Figma API Automations", "Heuristic Auditing", "WCAG/ADA Standards"].map(skill => (
                          <span key={skill} className="text-xs bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-600 transition-colors px-2.5 py-1.5 rounded-lg font-medium cursor-default">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Category 3 */}
                    <div className="border border-zinc-200/50 bg-white/50 rounded-xl p-5 hover:border-zinc-900/40 transition-colors duration-300 shadow-xs">
                      <div className="flex items-center gap-2 mb-3.5">
                        <Sparkles className="w-4 h-4 text-zinc-600" />
                        <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-zinc-800">
                          Team Strategy & Alignment
                        </h5>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {["Product Trios", "Sprint Backlog", "Design Specification", "Mentoring Designers", "Cross-Squad Communication", "Military Precision Rules", "System Contributions"].map(skill => (
                          <span key={skill} className="text-xs bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-600 transition-colors px-2.5 py-1.5 rounded-lg font-medium cursor-default">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Category 4 */}
                    <div className="border border-zinc-200/50 bg-white/50 rounded-xl p-5 hover:border-zinc-900/40 transition-colors duration-300 shadow-xs">
                      <div className="flex items-center gap-2 mb-3.5">
                        <Code2 className="w-4 h-4 text-zinc-600" />
                        <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-zinc-800">
                          Code/Engineering Familiarities
                        </h5>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {["TypeScript", "JavaScript", "Tailwind CSS", "CSS Custom States", "Git / GitHub CLI", "Node.js Basics", "JSON Token Structures"].map(skill => (
                          <span key={skill} className="text-xs bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-600 transition-colors px-2.5 py-1.5 rounded-lg font-medium cursor-default">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* EDUCATION TAB */}
                {activeTab === "education" && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="border border-zinc-200/50 bg-white/50 rounded-2xl p-5 sm:p-6 shadow-xs flex items-start gap-4">
                      <div className="p-3 bg-zinc-100 rounded-xl text-zinc-850">
                        <Cpu className="w-5 h-5 text-indigo-500/85" />
                      </div>
                      <div className="flex-1 space-y-1 text-zinc-650 leading-relaxed">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className="font-serif text-base sm:text-lg font-bold text-zinc-950">
                            Build a Modern AI-Infused SaaS with Claude Code
                          </h4>
                          <span className="text-xs font-mono text-zinc-400">2026</span>
                        </div>
                        <p className="font-medium text-xs sm:text-sm text-zinc-500">DesignCourse Certification</p>
                        <p className="text-xs sm:text-sm pt-2">
                          Specialized masterclass in building full-stack SaaS applications using Next.js, PostgreSQL, and Claude Code to implement AI capabilities, dynamic editor interfaces, secure authentication, and Stripe integrations.
                        </p>
                      </div>
                    </div>

                    <div className="border border-zinc-200/50 bg-white/50 rounded-2xl p-5 sm:p-6 shadow-xs flex items-start gap-4">
                      <div className="p-3 bg-zinc-100 rounded-xl text-zinc-850">
                        <Sparkles className="w-5 h-5 text-amber-500/80" />
                      </div>
                      <div className="flex-1 space-y-1 text-zinc-650 leading-relaxed">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className="font-serif text-base sm:text-lg font-bold text-zinc-950">
                            Advanced Frontends
                          </h4>
                          <span className="text-xs font-mono text-zinc-400">2026</span>
                        </div>
                        <p className="font-medium text-xs sm:text-sm text-zinc-500">DesignCourse Certification</p>
                        <p className="text-xs sm:text-sm pt-2">
                          Advanced masterclass specializing in interactive motion design, scroll-driven animations with GSAP (ScrollTrigger), parallax layouts, Three.js 3D web interfaces, SVG masking, and fluid web animations.
                        </p>
                      </div>
                    </div>

                    <div className="border border-zinc-200/50 bg-white/50 rounded-2xl p-5 sm:p-6 shadow-xs flex items-start gap-4">
                      <div className="p-3 bg-zinc-100 rounded-xl text-zinc-850">
                        <Terminal className="w-5 h-5" />
                      </div>
                      <div className="flex-1 space-y-1 text-zinc-650 leading-relaxed">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className="font-serif text-base sm:text-lg font-bold text-zinc-950">
                            Interactive JavaScript Fundamentals
                          </h4>
                          <span className="text-xs font-mono text-zinc-400">2025</span>
                        </div>
                        <p className="font-medium text-xs sm:text-sm text-zinc-500">DesignCourse Certification</p>
                        <p className="text-xs sm:text-sm pt-2">
                          Interactive training specializing in core ES6+ syntax, DOM manipulation, custom event-driven interactivity, dark mode configurations, event handlers, and practical algorithmic layout challenges.
                        </p>
                      </div>
                    </div>

                    <div className="border border-zinc-200/50 bg-white/50 rounded-2xl p-5 sm:p-6 shadow-xs flex items-start gap-4">
                      <div className="p-3 bg-zinc-100 rounded-xl text-zinc-850">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <div className="flex-1 space-y-1 text-zinc-650 leading-relaxed">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className="font-serif text-base sm:text-lg font-bold text-zinc-950">
                            CSS for JavaScript Developers
                          </h4>
                          <span className="text-xs font-mono text-zinc-400">2025</span>
                        </div>
                        <p className="font-medium text-xs sm:text-sm text-zinc-500">Josh W. Comeau (Interactive Course)</p>
                        <p className="text-xs sm:text-sm pt-2">
                          Advanced interactive training specializing in core CSS rendering rules, flexbox & grid layouts, relative/absolute positioning, responsive system layout patterns, CSS variables, and fluid transitions/animations.
                        </p>
                      </div>
                    </div>

                    <div className="border border-zinc-200/50 bg-white/50 rounded-2xl p-5 sm:p-6 shadow-xs flex items-start gap-4">
                      <div className="p-3 bg-zinc-100 rounded-xl text-zinc-850">
                        <Award className="w-5 h-5" />
                      </div>
                      <div className="flex-1 space-y-1 text-zinc-650 leading-relaxed">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className="font-serif text-base sm:text-lg font-bold text-zinc-950">
                            UX Immersion Program
                          </h4>
                          <span className="text-xs font-mono text-zinc-400">2019 – 2020</span>
                        </div>
                        <p className="font-medium text-xs sm:text-sm text-zinc-500">CareerFoundry Graduation Credentials</p>
                        <p className="text-xs sm:text-sm pt-2">
                          In-depth professional masterclass specializing in user research, wireframing, high-fidelity prototypes, heuristic evaluations, and interactive design validation.
                        </p>
                      </div>
                    </div>

                    <div className="border border-zinc-200/50 bg-white/50 rounded-2xl p-5 sm:p-6 shadow-xs flex items-start gap-4">
                      <div className="p-3 bg-zinc-100 rounded-xl text-zinc-850">
                        <Tv className="w-5 h-5" />
                      </div>
                      <div className="flex-1 space-y-1 text-zinc-650 leading-relaxed">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className="font-serif text-base sm:text-lg font-bold text-zinc-950">
                            B.S. in Military Sciences & Tactics
                          </h4>
                          <span className="text-xs font-mono text-zinc-400">2012 – 2016</span>
                        </div>
                        <p className="font-medium text-xs sm:text-sm text-zinc-500">Hellenic Air Force Academy (Athens, Greece)</p>
                        <p className="text-xs sm:text-sm pt-2">
                          Academic and practical training in aerospace mechanics, electronic countermeasures, team organization, radar telemetry logic, air operations coordination, and tactical leadership.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>



        </div>

      </div>

      {/* Retro/Minimal Action to return home */}
      <motion.button
        onClick={onBack}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-12 sm:mt-16 bg-zinc-100 border border-zinc-200/60 hover:bg-zinc-200/50 text-zinc-800 text-xs font-bold uppercase tracking-[0.2em] px-8 py-3 rounded-full cursor-pointer transition-all shadow-xs"
      >
        ← Back to home
      </motion.button>
    </motion.div>
  );
}
