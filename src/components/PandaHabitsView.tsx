import React from "react";
import PandaHabitsCaseStudy from "./case-studies/PandaHabitsCaseStudy";

interface PandaHabitsViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function PandaHabitsView({ onClose, onPrev, onNext }: PandaHabitsViewProps) {
  return (
    <PandaHabitsCaseStudy
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
    />
  );
}
