import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MapPin, Phone } from "lucide-react";
import { packages, getPackage } from "@/data/packages";
import { unsplash } from "@/data/images";
import { PackageIcon } from "@/components/PackageIcon";
import { PackageCard } from "@/components/PackageCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { site } from "@/data/site";

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return {};
  return {
    title: pkg.title,
    description: pkg.description,
  };
}

export default async function PackageDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) notFound();

  const others = packages.filter((p) => p.slug !== pkg.slug).slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-deep/10 bg-deep-dark text-linen">
        <div className="absolute inset-0">
          <Image
            src={unsplash(pkg.coverPhoto, { w: 1920, h: 900 })}
            alt={pkg.coverAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-dark via-deep-dark/80 to-deep-dark/40" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <Link
            href="/packages"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-linen/70 hover:text-linen"
          >
            <ArrowLeft className="h-4 w-4" />
            All packages
          </Link>
          <Reveal delay={0.1}>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-amber">
              {pkg.heroTag}
            </p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
              {pkg.title}
            </h1>
            <p className="mt-4 max-w-xl text-[17px] text-linen/75">{pkg.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-deep">Overview</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{pkg.description}</p>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.12em] text-amber-dark">
            Itinerary
          </h3>
          <RevealGroup className="mt-4 grid gap-4 sm:grid-cols-2" as="ul">
            {pkg.stops.map((stop) => (
              <RevealItem
                key={stop.city}
                as="li"
                className="overflow-hidden rounded-xl border border-deep/10 bg-white/60"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={unsplash(stop.photo, { w: 800, h: 450 })}
                    alt={stop.alt}
                    fill
                    sizes="(min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex items-start gap-3 p-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-deep" strokeWidth={1.75} />
                  <div>
                    <p className="font-semibold text-deep">
                      {stop.city}, {stop.country}
                    </p>
                    <p className="text-sm text-ink/60">{stop.duration}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.12em] text-amber-dark">
            What&apos;s included
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {pkg.features.map((f) => (
              <li
                key={f.label}
                className="flex items-center gap-3 rounded-xl border border-deep/10 bg-white/60 p-4"
              >
                <PackageIcon icon={f.icon} className="h-5 w-5 shrink-0 text-deep" />
                <span className="text-[15px] text-ink/75">{f.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <aside className="h-fit rounded-2xl border border-deep/10 bg-white/70 p-7">
            {pkg.highlight && (
              <p className="inline-flex items-center rounded-full bg-amber/20 px-3 py-1 text-xs font-semibold text-amber-dark">
                {pkg.highlight}
              </p>
            )}
            <p className="mt-4 text-xs uppercase tracking-[0.1em] text-ink/45">
              {pkg.priceNote}
            </p>
            <p className="mt-1 font-display text-4xl font-semibold text-deep">
              {pkg.price}
            </p>
            {pkg.duration && (
              <p className="mt-2 text-sm text-ink/60">{pkg.duration}</p>
            )}

            <div className="mt-7 flex flex-col gap-3">
              <a
                href={site.whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-5 py-3.5 text-[15px] font-semibold text-linen transition-all hover:-translate-y-0.5 hover:bg-coral-dark hover:shadow-lg hover:shadow-coral/25"
              >
                Enquire on WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-deep/20 px-5 py-3.5 text-[15px] font-semibold text-deep transition-all hover:-translate-y-0.5 hover:border-deep/50"
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} />
                {site.phoneDisplay}
              </a>
            </div>
          </aside>
        </Reveal>
      </section>

      <section className="border-t border-deep/10 bg-linen-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-deep">
              Other packages
            </h2>
          </Reveal>
          <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <RevealItem key={p.slug}>
                <PackageCard pkg={p} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
