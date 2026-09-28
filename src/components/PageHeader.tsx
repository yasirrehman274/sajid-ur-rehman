type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  /** Optional trailing element, e.g. a download button. */
  action?: React.ReactNode;
};

/** Consistent page-level header for every route except the home page. */
export default function PageHeader({ eyebrow, title, description, action }: PageHeaderProps) {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-border-base bg-surface pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20"
      aria-labelledby="page-title"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 rule-grid [mask-image:radial-gradient(ellipse_70%_80%_at_80%_20%,#000,transparent)]" />
        <div className="absolute -top-1/2 right-[-8%] size-[30rem] rounded-full bg-accent/[0.06] blur-3xl" />
      </div>

      <div className="container-page">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow animate-rise motion-safe:[animation-delay:40ms]">{eyebrow}</p>
            <h1
              id="page-title"
              className="animate-rise mt-4 text-[clamp(2rem,1.2rem+3.4vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-balance text-foreground motion-safe:[animation-delay:100ms]"
            >
              {title}
            </h1>
            {description ? (
              <p className="animate-rise lede mt-5 max-w-2xl text-pretty motion-safe:[animation-delay:160ms]">
                {description}
              </p>
            ) : null}
          </div>
          {action ? (
            <div className="animate-rise shrink-0 motion-safe:[animation-delay:220ms]">{action}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
