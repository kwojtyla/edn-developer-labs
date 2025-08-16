"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { StickyNote, Save, X } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const NOTEPAD_STORAGE_KEY = "edn-labs-notepad-content";

export function Notepad() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");
  const { t } = useLanguage();

  useEffect(() => {
    const savedContent = localStorage.getItem(NOTEPAD_STORAGE_KEY);
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (content !== "") {
        localStorage.setItem(NOTEPAD_STORAGE_KEY, content);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [content]);

  const handleClear = () => {
    setContent("");
    localStorage.removeItem(NOTEPAD_STORAGE_KEY);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="w-full justify-start"
          onClick={() => setIsOpen(true)}
        >
          <StickyNote className="h-4 w-4 mr-2" />
          {t("notepad.button")}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <StickyNote className="h-5 w-5 mr-2" />
            {t("notepad.title")}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={t("notepad.placeholder")}
            className="min-h-[400px] resize-none"
            autoFocus
          />
          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-400">{t("notepad.info")}</div>
            <div className="text-sm text-gray-500">
              {content.length} {t("notepad.characters")}
              {content.length > 0}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
