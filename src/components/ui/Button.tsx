import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost";
type Size = "md" | "lg";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center gap-2.5 rounded-full font-sans font-medium tracking-[0.01em] whitespace-nowrap select-none transition-[transform,background-color,color] duration-150 ease-[var(--ease-brand)] hover:-translate-y-px active:translate-y-0";

const variants: Record<Variant, string> = {
  primary: "bg-cobalt text-cream hover:bg-cobalt-deep",
  ghost:   "border border-[var(--rule-strong)] text-cobalt-ink hover:bg-cobalt-ink/[0.06]",
};

const sizes: Record<Size, string> = {
  md: "px-[22px] py-[13px] text-[14.5px]",
  lg: "px-7 py-[15px] text-[15px]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external,
  className,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function ArrowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlaneIcon({ size = 28, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M3 17l5-1 4.5 4.5L17 19l-3 8 2.5 1.5 5.5-9.5 7-1.5c1.7-.4 3-1.5 3-2.5s-1.3-1.5-3-1.5l-6 .5L17 7l-2.5 1 2 6L11 16l-3-3.5L5.5 13 3 17z"
        fill={color}
      />
    </svg>
  );
}
