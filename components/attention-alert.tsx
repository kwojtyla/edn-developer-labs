import type React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

interface AttentionAlertProps {
  children: React.ReactNode;
}

export function AttentionAlert({ children }: AttentionAlertProps) {
  return (
    <Alert className="border-red-200 bg-red-50">
      <AlertTriangle className="h-4 w-4 text-red-600" />
      <AlertDescription className="text-red-800">{children}</AlertDescription>
    </Alert>
  );
}
