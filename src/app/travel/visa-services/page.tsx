import type { Metadata } from "next";
import { ArrowUpRight, FileCheck2, CalendarClock, MessagesSquare, BadgeCheck } from "lucide-react";
import { packages } from "@/data/packages";
import { PackageCard } from "@/components/PackageCard";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Visa Services",
  description:
    "Canada and New Zealand visa consultancy — document preparation, appointment booking and interview coaching from SK Travels.",
};

const visaPackages = packages.filter((p) => p.category === "visa");

const process = [
  {
    icon: FileCheck2,
    title: "Document review",
    body: "We check your paperwork against the latest requirements before anything is submitted.",
  },
  {
    icon: CalendarClock,
    title: "Appointment booking",
    body: "Biometric and interview slots booked on your behalf, at the earliest available date.",
  },
  {
    icon: MessagesSquare,
    title: "Interview preparation",
    body: "A run-through of likely questions so you know what to expect on the day.",
  },
  {
    icon: BadgeCheck,
    title: "Decision support",
    body: "We stay reachable after submission and help with any follow-up requests.",
  },
];

export default function VisaServicesPage() {
  return (
    <div>
      <section className="bg-deep-dark text-linen">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber">
            Visa Services
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
            Visa applications, handled properly
          </h1>
          <p className="mt-4 max-w-xl text-[17px] text-linen/75">
            We currently support Canada visitor visas and New Zealand visas,
            with the same document-to-interview process behind both.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {visaPackages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} featured />
          ))}
        </div>
      </section>

      <section className="border-t border-deep/10 bg-linen-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl font-semibold text-deep">Our process</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div key={step.title}>
                <step.icon className="h-6 w-6 text-deep" strokeWidth={1.75} />
                <h3 className="mt-4 text-lg font-semibold text-deep">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-deep px-8 py-10 text-linen sm:flex-row sm:items-center sm:px-10">
          <div>
            <h2 className="font-display text-2xl font-semibold">
              Applying for a different country?
            </h2>
            <p className="mt-2 max-w-md text-[15px] text-linen/70">
              Tell us where you&apos;re headed — we&apos;ll let you know if we can take it on.
            </p>
          </div>
          <a
            href={site.whatsappHref}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-[15px] font-semibold text-linen hover:bg-coral-dark"
          >
            Ask on WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
