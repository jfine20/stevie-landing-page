import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { rewardsTeaser } from "@/lib/content";

export function RewardsTeaser() {
  return (
    <section className="py-6">
      <Container>
        <Link
          href={rewardsTeaser.linkHref}
          className="flex flex-wrap items-center gap-5 rounded-[12px] border border-[var(--rule)] bg-paper px-7 py-5 transition-[background-color,border-color,transform] duration-200 hover:-translate-y-px hover:border-[var(--rule-strong)] hover:bg-cream-warm"
        >
          <span className="rounded-full bg-cobalt px-[11px] py-[6px] font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-cream flex-shrink-0">
            {rewardsTeaser.tag}
          </span>
          <span className="flex-1 text-[15px] leading-[1.45] text-cobalt-ink">
            {rewardsTeaser.text}{" "}
            <em className="font-display text-[17px] italic text-cobalt">
              {rewardsTeaser.emphasis}
            </em>
          </span>
          <span className="flex-shrink-0 inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.02em] text-cobalt">
            {rewardsTeaser.linkLabel} <ArrowIcon size={14} />
          </span>
        </Link>
      </Container>
    </section>
  );
}
