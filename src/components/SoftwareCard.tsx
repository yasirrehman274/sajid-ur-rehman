import type { SoftwareTool } from "@/types";

/**
 * Tool card. When the tool has a verified project page the whole card is a
 * link; otherwise it renders as plain content (no dead affordance).
 */
export default function SoftwareCard({ tool }: { tool: SoftwareTool }) {
  const interactive = Boolean(tool.url);

  const Wrapper = interactive ? "a" : "div";
  const wrapperProps = interactive
    ? {
        href: tool.url,
        target: "_blank" as const,
        rel: "noopener noreferrer",
        "aria-label": `${tool.name} — project page (opens in a new tab)`,
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={[
        "card-base group flex h-full flex-col p-5 sm:p-6",
        interactive
          ? "cursor-pointer hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_40px_-24px_rgb(11_21_36/0.28)] focus-visible:border-accent"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          aria-hidden="true"
          className="grid size-10 shrink-0 place-items-center rounded-lg border border-accent/15 bg-accent-soft font-mono text-[0.6875rem] font-semibold tracking-tight text-accent"
        >
          {tool.name.slice(0, 2)}
        </span>
        {interactive ? (
          <svg
            viewBox="0 0 16 16"
            className="mt-1 size-3.5 shrink-0 text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="M6 3h7v7M13 3 4 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : null}
      </div>

      <h3 className="mt-4 text-pretty text-[1.0625rem] font-semibold tracking-tight text-foreground">
        {tool.name}
      </h3>

      <p className="mt-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">
        {tool.category}
      </p>

      <p className="mt-3 flex-1 text-pretty text-[0.875rem] leading-relaxed text-muted">
        {tool.description}
      </p>
    </Wrapper>
  );
}
