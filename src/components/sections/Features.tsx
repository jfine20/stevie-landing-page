import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { features } from "@/lib/content";

export function Features() {
  const [chat, bestRates] = features.cards;
  const sb = features.savingsBar;

  return (
    <section id="features" className="py-10">
      <Container>
        {/* Section head */}
        <div className="mb-8 grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Eyebrow>{features.eyebrow}</Eyebrow>
            <h2 className="mt-[18px] text-[clamp(34px,3.6vw,48px)] tracking-[-0.015em] text-cobalt-ink">
              {features.headingPrefix}
              <br />
              <em className="italic text-cobalt">{features.headingEmphasis}</em>
            </h2>
          </div>
          <p className="self-end pb-2 text-[16px] leading-[1.55] text-ink-soft">
            {features.lede}
          </p>
        </div>

        {/* Feature grid — align-start so cards don't stretch to equal height */}
        <div className="grid items-start gap-6 lg:grid-cols-2">
          {/* Chat card */}
          <div className="rounded-[12px] border border-[var(--rule)] bg-paper p-8">
            <span className="mb-[14px] block font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-cobalt">
              {chat.tag}
            </span>
            <h3 className="text-[22px] leading-[1.18] tracking-[-0.01em] text-cobalt-ink">
              {chat.title}
            </h3>
            <p className="mt-3 text-[14.5px] leading-[1.6] text-ink-soft">
              {chat.body}
            </p>
          </div>

          {/* Best rates card */}
          <div className="rounded-[12px] border border-[var(--rule)] bg-paper p-8">
            <span className="mb-[14px] block font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-cobalt">
              {bestRates.tag}
            </span>
            <h3 className="text-[22px] leading-[1.18] tracking-[-0.01em] text-cobalt-ink">
              {bestRates.title}
            </h3>
            <p className="mt-3 text-[14.5px] leading-[1.6] text-ink-soft">
              {bestRates.body}
            </p>

            {/* Savings comparison */}
            <div className="mt-6 rounded-[12px] border border-[var(--rule)] bg-cream-warm p-[18px_22px]">
              {/* Header */}
              <div className="mb-[14px] flex items-baseline justify-between">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  {sb.label}
                </span>
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  Total cost
                </span>
              </div>

              {/* Agent row */}
              <div className="mb-[18px]">
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="text-[13.5px] text-ink-soft">{sb.agentLabel}</span>
                  <span className="font-display text-[18px] text-ink-soft" style={{ textDecoration: "line-through", textDecorationColor: "rgba(0,31,74,0.45)" }}>
                    {sb.agentPrice}
                  </span>
                </div>
                <div className="h-[8px] w-full rounded-full bg-[rgba(0,31,74,0.12)]" />
              </div>

              {/* Stevie row */}
              <div className="mb-[18px]">
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="text-[14px] font-bold text-cobalt-ink">{sb.stevieLabel}</span>
                  <span className="font-display text-[26px] leading-none text-cobalt-ink">{sb.steviePrice}</span>
                </div>
                <div className="h-[8px] w-full overflow-hidden rounded-full bg-[rgba(0,31,74,0.12)]">
                  <div className="h-full rounded-full bg-cobalt" style={{ width: `${sb.steviePct}%` }} />
                </div>
              </div>

              {/* You save */}
              <div className="flex items-baseline justify-between border-t border-dashed border-[rgba(0,31,74,0.2)] pt-[14px]">
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-cobalt">
                  {sb.savingsLabel}
                </span>
                <span className="font-display text-[24px] text-cobalt">{sb.savings}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
