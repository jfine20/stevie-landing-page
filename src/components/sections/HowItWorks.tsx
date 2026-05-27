import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-10">
      <Container>
        <div className="mb-8 grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
            <h2 className="mt-[18px] text-[clamp(34px,3.6vw,48px)] tracking-[-0.015em] text-cobalt-ink">
              {howItWorks.headingPrefix}
              <br />
              <em className="italic text-cobalt">{howItWorks.headingEmphasis}</em>
            </h2>
          </div>
        </div>

        <div className="grid border-t border-[var(--rule)] sm:grid-cols-3">
          {howItWorks.steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex flex-col gap-[14px] px-8 py-10 ${
                i < howItWorks.steps.length - 1 ? "border-b border-[var(--rule)] sm:border-b-0 sm:border-r" : ""
              }`}
            >
              <span className="font-display text-[44px] leading-[0.9] tracking-[-0.02em] text-cobalt">
                {step.number}
              </span>
              <h3 className="text-[20px] leading-[1.2] tracking-[-0.01em] text-cobalt-ink">
                {step.title}
              </h3>
              <p className="max-w-[30ch] text-[14.5px] leading-[1.5] text-ink-soft">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
