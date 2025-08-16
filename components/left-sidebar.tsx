"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import { useLabProgress } from "@/components/lab-progress-provider";
import { useLanguage } from "@/components/language-provider";
import { Timer } from "@/components/timer";
import { Notepad } from "@/components/notepad";
import { useState } from "react";

const STEPS = [
  { id: "step-1", key: "progress.step1" },
  { id: "step-2", key: "progress.step2" },
  { id: "step-3", key: "progress.step3" },
  { id: "step-4", key: "progress.step4" },
  { id: "step-6", key: "progress.step6" },
];

export function LeftSidebar() {
  const { isStepCompleted, allStepsCompleted, completeLab, isLabCompleted } =
    useLabProgress();
  const { t } = useLanguage();

  return (
    <aside className="fixed flex flex-col gap-2 left-0 top-14 w-80 h-[calc(100vh-3.5rem)] bg-gray-50 dark:bg-gray-900 border-r p-4 overflow-y-auto z-40">
      <Timer />

      <Notepad />

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium flex items-center">
            <Trophy className="h-4 w-4 mr-2" />
            {t("progress.title")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {STEPS.map((step, index) => (
            <div key={step.id} className="flex items-start space-x-2">
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mt-0.5 flex-shrink-0 ${
                  isStepCompleted(step.id)
                    ? "bg-green-500 border-green-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              >
                {isStepCompleted(step.id) && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
              <span
                className={`text-sm ${
                  isStepCompleted(step.id)
                    ? "text-green-600 dark:text-green-400 font-medium"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {t(step.key)}
              </span>
            </div>
          ))}

          <div className="pt-4 border-t">
            {isLabCompleted ? (
              <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400">
                <Trophy className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {t("progress.completed")}
                </span>
              </div>
            ) : (
              <Button
                onClick={completeLab}
                disabled={!allStepsCompleted}
                className="w-full"
                variant={allStepsCompleted ? "default" : "outline"}
                size="sm"
              >
                <Trophy className="h-4 w-4 mr-2" />
                {t("progress.complete")}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
