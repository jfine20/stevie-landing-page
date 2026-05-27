"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowIcon } from "@/components/ui/Button";
import { tryIt } from "@/lib/content";

export function TryIt() {
  const { prompts } = tryIt;
  const [pi, setPi] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const current = prompts[pi] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          38 + Math.random() * 35,
        );
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1600);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 800);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 18);
      } else {
        setPi((pi + 1) % prompts.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, pi, prompts]);

  return (
    <section className="py-14">
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-[760px] text-center">
          <Eyebrow>{tryIt.eyebrow}</Eyebrow>
          <h2 className="mt-[18px] text-[clamp(34px,3.6vw,48px)] leading-[1.05] tracking-[-0.015em] text-cobalt-ink">
            {tryIt.headingPrefix}{" "}
            <em className="italic text-cobalt">{tryIt.headingEmphasis}</em>
          </h2>
          <p className="mx-auto mt-[18px] max-w-[56ch] text-[16px] leading-[1.55] text-ink-soft">
            {tryIt.lede}
          </p>
        </div>

        {/* Prompt card */}
        <div
          className="mx-auto max-w-[820px] rounded-[20px] border border-[var(--rule)] bg-paper px-[22px] pb-[18px] pt-[22px]"
          style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 20px 50px -28px rgba(0,31,74,0.25)" }}
        >
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div className="grid size-12 flex-shrink-0 place-items-center rounded-[12px] border border-[var(--rule)] bg-cream-warm text-cobalt">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {/* Text */}
            <div className="min-w-0 flex-1 overflow-hidden whitespace-nowrap font-display text-[clamp(22px,2.4vw,30px)] leading-[1.2] tracking-[-0.01em] text-cobalt-ink text-ellipsis">
              {text}
              <span className="prompt-caret" />
            </div>
            {/* Send */}
            <button
              className="grid size-[52px] flex-shrink-0 place-items-center rounded-[14px] bg-cobalt text-cream transition-[background-color,transform] duration-150 hover:-translate-y-px hover:bg-cobalt-deep"
              aria-label="Send"
            >
              <ArrowIcon size={18} />
            </button>
          </div>

          {/* Chips */}
          <div className="mt-[18px] flex flex-wrap gap-2 border-t border-dashed border-[var(--rule)] pt-[14px]">
            {tryIt.chips.map((chip) => (
              <span
                key={chip.label}
                className={`inline-flex items-center gap-[7px] rounded-full border px-3 py-[7px] text-[12px] font-medium ${
                  chip.active
                    ? "border-cobalt/25 bg-cobalt/[0.08] text-cobalt"
                    : "border-[var(--rule)] bg-cream-warm text-ink-soft"
                }`}
              >
                <span
                  className={`size-[7px] rounded-full ${
                    chip.active
                      ? "bg-[#1F8A5B] shadow-[0_0_0_3px_rgba(31,138,91,0.18)]"
                      : "bg-[var(--rule-strong)]"
                  }`}
                />
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-[18px] text-center text-[13px] tracking-[0.02em] text-ink-soft">
          {tryIt.footer}
        </p>
      </Container>
    </section>
  );
}
