import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { portfolio } from "@/lib/content";

export function Portfolio() {
  return (
    <section id="portfolio" className="pb-20">
      <Container>
        <div
          className="grid items-center gap-7 rounded-[14px] p-9 lg:grid-cols-2 lg:gap-[28px]"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(233,181,71,0.25), transparent 50%), var(--color-cobalt-ink)",
            border: "1px solid var(--color-cobalt-ink)",
          }}
        >
          {/* Text */}
          <div>
            <Eyebrow light>{portfolio.eyebrow}</Eyebrow>
            <h2 className="mt-[18px] text-[clamp(34px,3.5vw,48px)] leading-[1.04] text-cream">
              {portfolio.headingPrefix}{" "}
              <em className="italic">{portfolio.headingEmphasis}</em>
            </h2>
            <p className="mt-[14px] max-w-[44ch] text-[16px] leading-[1.55] text-cream/[0.78]">
              {portfolio.body}
            </p>
            <div className="mt-7 flex flex-wrap gap-7">
              {portfolio.stats.map((s) => (
                <div key={s.k}>
                  <div className="font-display text-[28px] leading-none text-cream">{s.k}</div>
                  <div className="mt-1.5 font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-cream/70">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coin stack visual */}
          <div className="flex items-center justify-center">
            <div className="relative h-[200px] w-full max-w-[360px]">
              {[
                { left: 30, top: 20, rotate: -6 },
                { left: 120, top: 40, rotate: 4, zIndex: 2 },
                { left: 210, top: 30, rotate: -2 },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute grid size-[120px] place-items-center rounded-full border-[3px] border-cream font-display text-[32px] text-cobalt-ink"
                  style={{
                    left: pos.left,
                    top: pos.top,
                    transform: `rotate(${pos.rotate}deg)`,
                    zIndex: pos.zIndex,
                    background:
                      "radial-gradient(circle at 35% 30%, #FFD16E, #F0EDE6 60%, #B98D2A)",
                    boxShadow: "0 12px 28px -16px rgba(0,0,0,0.4)",
                  }}
                >
                  $
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
