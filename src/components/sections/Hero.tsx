import { Fragment } from "react";
import { Button, ArrowIcon, PlaneIcon } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-visible pb-[72px] pt-12">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}
          <div>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="mt-6 text-[clamp(48px,6vw,88px)] leading-[1.0] tracking-[-0.025em] text-cobalt-ink">
              {hero.headlinePrefix}
              <br />
              <em className="italic text-cobalt">{hero.headlineEmphasis}</em>
            </h1>
            <p className="mt-7 max-w-[480px] text-[17px] leading-[1.6] text-ink-soft">
              {hero.subhead}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-[14px]">
              <Button href={hero.primaryCta.href} variant="primary" external>
                {hero.primaryCta.label} <ArrowIcon />
              </Button>
              <Button href={hero.secondaryCta.href} variant="ghost">
                {hero.secondaryCta.label}
              </Button>
            </div>

            {/* Stats */}
            <div
              className="mt-16 flex items-stretch gap-8 border-t border-[var(--rule)] pt-7"
              style={{ marginTop: 64 }}
            >
              {hero.stats.map((stat, i) => (
                <Fragment key={stat.num}>
                  {i > 0 && (
                    <div className="w-px flex-shrink-0 bg-[var(--rule)]" />
                  )}
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <div className="flex items-baseline gap-1.5 font-display text-[clamp(28px,3vw,40px)] leading-none tracking-[-0.02em] text-cobalt-ink">
                      {stat.num}
                      <span className="font-sans text-[13px] font-medium tracking-[0.02em] text-cobalt">
                        {stat.suffix}
                      </span>
                    </div>
                    <div className="text-[11px] font-medium uppercase tracking-[0.16em] leading-[1.3] text-ink-soft">
                      {stat.label}
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          {/* Right — boarding pass */}
          <div className="hidden lg:block">
            <BoardingPass />
          </div>
        </div>
      </Container>
    </section>
  );
}

function BoardingPass() {
  const bp = hero.boardingPass;
  return (
    <div className="boarding-pass">
      {/* Header */}
      <div className="flex items-center justify-between bg-cobalt px-6 py-[18px] text-cream">
        <span className="font-display text-[22px] tracking-[-0.01em]">{bp.airline}</span>
        <span className="rounded-full border border-cream/45 px-[9px] py-1 text-[10px] font-semibold uppercase tracking-[0.22em]">
          Boarding Pass
        </span>
      </div>

      {/* Body */}
      <div className="px-6 pb-[22px] pt-[26px]">
        {/* Route */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-[14px]">
          <div>
            <div className="font-display text-[56px] leading-none tracking-[-0.02em] text-cobalt-ink">
              {bp.from.code}
            </div>
            <span className="mt-1.5 block font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-ink-soft">
              {bp.from.city}
            </span>
          </div>
          <PlaneIcon size={28} color="var(--color-cobalt)" />
          <div className="text-right">
            <div className="font-display text-[56px] leading-none tracking-[-0.02em] text-cobalt-ink">
              {bp.to.code}
            </div>
            <span className="mt-1.5 block font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-ink-soft">
              {bp.to.city}
            </span>
          </div>
        </div>

        {/* Fields */}
        <div className="mt-[22px] grid grid-cols-3 gap-[18px] border-t border-dashed border-[var(--rule-strong)] pt-[18px]">
          {bp.fields.map((f) => (
            <div key={f.k}>
              <div className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
                {f.k}
              </div>
              <div className="mt-1 font-display text-[18px] text-cobalt-ink">{f.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-dashed border-[var(--rule-strong)] px-6 py-[14px]">
        <div className="bp-barcode" />
        <div>
          <div className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            Seat
          </div>
          <div className="mt-0.5 font-display text-[22px] text-cobalt-ink">{bp.seat}</div>
        </div>
      </div>
    </div>
  );
}
