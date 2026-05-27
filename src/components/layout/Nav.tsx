import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { nav } from "@/lib/content";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--rule)] bg-cream/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <ul className="hidden items-center gap-9 md:flex" aria-label="Primary navigation">
          {nav.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-cobalt"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button href={nav.cta.href} variant="primary" size="md" external>
          {nav.cta.label} <ArrowIcon />
        </Button>
      </Container>
    </nav>
  );
}
