import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "For Business — Stevie" };

const perks = [
  {
    heading: "One platform, every trip.",
    body: "Book hotels and flights for your whole team in one place. No expense reports chasing down receipts from six different sites.",
  },
  {
    heading: "Every trip earns equity.",
    body: "Every company booking earns cash-back rewards for your employees or your company account — the reward that doesn't expire.",
  },
  {
    heading: "Concierge on call.",
    body: "Conference in three cities next month? Tell Stevie once. It handles the logistics so your team focuses on the work.",
  },
  {
    heading: "Consolidated billing.",
    body: "One invoice, one card, one monthly summary. Fully itemized by traveler and trip for easy accounting.",
  },
];

export default function ForBusinessPage() {
  return (
    <>
      <Nav />
      <main className="py-20">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <Eyebrow>For business</Eyebrow>
            <h1 className="mt-[18px] text-[clamp(36px,4vw,56px)] leading-[1.04] tracking-[-0.02em] text-cobalt-ink">
              Corporate travel{" "}
              <em className="italic text-cobalt">that pays you back.</em>
            </h1>
            <p className="mt-5 max-w-[50ch] text-[17px] leading-[1.6] text-ink-soft">
              Stevie for teams brings the concierge and the equity rewards to your whole company. Coming in late 2026.
            </p>
            <div className="mt-8">
              <Button href="mailto:dev@stevieai.io" variant="primary" size="lg">
                Request early access
              </Button>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {perks.map((p) => (
                <div
                  key={p.heading}
                  className="rounded-[12px] border border-[var(--rule)] bg-paper p-7"
                >
                  <h2 className="mb-2 text-[17px] font-semibold leading-[1.2] text-cobalt-ink">
                    {p.heading}
                  </h2>
                  <p className="text-[14px] leading-[1.6] text-ink-soft">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
