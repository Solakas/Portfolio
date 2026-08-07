import React from "react";
import FuxitCaseStudy from "./case-studies/FuxitCaseStudy";

interface FuxitViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function FuxitView({ onClose, onPrev, onNext }: FuxitViewProps) {
  return (
    <FuxitCaseStudy
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
    />
  );
}
