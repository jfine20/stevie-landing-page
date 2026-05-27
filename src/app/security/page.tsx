import { LegalPage } from "@/components/layout/LegalPage";
import { securityContent } from "@/lib/content";

export const metadata = { title: "Security — Stevie" };

export default function SecurityPage() {
  return (
    <LegalPage
      eyebrow={securityContent.eyebrow}
      title={securityContent.title}
      titleEmphasis={securityContent.titleEmphasis}
      updated={securityContent.updated}
      sections={securityContent.sections}
    />
  );
}
