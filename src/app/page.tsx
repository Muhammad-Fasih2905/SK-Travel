import type { Metadata } from "next";
import Link from "next/link";
import { Plane, Home as HomeIcon, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "SK Associates",
  description:
    "SK Associates is home to SK Travels and SK Real Estate. Choose a service to get started.",
};

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-deep text-linen">
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-16 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber">
          SK Associates
        </p>
        <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Two services, one trusted name.
        </h1>
        <p className="mt-4 max-w-lg text-[17px] text-linen/70">
          Choose where you&apos;d like to go — travel and visa consultancy, or
          property services.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Link
            href="/travel"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-linen/15 bg-linen/5 p-8 transition-colors hover:border-amber/60 hover:bg-linen/10 sm:p-10"
          >
            <div>
              <Plane className="h-8 w-8 text-amber" strokeWidth={1.5} />
              <h2 className="mt-6 font-display text-2xl font-semibold sm:text-3xl">
                SK Travels
              </h2>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-linen/65">
                Visa consultancy and holiday packages — Canada, New Zealand,
                Southeast Asia, Russia and Umrah & Turkey.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-semibold text-amber">
              Explore travel
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>

          <Link
            href="/real-estate"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-linen/15 bg-linen/5 p-8 transition-colors hover:border-amber/60 hover:bg-linen/10 sm:p-10"
          >
            <div>
              <HomeIcon className="h-8 w-8 text-amber" strokeWidth={1.5} />
              <h2 className="mt-6 font-display text-2xl font-semibold sm:text-3xl">
                SK Real Estate
              </h2>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-linen/65">
                Property services. Full site coming soon — get in touch to
                speak with the team today.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-semibold text-amber">
              Explore real estate
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
