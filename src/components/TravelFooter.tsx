import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { site, travelNav } from "@/data/site";

export function TravelFooter() {
  return (
    <footer className="border-t border-deep/10 bg-deep text-linen">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold text-linen">SK</span>
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-linen/60">
              Travels
            </span>
          </div>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-linen/70">
            Visa consultancy and holiday packages for travellers who want a
            straightforward, guided process from application to arrival.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.16em] text-linen/40">
            Part of SK Associates — also home to{" "}
            <Link href="/real-estate" className="underline decoration-linen/30 underline-offset-4 hover:text-linen">
              SK Real Estate
            </Link>
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5">
            {travelNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] text-linen/75 hover:text-linen"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber">
            Get in touch
          </p>
          <ul className="mt-4 space-y-3 text-[15px] text-linen/75">
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              <a href={site.phoneHref} className="hover:text-linen">{site.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              <a href={site.whatsappHref} className="hover:text-linen">WhatsApp us</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              <a href={`mailto:${site.email}`} className="hover:text-linen">{site.email}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              {site.address}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-linen/10 py-5 text-center text-xs text-linen/50">
        © {new Date().getFullYear()} SK Associates. All rights reserved.
      </div>
    </footer>
  );
}
