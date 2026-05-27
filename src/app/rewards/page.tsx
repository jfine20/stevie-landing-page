import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Rewards — Stevie" };

const stats = [
  { k: "4¢", v: "per dollar, every booking" },
  { k: "0", v: "blackout dates, ever" },
  { k: "Cash", v: "redeemable, not points" },
  { k: "$0", v: "no fees, no minimums" },
];

const howItWorks = [
  {
    number: "01",
    title: "Book through Stevie.",
    body: "Stevie earns a commission on every hotel or flight. That's how we make money — same model travel agents have used for sixty years.",
  },
  {
    number: "02",
    title: "You earn credit.",
    body: "On every booking, you earn credit at a flat 4¢-per-dollar rate. No tiers, no blackout dates, no expiration.",
  },
  {
    number: "03",
    title: "Cash it out.",
    body: "Redeem your balance toward your next Stevie booking, or transfer it straight to your bank. Your choice, your timing.",
  },
];

export default function RewardsPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="pb-14 pt-20">
          <Container>
            <div className="mx-auto max-w-[760px] text-center">
              <Eyebrow>Rewards</Eyebrow>
              <h1 className="mt-[18px] text-[clamp(36px,4.5vw,64px)] leading-[1.03] tracking-[-0.02em] text-cobalt-ink">
                Points that{" "}
                <em className="italic text-cobalt">actually pay you back.</em>
              </h1>
              <p className="mx-auto mt-5 max-w-[52ch] text-[17px] leading-[1.6] text-ink-soft">
                Forget watching your miles depreciate. Every Stevie booking earns credit at a flat 4¢-per-dollar rate — redeemable as cash, not coupons.
              </p>
              <div className="mt-8">
                <Button href="#book" variant="primary" size="lg">
                  Book a Trip
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Stats */}
        <section className="border-y border-[var(--rule)] py-10">
          <Container>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.k} className="text-center">
                  <div className="font-display text-[32px] leading-none text-cobalt-ink">{s.k}</div>
                  <div className="mt-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft">{s.v}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* How it works */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-[740px]">
              <h2 className="mb-10 text-[clamp(26px,2.8vw,36px)] leading-[1.1] tracking-[-0.015em] text-cobalt-ink">
                How it works
              </h2>
              <div className="grid gap-8 sm:grid-cols-3">
                {howItWorks.map((step) => (
                  <div key={step.number} className="flex flex-col gap-3">
                    <span className="font-display text-[44px] leading-[0.9] text-cobalt">{step.number}</span>
                    <h3 className="text-[18px] font-medium leading-[1.2] text-cobalt-ink">{step.title}</h3>
                    <p className="text-[14px] leading-[1.55] text-ink-soft">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
