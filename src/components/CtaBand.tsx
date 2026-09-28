import Link from "next/link";

import { site } from "@/data/site";

type CtaBandProps = {
  title?: string;
  description?: string;
  /** Mail address used for the primary call to action. */
  email?: string;
  /** Label for the primary call to action. */
  primaryLabel?: string;
};

/** Reusable collaboration call-to-action band. */
export default function CtaBand({
  title = "Interested in collaboration or research?",
  description = "I welcome academic collaboration, joint supervision and industrial research partnerships on energy conversion and storage materials, photocatalysis and thermoelectrics. Get in touch by email and I will respond as soon as possible.",
  email = site.emails[0].label,
  primaryLabel = "Contact",
}: CtaBandProps) {
  return (
    <section className="section-y border-t border-border-base bg-white" aria-labelledby="cta-title">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-2xl border border-accent/15 bg-[radial-gradient(120%_140%_at_10%_0%,#0f4c81_0%,#0a3760_55%,#082c4c_100%)] px-6 py-12 sm:px-10 sm:py-14 lg:px-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 rule-grid opacity-25 [mask-image:radial-gradient(ellipse_70%_90%_at_20%_10%,#000,transparent)]" />
            <div className="absolute -right-24 -bottom-32 size-96 rounded-full bg-teal/20 blur-3xl" />
          </div>

          <div className="max-w-2xl">
            <h2
              id="cta-title"
              className="text-[clamp(1.5rem,1.1rem+1.6vw,2.25rem)] font-semibold leading-tight tracking-[-0.02em] text-balance text-white"
            >
              {title}
            </h2>
            <p className="mt-4 text-pretty text-[0.9375rem] leading-relaxed text-white/75 sm:text-base">
              {description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-accent-deep transition-colors hover:bg-accent-soft sm:px-6 sm:py-3 sm:text-[0.9375rem]"
              >
                {primaryLabel}
              </a>
              <Link
                href="/cv"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10 sm:px-6 sm:py-3 sm:text-[0.9375rem]"
              >
                View CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
