"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { site, travelNav } from "@/data/site";
import HeaderLogo from "@/assets/logo.svg";

/**
 * Logo lockup: the SK Travels mark paired with a two-line wordmark.
 */
function Logo() {
  return (
    <Link href="/" className="group flex shrink-0 items-center gap-3">
      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl shadow-[0_6px_16px_-6px_rgba(10,43,44,0.45)] transition-transform duration-300 ease-out group-hover:scale-[1.04] sm:h-16 sm:w-16">
        <Image src={HeaderLogo} alt="SK Travels" fill priority className="object-contain" />
      </span>
      <span className="flex flex-col justify-center leading-none">
        <span className="font-heading whitespace-nowrap text-xl font-semibold tracking-tight text-deep sm:text-2xl">
          SK
          <span className="ml-1 bg-gradient-to-r from-amber-dark to-coral bg-clip-text text-transparent">
            Travels
          </span>
        </span>
        <span className="mt-1.5 hidden whitespace-nowrap text-[11px] font-medium tracking-[0.18em] text-ink/40 sm:block">
          VISA &amp; HOLIDAY SPECIALISTS
        </span>
      </span>
    </Link>
  );
}

function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {travelNav.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className="font-heading group/link relative whitespace-nowrap px-4 py-2.5 text-[15px] font-medium text-ink/65 transition-colors duration-200 hover:text-deep"
          >
            {item.label}
            <span
              className={`absolute inset-x-4 -bottom-[3px] h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-amber-dark to-coral transition-transform duration-200 ease-out group-hover/link:scale-x-100 ${isActive ? "scale-x-100" : ""
                }`}
            />
            {isActive && (
              <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-deep/[0.04]" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export function TravelHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "border-b border-deep/10 bg-linen/90 shadow-[0_10px_30px_-20px_rgba(10,43,44,0.5)] backdrop-blur-xl"
        : "border-b border-transparent bg-linen/70 backdrop-blur-md"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden shrink-0 items-center rounded-full border border-deep/8 bg-white/60 px-1.5 py-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6)] lg:flex">
          <NavLinks />
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 whitespace-nowrap rounded-full border border-deep/12 px-4 py-3 text-[14px] font-medium text-ink/75 transition-colors duration-200 hover:border-deep/25 hover:text-deep md:flex"
          >
            <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} />
            {site.phoneDisplay}
          </a>

          <span className="hidden h-8 w-px bg-deep/10 md:block" />

          <Link
            href="/contact"
            className="font-heading hidden items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-coral to-coral-dark px-5 py-3 text-sm font-semibold text-linen shadow-[0_8px_18px_-6px_rgba(228,87,46,0.55)] transition-[filter,transform] duration-200 hover:brightness-105 active:scale-[0.98] sm:flex"
          >
            Plan my trip
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Link>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-deep/15 text-deep transition-colors duration-200 hover:bg-deep/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep lg:hidden"
          >
            <span className="relative flex h-5 w-5 items-center justify-center">
              <Menu
                className={`absolute h-5 w-5 transition-all duration-200 ${open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
              />
              <X
                className={`absolute h-5 w-5 transition-all duration-200 ${open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* overlay */}
      <button
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-deep-dark/40 transition-opacity duration-300 lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
      />

      {/* mobile drawer */}
      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-[69px] z-50 origin-top border-t border-deep/10 bg-linen shadow-lg transition-[transform,opacity] duration-300 ease-out lg:hidden ${open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
          }`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-2 pt-3 sm:px-6">
          {travelNav.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`font-heading rounded-lg px-3 py-3 text-[15px] font-medium transition-colors duration-200 ${isActive ? "bg-deep/8 text-deep" : "text-ink/80 hover:bg-linen-2"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-col gap-2 border-t border-deep/10 px-4 pb-5 pt-3 sm:px-6">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-lg px-3 py-3 text-[15px] font-medium text-ink/80"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            {site.phoneDisplay}
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="font-heading flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-coral to-coral-dark px-5 py-3 text-sm font-semibold text-linen active:scale-[0.98]"
          >
            Plan my trip
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </header>
  );
}