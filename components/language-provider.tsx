"use client";

import type React from "react";
import { createContext, useContext, useState } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  pt: {
    // Header
    "lab.title":
      "Laboratório - AWS Lambda com Aliases e API Gateway com Stages",
    "lab.level": "Nível",
    "lab.duration": "Duração",
    "lab.services": "Serviços",
    "lab.files": "Arquivos do Lab",
    "lab.level.intermediate": "Intermediário",
    "lab.duration.90min": "90 min",
    "lab.services.lambda": "Lambda, API Gateway",

    // Progress
    "progress.title": "Progresso do Lab",
    "progress.step1": "Criação da Função AWS Lambda",
    "progress.step2": "Publicação de Versões e Criação de Aliases",
    "progress.step3": "Criação e Configuração do API Gateway",
    "progress.step4": "Testes",
    "progress.step5": "Validação dos Resultados",
    "progress.step6": "Limpeza",
    "progress.complete": "Concluir Lab",
    "progress.completed": "Lab Concluído!",

    // Buttons
    "button.checkpoint": "Checkpoint",
    "button.completed": "Concluído",

    // Sections
    "section.summary": "Resumo do Laboratório",
    "section.objectives": "Objetivos",
    "section.scenario": "Cenário",
    "section.prerequisites": "Pré-requisitos",
    "section.part1": "Parte 1: Criação da Função AWS Lambda",
    "section.part2": "Parte 2: Publicação de Versões e Criação de Aliases",
    "section.part3": "Parte 3: Criação e Configuração do API Gateway",
    "section.part4": "Parte 4: Testes",
    "section.part6": "Parte 6: Limpeza",

    // Timer
    "timer.lab": "Timer do Lab",
    "timer.start": "Iniciar",
    "timer.pause": "Pausar",
    "timer.reset": "Resetar",
  },
  en: {
    // Header
    "lab.title": "Lab - AWS Lambda with Aliases and API Gateway with Stages",
    "lab.level": "Level",
    "lab.duration": "Duration",
    "lab.services": "Services",
    "lab.files": "Lab Files",
    "lab.level.intermediate": "Intermediate",
    "lab.duration.90min": "90 min",
    "lab.services.lambda": "Lambda, API Gateway",

    // Progress
    "progress.title": "Lab Progress",
    "progress.step1": "Creating AWS Lambda Function",
    "progress.step2": "Publishing Versions and Creating Aliases",
    "progress.step3": "Creating and Configuring API Gateway",
    "progress.step4": "Testing",
    "progress.step5": "Results Validation",
    "progress.step6": "Cleanup",
    "progress.complete": "Complete Lab",
    "progress.completed": "Lab Completed!",

    // Buttons
    "button.checkpoint": "Checkpoint",
    "button.completed": "Completed",

    // Sections
    "section.summary": "Lab Summary",
    "section.objectives": "Objectives",
    "section.scenario": "Scenario",
    "section.prerequisites": "Prerequisites",
    "section.part1": "Part 1: Creating AWS Lambda Function",
    "section.part2": "Part 2: Publishing Versions and Creating Aliases",
    "section.part3": "Part 3: Creating and Configuring API Gateway",
    "section.part4": "Part 4: Testing",
    "section.part6": "Part 6: Cleanup",

    // Timer
    "timer.lab": "Lab Timer",
    "timer.start": "Start",
    "timer.pause": "Pause",
    "timer.reset": "Reset",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
