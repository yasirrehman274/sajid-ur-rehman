import Link from "next/link";

import { mainNav } from "@/data/site";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-white pt-28 pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 rule-grid [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,#000,transparent)]" />
        <div className="absolute -top-1/3 right-[-10%] size-[30rem] rounded-full bg-accent/[0.06] blur-3xl" />
      </div>

      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-4 text-[clamp(2rem,1.2rem+3.4vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-balance text-foreground">
            This page could not be found
          </h1>
          <p className="lede mt-5 text-pretty">
            The page you requested does not exist on this site. Use the links below, or head
            back to the home page.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep sm:px-6 sm:py-3 sm:text-[0.9375rem]"
            >
              Back to home
            </Link>
            <Link
              href="/publications"
              className="inline-flex items-center justify-center rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent sm:px-6 sm:py-3 sm:text-[0.9375rem]"
            >
              Browse publications
            </Link>
          </div>

          <nav aria-label="Site sections" className="mt-12 border-t border-border-base pt-8">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {mainNav.map((item) => (
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
        </div>
      </div>
    </section>
  );
}
