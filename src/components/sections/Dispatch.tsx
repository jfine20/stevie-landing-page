"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { dispatch } from "@/lib/content";

export function Dispatch() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section className="py-14">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow>{dispatch.eyebrow}</Eyebrow>
          <h2 className="mt-[18px] text-[clamp(28px,3vw,40px)] leading-[1.1] tracking-[-0.015em] text-cobalt-ink">
            {dispatch.headingPrefix}{" "}
            <em className="italic text-cobalt">{dispatch.headingEmphasis}</em>
          </h2>
          <p className="mx-auto mt-3 max-w-[46ch] text-[15px] leading-[1.55] text-ink-soft">
            {dispatch.lede}
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-[420px] gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={dispatch.placeholder}
              disabled={submitted}
              required
              className="min-w-0 flex-1 rounded-[10px] border border-[var(--rule)] bg-paper px-4 py-3 text-[14px] text-cobalt-ink placeholder:text-ink-soft/60 focus:border-cobalt/50 focus:outline-none focus:ring-2 focus:ring-cobalt/20 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={submitted}
              className="flex-shrink-0 rounded-[10px] bg-cobalt px-5 py-3 text-[13px] font-semibold text-cream transition-[background-color,transform] duration-150 hover:-translate-y-px hover:bg-cobalt-deep disabled:cursor-default disabled:opacity-70"
            >
              {submitted ? dispatch.submitted : dispatch.submit}
            </button>
          </form>

          <p className="mt-4 text-[12px] tracking-[0.02em] text-ink-soft/70">
            {dispatch.fine}
          </p>
        </div>
      </Container>
    </section>
  );
}
