"use client";

import { Button } from "@/components/ui/button";
import { Check, CheckCircle } from "lucide-react";
import { useLabProgress } from "@/components/lab-progress-provider";
import { useLanguage } from "@/components/language-provider";

interface CheckpointButtonProps {
  stepId: string;
}

export function CheckpointButton({ stepId }: CheckpointButtonProps) {
  const { isStepCompleted, toggleStep } = useLabProgress();
  const { t } = useLanguage();
  const completed = isStepCompleted(stepId);

  return (
    <div className="flex justify-center pt-6 border-t">
      <Button
        onClick={() => toggleStep(stepId)}
        variant={completed ? "default" : "outline"}
        size="lg"
        className={completed ? "bg-green-600 hover:bg-green-700" : ""}
      >
        {completed ? (
          <>
            <CheckCircle className="h-5 w-5 mr-2" />
            {t("button.completed")}
          </>
        ) : (
          <>
            <Check className="h-5 w-5 mr-2" />
            {t("button.checkpoint")}
          </>
        )}
      </Button>
    </div>
  );
}
