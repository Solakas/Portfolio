import React from "react";
import ApplyNowCaseStudy from "./case-studies/ApplyNowCaseStudy";

interface ApplyNowViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function ApplyNowView({ onClose, onPrev, onNext }: ApplyNowViewProps) {
  return (
    <ApplyNowCaseStudy
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
    />
  );
}
