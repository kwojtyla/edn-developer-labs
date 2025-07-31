"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { useEffect, useState } from "react";

interface NavItem {
  id: string;
  title: string;
  level: number;
}

const NAV_ITEMS: NavItem[] = [
  { id: "summary", title: "Overview", level: 0 },
  { id: "objectives", title: "Objectives", level: 0 },
  { id: "scenario", title: "Scenario", level: 0 },
  { id: "prerequisites", title: "Prerequisites", level: 0 },
  { id: "step-1", title: "Task 1. Create Lambda Function", level: 0 },
  { id: "step-2", title: "Task 2. Publish Versions and Aliases", level: 0 },
  { id: "step-3", title: "Task 3. Create API Gateway", level: 0 },
  { id: "step-4", title: "Task 4. Testing", level: 0 },
  { id: "step-6", title: "Task 5. Cleanup", level: 0 },
  { id: "congratulations", title: "Congratulations!", level: 0 },
];

export function RightSidebar() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
      }
    );

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="fixed right-0 top-14 w-80 h-[calc(100vh-3.5rem)] bg-gray-50 dark:bg-gray-900 border-l p-4 overflow-y-auto z-40">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-blue-600">
            Lab instructions and tasks
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item.id)}
              className={`w-full justify-start text-left h-auto py-2 px-2 ${
                activeSection === item.id
                  ? "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-medium"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              }`}
            >
              <span className="text-xs leading-relaxed">{item.title}</span>
            </Button>
          ))}

          {/* Progress Indicator */}
          <div className="mt-6 pt-4 border-t">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
              <span>Progress</span>
              <span>~/100</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-yellow-400 h-2 rounded-full"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
