import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { LegalSection } from "@/lib/content";

interface LegalPageProps {
  eyebrow: string;
  title: string;
  titleEmphasis: string;
  updated: string;
  sections: readonly LegalSection[];
}

export function LegalPage({ eyebrow, title, titleEmphasis, updated, sections }: LegalPageProps) {
  return (
    <>
      <Nav />
      <main className="py-20">
        <Container>
          <div className="mx-auto max-w-[740px]">
            {/* Header */}
            <div className="mb-12">
              <Eyebrow>{eyebrow}</Eyebrow>
              <h1 className="mt-[18px] text-[clamp(36px,4vw,56px)] leading-[1.04] tracking-[-0.02em] text-cobalt-ink">
                {title} <em className="italic text-cobalt">{titleEmphasis}</em>
              </h1>
              <p className="mt-3 text-[13px] text-ink-soft">
                Last updated: {updated}
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-10 border-t border-[var(--rule)] pt-10">
              {sections.map((s) => (
                <section key={s.id} id={s.id}>
                  <h2 className="mb-4 text-[18px] font-semibold tracking-[-0.01em] text-cobalt-ink">
                    {s.heading}
                  </h2>
                  {s.body.map((p, i) => (
                    <p key={i} className="mb-3 text-[15px] leading-[1.65] text-ink-soft last:mb-0">
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
