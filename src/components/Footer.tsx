import Link from "next/link";

import SocialLinks from "@/components/SocialLinks";
import { footerNav, site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print mt-auto border-t border-border-base bg-surface">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Identity */}
          <div className="md:col-span-5">
            <p className="text-[0.9375rem] font-semibold tracking-tight text-foreground">
              {site.fullName}
            </p>
            <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">
              {site.discipline} | Computational Research
            </p>
            <p className="mt-4 max-w-sm text-pretty text-[0.8125rem] leading-relaxed text-subtle">
              Research on energy conversion and storage materials, photocatalysis,
              electrocatalysis and thermoelectrics, using first-principles computation
              together with laboratory synthesis and characterisation.
            </p>
          </div>

          {/* Quick links */}
          <nav className="md:col-span-3" aria-label="Footer">
            <h2 className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-subtle">
              Quick links
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.875rem] text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-4">
            <h2 className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-subtle">
              Contact
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {site.emails.map((email) => (
                <li key={email.href}>
                  <a
                    href={email.href}
                    className="inline-flex items-center gap-2 text-[0.875rem] text-muted transition-colors hover:text-accent"
                  >
                    <svg viewBox="0 0 16 16" className="size-3.5 shrink-0 text-subtle" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <rect x="1.75" y="3.25" width="12.5" height="9.5" rx="1.75" />
                      <path d="m2.5 4.5 5.5 4 5.5-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {email.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Rendered only when verified profile URLs exist. */}
            <SocialLinks className="mt-5" />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border-base pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.75rem] text-subtle">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-[0.75rem] text-subtle">
            Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
