import type React from "react";
interface AWSButtonProps {
  children: React.ReactNode;
}

export function AWSButton({ children }: AWSButtonProps) {
  return (
    <span className="inline-block bg-yellow-400 text-black px-2 py-1 rounded text-sm font-medium">
      {children}
    </span>
  );
}
