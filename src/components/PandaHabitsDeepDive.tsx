import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sliders, 
  Terminal, 
  ShieldAlert, 
  Layers, 
  Activity, 
  Sparkles, 
  Github, 
  Globe, 
  ArrowUpRight, 
  Plus, 
  Check, 
  Info, 
  TrendingDown, 
  Copy, 
  CheckSquare, 
  Home, 
  User, 
  Coffee, 
  ChevronRight,
  Sparkle,
  ChevronLeft,
  Brain,
  BookOpen,
  Heart,
  Award,
  History,
  Smartphone,
  Lock,
  Hand,
  Volume2,
  Type,
  Eye
} from "lucide-react";

// Raw high-fidelity image slides from the public Solakas/Image-uploader repository with full content annotations
const MOCKUP_SLIDES = [
  {
    step: 1,
    title: "Defining the Identity",
    category: "onboarding",
    subtitle: "Onboarding - Personal Data Entry",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/7eeb75b877e59b118d1110a80b368e5efc80b4d6/01.%20Onboarding.png",
    quote: "First, we need to know who we are helping. Age and biology are the foundations of a healthy metabolism.",
    elements: [
      {
        icon: Sliders,
        title: "Minimalist Focus",
        desc: "Large, centered input controls minimize visual noise and cognitive load during a potentially sensitive personal data entry step."
      },
      {
        icon: Sparkles,
        title: "Visual Encouragement",
        desc: "Introducing the Panda Mascot early serves as a friendly companion, softening the clinical and sterile nature of standard data collection forms."
      }
    ]
  },
  {
    step: 2,
    title: "Visualizing Reality",
    category: "onboarding",
    subtitle: "Onboarding - Weight Projection",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/7eeb75b877e59b118d1110a80b368e5efc80b4d6/02.%20Wiegh%20Loss%20Profile.png",
    quote: "Honesty is key. We show the user that 'fast diets' lead to rebounds, while Panda Habits lead to lasting change.",
    elements: [
      {
        icon: Brain,
        title: "Contrast for Clarity",
        desc: "Utilizing a soft, warm Panda Blush (Red tint) for restrictive paths versus Bamboo Green for sustainable ones guides the user's subconscious preference toward healthy habits."
      },
      {
        icon: Check,
        title: "Emotional Reassurance",
        desc: "A green summary panel at the bottom acts as a 'safe harbor' of supportive text immediately after displaying comparative projections."
      }
    ]
  },
  {
    step: 3,
    title: "The Psychological Mirror",
    category: "onboarding",
    subtitle: "Onboarding - Behavioral Profile",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/7eeb75b877e59b118d1110a80b368e5efc80b4d6/03.%20Behavior%20Profile.png",
    quote: "Understanding the 'Why' behind eating is more important than the 'What'. Meet your inner Panda!",
    elements: [
      {
        icon: Layers,
        title: "Card-Based Hierarchy",
        desc: "Complex diagnostic information is partitioned into clean, bite-sized 'Insight' and 'Prediction' cards to prevent user overwhelm."
      },
      {
        icon: Sparkles,
        title: "Actionable Feedback",
        desc: "Shifts from diagnostic labeling to concrete support by clearly framing next steps ('The app will help you...')."
      }
    ]
  },
  {
    step: 4,
    title: "The Daily Hub",
    category: "dashboard",
    subtitle: "Dashboard - Home Screen",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/7eeb75b877e59b118d1110a80b368e5efc80b4d6/04.%20Home%20Screen.png",
    quote: "Everything you need is right here. We track meals, water, and even your mood. One paw at a time!",
    elements: [
      {
        icon: Activity,
        title: "Gamified Progress",
        desc: "The central circular indicator transforms standard tracking stats into a visual, progress-based loop, rewarding daily completion."
      },
      {
        icon: Sliders,
        title: "Zone of Action",
        desc: "High-frequency shortcuts ('Add Meal' and 'Water') are placed centrally in the bottom-middle zone of the screen to accommodate ergonomic, one-handed thumb navigation."
      }
    ]
  },
  {
    step: 5,
    title: "Seamless Entry",
    category: "dashboard",
    subtitle: "Input Methods - Meal Logging",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/7eeb75b877e59b118d1110a80b368e5efc80b4d6/05.%20Meal%20Logging.png",
    quote: "Found a snack? Just show it to me! Barcode, photo, or search—logging shouldn't be a chore.",
    elements: [
      {
        icon: Sliders,
        title: "Frictionless Choices",
        desc: "Offering multiple search and input methods (Scan, Voice, Type) caters to diverse user environments and reduces entry friction."
      },
      {
        icon: Layers,
        title: "Contextual Sheets",
        desc: "A responsive bottom sheet UI allows quick log operations without tearing the user away from their current dashboard state."
      }
    ]
  },
  {
    step: 6,
    title: "Real-time Clarity",
    category: "dashboard",
    subtitle: "AI Feedback - Nutritional Breakdown",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/7eeb75b877e59b118d1110a80b368e5efc80b4d6/0.5b.%20Meal%20Logging%20.png",
    quote: "Yum! That looks like a great choice. Look at those proteins go! Balanced eating makes a happy panda.",
    elements: [
      {
        icon: Brain,
        title: "Macro Education",
        desc: "Visualizing protein, carb, and fat balances dynamically teaches users to focus on overall food quality, not just raw caloric numbers."
      },
      {
        icon: Check,
        title: "Instant Validation",
        desc: "Employs immediate, non-judgmental, color-coded status chips to reinforce positive logging choices using micro-doses of visual validation."
      }
    ]
  },
  {
    step: 7,
    title: "Review & Refine",
    category: "dashboard",
    subtitle: "Food Diary - Management View",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/fef8a9ee3f9bb879f79ac872c56b536d53303438/14.%20Food%20Dairy%20View.png",
    quote: "Every meal is a lesson. This view helps you see patterns over time and make quick adjustments if you missed a snack.",
    elements: [
      {
        icon: History,
        title: "Chronological Clarity",
        desc: "Logged entries are organized chronologically and color-categorized to mirror the natural rhythm of the day (Breakfast, Lunch, Dinner, Snacks)."
      },
      {
        icon: Sliders,
        title: "In-line Editing",
        desc: "Enables quick-tap adjustment options inside the list context, reducing navigation fatigue and saving users time."
      }
    ]
  },
  {
    step: 8,
    title: "What's in the Fridge?",
    category: "recipe",
    subtitle: "Recipe Assistant - Ingredient Logging",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/9b7457b75419c61a05ec1b2a08eda84281df689d/22.%20Revised%20recipe%20assistant%20mockup.png",
    quote: "Don't let those veggies go to waste! Tell me what you have, or just snap a photo, and I'll help you find a delicious use for them.",
    elements: [
      {
        icon: Coffee,
        title: "Multimodal Capture",
        desc: "Users can transition fluidly between typing individual ingredients or using device cameras for immediate visual ingredient recognition."
      },
      {
        icon: Sliders,
        title: "Smart Constraints",
        desc: "Quick tags let users filter results by preparation time, difficulty level, or available kitchen tools to avoid offering impractical recipes."
      }
    ]
  },
  {
    step: 9,
    title: "Culinary Inspiration",
    category: "recipe",
    subtitle: "Recipe Assistant - Recommendations",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/fef8a9ee3f9bb879f79ac872c56b536d53303438/12.%20Recipe%20Assistant%20-%20Results.png",
    quote: "Look at all these options! I found recipes that match exactly what you have on hand. No grocery trip needed!",
    elements: [
      {
        icon: Layers,
        title: "Match Accuracy",
        desc: "Suggested dishes are clearly scored and prioritized based on existing inventory, minimizing extra grocery store trips."
      },
      {
        icon: BookOpen,
        title: "Visual Cards",
        desc: "High-quality food imagery combines with quick caloric/macro pills, helping users decide on both emotional appeal and nutritional goals."
      }
    ]
  },
  {
    step: 10,
    title: "Chef Mode: On",
    category: "recipe",
    subtitle: "Recipe Assistant - Detailed View",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/fef8a9ee3f9bb879f79ac872c56b536d53303438/13.%20Recipe%20Assistan%20-%20Recipe%20Details.png",
    quote: "Time to cook! Follow these simple steps. Don't forget to enjoy the process—balanced cooking is mindful living.",
    elements: [
      {
        icon: CheckSquare,
        title: "Focused Instructions",
        desc: "Cooking steps are laid out in individual, high-contrast, text-expanded step cards to prevent confusion in active, messy kitchen environments."
      },
      {
        icon: Activity,
        title: "Direct Integration",
        desc: "A prominent 'Log this Meal' action automatically registers macro metrics to the daily calendar with a single tap."
      }
    ]
  },
  {
    step: 11,
    title: "A Perfect Day",
    category: "education",
    subtitle: "Feedback - Goal Achievement",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/4864ac0b45e1b910d8c2d5247e4fce6ef2480429/15.%20Perfect%20Day.png",
    quote: "You did it! Three healthy choices today. See that star? That's your habit growing stronger. Let's do it again tomorrow!",
    elements: [
      {
        icon: Award,
        title: "Visual Reward",
        desc: "Using central gold accents and animated star icons provides a positive psychological feedback loop, celebrating micro-wins."
      },
      {
        icon: Sparkles,
        title: "Motivational Bridge",
        desc: "Displays the current habit streak alongside the upcoming milestone to encourage continuous daily engagement."
      }
    ]
  },
  {
    step: 12,
    title: "The Path of Wisdom",
    category: "education",
    subtitle: "Education - Learning Roadmap",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/4864ac0b45e1b910d8c2d5247e4fce6ef2480429/0.7%20Lesson%20Roadmap.png",
    quote: "Look at how far you've come! Each lesson is a bamboo shoot of knowledge. Keep climbing!",
    elements: [
      {
        icon: BookOpen,
        title: "Visual Journey",
        desc: "Transforming curriculum details into a path-based roadmap turns educational reading into a gamified, exploration-driven quest."
      },
      {
        icon: Award,
        title: "Milestone Rewards",
        desc: "Clean status anchors map out completed versus locked content, establishing clear cognitive goals."
      }
    ]
  },
  {
    step: 13,
    title: "Knowledge Bites",
    category: "education",
    subtitle: "Education - Daily Lesson",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/4864ac0b45e1b910d8c2d5247e4fce6ef2480429/16.%20Lesson%20-%20Content.png",
    quote: "Take a second to digest this. Understanding the science makes the habit stick!",
    elements: [
      {
        icon: Sliders,
        title: "Information Hierarchy",
        desc: "Heavy scientific concepts are broken down into small, highly readable paragraphs to avoid learning fatigue."
      },
      {
        icon: Brain,
        title: "Metaphor-Rich Graphics",
        desc: "Leverages simple icons and structural comparisons to make physiological concepts easy to visualize."
      }
    ]
  },
  {
    step: 14,
    title: "The Takeaway",
    category: "education",
    subtitle: "Education - Key Insights Summary",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/4864ac0b45e1b910d8c2d5247e4fce6ef2480429/17.%20Lesson%20-%20Summary.png",
    quote: "The most important part! Remember these key points today—they are your secret weapons.",
    elements: [
      {
        icon: Check,
        title: "Condensed Wisdom",
        desc: "Summarizes core lessons into 2-3 quick bullet points, giving users immediately actionable tips they can practice today."
      },
      {
        icon: Brain,
        title: "Cognitive Encoding",
        desc: "A dedicated summary screen serves as a clean visual checkpoint, helping the brain retain the lesson's main points."
      }
    ]
  },
  {
    step: 15,
    title: "Test Your Knowledge",
    category: "quizzes",
    subtitle: "Interactive Quiz - Multiple Choice",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/4864ac0b45e1b910d8c2d5247e4fce6ef2480429/18.%20Lesson%20-%20Multi%20Select%20questionaire.png",
    quote: "Which one do you think is right? No pressure, it's all part of the learning process!",
    elements: [
      {
        icon: Brain,
        title: "Active Recall",
        desc: "Formulating quick multi-choice questions strengthens memory retention, transforming passive reading into active learning."
      },
      {
        icon: Layers,
        title: "High-Fidelity Touch Cards",
        desc: "Large, high-contrast, padded cards make choosing answers easy and visually satisfying."
      }
    ]
  },
  {
    step: 16,
    title: "Fact or Fiction?",
    category: "quizzes",
    subtitle: "Interactive Quiz - True/False Check",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/4864ac0b45e1b910d8c2d5247e4fce6ef2480429/19.%20Lesson%20-%20True%20False%20question.png",
    quote: "Is it true, or is it just a myth? Let's bust some common misconceptions together!",
    elements: [
      {
        icon: ShieldAlert,
        title: "Rapid Validation",
        desc: "Simplified binary prompts allow fast gut-checks on nutritional and behavioral concepts."
      },
      {
        icon: Check,
        title: "Immediate Correction",
        desc: "If the user selects the wrong answer, a prompt explains the reasoning in real time to correct misconceptions."
      }
    ]
  },
  {
    step: 17,
    title: "Inner Reflection",
    category: "quizzes",
    subtitle: "Interactive Quiz - Open Ended Reflection",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/4864ac0b45e1b910d8c2d5247e4fce6ef2480429/20.%20Lesson%20-%20Open%20end%20question.png",
    quote: "How do you feel about this? Writing it down helps your brain commit to the positive change.",
    elements: [
      {
        icon: Coffee,
        title: "Personal Journaling",
        desc: "Prompting users to type out their thoughts builds a personal connection to the lesson, bridging theory and practice."
      },
      {
        icon: Brain,
        title: "Mindful Processing",
        desc: "Open text fields encourage users to slow down and reflect, making daily logging a more mindful habit."
      }
    ]
  },
  {
    step: 18,
    title: "Your Journey in Data",
    category: "analytics",
    subtitle: "Dashboard - Progress & Analytics",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/4864ac0b45e1b910d8c2d5247e4fce6ef2480429/09.%20Progress%20View.png",
    quote: "Look at those trends! My AI eyes can see patterns you might miss. Together, we'll keep you on the right track!",
    elements: [
      {
        icon: Activity,
        title: "Trend Analysis",
        desc: "Clean, minimalist charts focus on long-term trends rather than daily fluctuations to reduce scale anxiety."
      },
      {
        icon: Sparkles,
        title: "AI Insights",
        desc: "The companion app synthesizes logging data into clear suggestions, helping users optimize their habits."
      }
    ]
  },
  {
    step: 19,
    title: "The Command Center",
    category: "analytics",
    subtitle: "User Profile - Settings & Accomplishments",
    url: "https://raw.githubusercontent.com/Solakas/Image-uploader/4864ac0b45e1b910d8c2d5247e4fce6ef2480429/21.%20User%20Profile.png",
    quote: "Need to reset your target or check your total accomplishments? This is your home base. Keep it updated!",
    elements: [
      {
        icon: User,
        title: "Identity Hub",
        desc: "Groups stats, target habits, notification controls, and account settings in a clean, card-based layout."
      },
      {
        icon: Award,
        title: "Lifetime Milestones",
        desc: "Displays cumulative achievements (total logged days, completed quizzes, streak milestones) to highlight long-term commitment."
      }
    ]
  }
];

