import type { Metadata } from "next";
import Link from "next/link";
import { Home as HomeIcon, ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "SK Real Estate",
  description:
    "SK Real Estate is being built out. Contact SK Associates directly for property enquiries.",
};

export default function RealEstatePage() {
  return (
    <main className="flex min-h-screen flex-col bg-linen">
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-start justify-center px-6 py-20 sm:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/60 hover:text-deep"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to SK Associates
        </Link>

        <HomeIcon className="mt-10 h-9 w-9 text-deep" strokeWidth={1.5} />
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-amber-dark">
          SK Real Estate
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-deep sm:text-5xl">
          The full site is on its way.
        </h1>
        <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-ink/65">
          We&apos;re focused on building out SK Travels first. In the meantime,
          reach the team directly for buying, selling or renting enquiries.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-deep px-6 py-3.5 text-[15px] font-semibold text-linen hover:bg-deep-dark"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            {site.phoneDisplay}
          </a>
          <a
            href={site.whatsappHref}
            className="inline-flex items-center gap-2 rounded-full border border-deep/20 px-6 py-3.5 text-[15px] font-semibold text-deep hover:border-deep/50"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
            WhatsApp us
          </a>
        </div>
      </div>
    </main>
  );
}
