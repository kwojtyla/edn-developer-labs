"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

interface LabProgressContextType {
  completedSteps: string[];
  toggleStep: (stepId: string) => void;
  isStepCompleted: (stepId: string) => boolean;
  allStepsCompleted: boolean;
  completeLab: () => void;
  isLabCompleted: boolean;
}

const LabProgressContext = createContext<LabProgressContextType | undefined>(
  undefined
);

const LAB_STEPS = ["step-1", "step-2", "step-3", "step-4", "step-6"];

export function LabProgressProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [isLabCompleted, setIsLabCompleted] = useState(false);

  useEffect(() => {
    // Load from localStorage on mount
    const saved = localStorage.getItem("lab-progress");
    const savedLabCompleted = localStorage.getItem("lab-completed");
    if (saved) {
      setCompletedSteps(JSON.parse(saved));
    }
    if (savedLabCompleted) {
      setIsLabCompleted(JSON.parse(savedLabCompleted));
    }
  }, []);

  useEffect(() => {
    // Save to localStorage whenever completedSteps changes
    localStorage.setItem("lab-progress", JSON.stringify(completedSteps));
  }, [completedSteps]);

  const toggleStep = (stepId: string) => {
    setCompletedSteps((prev) =>
      prev.includes(stepId)
        ? prev.filter((id) => id !== stepId)
        : [...prev, stepId]
    );
  };

  const isStepCompleted = (stepId: string) => completedSteps.includes(stepId);

  const allStepsCompleted = LAB_STEPS.every((step) =>
    completedSteps.includes(step)
  );

  const completeLab = () => {
    setIsLabCompleted(true);
    localStorage.setItem("lab-completed", "true");
  };

  return (
    <LabProgressContext.Provider
      value={{
        completedSteps,
        toggleStep,
        isStepCompleted,
        allStepsCompleted,
        completeLab,
        isLabCompleted,
      }}
    >
      {children}
    </LabProgressContext.Provider>
  );
}

export function useLabProgress() {
  const context = useContext(LabProgressContext);
  if (context === undefined) {
    throw new Error("useLabProgress must be used within a LabProgressProvider");
  }
  return context;
}
