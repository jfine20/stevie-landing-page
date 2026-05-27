import { LegalPage } from "@/components/layout/LegalPage";
import { rewardsTermsContent } from "@/lib/content";

export const metadata = { title: "Rewards Terms — Stevie" };

export default function RewardsTermsPage() {
  return (
    <LegalPage
      eyebrow={rewardsTermsContent.eyebrow}
      title={rewardsTermsContent.title}
      titleEmphasis={rewardsTermsContent.titleEmphasis}
      updated={rewardsTermsContent.updated}
      sections={rewardsTermsContent.sections}
    />
  );
}
