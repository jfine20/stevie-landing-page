import { LegalPage } from "@/components/layout/LegalPage";
import { privacyContent } from "@/lib/content";

export const metadata = { title: "Privacy Policy — Stevie" };

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow={privacyContent.eyebrow}
      title={privacyContent.title}
      titleEmphasis={privacyContent.titleEmphasis}
      updated={privacyContent.updated}
      sections={privacyContent.sections}
    />
  );
}
