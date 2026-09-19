import type { Metadata } from "next";
import { packages } from "@/data/packages";
import { PackageCard } from "@/components/PackageCard";

export const metadata: Metadata = {
  title: "Travel Packages",
  description:
    "Compare visa consultancy, Southeast Asia tours, the Umrah & Turkey trip, and Russia holidays from SK Travels.",
};

export default function PackagesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-dark">
        All packages
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-deep sm:text-5xl">
        Pick a destination, we&apos;ll handle the rest
      </h1>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/65">
        Every package below lists exactly what&apos;s included — visa, hotel,
        transfers or a guided tour — and what still needs to be arranged, like
        air tickets, so there are no surprises when you book.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <PackageCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}
