import { LegalPage } from "@/components/layout/LegalPage";
import { cookiesContent } from "@/lib/content";

export const metadata = { title: "Cookie Policy — Stevie" };

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow={cookiesContent.eyebrow}
      title={cookiesContent.title}
      titleEmphasis={cookiesContent.titleEmphasis}
      updated={cookiesContent.updated}
      sections={cookiesContent.sections}
    />
  );
}
