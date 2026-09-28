type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  /** Optional supporting paragraph below the title. */
  description?: string;
  /** Optional trailing element, e.g. a link or button. */
  action?: React.ReactNode;
  align?: "left" | "center";
  /** Heading level for correct document outline. Defaults to h2. */
  as?: "h1" | "h2" | "h3";
  /** Id applied to the heading so a section can reference it. */
  id?: string;
  className?: string;
};

/**
 * Consistent section header used across every page.
 * Renders a real heading so the document outline stays semantic.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  as: Tag = "h2",
  id,
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <header
      className={[
        "flex flex-col gap-5",
        centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={centered ? "max-w-2xl" : "max-w-2xl"}>
        {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
        <Tag id={id} className="section-title text-balance text-foreground">
          {title}
        </Tag>
        {description ? (
          <p className="lede mt-4 text-pretty">{description}</p>
        ) : null}
      </div>
      {action ? <div className={centered ? "mt-2" : "md:pb-1"}>{action}</div> : null}
    </header>
  );
}
