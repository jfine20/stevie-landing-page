import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerContent } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--rule)] bg-cream-warm pt-[72px] pb-10">
      <Container>
        {/* Grid */}
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-ink-soft" style={{ maxWidth: "30ch" }}>
              {footerContent.tagline}
            </p>
          </div>

          {/* Link columns */}
          {footerContent.columns.map((col) => (
            <div key={col.heading}>
              <h5 className="mb-[18px] font-sans text-[0.69rem] font-semibold uppercase tracking-[0.22em] text-cobalt">
                {col.heading}
              </h5>
              <ul className="flex flex-col gap-[10px]">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14.5px] text-ink-soft transition-colors hover:text-cobalt"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--rule)] pt-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[12.5px] tracking-[0.04em] text-ink-soft">
              {footerContent.copyright}
            </p>
            <p className="mt-1.5 max-w-[72ch] text-[11px] leading-[1.5] text-ink-soft/75">
              {footerContent.disclosure}
            </p>
          </div>
          <div className="flex gap-[18px] text-[12.5px] text-ink-soft">
            <a href="#" className="hover:text-cobalt transition-colors">Twitter</a>
            <a href="#" className="hover:text-cobalt transition-colors">Instagram</a>
            <a href="#" className="hover:text-cobalt transition-colors">TikTok</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
