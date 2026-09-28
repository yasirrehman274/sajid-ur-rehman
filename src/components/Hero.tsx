import Image from "next/image";

import ButtonLink from "@/components/ButtonLink";
import { site } from "@/data/site";
import { researchInterests } from "@/data/research";
import { publicationCount } from "@/data/publications";
import { resolveProfileImage } from "@/lib/profile-image";

const profileImage = resolveProfileImage();

/** Abstract lattice motif used behind the hero — pure CSS, no imagery. */
function LatticeBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Fine grid */}
      <div className="absolute inset-0 rule-grid [mask-image:radial-gradient(ellipse_80%_65%_at_70%_35%,#000,transparent)]" />
      {/* Soft academic-blue wash */}
      <div className="absolute -top-1/3 right-[-10%] size-[38rem] rounded-full bg-accent/[0.07] blur-3xl" />
      <div className="absolute bottom-[-20%] left-[-15%] size-[30rem] rounded-full bg-teal/[0.06] blur-3xl" />
      {/* Hexagonal lattice suggestion — evokes 2D materials research */}
      <svg
        className="absolute top-[8%] right-[-4%] hidden h-[26rem] w-[26rem] text-accent/[0.13] lg:block"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      >
        <defs>
          <pattern id="hex" width="26" height="22.5" patternUnits="userSpaceOnUse">
            <path d="M13 0.5 L25.5 7 L25.5 19.5 L13 26 L0.5 19.5 L0.5 7 Z" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#hex)" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-border-base bg-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24"
      aria-labelledby="hero-name"
    >
      <LatticeBackdrop />

      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Text column */}
          <div className="lg:col-span-7">
            <p className="eyebrow animate-rise motion-safe:[animation-delay:60ms]">
              Materials Science &amp; Computational Research
            </p>

            <h1
              id="hero-name"
              className="animate-rise display-title mt-6 text-balance text-foreground motion-safe:[animation-delay:120ms]"
            >
              {site.fullName}
            </h1>

            <p
              className="animate-rise mt-6 text-[1.0625rem] font-medium leading-relaxed text-accent sm:text-lg motion-safe:[animation-delay:200ms]"
            >
              {site.role} <span className="text-border-strong">|</span> {site.discipline}{" "}
              <span className="text-border-strong">|</span> {site.tagline}
            </p>

            <p className="animate-rise lede mt-6 max-w-2xl text-pretty motion-safe:[animation-delay:280ms]">
              I design and characterise materials for clean energy using density-functional
              theory alongside laboratory synthesis. My work spans photocatalysis and
              electrocatalysis, thermoelectric transport, metal-ion batteries and the
              electronic and optical properties of two-dimensional materials.
            </p>

            <div
              className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap motion-safe:[animation-delay:360ms]"
            >
              <ButtonLink href="/research">Explore Research</ButtonLink>
              <ButtonLink href="/publications" variant="secondary">
                View Publications
              </ButtonLink>
              <ButtonLink href="/cv" variant="secondary">
                Download CV
              </ButtonLink>
            </div>

            {/* Research interests */}
            <div
              className="animate-rise mt-12 border-t border-border-base pt-8 motion-safe:[animation-delay:440ms]"
            >
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-subtle">
                Research interests
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2.5">
                {researchInterests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full border border-border-base bg-surface px-3 py-1.5 text-[0.8125rem] leading-snug text-muted"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Portrait / placeholder column */}
          <div className="lg:col-span-5">
            <div className="animate-fade mx-auto w-full max-w-sm motion-safe:[animation-delay:200ms]">
              {profileImage ? (
                <figure className="group relative">
                  <div className="absolute -inset-3 rounded-2xl border border-accent/15" aria-hidden="true" />
                  <Image
                    src={profileImage}
                    alt={`Portrait of ${site.name}`}
                    width={640}
                    height={800}
                    priority
                    sizes="(min-width: 1024px) 24rem, (min-width: 640px) 22rem, 18rem"
                    className="relative aspect-4/5 w-full rounded-xl border border-border-base object-cover shadow-[0_18px_48px_-24px_rgb(11_21_36/0.35)]"
                  />
                  <figcaption className="sr-only">{site.name}</figcaption>
                </figure>
              ) : (
                /* Placeholder: drop a photo at public/images/profile.jpg and it
                   renders automatically. No stock imagery is used. */
                <div className="relative">
                  <div
                    className="relative flex aspect-4/5 w-full flex-col items-center justify-center gap-5 rounded-xl border border-dashed border-border-strong bg-surface px-8 text-center"
                    aria-label="Profile photograph placeholder"
                    role="img"
                  >
                    <span
                      aria-hidden="true"
                      className="grid size-16 place-items-center rounded-full border border-accent/20 bg-accent-soft font-mono text-sm font-semibold tracking-tight text-accent"
                    >
                      SR
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">Profile photograph</p>
                      <p className="mt-2 text-[0.8125rem] leading-relaxed text-subtle">
                        Add <code className="rounded bg-surface-strong px-1.5 py-0.5 font-mono text-[0.75rem]">public/images/profile.jpg</code>{" "}
                        and it appears here automatically.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Credential strip */}
              <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border-base bg-border-base">
                <div className="bg-white px-4 py-4">
                  <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-subtle">
                    Articles
                  </dt>
                  <dd className="mt-1.5 text-xl font-semibold tracking-tight text-foreground">
                    {publicationCount}
                  </dd>
                </div>
                <div className="bg-white px-4 py-4">
                  <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-subtle">
                    Focus
                  </dt>
                  <dd className="mt-1.5 text-sm font-semibold leading-snug tracking-tight text-foreground">
                    Energy materials
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
