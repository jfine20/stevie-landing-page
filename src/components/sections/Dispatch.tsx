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
    <section className="pb-16 pt-6">
      <Container>
        <div className="relative overflow-hidden rounded-[12px] bg-cobalt px-12 py-12">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left — heading */}
            <div>
              <Eyebrow light>{dispatch.eyebrow}</Eyebrow>
              <h2 className="mt-[18px] text-[clamp(30px,3.2vw,44px)] leading-[1.05] tracking-[-0.015em] text-cream">
                {dispatch.headingPrefix}{" "}
                <em className="italic text-cream">{dispatch.headingEmphasis}</em>
              </h2>
              <p className="mt-4 max-w-[40ch] text-[16px] leading-[1.55] text-cream/80">
                {dispatch.lede}
              </p>
            </div>

            {/* Right — email form */}
            <form onSubmit={handleSubmit}>
              <div className="flex items-center gap-[10px] rounded-full bg-cream p-1.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={dispatch.placeholder}
                  disabled={submitted}
                  required
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-[15px] text-cobalt-ink placeholder:text-cobalt-ink/45 focus:outline-none disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={submitted}
                  className="flex-shrink-0 rounded-full bg-cobalt-ink px-[22px] py-3 text-[14.5px] font-semibold text-cream transition-[background-color,transform] duration-150 hover:-translate-y-px hover:bg-black disabled:cursor-default disabled:opacity-70"
                >
                  {submitted ? dispatch.submitted : dispatch.submit}
                </button>
              </div>
              <p className="mt-4 text-[12px] tracking-[0.06em] text-cream/65">
                {dispatch.fine}
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
