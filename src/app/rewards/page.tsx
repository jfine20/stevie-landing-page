import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Rewards — Stevie" };

const stats = [
  { k: "35%", v: "of our margin, every booking" },
  { k: "VOO · SPY", v: "fractional S&P 500, in your name" },
  { k: "$0", v: "no fees, no minimums" },
  { k: "Alpaca", v: "SEC-registered broker-dealer" },
];

const howItWorks = [
  {
    number: "01",
    title: "Book through Stevie.",
    body: "Stevie earns a commission on every hotel or flight. That's how we make money — same model travel agents have used for sixty years.",
  },
  {
    number: "02",
    title: "35% comes back to you.",
    body: "On every booking, we allocate 35% of our margin to your brokerage account as fractional VOO or SPY — S&P 500 index funds.",
  },
  {
    number: "03",
    title: "Your shares grow.",
    body: "The account is held in your name through Alpaca Securities LLC. Transfer out, sell, or hold as long as you like. Nobody can devalue or expire them.",
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
                Points expire.{" "}
                <em className="italic text-cobalt">Shares don't.</em>
              </h1>
              <p className="mx-auto mt-5 max-w-[52ch] text-[17px] leading-[1.6] text-ink-soft">
                Every Stevie booking puts a real asset in your name — something that compounds while you're not looking, and that nobody can take back.
              </p>
              <div className="mt-8">
                <Button href="https://stevieai.io/sign-in" variant="primary" size="lg">
                  Get early access
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

        {/* Disclosure */}
        <section className="pb-16">
          <Container>
            <p className="mx-auto max-w-[640px] text-center text-[12px] leading-[1.6] text-ink-soft/70">
              Securities are offered through Alpaca Securities LLC, member FINRA/SIPC. Stevie AI LLC is not a broker-dealer.
              Investing involves risk, including loss of principal. Past performance is not indicative of future results.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
