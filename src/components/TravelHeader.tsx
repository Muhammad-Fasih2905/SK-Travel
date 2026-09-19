"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { site, travelNav } from "@/data/site";

export function TravelHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-deep/10 bg-linen/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/travel" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight text-deep">
            SK
          </span>
          <span className="text-sm font-medium uppercase tracking-[0.18em] text-ink/60">
            Travels
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {travelNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-ink/75 transition-colors hover:text-deep"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-[15px] font-medium text-ink/75 hover:text-deep"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            {site.phoneDisplay}
          </a>
          <Link
            href="/travel/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-linen transition-colors hover:bg-coral-dark"
          >
            Plan my trip
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-deep/15 text-deep md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-deep/10 bg-linen px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {travelNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-ink/80 hover:bg-linen-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={site.phoneHref}
            className="mt-3 flex items-center gap-2 rounded-lg px-3 py-3 text-[15px] font-medium text-ink/80"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            {site.phoneDisplay}
          </a>
          <Link
            href="/travel/contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-coral px-5 py-3 text-sm font-semibold text-linen"
          >
            Plan my trip
          </Link>
        </div>
      )}
    </header>
  );
}
