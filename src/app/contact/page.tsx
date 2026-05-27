import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata = { title: "Contact — Stevie" };

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="py-20">
        <Container>
          <div className="mx-auto max-w-[640px]">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-[18px] text-[clamp(36px,4vw,56px)] leading-[1.04] tracking-[-0.02em] text-cobalt-ink">
              Say <em className="italic text-cobalt">hello.</em>
            </h1>
            <p className="mt-4 max-w-[46ch] text-[16px] leading-[1.6] text-ink-soft">
              A real person reads every message and writes back — usually within a day.
            </p>

            <div className="mt-10 space-y-4">
              <div className="rounded-[12px] border border-[var(--rule)] bg-paper p-6">
                <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-cobalt">
                  General
                </div>
                <a
                  href="mailto:hello@stevieai.io"
                  className="text-[16px] font-medium text-cobalt-ink underline underline-offset-2 hover:text-cobalt"
                >
                  hello@stevieai.io
                </a>
              </div>
              <div className="rounded-[12px] border border-[var(--rule)] bg-paper p-6">
                <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-cobalt">
                  Press
                </div>
                <a
                  href="mailto:press@stevieai.io"
                  className="text-[16px] font-medium text-cobalt-ink underline underline-offset-2 hover:text-cobalt"
                >
                  press@stevieai.io
                </a>
              </div>
              <div className="rounded-[12px] border border-[var(--rule)] bg-paper p-6">
                <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-cobalt">
                  Security
                </div>
                <a
                  href="mailto:hello@stevieai.io"
                  className="text-[16px] font-medium text-cobalt-ink underline underline-offset-2 hover:text-cobalt"
                >
                  hello@stevieai.io
                </a>
                <p className="mt-1 text-[13px] text-ink-soft">
                  Vulnerability reports welcome. We pay bounties for valid findings.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
