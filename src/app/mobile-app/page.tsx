import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Mobile App — Stevie" };

export default function MobileAppPage() {
  return (
    <>
      <Nav />
      <main className="py-20">
        <Container>
          <div className="mx-auto max-w-[640px] text-center">
            <Eyebrow>Mobile app</Eyebrow>
            <h1 className="mt-[18px] text-[clamp(36px,4vw,56px)] leading-[1.04] tracking-[-0.02em] text-cobalt-ink">
              Stevie in your{" "}
              <em className="italic text-cobalt">pocket.</em>
            </h1>
            <p className="mx-auto mt-5 max-w-[46ch] text-[17px] leading-[1.6] text-ink-soft">
              The iOS and Android apps are in development. Get notified the day they ship.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="https://stevieai.io/sign-in" variant="primary" size="lg">
                Get early access
              </Button>
              <Button href="/contact" variant="ghost" size="lg">
                Contact us
              </Button>
            </div>

            <div className="mx-auto mt-14 max-w-[480px] rounded-[16px] border border-[var(--rule)] bg-paper p-8">
              <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-cobalt">
                What to expect
              </div>
              <ul className="space-y-4 text-left">
                {[
                  "Full concierge chat — plan any trip in plain English",
                  "One-tap booking for hotels and flights",
                  "Live portfolio — watch your shares grow trip by trip",
                  "Instant booking confirmations and itinerary management",
                  "Available on iOS and Android",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px] leading-[1.5] text-ink-soft">
                    <span className="mt-[3px] flex-shrink-0 size-[7px] rounded-full bg-cobalt" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
