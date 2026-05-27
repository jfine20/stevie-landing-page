"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { faq } from "@/lib/content";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={`flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-14">
      <Container>
        <div className="mx-auto max-w-[800px]">
          {/* Head */}
          <div className="mb-10 text-center">
            <Eyebrow>{faq.eyebrow}</Eyebrow>
            <h2 className="mt-[18px] text-[clamp(34px,3.6vw,48px)] leading-[1.04] tracking-[-0.015em] text-cobalt-ink">
              {faq.headingPrefix}{" "}
              <em className="italic text-cobalt">{faq.headingEmphasis}</em>
            </h2>
            <p className="mx-auto mt-3 max-w-[48ch] text-[15px] leading-[1.5] text-ink-soft">
              {faq.lede}
            </p>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            {faq.items.map((item, i) => (
              <div key={i}>
                <button
                  className="flex w-full items-center justify-between gap-6 py-[18px] text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-[16px] font-medium leading-[1.35] text-cobalt-ink">
                    {item.question}
                  </span>
                  <ChevronIcon open={open === i} />
                </button>
                {open === i && (
                  <div className="pb-[18px]">
                    <p className="max-w-[66ch] text-[14.5px] leading-[1.6] text-ink-soft">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
