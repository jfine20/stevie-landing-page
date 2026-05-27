import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  light?: boolean;
  className?: string;
};

export function Eyebrow({ children, light, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-sans text-[0.69rem] font-semibold uppercase tracking-[0.24em]",
        "before:inline-block before:h-px before:w-6 before:opacity-70",
        light
          ? "text-cream before:bg-cream"
          : "text-cobalt before:bg-cobalt",
        className,
      )}
    >
      {children}
    </span>
  );
}
