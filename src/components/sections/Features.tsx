import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { features } from "@/lib/content";

const chatBubbles = [
  { who: "me", text: "Warm weekend, under $900, leaving Friday." },
  { who: "stevie", text: "Oaxaca's the move — direct flight, great food, $689 all in." },
  { who: "me", text: "Book it." },
];

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

        {/* Feature grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Chat card */}
          <div className="flex flex-col gap-5 rounded-[12px] border border-[var(--rule)] bg-paper p-6">
            <div>
              <span className="mb-[10px] block font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-cobalt">
                {chat.tag}
              </span>
              <h3 className="text-[20px] leading-[1.2] tracking-[-0.01em] text-cobalt-ink">
                {chat.title}
              </h3>
              <p className="mt-2 max-w-[38ch] text-[14px] leading-[1.55] text-ink-soft">
                {chat.body}
              </p>
            </div>

            {/* Chat preview */}
            <div className="mt-auto rounded-[10px] border border-[var(--rule)] bg-cream-warm p-4 flex flex-col gap-2">
              {chatBubbles.map((b, i) => (
                <div
                  key={i}
                  className={`max-w-[80%] rounded-[12px] px-[14px] py-[9px] text-[13.5px] leading-[1.4] ${
                    b.who === "me"
                      ? "self-end rounded-br-[4px] bg-cobalt text-cream"
                      : "self-start rounded-bl-[4px] border border-[var(--rule)] bg-paper text-cobalt-ink"
                  }`}
                >
                  {b.text}
                </div>
              ))}
            </div>
          </div>

          {/* Best rates card */}
          <div className="flex flex-col gap-5 rounded-[12px] border border-[var(--rule)] bg-paper p-6">
            <div>
              <span className="mb-[10px] block font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-cobalt">
                {bestRates.tag}
              </span>
              <h3 className="text-[20px] leading-[1.2] tracking-[-0.01em] text-cobalt-ink">
                {bestRates.title}
              </h3>
              <p className="mt-2 max-w-[38ch] text-[14px] leading-[1.55] text-ink-soft">
                {bestRates.body}
              </p>
            </div>

            {/* Savings bar */}
            <div className="mt-auto rounded-[10px] border border-[var(--rule)] bg-cream-warm p-[16px_20px]">
              <div className="mb-[12px] flex items-baseline justify-between">
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  {sb.label}
                </span>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  Total cost
                </span>
              </div>

              {/* Agent row */}
              <div className="flex items-baseline justify-between border-t border-[var(--rule)] py-[10px]">
                <span className="text-[13.5px] text-ink-soft">{sb.agentLabel}</span>
                <span className="font-display text-[18px] text-ink-soft line-through decoration-[var(--rule-strong)]">
                  {sb.agentPrice}
                </span>
              </div>

              {/* Stevie row */}
              <div className="flex items-baseline justify-between border-t border-[var(--rule)] py-[10px]">
                <span className="text-[13.5px] font-semibold text-cobalt-ink">{sb.stevieLabel}</span>
                <span className="font-display text-[18px] text-cobalt-ink">{sb.steviePrice}</span>
              </div>

              {/* Savings */}
              <div className="flex items-baseline justify-between border-t border-dashed border-[var(--rule)] pt-[10px]">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-cobalt">
                  {sb.savingsLabel}
                </span>
                <span className="font-display text-[22px] text-cobalt">{sb.savings}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
