"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { mainNav, site } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  // Elevated background once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Lock body scroll and support Escape while the mobile menu is open.
  useEffect(() => {
    if (!open && !closing) return;

    const previousOverflow = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closing]);

  // Move focus into the panel when it opens so keyboard users are not stranded.
  useEffect(() => {
    if (open && panelRef.current) {
      const firstLink = panelRef.current.querySelector<HTMLElement>("a, button");
      firstLink?.focus();
    }
  }, [open]);

  function closeMenu() {
    window.clearTimeout(closeTimer.current);
    if (panelRef.current?.dataset.open === "true") {
      setClosing(true);
      setOpen(false);
      closeTimer.current = window.setTimeout(() => {
        setClosing(false);
      }, 220);
    } else {
      setOpen(false);
      setClosing(false);
    }
  }

  function handleToggle() {
    window.clearTimeout(closeTimer.current);
    if (open || closing) {
      closeMenu();
    } else {
      setClosing(false);
      setOpen(true);
    }
  }

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const solid = scrolled || open || closing;

  return (
    <>
      <header
        className={[
          "no-print fixed inset-x-0 top-0 z-50 transition-all duration-300",
          solid
            ? "border-b border-border-base bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/75"
            : "border-b border-transparent bg-white/0",
        ].join(" ")}
      >
      <div className="container-page">
        <div
          className={[
            "flex items-center justify-between gap-4 transition-all duration-300",
            scrolled ? "h-16" : "h-[4.5rem] sm:h-20",
          ].join(" ")}
        >
          {/* Wordmark */}
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3 rounded-md py-1"
            aria-label={`${site.name} — home`}
          >
            <span
              aria-hidden="true"
              className="grid size-9 shrink-0 place-items-center rounded-md border border-accent/20 bg-accent-soft font-mono text-[0.7rem] font-semibold tracking-tight text-accent"
            >
              SR
            </span>
            <span className="flex min-w-0 flex-col leading-none">
              <span className="truncate text-[0.9375rem] font-semibold tracking-tight text-foreground">
                Sajid Ur Rehman
              </span>
              <span className="mt-1 hidden truncate font-mono text-[0.625rem] uppercase tracking-[0.16em] text-subtle sm:block">
                Materials Science
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              const isCv = item.href === "/cv";
              if (isCv) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "ml-2 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-accent text-white"
                        : "border border-accent/25 text-accent hover:border-accent hover:bg-accent-soft",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "relative rounded-md px-3 py-2 text-sm transition-colors",
                    active
                      ? "font-medium text-accent"
                      : "text-muted hover:text-foreground",
                  ].join(" ")}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={[
                      "absolute inset-x-3 -bottom-0.5 h-px origin-left transition-transform duration-300",
                      active ? "scale-x-100 bg-accent" : "scale-x-0 bg-accent",
                    ].join(" ")}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            type="button"
            onClick={handleToggle}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close main menu" : "Open main menu"}
            className="grid size-10 shrink-0 place-items-center rounded-md border border-border-base text-foreground transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            <span aria-hidden="true" className="relative block h-3.5 w-5">
              <span
                className={[
                  "absolute left-0 block h-px w-5 bg-current transition-all duration-300",
                  open ? "top-1.5 rotate-45" : "top-0",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-1.5 block h-px w-5 bg-current transition-all duration-200",
                  open || closing ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 block h-px w-5 bg-current transition-all duration-300",
                  open ? "top-1.5 -rotate-45" : "top-3",
                ].join(" ")}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      <div
        id="mobile-navigation"
        ref={panelRef}
        data-open={open ? "true" : "false"}
        hidden={!open && !closing}
        className={[
          "border-t border-border-base bg-white lg:hidden",
          closing ? "motion-safe:animate-fade" : "",
        ].join(" ")}
      >
        <nav
          className="container-page max-h-[calc(100dvh-4rem)] overflow-y-auto py-4"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href} className="border-b border-border-base last:border-b-0">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "flex items-center justify-between gap-3 py-3.5 text-[0.9375rem] transition-colors",
                      active ? "font-medium text-accent" : "text-foreground hover:text-accent",
                    ].join(" ")}
                  >
                    <span>{item.label}</span>
                    {item.href === "/cv" ? (
                      <span
                        aria-hidden="true"
                        className="rounded-full border border-accent/25 px-2.5 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-accent"
                      >
                        PDF
                      </span>
                    ) : null}
                    {active ? (
                      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>

          <a
            href={site.emails[0].href}
            onClick={closeMenu}
            className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-border-strong px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {site.emails[0].label}
          </a>
        </nav>
      </div>
      </header>

      {/* Click-catcher behind the mobile panel. */}
      {open ? (
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={closeMenu}
          className="no-print fixed inset-0 z-40 cursor-default bg-foreground/20 motion-safe:animate-fade lg:hidden"
        />
      ) : null}
    </>
  );
}
