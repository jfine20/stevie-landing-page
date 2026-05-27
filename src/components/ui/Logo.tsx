import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/lib/content";

type LogoProps = {
  size?: number;
  className?: string;
};

export function Logo({ size = 36, className }: LogoProps) {
  return (
    <Link href="/" aria-label={`${site.name} home`} className={cn("inline-flex items-center gap-3", className)}>
      <span
        className="grid place-items-center rounded-[10px] border border-[var(--rule)] bg-cream text-cobalt"
        style={{ width: size, height: size }}
      >
        <Image
          src="/favicon.png"
          alt=""
          width={size - 8}
          height={size - 8}
          priority
        />
      </span>
      <span className="font-display text-[1.5rem] leading-none tracking-[-0.02em] text-cobalt-ink">
        {site.name}
      </span>
    </Link>
  );
}
