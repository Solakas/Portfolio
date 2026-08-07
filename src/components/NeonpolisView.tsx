import React from "react";
import NeonpolisCaseStudy from "./case-studies/NeonpolisCaseStudy";

interface NeonpolisViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function NeonpolisView({ onClose, onPrev, onNext }: NeonpolisViewProps) {
  return (
    <NeonpolisCaseStudy
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
    />
  );
}