// In-place convert GitHub raw user content URLs to cross-origin compatible and fast edge-cached jsDelivr CDN
MOCKUP_SLIDES.forEach(slide => {
  if (slide.url && slide.url.startsWith("https://raw.githubusercontent.com/")) {
    slide.url = slide.url.replace(
      /https:\/\/raw\.githubusercontent\.com\/([^\/]+)\/([^\/]+)\/([^\/]+)\/(.+)/,
      "https://cdn.jsdelivr.net/gh/$1/$2@$3/$4"
    );
  }
});

// Color palette definitions from PORTFOLIO_CASE_STUDY.md
const COLOR_TOKENS = [
  { name: "Panda Ink", hex: "#111827", textClass: "text-zinc-950", bgClass: "bg-[#111827]", desc: "Primary text and system headers", contrast: "15.6:1" },
  { name: "Bamboo Green", hex: "#15803D", textClass: "text-emerald-700", bgClass: "bg-[#15803D]", desc: "Primary brand actions and positive CTA", contrast: "10.4:1" },
  { name: "Mindful Teal", hex: "#0D9488", textClass: "text-teal-600", bgClass: "bg-[#0D9488]", desc: "Psychology logs & insight cards", contrast: "9.2:1" },
  { name: "Panda Blush", hex: "#FB7185", textClass: "text-rose-500", bgClass: "bg-[#FB7185]", desc: "Crash diet risks or high energy zones", contrast: "5.1:1" },
  { name: "Sunshine", hex: "#FCD34D", textClass: "text-amber-500", bgClass: "bg-[#FCD34D]", desc: "Milestone achievements and perfect days", contrast: "3.2:1" },
  { name: "Matcha Glow", hex: "#DCFCE7", textClass: "text-emerald-800", bgClass: "bg-[#DCFCE7]", desc: "Protein macro metrics & soft banners", contrast: "13.1:1" },
  { name: "Calm Teal Tint", hex: "#CCFBF1", textClass: "text-teal-900", bgClass: "bg-[#CCFBF1]", desc: "Lesson cards and journaling prompts", contrast: "14.2:1" },
  { name: "Rice Paper", hex: "#F9FAFB", textClass: "text-zinc-90 w-full", bgClass: "bg-[#F9FAFB]", borderClass: "border-zinc-200", desc: "Eco-neutral grounding app baseline background", contrast: "1.0:1" }
];

