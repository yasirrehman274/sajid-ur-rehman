import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  /** Renders for external destinations (target/rel). */
  external?: boolean;
  "aria-label"?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 sm:px-6 sm:py-3 sm:text-[0.9375rem]";

const variants = {
  primary:
    "bg-accent text-white shadow-[0_1px_2px_rgb(11_21_36/0.12)] hover:bg-accent-deep hover:shadow-[0_6px_18px_-8px_rgb(15_76_129/0.55)] active:translate-y-px",
  secondary:
    "border border-border-strong bg-white text-foreground hover:border-accent hover:text-accent hover:bg-accent-soft/60 active:translate-y-px",
  ghost: "text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent",
} as const;

/** Primary navigation / call-to-action link. */
export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  ...rest
}: ButtonLinkProps) {
  const classes = [base, variants[variant], className].filter(Boolean).join(" ");

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
