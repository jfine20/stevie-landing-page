"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { faq } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number>(0); // first item open by default

  return (
    <section id="faq" className="py-10">
      <Container>
        <div className="grid items-start gap-[88px] lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left — heading + description */}
          <div>
            <Eyebrow>{faq.eyebrow}</Eyebrow>
            <h2 className="mt-[18px] text-[clamp(34px,3.6vw,48px)] leading-[1.05] tracking-[-0.015em] text-cobalt-ink">
              {faq.headingPrefix}{" "}
              <em className="italic text-cobalt">{faq.headingEmphasis}</em>
            </h2>
            <p className="mt-[18px] max-w-[36ch] text-[15px] leading-[1.55] text-ink-soft">
              {faq.lede}
            </p>
          </div>

          {/* Right — accordion */}
          <div className="border-t border-[var(--rule-strong)]">
            {faq.items.map((item, i) => (
              <div key={i} className="border-b border-[var(--rule-strong)]">
                <button
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-display text-[20px] leading-[1.25] text-cobalt-ink">
                    {item.question}
                  </span>
                  {/* Circle +/× toggle */}
                  <span
                    className={`grid size-7 flex-shrink-0 place-items-center rounded-full border text-lg font-light transition-all duration-200 ${
                      open === i
                        ? "rotate-45 border-cobalt bg-cobalt text-cream"
                        : "border-[var(--rule-strong)] bg-transparent text-cobalt-ink"
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height,padding] duration-300 ${
                    open === i ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="max-w-[56ch] text-[15.5px] leading-[1.6] text-ink-soft">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