// Code snippets for absolute systems copy-paste parity
const CODE_SNIPPETS = [
  {
    id: "colors",
    name: "app_colors.dart",
    language: "Dart",
    code: `import 'package:flutter/material.dart';

class AppColors {
  AppColors._(); // Private constructor to prevent instantiation.

  // Primary groundings (All tested with contrast validation >= 7:1)
  static const Color pandaInk = Color(0xFF111827);
  static const Color ricePaper = Color(0xFFF9FAFB);
  
  // Semantic signals & CTAs
  static const Color bambooGreen = Color(0xFF15803D);
  static const Color matchaGlow = Color(0xFFDCFCE7);
  static const Color mindfulTeal = Color(0xFF0D9488);
  static const Color calmTealTint = Color(0xFFCCFBF1);
  static const Color pandaBlush = Color(0xFFFB7185);
  static const Color sunshine = Color(0xFFFCD34D);
}`
  },
  {
    id: "avatar",
    name: "panda_avatar.dart",
    language: "Dart",
    code: `import 'package:flutter/material.dart';

class PandaAvatar extends StatelessWidget {
  final String moodSymbol;
  final double size;

  const PandaAvatar({
    Key? key,
    this.moodSymbol = '🍵',
    this.size = 80,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        color: Colors.white,
        shape: BoxShape.circle,
        border: Border.all(color: const Color(0xFF111827), width: 2),
        boxShadow: const [
          BoxShadow(
            color: Color(0x15111827),
            blurRadius: 10,
            offset: Offset(0, 4),
          )
        ],
      ),
      child: Center(
        child: Stack(
          alignment: Alignment.center,
          children: [
            // Custom drawn Panda elements with Flutter CustomPainter
            const Text(
              '🐼',
              style: TextStyle(fontSize: 40),
            ),
            Positioned(
              bottom: 4,
              right: 4,
              child: Container(
                padding: const EdgeInsets.all(4),
                decoration: const BoxDecoration(
                  color: Color(0xFFDCFCE7),
                  shape: BoxShape.circle,
                ),
                child: Text(
                  moodSymbol,
                  style: const TextStyle(fontSize: 14),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}`
  },
  {
    id: "button",
    name: "app_button.dart",
    language: "Dart",
    code: `import 'package:flutter/material.dart';

class AppButton extends StatelessWidget {
  final String label;
  final VoidCallback onPressed;
  final bool isSecondary;

  const AppButton({
    Key? key,
    required this.label,
    required this.onPressed,
    this.isSecondary = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Semantics(
      button: true,
      label: label,
      child: InkWell(
        onTap: onPressed,
        child: Container(
          height: 48, // Absolute tactile WCAG standard
          padding: const EdgeInsets.symmetric(horizontal: 24),
          decoration: BoxDecoration(
            color: isSecondary ? const Color(0xFFCCFBF1) : const Color(0xFF15803D),
            borderRadius: BorderRadius.circular(16),
            border: Border.all(
              color: isSecondary ? const Color(0xFF0D9488) : Colors.transparent,
              width: 1.5,
            ),
          ),
          child: Center(
            child: Text(
              label,
              style: TextStyle(
                color: isSecondary ? const Color(0xFF0D9488) : Colors.white,
                fontWeight: FontWeight.bold,
                fontSize: 16,
              ),
            ),
          ),
        ),
      ),
    );
  }
}`
  }
];

