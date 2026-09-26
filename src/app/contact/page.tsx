import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SK Travels by phone, WhatsApp or email to plan your visa application or holiday package.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-deep-dark text-linen">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber">
            Contact
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
            Let&apos;s plan your trip
          </h1>
          <p className="mt-4 max-w-xl text-[17px] text-linen/75">
            Fastest response is by phone or WhatsApp. The form is here for
            anything you&apos;d rather write out in full.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-5">
          <div className="flex items-start gap-3 rounded-xl border border-deep/10 bg-white/60 p-5">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-deep" strokeWidth={1.75} />
            <div>
              <p className="font-semibold text-deep">Call us</p>
              <a href={site.phoneHref} className="text-[15px] text-ink/65 hover:text-deep">
                {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-deep/10 bg-white/60 p-5">
            <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-deep" strokeWidth={1.75} />
            <div>
              <p className="font-semibold text-deep">WhatsApp</p>
              <a href={site.whatsappHref} className="text-[15px] text-ink/65 hover:text-deep">
                Message us directly
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-deep/10 bg-white/60 p-5">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-deep" strokeWidth={1.75} />
            <div>
              <p className="font-semibold text-deep">Email</p>
              <a href={`mailto:${site.email}`} className="text-[15px] text-ink/65 hover:text-deep">
                {site.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-deep/10 bg-white/60 p-5">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-deep" strokeWidth={1.75} />
            <div>
              <p className="font-semibold text-deep">Office</p>
              <p className="text-[15px] text-ink/65">{site.address}</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}
