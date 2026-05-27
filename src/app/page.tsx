import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { TryIt } from "@/components/sections/TryIt";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { RewardsTeaser } from "@/components/sections/RewardsTeaser";
import { Portfolio } from "@/components/sections/Portfolio";
import { FAQ } from "@/components/sections/FAQ";
import { Dispatch } from "@/components/sections/Dispatch";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <TryIt />
        <HowItWorks />
        <Features />
        <RewardsTeaser />
        <Portfolio />
        <FAQ />
        <Dispatch />
      </main>
      <Footer />
    </>
  );
}
