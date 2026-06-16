import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onFinished: () => void;
}

const WORDS = ["empathise", "simplify", "iterate"];

const IMAGES_TO_PRELOAD = [
  "/assets/portrait.png",
  "/assets/Full body shot 5.png",
  "/assets/Candidates List.png",
  "/assets/Candidates List - Bulk Actions.png",
  "/assets/Candidate info page.png",
  "/assets/Candidate info page - Team Notes.png",
];

export default function LoadingScreen({ onFinished }: LoadingScreenProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isWordWritten, setIsWordWritten] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  // 1. Parallel Image Preloading
  useEffect(() => {
    let active = true;
    const preload = async () => {
      try {
        const promises = IMAGES_TO_PRELOAD.map((url) => {
          return new Promise<void>((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve();
            img.onerror = () => resolve(); // Always resolve so we don't hang
          });
        });
        await Promise.all(promises);
      } catch (e) {
        console.error("Image preload failed", e);
      } finally {
        if (active) {
          setImagesLoaded(true);
        }
      }
    };

    preload();

    // Safety timeout: dismiss loading screen after 6 seconds even if assets fail to load
    const fallbackTimer = setTimeout(() => {
      if (active) {
        setImagesLoaded(true);
      }
    }, 6000);

    return () => {
      active = false;
      clearTimeout(fallbackTimer);
    };
  }, []);

  // 2. Handwriting Animation Sequential Controller
  useEffect(() => {
    if (currentWordIndex >= WORDS.length) {
      setIsAnimationFinished(true);
      return;
    }

    const word = WORDS[currentWordIndex];
    // Animation durations:
    // Writing duration is proportional to length of the word (constant writing speed)
    const writeDuration = word.length * 80 + 250; // ms

    // Triggers ink ripple when writing finishes
    const writeTimer = setTimeout(() => {
      setIsWordWritten(true);
    }, writeDuration + 100);

    // Transitions to the next stage word after a readable hold duration
    const nextTimer = setTimeout(() => {
      setIsWordWritten(false);
      setCurrentWordIndex((prev) => prev + 1);
    }, writeDuration + 100 + 800);

    return () => {
      clearTimeout(writeTimer);
      clearTimeout(nextTimer);
    };
  }, [currentWordIndex]);

  // 3. Finalize loading when both the animation is complete and all images are preloaded
  useEffect(() => {
    if (isAnimationFinished && imagesLoaded) {
      // Small delay for clean transition out
      const finishTimer = setTimeout(() => {
        onFinished();
      }, 500);
      return () => clearTimeout(finishTimer);
    }
  }, [isAnimationFinished, imagesLoaded, onFinished]);

  const isLastWait = isAnimationFinished && !imagesLoaded;
  const currentWord = WORDS[currentWordIndex] || "";
  const writeDurationSeconds = currentWord.length * 0.08 + 0.25;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 bg-[#FCFCFC] z-50 flex items-center justify-center select-none font-sans overflow-hidden"
      style={{
        zIndex: 9999,
        backgroundImage:
          "radial-gradient(circle, rgba(24, 24, 27, 0.05) 1.5px, transparent 1.5px)",
        backgroundSize: "24px 24px",
      }}
    >
      <AnimatePresence mode="wait">
        {!isLastWait && currentWord && (
          <motion.div
            key={currentWord}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -15,
              transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
            }}
            className="relative inline-flex items-center"
          >
            {/* Handwriting font text */}
            <span className="font-handwriting text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[6.5vw] font-bold text-zinc-900 tracking-wide select-none whitespace-nowrap py-4 px-6 leading-none">
              {currentWord}
            </span>

            {/* Mask overlay revealing text left-to-right (pinned to right, width shrinks to 0) */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{
                duration: writeDurationSeconds,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className="absolute top-0 right-0 bottom-0 bg-[#FCFCFC] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(24, 24, 27, 0.05) 1.5px, transparent 1.5px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Moving Pen Cursor synchronized with reveal */}
            <motion.div
              initial={{ left: "0%" }}
              animate={{ left: "100%" }}
              transition={{
                duration: writeDurationSeconds,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-zinc-900 z-20 shadow-xs pointer-events-none"
            />

            {/* Soft Ink ripple splash on complete */}
            <AnimatePresence>
              {isWordWritten && (
                <motion.span
                  initial={{ scale: 0.6, opacity: 0.6 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-zinc-950 pointer-events-none z-10"
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {isLastWait && (
          <motion.div
            key="preparing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center flex flex-col items-center gap-3"
          >
            <span className="font-handwriting text-5xl text-zinc-850">
              Deploying experience...
            </span>
            <div className="w-12 h-[1px] bg-zinc-300 relative overflow-hidden mt-1">
              <motion.div
                animate={{ left: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-6 bg-zinc-900"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
