import { LegalPage } from "@/components/layout/LegalPage";
import { termsContent } from "@/lib/content";

export const metadata = { title: "Terms of Service — Stevie" };

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow={termsContent.eyebrow}
      title={termsContent.title}
      titleEmphasis={termsContent.titleEmphasis}
      updated={termsContent.updated}
      sections={termsContent.sections}
    />
  );
}
