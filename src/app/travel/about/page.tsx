import type { Metadata } from "next";
import { ShieldCheck, Clock3, ThumbsUp, Users2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SK Travels is the travel arm of SK Associates, handling visa consultancy and holiday packages for travellers across Pakistan.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Expert guidance",
    body: "Every application is reviewed by someone who has worked that specific visa category before.",
  },
  {
    icon: ThumbsUp,
    title: "High success rate",
    body: "We only submit applications once documents meet the standard we know gets approved.",
  },
  {
    icon: Clock3,
    title: "Fast & reliable",
    body: "Appointments booked and paperwork turned around without unnecessary delay.",
  },
  {
    icon: Users2,
    title: "Customer first",
    body: "You get a direct line to the person handling your case — not a call centre queue.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-deep-dark text-linen">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber">
            About SK Travels
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
            Travel planning that doesn&apos;t feel like paperwork
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-linen/75">
            SK Travels is the travel and visa consultancy arm of SK
            Associates. We work with individuals and families applying for
            visitor visas and booking holiday packages, focusing on a small
            number of destinations we know well rather than promising
            everything to everyone.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-3xl font-semibold text-deep">
          What we stand for
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title}>
              <v.icon className="h-6 w-6 text-deep" strokeWidth={1.75} />
              <h3 className="mt-4 text-lg font-semibold text-deep">{v.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-deep/10 bg-linen-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold text-deep">
                One team, two focus areas
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/65">
                SK Associates also runs SK Real Estate, a separate property
                services business. Travel is our current priority, and the
                real estate side is being built out alongside it.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-deep">
                Based in Karachi, working nationwide
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/65">
                Most of our clients reach us by phone or WhatsApp first. We
                keep the process simple: one conversation to scope the trip,
                then regular updates until you&apos;re at the airport.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
