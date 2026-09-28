import Image from "next/image";

import { education, experience, languages } from "@/data/skills";
import { site } from "@/data/site";
import { resolveProfileImage } from "@/lib/profile-image";

const image = resolveProfileImage();

/** Compact academic profile: portrait (or placeholder) plus key facts. */
export default function ProfileCard() {
  return (
    <aside className="card-base overflow-hidden">
      <div className="relative aspect-16/10 w-full bg-[radial-gradient(130%_130%_at_25%_0%,#175f9c_0%,#0d3f6e_55%,#0a2d4d_100%)]">
        {image ? (
          <Image
            src={image}
            alt={`Portrait of ${site.name}`}
            fill
            sizes="(min-width: 1024px) 22rem, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label="Profile photograph placeholder"
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center"
          >
            <span
              aria-hidden="true"
              className="grid size-14 place-items-center rounded-full border border-white/25 bg-white/10 font-mono text-sm font-semibold tracking-tight text-white"
            >
              SR
            </span>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/60">
              public/images/profile.jpg
            </p>
          </div>
        )}
        <div aria-hidden="true" className="absolute inset-0 rule-grid opacity-30" />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">{site.fullName}</h2>
        <p className="mt-1.5 text-[0.875rem] leading-relaxed text-muted">{site.specialization}</p>

        <dl className="mt-5 space-y-3 border-t border-border-base pt-5 text-[0.8125rem]">
          <div className="flex gap-3">
            <dt className="w-20 shrink-0 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-subtle">
              Based in
            </dt>
            <dd className="text-foreground">{site.location}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-20 shrink-0 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-subtle">
              Degrees
            </dt>
            <dd className="text-foreground">{education.length} qualifications</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-20 shrink-0 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-subtle">
              Positions
            </dt>
            <dd className="text-foreground">{experience.length} academic roles</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-20 shrink-0 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-subtle">
              Languages
            </dt>
            <dd className="text-foreground">{languages.map((l) => l.language).join(", ")}</dd>
          </div>
        </dl>
      </div>
    </aside>
  );
}
