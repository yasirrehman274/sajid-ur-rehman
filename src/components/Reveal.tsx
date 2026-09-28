"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger offset in milliseconds. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Lightweight scroll-reveal wrapper.
 *
 * A single shared IntersectionObserver handles every instance on the page, so
 * the cost is one observer rather than one per element. Content is revealed
 * unconditionally if JavaScript never runs, and `prefers-reduced-motion` is
 * handled entirely in CSS (`.reveal` collapses to a visible, static state).
 */
let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined") return null;
  if (observer) return observer;
  if (!("IntersectionObserver" in window)) return null;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer?.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
  );
  return observer;
}

export default function Reveal({ children, delay = 0, className, as }: RevealProps) {
  const Component = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      node.classList.add("is-visible");
      return;
    }

    const obs = getObserver();
    if (!obs) {
      node.classList.add("is-visible");
      return;
    }

    node.classList.add("reveal");
    if (delay) node.style.transitionDelay = `${delay}ms`;
    obs.observe(node);

    // Safety net: if the observer never fires (e.g. the element is already in
    // view on a very short page), reveal it rather than leave it hidden.
    const timer = window.setTimeout(() => node.classList.add("is-visible"), 1200);
    return () => window.clearTimeout(timer);
  }, [delay]);

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
