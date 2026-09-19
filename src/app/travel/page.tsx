import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Compass,
  ShieldCheck,
  Clock,
  ThumbsUp,
  Phone,
} from "lucide-react";
import { packages } from "@/data/packages";
import { articles } from "@/data/articles";
import { destinationPhotos, unsplash } from "@/data/images";
import { PackageCard } from "@/components/PackageCard";
import { ArticleCard } from "@/components/ArticleCard";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "SK Travels | Visa Consultancy & Holiday Packages",
  description:
    "Visa consultancy for Canada and New Zealand, plus holiday packages to Southeast Asia, Russia and the Umrah & Turkey trip. Book with SK Travels.",
};

const stats = [
  { icon: ShieldCheck, label: "Expert guidance", value: "Visa specialists" },
  { icon: ThumbsUp, label: "Success rate", value: "High approval track record" },
  { icon: Clock, label: "Turnaround", value: "Fast & reliable service" },
  { icon: Compass, label: "Coverage", value: "5 destinations, growing" },
];

export default function TravelHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-deep text-linen">
        <div className="absolute inset-0">
          <Image
            src={unsplash(destinationPhotos.bali, { w: 1920, h: 1080 })}
            alt="Cliffside temple at Uluwatu, Bali, at golden hour"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/85 to-deep/60" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            SK Travels
          </p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.08] sm:text-6xl">
            Your visa handled, your holiday planned — one call away.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-linen/75">
            From Canada visitor visas to a three-country Southeast Asia
            itinerary, we prepare the paperwork, book the appointments, and
            plan the trip so you can focus on packing.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/travel/packages"
              className="group inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-[15px] font-semibold text-linen transition-colors hover:bg-coral-dark"
            >
              Browse packages
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-linen/25 px-6 py-3.5 text-[15px] font-semibold text-linen hover:border-linen/60"
            >
              <Phone className="h-4 w-4" strokeWidth={1.75} />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-deep/10 bg-linen-2">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 sm:px-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-start gap-3">
              <s.icon className="mt-0.5 h-5 w-5 shrink-0 text-deep" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-semibold text-deep">{s.label}</p>
                <p className="text-sm text-ink/60">{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-dark">
              Where to next
            </p>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold text-deep sm:text-4xl">
              Current packages
            </h2>
          </div>
          <Link
            href="/travel/packages"
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-deep hover:text-coral"
          >
            See all packages
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-deep-dark text-linen">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber">
            How it works
          </p>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold sm:text-4xl">
            Three conversations, one trip
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {[
              {
                title: "Tell us the trip",
                body: "Share your destination, timeline and budget — we&apos;ll tell you exactly what&apos;s included and what isn't.",
              },
              {
                title: "We handle the paperwork",
                body: "Documents, appointments and interview preparation are managed for you, start to finish.",
              },
              {
                title: "You travel, we stay on call",
                body: "Tickets, hotels and visas confirmed before departure, with support if plans change.",
              },
            ].map((step, i) => (
              <div key={step.title} className="border-t border-linen/15 pt-6">
                <p className="font-display text-sm text-amber">0{i + 1}</p>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-linen/70">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-dark">
              From the blog
            </p>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold text-deep sm:text-4xl">
              Latest articles
            </h2>
          </div>
          <Link
            href="/travel/articles"
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-deep hover:text-coral"
          >
            See all articles
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles
            .slice()
            .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
            .slice(0, 3)
            .map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-amber/15 px-8 py-12 sm:flex-row sm:items-center sm:px-12">
          <div>
            <h2 className="max-w-md font-display text-3xl font-semibold text-deep">
              Not sure which package fits your trip?
            </h2>
            <p className="mt-3 max-w-md text-[15px] text-ink/65">
              Send us your dates and destination on WhatsApp and we&apos;ll put together a quote the same day.
            </p>
          </div>
          <a
            href={site.whatsappHref}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-deep px-6 py-3.5 text-[15px] font-semibold text-linen hover:bg-deep-dark"
          >
            Message us on WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