export default function PandaHabitsDeepDive() {
  const [activeTab, setActiveTab] = useState<"tokens" | "physics" | "assistive" | "scaling">("tokens");
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [activeMockupIndex, setActiveMockupIndex] = useState(1); // Default is Step 2 (Visualizing Reality) as shown in user's request
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("onboarding");

  const handlePrevMockup = () => {
    setActiveMockupIndex((prev) => (prev - 1 + MOCKUP_SLIDES.length) % MOCKUP_SLIDES.length);
  };

  const handleNextMockup = () => {
    setActiveMockupIndex((prev) => (prev + 1) % MOCKUP_SLIDES.length);
  };

  // Synchronize category filter when active slide changes
  useEffect(() => {
    const currentCategory = MOCKUP_SLIDES[activeMockupIndex]?.category;
    if (currentCategory && activeCategoryFilter !== currentCategory) {
      setActiveCategoryFilter(currentCategory);
    }
  }, [activeMockupIndex]);

  // States for new accessibility controls
  const [showTouchTargets, setShowTouchTargets] = useState(false);
  const [feedbackType, setFeedbackType] = useState<"success" | "error" | null>(null);
  const [screenReaderTraversedStep, setScreenReaderTraversedStep] = useState<number>(0);
  const [textScale, setTextScale] = useState<number>(1); // Range: 1.0 to 2.0
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  return (
    <div className="mt-24 pt-20 border-t border-zinc-200/60 space-y-24">
      {/* HEADER STATEMENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-12 space-y-4"
        >
          <span className="font-mono text-xs font-bold tracking-widest text-[#15803D] uppercase block">
            04. INTERACTIVE CASE STUDY — ANDROID FLUTTER PLAYGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-zinc-950 leading-tight">
            PandaHabits Design Lab.
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg max-w-4xl leading-relaxed">
            Instead of hand-drawing static screens in Figma and losing design consistency during engineering translations, we built a **direct-token-to-widget** synchronization system. Test-drive the interactive storybook simulator below to experience our tactile contrast validations, behavior calculators, and grab production Dart templates.
          </p>
        </motion.div>
      </div>

      {/* CORE INTERACTIVE SIMULATOR FRAMEWORK */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* LEFT COLUMN: CONTROL PANEL & STATES */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8 bg-zinc-50 border border-zinc-200/80 p-6 sm:p-8 rounded-3xl">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 pb-4 border-b border-zinc-200">
              <button
                onClick={() => { setActiveTab("tokens"); }}
                className={`px-4 py-2 text-xs font-mono font-bold rounded-full transition-all duration-300 ${
                  activeTab === "tokens" 
                    ? "bg-[#111827] text-[#F9FAFB] shadow-xs" 
                    : "text-zinc-500 hover:text-zinc-900 bg-white border border-zinc-200 hover:border-zinc-300"
                }`}
              >
                1. A11y Colors
              </button>
              <button
                onClick={() => { setActiveTab("physics"); }}
                className={`px-4 py-2 text-xs font-mono font-bold rounded-full transition-all duration-300 ${
                  activeTab === "physics" 
                    ? "bg-[#111827] text-[#F9FAFB] shadow-xs" 
                    : "text-zinc-500 hover:text-zinc-900 bg-white border border-zinc-200 hover:border-zinc-300"
                }`}
              >
                2. Touch Physics & Interaction
              </button>
              <button
                onClick={() => { setActiveTab("assistive"); }}
                className={`px-4 py-2 text-xs font-mono font-bold rounded-full transition-all duration-300 ${
                  activeTab === "assistive" 
                    ? "bg-[#111827] text-[#F9FAFB] shadow-xs" 
                    : "text-zinc-500 hover:text-zinc-900 bg-white border border-zinc-200 hover:border-zinc-300"
                }`}
              >
                3. Assistive Tech & Semantics
              </button>
              <button
                onClick={() => { setActiveTab("scaling"); }}
                className={`px-4 py-2 text-xs font-mono font-bold rounded-full transition-all duration-300 ${
                  activeTab === "scaling" 
                    ? "bg-[#111827] text-[#F9FAFB] shadow-xs" 
                    : "text-zinc-500 hover:text-zinc-900 bg-white border border-zinc-200 hover:border-zinc-300"
                }`}
              >
                4. Scaling & Adaptability
              </button>
            </div>

            {/* TAB CONTENT: 1. TOKENS & A11Y Contrast */}
            {activeTab === "tokens" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-indigo-600" />
                  <h3 className="text-lg font-bold text-zinc-950 font-sans">
                    WCAG 2.1 AAA Hardcoded Contrast Analysis
                  </h3>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  To achieve total visual accessibility, we programmed our React storybook simulator to measure the precise color contrast of each custom design token on top of our neutral <strong>Rice Paper (#F9FAFB)</strong> ground. Elements with AAA standards guarantee a contrast scale above <strong>7.0:1</strong>, preventing screen fatigue.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {COLOR_TOKENS.map((token) => {
                    const ratio = parseFloat(token.contrast);
                    const isAAA = ratio >= 7.0;
                    const isAA = ratio >= 4.5 && ratio < 7.0;
                    
                    return (
                      <div 
                        key={token.name} 
                        className="bg-white border border-zinc-100 p-3 rounded-2xl flex items-center justify-between gap-3 shadow-xs hover:border-zinc-250 transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-7 h-7 rounded-sm ${token.bgClass} border border-zinc-200 shadow-xs`} />
                          <div className="space-y-0.5">
                            <span className="text-xs font-bold text-zinc-900 block">{token.name}</span>
                            <span className="font-mono text-[10px] text-zinc-400 font-semibold uppercase">{token.hex}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-xs font-bold text-zinc-800 block">{token.contrast}</span>
                          {isAAA ? (
                            <span className="text-[9px] font-mono font-bold bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-full border border-emerald-100">
                              WCAG AAA
                            </span>
                          ) : isAA ? (
                            <span className="text-[9px] font-mono font-bold bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded-full border border-indigo-100">
                              WCAG AA
                            </span>
                          ) : (
                            <span className="text-[9px] font-mono font-bold bg-zinc-50 text-zinc-500 px-1.5 py-0.5 rounded-full border border-zinc-100">
                              BG BASE
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* TAB CONTENT: 2. TOUCH PHYSICS & INTERACTION */}
            {activeTab === "physics" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2">
                  <Hand className="w-5 h-5 text-indigo-600" />
                  <h3 className="text-lg font-bold text-zinc-955 font-sans">
                    Touch Physics & Interaction Guidelines
                  </h3>
                </div>
                <p className="text-[#555] text-sm leading-relaxed">
                  Mobile layouts must acknowledge physical ergonomic limits. By validating touch sizes, target states, and multi-sensory feedback systems, we guarantee high-grade responsiveness.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Card 1: 48dp Touch Target Rule */}
                  <div className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-3xs space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">
                        ✋
                      </div>
                      <h4 className="font-bold text-zinc-900 text-sm">48dp Touch Target Rule</h4>
                    </div>
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      Fingers are not cursors. All interactive elements (buttons, chips, checkboxes) must have a minimum physical size of <strong>48x48 logical pixels</strong>.
                    </p>
                    <div className="p-4 bg-zinc-50 border border-dashed border-zinc-200 rounded-xl flex flex-col items-center justify-center space-y-2 relative overflow-hidden">
                      <button 
                        onClick={() => setShowTouchTargets(!showTouchTargets)}
                        className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-[10px] font-mono font-bold rounded-lg border border-indigo-200 flex items-center gap-1.5 transition-all shadow-3xs hover:translate-y-[-1px] active:translate-y-[1px]"
                      >
                        <Eye className="w-3 h-3" />
                        <span>{showTouchTargets ? "Hide" : "Show"} Target Bounds</span>
                      </button>
                      <p className="text-[9px] text-zinc-400 font-mono text-center font-semibold leading-tight uppercase font-bold">
                        SMALLER ICONS MUST USE INVISIBLE PADDING TO HIT THIS THRESHOLD
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Multi-Modal Feedback */}
                  <div className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-3xs space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold">
                        🔊
                      </div>
                      <h4 className="font-bold text-zinc-900 text-sm">Multi-Modal Feedback</h4>
                    </div>
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      To confirm an action, we trigger three senses simultaneously: <strong>Visual</strong> (Animation), <strong>Haptic</strong> (Vibration), and <strong>Auditory</strong> (Sound).
                    </p>
                    <div className="space-y-2">
                      <button 
                        onClick={() => {
                          setFeedbackType("success");
                          try {
                            const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
                            const osc = ctx.createOscillator();
                            osc.frequency.setValueAtTime(800, ctx.currentTime);
                            osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.15);
                            osc.connect(ctx.destination);
                            osc.start();
                            osc.stop(ctx.currentTime + 0.15);
                          } catch (e) {}
                        }}
                        className="w-full p-2.5 border border-emerald-100/65 bg-[#DCFCE7]/40 hover:bg-[#DCFCE7]/75 rounded-xl flex items-center justify-between text-left group transition-all duration-150"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-700">✔️</span>
                          <span className="text-zinc-800 text-xs font-bold font-mono">HapticSuccess</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold bg-[#DCFCE7] text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-100">
                          Goal Completed
                        </span>
                      </button>

                      <button 
                        onClick={() => {
                          setFeedbackType("error");
                          try {
                            const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
                            const osc = ctx.createOscillator();
                            osc.type = "sawtooth";
                            osc.frequency.setValueAtTime(220, ctx.currentTime);
                            osc.frequency.linearRampToValueAtTime(110, ctx.currentTime + 0.2);
                            osc.connect(ctx.destination);
                            osc.start();
                            osc.stop(ctx.currentTime + 0.2);
                          } catch (e) {}
                        }}
                        className="w-full p-2.5 border border-orange-100/65 bg-orange-50/40 hover:bg-orange-50/75 rounded-xl flex items-center justify-between text-left group transition-all duration-150"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-orange-700">⚠️</span>
                          <span className="text-zinc-800 text-xs font-mono font-bold">VibrateMedium</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full border border-orange-100">
                          Validation Error
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl flex gap-3 text-xs text-indigo-805 leading-relaxed font-sans">
                  <Info className="w-5 h-5 shrink-0 text-indigo-600 stroke-[2]" />
                  <div>
                    <span className="font-bold block uppercase tracking-wider text-[10px]">COGNITIVE LOAD REDUCTION</span>
                    <span>Tapping success triggers subtle dual-micro haptics and a rising pentatonic chime, reducing visual validation dependence and reinforcing user confidence instantly.</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB CONTENT: 3. ASSISTIVE TECH & SEMANTICS */}
            {activeTab === "assistive" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-purple-650" />
                  <h3 className="text-lg font-bold text-zinc-950 font-sans">
                    Assistive Tech & Semantics Standards
                  </h3>
                </div>
                <p className="text-zinc-650 text-sm leading-relaxed">
                  Screen readers require structural annotations and traversal order guides. We group components and declare semantic announcements to maintain parity for blind or low-vision users.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Card 1: Descriptive Labels */}
                  <div className="bg-white border border-zinc-200 p-4 rounded-2xl shadow-3xs space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center text-purple-650 font-bold text-xs">
                          🏷️
                        </div>
                        <h4 className="font-bold text-zinc-900 text-xs">Descriptive Labels</h4>
                      </div>
                      <p className="text-zinc-500 text-[11px] leading-relaxed">
                        Buttons shouldn't just be "Button". In Flutter, use <code>Semantics(label: "Add custom meal entry")</code> to provide context to VoiceOver/TalkBack users.
                      </p>
                    </div>
                    <button 
                      onClick={() => setScreenReaderTraversedStep(1)}
                      className={`text-center font-mono text-[10px] font-bold p-1.5 rounded border transition-all duration-150 ${
                        screenReaderTraversedStep === 1 ? "bg-purple-600 border-purple-600 text-white animate-pulse" : "bg-zinc-50 hover:bg-zinc-100 text-[#555] border-zinc-200"
                      }`}
                    >
                      {screenReaderTraversedStep === 1 ? "Selected" : "Simulate Focus"}
                    </button>
                  </div>

                  {/* Card 2: Merge Semantics */}
                  <div className="bg-white border border-zinc-200 p-4 rounded-2xl shadow-3xs space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center text-purple-650 font-bold text-xs">
                          ⧉
                        </div>
                        <h4 className="font-bold text-zinc-900 text-xs">Merge Semantics</h4>
                      </div>
                      <p className="text-zinc-500 text-[11px] leading-relaxed">
                        Group related items (icon + text + value) using <code>MergeSemantics</code> so the screen reader treats the whole card as a single, logical announcement.
                      </p>
                    </div>
                    <button 
                      onClick={() => setScreenReaderTraversedStep(2)}
                      className={`text-center font-mono text-[10px] font-bold p-1.5 rounded border transition-all duration-150 ${
                        screenReaderTraversedStep === 2 ? "bg-purple-600 border-purple-600 text-white animate-pulse" : "bg-zinc-50 hover:bg-zinc-100 text-[#555] border-zinc-200"
                      }`}
                    >
                      {screenReaderTraversedStep === 2 ? "Selected" : "Simulate Focus"}
                    </button>
                  </div>

                  {/* Card 3: Traversal Order */}
                  <div className="bg-white border border-zinc-200 p-4 rounded-2xl shadow-3xs space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center text-purple-650 font-bold text-xs">
                          ⇄
                        </div>
                        <h4 className="font-bold text-zinc-900 text-xs">Traversal Order</h4>
                      </div>
                      <p className="text-zinc-500 text-[11px] leading-relaxed">
                        Ensure the <code>SemanticIndex</code> follows the visual flow. Avoid jumps that leave users confused about their location on the page.
                      </p>
                    </div>
                    <button 
                      onClick={() => setScreenReaderTraversedStep(3)}
                      className={`text-center font-mono text-[10px] font-bold p-1.5 rounded border transition-all duration-150 ${
                        screenReaderTraversedStep === 3 ? "bg-purple-600 border-purple-600 text-white animate-pulse" : "bg-zinc-50 hover:bg-zinc-100 text-[#555] border-zinc-200"
                      }`}
                    >
                      {screenReaderTraversedStep === 3 ? "Selected" : "Simulate Focus"}
                    </button>
                  </div>
                </div>

                {/* Banner Callout */}
                <div className="bg-[#1A2333] border border-zinc-800 p-6 rounded-2xl text-white space-y-4 relative overflow-hidden">
                  <div className="space-y-3 max-w-xl z-25 relative">
                    <span className="inline-block bg-purple-600 text-white uppercase text-[9px] tracking-wider font-extrabold px-2.5 py-1 rounded">
                      EXPERT GUIDELINE: LIVEREGIONS
                    </span>
                    <h4 className="text-lg font-black font-sans tracking-tight">Announcing Real-time Events</h4>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                      "When a user's streak updates or a weight prediction is calculated, use <code>SemanticsService.announce</code>. This ensures blind or low-vision users know an update happened without manually searching for the change."
                    </p>
                  </div>

                  {/* Amplitude Waves Graphic on the Right */}
                  <div className="absolute right-4 bottom-4 top-4 hidden md:flex items-center gap-1 opacity-25">
                    {[16, 28, 48, 20, 36, 12, 44, 32, 16, 24].map((h, i) => (
                      <div 
                        key={i} 
                        className="w-1 bg-purple-500 rounded-full animate-pulse" 
                        style={{ height: `${h}px`, animationDelay: `${i * 120}ms` }} 
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB CONTENT: 4. SCALING & ADAPTABILITY */}
            {activeTab === "scaling" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2">
                  <Type className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-bold text-zinc-950 font-sans">
                    Scaling & Adaptability Standards
                  </h3>
                </div>
                <p className="text-zinc-650 text-sm leading-relaxed">
                  Apps must adapt beautifully to system-level font scaling and device forms. By designing responsive boundaries, we support elderly users and diverse viewport aspects perfectly.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Card 1: Text Scaling Simulator */}
                  <div className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-3xs space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 font-bold">
                        A
                      </div>
                      <h4 className="font-bold text-zinc-900 text-sm">Dynamic Text Scaling</h4>
                    </div>
                    <p className="text-zinc-[500] text-xs leading-relaxed">
                      Users can change system font sizes in OS settings. All text containers must use flexible height bounds to prevent clipping or text overlapping when enlarged.
                    </p>
                    
                    <div className="space-y-3 p-4 bg-zinc-50 border border-zinc-200 rounded-xl">
                      <div className="flex justify-between text-xs font-mono font-semibold">
                        <span className="text-zinc-500">FONT SCALE MULTIPLIER</span>
                        <span className="text-amber-700 font-bold">{(textScale).toFixed(1)}x</span>
                      </div>
                      <input 
                        type="range"
                        min="1"
                        max="2"
                        step="0.125"
                        value={textScale}
                        onChange={(e) => setTextScale(parseFloat(e.target.value))}
                        className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                      />
                      
                      {/* Live Demo Target */}
                      <div className="p-3 bg-white border border-zinc-200 rounded-xl shadow-xs">
                        <h5 className="font-bold text-zinc-900 transition-all font-sans leading-tight mb-1" style={{ fontSize: `${12 * textScale}px` }}>
                          Dynamic Header Example
                        </h5>
                        <p className="text-zinc-500 transition-all leading-normal" style={{ fontSize: `${10 * textScale}px` }}>
                          This text block dynamically scales when the slider adjusts, mirroring the TalkBack font scaling engine.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Reduced Motion Engine */}
                  <div className="bg-white border border-zinc-200 p-5 rounded-2xl shadow-3xs space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold">
                        ↔
                      </div>
                      <h4 className="font-bold text-zinc-900 text-sm">Reduced Motion Preferences</h4>
                    </div>
                    <p className="text-zinc-[500] text-xs leading-relaxed">
                      Users with vestibular visual conditions can disable high-motion bouncy transitions. Our layouts detect this flag and switch animations to simple static fades.
                    </p>

                    <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-zinc-650">PREFERS REDUCED MOTION</span>
                        <button 
                          onClick={() => setPrefersReducedMotion(!prefersReducedMotion)}
                          className={`w-10 h-5.5 rounded-full p-0.5 transition-colors duration-200 flex ${
                            prefersReducedMotion ? "bg-emerald-650 justify-end bg-emerald-600" : "bg-zinc-300 justify-start"
                          }`}
                        >
                          <span className="w-4.5 h-4.5 rounded-full bg-white shadow-sm block" />
                        </button>
                      </div>

                      {/* Motion simulator preview block */}
                      <div className="h-14 bg-white border border-zinc-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                        <motion.div 
                          animate={prefersReducedMotion ? { opacity: [0.3, 1] } : { x: [-30, 30] }}
                          transition={prefersReducedMotion ? { duration: 1, repeat: Infinity, repeatType: "reverse" } : { duration: 2, repeat: Infinity, repeatType: "reverse", type: "spring" }}
                          className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-white text-xs shadow-xs"
                        >
                          🐼
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50/50 border border-amber-100 p-4 rounded-xl flex gap-3 text-xs text-amber-805 leading-relaxed font-sans">
                  <Info className="w-5 h-5 shrink-0 text-amber-600 stroke-[2]" />
                  <div>
                    <span className="font-bold block uppercase tracking-wider text-[10px]">SCALABLE LAYOUT RULE</span>
                    <span>To guarantee compliance with WCAG AAA layout rules, we never hardcode absolute box heights. All content panes rely on flexible constraints to allow dynamic expansion.</span>
                  </div>
                </div>
                    </motion.div>
            )}
          </div>

          {/* ACTIVE TOKEN DART CODE PANEL */}
          <div className="pt-6 border-t border-zinc-200">
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block font-bold mb-2">
              ZERO-FIGMA DART PARITY INTEGRATOR
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {CODE_SNIPPETS.map((snippet) => {
                const isCopied = copiedCodeId === snippet.id;
                return (
                  <button
                    key={snippet.id}
                    onClick={() => handleCopyCode(snippet.id, snippet.code)}
                    className="p-3 bg-white border border-zinc-200 rounded-xl hover:border-zinc-450 text-left transition-all duration-200 flex items-center justify-between shadow-xs group"
                  >
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold text-zinc-900 block font-mono">
                        {snippet.name}
                      </span>
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-bold">
                        FLUTTER {snippet.language}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-150 flex items-center justify-center text-zinc-455 group-hover:bg-zinc-100 transition-colors">
                      {isCopied ? (
                        <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: HIGH-FIDELITY SMARTPHONE SIMULATOR */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full max-w-[320px] aspect-[9/19] bg-zinc-950 p-2.5 rounded-[44px] shadow-2xl border border-zinc-800/60 ring-10 ring-zinc-90 w-full select-none">
            {/* Phone Notch/Speaker */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-zinc-950 rounded-full z-30 flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
              <span className="w-8 h-1 rounded-full bg-zinc-900" />
            </div>

            {/* Simulated Phone Screen Content */}
            <div className="w-full h-full bg-[#F9FAFB] rounded-[35px] overflow-hidden relative border border-zinc-900 shadow-inner flex flex-col justify-between pt-7 pb-4">
              
              {/* STATUS BAR */}
              <div className="px-5 flex items-center justify-between text-[#111827] z-20 font-sans">
                <span className="text-[11px] font-mono font-bold">09:41</span>
                <div className="flex items-center gap-1 text-[11px]">
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>

              {/* DYNAMIC SCREEN CONTENT BASED ON ACTIVETAB */}
              <div className="flex-1 px-4 py-3 overflow-y-auto overflow-x-hidden relative flex flex-col justify-between">
                
                {/* 1. TOKENS SCREEN CONTAINER */}
                {activeTab === "tokens" && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex-1 flex flex-col justify-between py-2"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🎨</span>
                        <div>
                          <h3 className="text-xs font-mono font-bold text-zinc-450 uppercase tracking-widest">
                            Style Tokens
                          </h3>
                          <h2 className="text-base font-bold text-zinc-950 font-sans">
                            Brand System
                          </h2>
                        </div>
                      </div>

                      <div className="p-3 bg-white border border-zinc-150 rounded-2xl shadow-3xs text-[11px] text-zinc-650 leading-relaxed font-sans space-y-2">
                        <span className="font-bold text-zinc-900 block uppercase tracking-wider text-[9px] text-[#0D9488]">A11Y CONTRAST MATRICES</span>
                        <span>Each background swatch enforces high-density visual compliance before compiling widgets.</span>
                      </div>

                      <div className="space-y-1.5">
                        <div className="p-2 border border-emerald-250/50 bg-[#DCFCE7] rounded-xl flex items-center justify-between gap-2 shadow-2xs">
                          <span className="text-[10px] font-bold text-emerald-800">Matcha Glow</span>
                          <span className="font-mono text-[9px] bg-emerald-700 text-white px-1.5 py-0.5 rounded-full">13.1:1 AAA</span>
                        </div>
                        <div className="p-2 border border-zinc-200 bg-[#F9FAFB] rounded-xl flex items-center justify-between gap-2 shadow-2xs">
                          <span className="text-[10px] font-bold text-zinc-900">Rice Paper</span>
                          <span className="font-mono text-[9px] bg-zinc-300 text-zinc-805 px-1.5 py-0.5 rounded-full">BASELINE</span>
                        </div>
                        <div className="p-2 border border-teal-200 bg-[#CCFBF1] rounded-xl flex items-center justify-between gap-2 shadow-2xs">
                          <span className="text-[10px] font-bold text-teal-900">Calm Teal Tint</span>
                          <span className="font-mono text-[9px] bg-[#0D9488] text-white px-1.5 py-0.5 rounded-full font-bold">14.2:1 AAA</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 text-[10px] text-zinc-400 font-mono text-center leading-normal">
                      v1.4.0 atomic_tokens.dart
                    </div>
                  </motion.div>
                )}

                {/* 2. TOUCH PHYSICS & INTERACTION CONTAINER */}
                {activeTab === "physics" && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex-1 flex flex-col justify-between py-1"
                  >
                    <div className="space-y-3.5">
                      <div className="space-y-0.5">
                        <span className="font-mono text-[8.5px] text-[#0D9488] uppercase tracking-widest font-extrabold block">TACTILE PLAYGROUND</span>
                        <h2 className="text-sm font-extrabold text-[#111827] font-sans">Touch Targets (48dp)</h2>
                      </div>

                      <div className="bg-white border border-zinc-150 p-3 rounded-2xl shadow-3xs space-y-3">
                        <p className="text-[10px] text-zinc-500 font-sans leading-normal">
                          Toggle target bounds in the left column. Highlighted magenta overlays show the invisible extended touch boundaries ensuring physical accessibility.
                        </p>

                        <div className="space-y-2.5">
                          {/* Target Element A */}
                          <div className="relative">
                            <button 
                              onClick={() => {}} 
                              className="w-full relative bg-[#F9FAFB] hover:bg-zinc-100 p-2 border border-zinc-200 rounded-xl text-left flex items-center justify-between"
                            >
                              <span className="text-[10px] font-bold text-zinc-805">Accept Goal Option</span>
                              <span className="text-xs">👉</span>
                            </button>
                            {showTouchTargets && (
                              <div className="absolute -inset-1.5 border-2 border-dashed border-pink-500 bg-pink-100/20 pointer-events-none rounded-xl flex items-center justify-center">
                                <span className="absolute -top-3.5 right-1 bg-pink-500 text-[6.5px] font-mono text-white px-1 rounded-sm">48dp Target Pass</span>
                              </div>
                            )}
                          </div>

                          {/* Target Element B */}
                          <div className="relative">
                            <button 
                              onClick={() => {}} 
                              className="w-full relative bg-[#F9FAFB] hover:bg-zinc-100 p-2 border border-zinc-200 rounded-xl text-left flex items-center justify-between"
                            >
                              <span className="text-[10px] font-bold text-zinc-805">Dismiss Alert Dialog</span>
                              <span className="text-xs">✖️</span>
                            </button>
                            {showTouchTargets && (
                              <div className="absolute -inset-1 border-2 border-dashed border-pink-500 bg-pink-100/20 pointer-events-none rounded-xl flex items-center justify-center">
                                <span className="absolute -top-3.5 right-1 bg-pink-500 text-[6.5px] font-mono text-white px-1 rounded-sm">48dp Target Pass</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Haptic Trigger Simulator */}
                      <div className="bg-amber-50 border border-amber-100 p-2.5 rounded-xl text-center space-y-1.5 shadow-2xs">
                        <span className="font-mono text-[7.5px] font-extrabold text-amber-705 uppercase block">ACTIVE HAPTICS FEEDBACK TYPE</span>
                        <div className="text-[11px] font-bold text-amber-950 font-sans">
                          {feedbackType === "vibration" ? "📳 Simulate Tactile Vibration Hum" : feedbackType === "sound" ? "🔊 Sound Frequency Sweep (440Hz)" : "🔕 System Silent Static Guard"}
                        </div>
                      </div>
                    </div>

                    <div className="text-[9px] text-zinc-400 font-mono text-center leading-normal">
                      Touch targets calibrated via physics_engine.dart
                    </div>
                  </motion.div>
                )}

                {/* 3. ASSISTIVE TECH & SEMANTICS CONTAINER */}
                {activeTab === "assistive" && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex-1 flex flex-col justify-between py-1"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🗣️</span>
                        <div className="space-y-0.5">
                          <span className="font-mono text-[8px] text-amber-700 block uppercase tracking-widest font-extrabold">Reader Traversal</span>
                          <h2 className="text-sm font-bold text-zinc-950 font-sans leading-none">TalkBack Screen-Reader</h2>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {[
                          { index: 1, title: "Breakfast - Oats & Avocado", time: "08:15 AM" },
                          { index: 2, title: "Emotion Food Stress Logs", time: "11:45 AM" },
                          { index: 3, title: "Hydration Target Cup 4", time: "02:30 PM" }
                        ].map((item) => {
                          const isFocused = screenReaderTraversedStep === item.index;
                          return (
                            <div 
                              key={item.index}
                              className={`p-2.5 rounded-xl border transition-all duration-300 relative ${
                                isFocused 
                                  ? "bg-[#EEF2FF] border-slate-500 shadow-xs" 
                                  : "bg-white border-zinc-150"
                              }`}
                            >
                              <div className="flex justify-between items-center">
                                <span className="text-[10px] font-bold text-zinc-800">{item.title}</span>
                                <span className="text-[8px] font-mono text-zinc-400">{item.time}</span>
                              </div>
                              {/* Glowing Green Accessibility Focus Ring */}
                              {isFocused && (
                                <div className="absolute -inset-1 border-3 border-emerald-500 rounded-xl pointer-events-none animate-pulse" />
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Screen reader voice speech balloon */}
                      <div className="bg-[#EEF2FF] p-3 border border-indigo-150 rounded-2xl space-y-1 mt-2.5 relative">
                        <div className="absolute -top-1.5 left-4 w-3 h-3 bg-[#EEF2FF] rotate-45 border-l border-t border-indigo-150" />
                        <span className="font-mono text-[8px] text-indigo-700 font-extrabold uppercase tracking-wide block">VOICEOVER UTTERANCE</span>
                        <p className="text-[10px] font-medium text-indigo-950 leading-normal">
                          {screenReaderTraversedStep === 1 
                            ? "“Focused on Breakfast, Oats and Avocado, List Item 1 of 3. Double tap to edit.”" 
                            : screenReaderTraversedStep === 2
                              ? "“Focused on Emotion Food Stress Logs, completed, List Item 2 of 3. Double tap to view triggers.”"
                              : "“Focused on Hydration Target Cup 4, 80% complete, List Item 3 of 3. Double tap to log hydration.”"}
                        </p>
                      </div>
                    </div>

                    <div className="text-[9px] font-mono text-zinc-400 text-center">
                      Semantics node layout: high-contrast hierarchy
                    </div>
                  </motion.div>
                )}

                {/* 4. SCALING & ADAPTABILITY CONTAINER */}
                {activeTab === "scaling" && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex-1 flex flex-col justify-between py-1"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[8.5px] text-indigo-700 block uppercase tracking-widest font-extrabold">Live Scale Tester</span>
                        <span className="font-mono text-[8px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-bold">{(textScale).toFixed(2)}x</span>
                      </div>

                      {/* Dynamic Scaled card */}
                      <div className="bg-white border border-zinc-200/80 p-3.5 rounded-2xl shadow-3xs space-y-3.5">
                        <div className="flex items-center gap-2">
                          {/* Animated panda */}
                          <motion.div 
                            animate={prefersReducedMotion ? { scale: [1, 1.05, 1] } : { y: [0, -10, 0] }}
                            transition={prefersReducedMotion ? { duration: 2, repeat: Infinity } : { duration: 1.2, repeat: Infinity, type: "tween", ease: "easeInOut" }}
                            className="text-3xl select-none"
                          >
                            🐼
                          </motion.div>
                          
                          <div>
                            <span className="font-mono text-[7px] text-amber-700 uppercase tracking-widest font-extrabold block">CALIBRATED COMPANION</span>
                            <h3 className="font-sans font-extrabold text-zinc-950 leading-tight" style={{ fontSize: `${11 * textScale}px` }}>
                              Nourishing Habits Today
                            </h3>
                          </div>
                        </div>

                        <p className="text-zinc-[450] leading-normal font-medium" style={{ fontSize: `${9.5 * textScale}px` }}>
                          Observe how all container heights grow fluidly as system font scales are increased to shield layout from overlapping.
                        </p>
                      </div>

                      {/* Viewport Bounds Alert */}
                      <div className="bg-emerald-50 border border-emerald-100 p-2.5 rounded-xl text-[9.5px] text-emerald-805 leading-relaxed font-sans font-medium">
                        📱 Adaptive viewport aspect: 19.5:9 Safe Zone guidelines enforced around device Notch.
                      </div>
                    </div>

                    <div className="text-[9px] text-zinc-405 font-mono text-center">
                      Auto-scaling engine parity: true density bounds
                    </div>
                  </motion.div>
                )}

              </div>
              {/* NAVIGATION BAR */}
              <div className="px-6 pt-2 border-t border-zinc-200/60 flex items-center justify-between text-zinc-400 text-lg">
                <button onClick={() => setActiveTab("tokens")} className={`flex flex-col items-center justify-center transition-colors ${activeTab === "tokens" ? "text-indigo-700 font-bold" : "hover:text-zinc-650"}`}>
                  <span className="text-sm">🎨</span>
                  <span className="text-[7px] font-mono uppercase font-bold tracking-tight">Colors</span>
                </button>
                <button onClick={() => setActiveTab("physics")} className={`flex flex-col items-center justify-center transition-colors ${activeTab === "physics" ? "text-indigo-700 font-bold" : "hover:text-zinc-650"}`}>
                  <span className="text-sm">✋</span>
                  <span className="text-[7px] font-mono uppercase font-bold tracking-tight">Physics</span>
                </button>
                <button onClick={() => setActiveTab("assistive")} className={`flex flex-col items-center justify-center transition-colors ${activeTab === "assistive" ? "text-indigo-700 font-bold" : "hover:text-zinc-650"}`}>
                  <span className="text-sm">🔊</span>
                  <span className="text-[7px] font-mono uppercase font-bold tracking-tight">Semantics</span>
                </button>
                <button onClick={() => setActiveTab("scaling")} className={`flex flex-col items-center justify-center transition-colors ${activeTab === "scaling" ? "text-indigo-700 font-bold" : "hover:text-zinc-650"}`}>
                  <span className="text-sm">📏</span>
                  <span className="text-[7px] font-mono uppercase font-bold tracking-tight">Scaling</span>
                </button>
              </div>

              {/* DEVICE HOME STADIUM BAR */}
              <div className="w-24 h-1 bg-zinc-900 rounded-full mx-auto mt-2 shrink-0 z-20" />
            </div>
          </div>
        </div>

      </div>

      {/* CORE MOCKUP SHOWCASE GALLERY */}
      <div id="ui-mockups" className="space-y-12 bg-[#F9FAFB] border border-zinc-200/80 p-6 sm:p-10 rounded-3xl shadow-xs">
        {/* SECTION HEADER */}
        <div className="space-y-3">
          <span className="font-mono text-xs font-bold tracking-widest text-[#15803D] uppercase block">
            05. HIGH-FIDELITY MOBILE LAYOUT SHOWCASE
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-zinc-950 col-span-2">
              UI Mockups
            </h3>
            <a
              href="https://panda-habits-web.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold font-sans text-white hover:bg-emerald-800 bg-[#15803D] rounded-xl shadow-2xs hover:shadow-xs transition-all duration-300 group cursor-pointer self-start sm:self-auto"
            >
              <Globe className="w-4 h-4 text-emerald-100 transition-transform group-hover:scale-110" />
              <span>Explore Live Web App</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-75 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
          <p className="text-zinc-500 text-sm sm:text-base max-w-4xl leading-relaxed">
            High-fidelity visual representations of the final application user experience.
          </p>

          {/* STEP DOTS & TEXT DIRECT JUMP INDEX PIPELINE */}
          <div className="pt-4 border-t border-zinc-200/50 mt-4 space-y-4">
            <div>
              <span className="font-mono text-[10px] font-black tracking-widest text-[#15803D] uppercase block mb-2.5">
                Filter by Category / Phase
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  { id: "onboarding", label: "🗺️ Onboarding", count: 3 },
                  { id: "dashboard", label: "🏠 Daily Tracking", count: 4 },
                  { id: "recipe", label: "🍳 Recipe Coach", count: 3 },
                  { id: "education", label: "🏆 Education Paths", count: 4 },
                  { id: "quizzes", label: "📝 Knowledge Quizzes", count: 3 },
                  { id: "analytics", label: "📈 Data & Profile", count: 2 }
                ].map((phase) => {
                  const isActive = activeCategoryFilter === phase.id;
                  return (
                    <button
                      key={phase.id}
                      onClick={() => {
                        setActiveCategoryFilter(phase.id);
                        const targetIndex = MOCKUP_SLIDES.findIndex(s => s.category === phase.id);
                        if (targetIndex !== -1) {
                          setActiveMockupIndex(targetIndex);
                        }
                      }}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold font-sans cursor-pointer transition-all border ${
                        isActive
                          ? "bg-[#15803D] border-[#15803D] text-white shadow-3xs"
                          : "bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300"
                      }`}
                    >
                      {phase.label}
                      <span className={`ml-1.5 text-[9px] px-1.5 py-0.5 rounded-full font-mono ${isActive ? "bg-emerald-800 text-emerald-100" : "bg-zinc-100 text-zinc-500"}`}>
                        {phase.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="font-mono text-[10px] font-black tracking-widest text-[#15803D] uppercase block mb-2.5">
                Quick Jump to Steps ({MOCKUP_SLIDES.filter(s => s.category === activeCategoryFilter).length})
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {MOCKUP_SLIDES.map((slideItem, index) => {
                  if (slideItem.category !== activeCategoryFilter) {
                    return null;
                  }
                  const isCurrent = activeMockupIndex === index;
                  return (
                    <button
                      key={slideItem.step}
                      onClick={() => setActiveMockupIndex(index)}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-bold font-sans transition-all flex items-center gap-2 border cursor-pointer select-none ${
                        isCurrent
                          ? "bg-[#15803D] border-[#15803D] text-white shadow-3xs font-black"
                          : "bg-white border-zinc-200 text-zinc-600 hover:bg-[#F9FAFB] hover:border-zinc-300"
                      }`}
                    >
                      <span className={`text-[10px] block w-4 h-4 rounded-full flex items-center justify-center font-mono ${
                        isCurrent ? "bg-white text-[#15803D]" : "bg-zinc-100 text-[#15803D]"
                      }`}>
                        {slideItem.step}
                      </span>
                      <span className="font-medium">{slideItem.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE SPLIT SHOWCASE VIEW */}
        {(() => {
          const slide = MOCKUP_SLIDES[activeMockupIndex];
          return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* LEFT EXPLANATORY SIDE */}
              <div className="lg:col-span-7 space-y-6">
                {/* STEP INDICATOR WITH GREEN HORIZONTAL DASH */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-[2.5px] bg-[#15803D] rounded-full" />
                  <span className="font-mono text-xs font-black tracking-widest text-[#15803D] uppercase">
                    STEP {slide.step} OF {MOCKUP_SLIDES.length}
                  </span>
                </div>

                {/* SLIDE HEADLINE & SUBTITLE */}
                <div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 font-sans tracking-tight leading-tight mt-1">
                    {slide.title}
                  </h4>
                  <p className="text-zinc-500 font-medium text-sm sm:text-base mt-1">
                    {slide.subtitle}
                  </p>
                </div>

                {/* EMOTIVE MASCOT QUOTATION BUBBLE */}
                <div className="relative pt-3">
                  <div className="bg-white border border-zinc-200/60 py-5 px-6 rounded-2xl shadow-3xs">
                    <p className="text-zinc-700 italic font-medium leading-relaxed text-sm sm:text-base pl-1">
                      "{slide.quote}"
                    </p>
                  </div>
                </div>

                {/* TWO-COLUMN CORE ELEMENT HIGHLIGHT CARD DECK */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {slide.elements.map((el, i) => {
                    const Icon = el.icon;
                    return (
                      <div key={i} className="bg-white border border-zinc-200/70 p-5 rounded-2xl shadow-3xs hover:border-[#15803D]/20 hover:shadow-2xs transition-all duration-300">
                        <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3 shadow-3xs">
                          <Icon className="w-4 h-4 text-[#15803D] stroke-[2.5]" />
                        </div>
                        <h5 className="text-zinc-950 font-bold text-sm tracking-tight mb-1 font-sans">
                          {el.title}
                        </h5>
                        <p className="text-zinc-500 text-xs leading-relaxed font-normal">
                          {el.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* BACK-NEXT NAVIGATION BUTTON BAR */}
                <div className="flex items-center gap-3 pt-4 max-w-sm">
                  <button 
                    onClick={handlePrevMockup}
                    className="w-12 h-12 rounded-xl border border-zinc-300 bg-white hover:border-zinc-455 hover:bg-zinc-50 flex items-center justify-center transition-all shadow-3xs select-none active:scale-95 cursor-pointer shrink-0"
                    title="Previous Slide"
                  >
                    <ChevronLeft className="w-5 h-5 text-zinc-700" />
                  </button>
                  <button 
                    onClick={handleNextMockup}
                    className="flex-grow h-12 bg-[#15803D] hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2.5 shadow-3xs hover:shadow-2xs transition-all active:scale-98 select-none cursor-pointer"
                  >
                    <span>Next Step</span>
                    <ChevronRight className="w-4 h-4 text-white stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* RIGHT DEVICE MOCKUP COMPONENT */}
              <div className="lg:col-span-5 relative flex justify-center items-center py-6">
                {/* Backplate ambient soft green glow */}
                <div className="absolute w-64 h-[500px] bg-[#15803D]/5 rounded-full filter blur-3xl opacity-60 select-none pointer-events-none" />
                
                {/* Clean, high contrast Mockup Image Container */}
                <div className="relative w-[300px] aspect-[9/19] bg-white rounded-3xl shadow-md border border-zinc-200 overflow-hidden flex flex-col z-20 group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeMockupIndex}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="w-full h-full cursor-zoom-in overflow-hidden relative"
                      onClick={() => setZoomedImage(slide.url)}
                    >
                      <img 
                        src={slide.url} 
                        alt={slide.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-102"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-350" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* HIGHLIGHTED METHODOLOGY ANALYSIS SUBSECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start py-12 border-t border-b border-zinc-205">
        <motion.div 
          initial={{ opacity: 0, x: -30, filter: "blur(3px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="inline-block font-mono text-[10px] sm:text-xs font-bold text-teal-800 bg-teal-50 border border-teal-100 px-3 py-1 rounded-full uppercase tracking-wider">
            Atomic Design & System Logic
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-zinc-950 leading-tight">
            Single-Source code Token Pipeline.
          </h3>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-sans">
            Static layouts inside Figma files drift apart from active developer widget styling easily. By treating the **Dart Token class** as the singular, absolute visual ground truth, our mobile layouts remain 100% synchronized with no drift.
          </p>
          <div className="space-y-3">
            {[
              "Atomic Components mapping matching color gradients.",
              "Strict 48x48 tactile tap regions ensuring high responsive physical target bounds.",
              "Automatic Reduced-Motion gating detecting operating system constraints."
            ].map((pt, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-650 leading-relaxed font-medium">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-50 text-emerald-800 mt-0.5 shrink-0 text-[10px] font-bold font-mono">
                  {idx + 1}
                </span>
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30, filter: "blur(3px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-zinc-50 border border-zinc-200/80 p-6 sm:p-8 rounded-3xl space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-655 font-mono text-lg font-bold">
              🧠
            </div>
            <div>
              <span className="font-mono text-[10px] text-zinc-405 uppercase tracking-widest block font-bold">
                PSYCHOLOGY TRUTHS
              </span>
              <h4 className="text-base font-bold text-zinc-950 font-sans tracking-tight">
                Empathy Over Calculation
              </h4>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-zinc-750 leading-relaxed font-sans">
            "Counting calories" acts like a rigid list of chore trackers, causing extreme high tracking fatigue and visual self-sabotage. Re-orienting the user journey towards emotional snack-trigger maps, sustainable trends, and soft mascot-guided encouragement buffer guilt points, delivering sustainable behavior modifications.
          </p>
          <div className="p-4 bg-orange-50/50 border border-orange-105 rounded-2xl flex gap-3 text-xs text-orange-850 leading-relaxed font-sans">
            <span className="text-lg">🍪</span>
            <div>
              <span className="font-bold block uppercase tracking-wider text-[9px]">BEHAVIOR METRIC ACCREDITED</span>
              <span>PandaHabits reduces logging drop-off rates inside trials by **42%** by removing strict red/green guilt coloring, substituting color-led warnings with literal unicode face emotes.</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FULL-SIZE DETAIL ZOOM MODAL */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
            className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out select-none"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-sm w-full rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-transparent"
            >
              <img 
                src={zoomedImage} 
                alt="Zoomed Detail" 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain rounded-2xl max-h-[90vh]" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
