import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import type { ResearchArea } from "@/types";

type ResearchCardProps = {
  area: ResearchArea;
  /** Renders the larger variant used on the research page. */
  variant?: "compact" | "large";
  /** Hides the "Learn more" link when the card sits on the research page. */
  hideLink?: boolean;
  headingLevel?: "h2" | "h3";
  children?: ReactNode;
};

export default function ResearchCard({
  area,
  variant = "compact",
  hideLink = false,
  headingLevel: Heading = "h3",
  children,
}: ResearchCardProps) {
  const image = area.image ?? null;
  const large = variant === "large";
  const href = `/research#${area.slug}`;

  return (
    <article
      className={[
        "card-base group relative flex h-full flex-col overflow-hidden",
        "hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_18px_40px_-24px_rgb(11_21_36/0.28)]",
        "focus-within:border-accent",
      ].join(" ")}
    >
      {/* Visual area */}
      <div className="relative aspect-16/9 w-full overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes={large ? "(min-width: 1024px) 40rem, 100vw" : "(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          /* Abstract scientific visual: layered gradient + lattice + node graph */
          <div aria-hidden="true" className="absolute inset-0">
            <div
              className={[
                "absolute inset-0",
                large
                  ? "bg-[radial-gradient(120%_120%_at_15%_10%,#0f4c81_0%,#0a3760_45%,#071f38_100%)]"
                  : "bg-[radial-gradient(130%_130%_at_20%_0%,#175f9c_0%,#0d3f6e_50%,#0a2d4d_100%)]",
              ].join(" ")}
            />
            <div className="absolute inset-0 rule-grid opacity-45 [mask-image:linear-gradient(to_bottom_right,#000,transparent_85%)]" />
            <svg
              viewBox="0 0 400 225"
              className="absolute inset-0 size-full text-white/25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              preserveAspectRatio="xMidYMid slice"
            >
              <path d="M40 170 L120 96 L205 140 L290 62 L360 108" />
              <path d="M40 170 L120 96 M205 140 L290 62 M120 96 L290 62" opacity="0.5" />
              {[
                [40, 170],
                [120, 96],
                [205, 140],
                [290, 62],
                [360, 108],
              ].map(([cx, cy]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" fill="currentColor" stroke="none" />
              ))}
              <path d="M0 200 H400" opacity="0.25" />
              <path d="M0 212 H400" opacity="0.15" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-transparent" />
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-white/80">
            {area.topics.length} topics
          </span>
          <span
            aria-hidden="true"
            className="grid size-8 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-white/60 group-hover:bg-white/20"
          >
            <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 13 L13 3 M6 3 h7 v7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      {/* Body */}
      <div className={large ? "flex flex-1 flex-col p-6 sm:p-7" : "flex flex-1 flex-col p-5 sm:p-6"}>
        <Heading
          className={[
            "text-balance font-semibold tracking-tight text-foreground",
            large ? "text-xl sm:text-2xl" : "text-lg",
          ].join(" ")}
        >
          {/* Stretch link: the whole card is clickable, one accessible name. */}
          <Link href={href} className="after:absolute after:inset-0 after:content-['']">
            {area.title}
          </Link>
        </Heading>

        <p
          className={[
            "mt-3 flex-1 text-pretty leading-relaxed text-muted",
            large ? "text-[0.9375rem] sm:text-base" : "text-[0.875rem]",
          ].join(" ")}
        >
          {large ? area.description : area.summary}
        </p>

        {large ? (
          <ul className="mt-5 flex flex-wrap gap-2">
            {area.topics.map((topic) => (
              <li
                key={topic}
                className="rounded-full border border-border-base bg-surface px-2.5 py-1 text-[0.75rem] leading-snug text-muted"
              >
                {topic}
              </li>
            ))}
          </ul>
        ) : null}

        {children}

        {hideLink ? null : (
          <span
            className="mt-5 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-accent"
            aria-hidden="true"
          >
            Learn more
            <svg viewBox="0 0 16 16" className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M2 8h11M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </div>
    </article>
  );
}
