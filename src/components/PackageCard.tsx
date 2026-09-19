import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { TravelPackage } from "@/data/packages";
import { unsplash } from "@/data/images";
import { PackageIcon } from "./PackageIcon";

const categoryLabel: Record<TravelPackage["category"], string> = {
  visa: "Visa Service",
  tour: "Tour Package",
  religious: "Religious & Holiday",
};

export function PackageCard({ pkg, featured = false }: { pkg: TravelPackage; featured?: boolean }) {
  return (
    <Link
      href={`/travel/packages/${pkg.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-deep/10 bg-white/70 transition-all hover:-translate-y-1 hover:border-amber/60 hover:shadow-[0_18px_40px_-24px_rgba(15,61,62,0.35)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-linen-2">
        <Image
          src={unsplash(pkg.coverPhoto, { w: 900, h: 560 })}
          alt={pkg.coverAlt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-deep-dark/80 px-3 py-1 text-xs font-semibold text-linen backdrop-blur">
          {categoryLabel[pkg.category]}
        </span>
      </div>

      <div className={`flex flex-1 flex-col justify-between p-6 ${featured ? "sm:p-8" : ""}`}>
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className={`font-display font-semibold text-deep ${featured ? "text-2xl" : "text-xl"}`}>
              {pkg.title}
            </h3>
            <ArrowUpRight
              className="mt-1 h-5 w-5 shrink-0 text-ink/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-deep"
              strokeWidth={1.75}
            />
          </div>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{pkg.subtitle}</p>

          <ul className="mt-5 space-y-2">
            {pkg.stops.slice(0, 3).map((stop) => (
              <li key={stop.city} className="flex items-center gap-2 text-sm text-ink/70">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-deep/50" strokeWidth={1.75} />
                <span>
                  {stop.city}
                  <span className="text-ink/40"> · {stop.duration}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {pkg.features.slice(0, 4).map((f) => (
              <span
                key={f.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-linen-2 px-3 py-1.5 text-xs font-medium text-ink/70"
              >
                <PackageIcon icon={f.icon} className="h-3.5 w-3.5 text-deep" />
                {f.label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-end justify-between border-t border-deep/10 pt-5">
          <div>
            <p className="text-xs uppercase tracking-[0.1em] text-ink/45">{pkg.priceNote}</p>
            <p className="font-display text-2xl font-semibold text-deep">{pkg.price}</p>
          </div>
          <span className="text-sm font-semibold text-coral">View details</span>
        </div>
      </div>
    </Link>
  );
}
