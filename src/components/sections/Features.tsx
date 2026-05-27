import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { features } from "@/lib/content";

export function Features() {
  const [chat, equity] = features.cards;
  const pc = features.portfolioCard;

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

        {/* Feature grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Chat card */}
          <div className="flex flex-col gap-5 rounded-[12px] border border-[var(--rule)] bg-paper p-8">
            <div>
              <span className="mb-[14px] block font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-cobalt">
                {chat.tag}
              </span>
              <h3 className="text-[22px] leading-[1.18] tracking-[-0.01em] text-cobalt-ink">
                {chat.title}
              </h3>
              <p className="mt-2.5 max-w-[38ch] text-[14.5px] leading-[1.55] text-ink-soft">
                {chat.body}
              </p>
            </div>
          </div>

          {/* Equity card */}
          <div className="flex flex-col gap-5 rounded-[12px] border border-[var(--rule)] bg-paper p-8">
            <div>
              <span className="mb-[14px] block font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-cobalt">
                {equity.tag}
              </span>
              <h3 className="text-[22px] leading-[1.18] tracking-[-0.01em] text-cobalt-ink">
                {equity.title}
              </h3>
              <p className="mt-2.5 max-w-[38ch] text-[14.5px] leading-[1.55] text-ink-soft">
                {equity.body}
              </p>
            </div>

            {/* Portfolio mini-card */}
            <div className="mt-auto rounded-[12px] border border-[var(--rule)] bg-cream-warm p-[18px_22px]">
              <div className="mb-[14px] flex items-baseline justify-between">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  {pc.label}
                </span>
                <span className="font-display text-[22px] text-cobalt-ink">{pc.total}</span>
              </div>
              {pc.entries.map((e) => (
                <div
                  key={e.trip}
                  className="flex items-center justify-between border-t border-[var(--rule)] py-[10px]"
                >
                  <div>
                    <div className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-cobalt">
                      {e.trip}
                    </div>
                    <div className="mt-0.5 text-[12px] text-ink-soft">{e.fractional}</div>
                  </div>
                  <span className="font-display text-[16px] text-[#1F8A5B]">{e.amount}</span>
                </div>
              ))}
              <div className="mt-1.5 border-t border-dashed border-[var(--rule)] pt-3">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-cobalt">
                  {pc.caption}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
