import React from "react";
import CareerPulseCaseStudy from "./case-studies/CareerPulseCaseStudy";

interface CareerPulseViewProps {
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function CareerPulseView({ onClose, onPrev, onNext }: CareerPulseViewProps) {
  return (
    <CareerPulseCaseStudy
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
    />
  );
}
