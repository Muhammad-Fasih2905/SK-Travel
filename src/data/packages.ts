import { destinationPhotos } from "./images";

export type PackageCategory = "visa" | "tour" | "religious";

export interface PackageFeature {
  label: string;
  icon:
    | "file"
    | "calendar"
    | "users"
    | "plane"
    | "hotel"
    | "shield"
    | "bus"
    | "guide"
    | "ticket"
    | "kaaba";
}

export interface StopDetail {
  city: string;
  country: string;
  duration: string;
  photo: string;
  alt: string;
}

export interface TravelPackage {
  slug: string;
  category: PackageCategory;
  title: string;
  subtitle: string;
  heroTag: string;
  price: string;
  priceNote: string;
  duration?: string;
  stops: StopDetail[];
  features: PackageFeature[];
  highlight?: string;
  description: string;
  coverPhoto: string;
  coverAlt: string;
}

export const packages: TravelPackage[] = [
  {
    slug: "canada-visa-consultancy",
    category: "visa",
    title: "Canada Visa Consultancy",
    subtitle: "Visitor visa guidance from paperwork to interview day",
    heroTag: "Visa Consultancy",
    price: "PKR 199,000",
    priceNote: "with visa fee included",
    coverPhoto: destinationPhotos.toronto,
    coverAlt: "Toronto skyline with the CN Tower at dusk",
    stops: [
      {
        city: "Toronto & beyond",
        country: "Canada",
        duration: "Multiple entry, visitor category",
        photo: destinationPhotos.toronto,
        alt: "Toronto skyline with the CN Tower at dusk",
      },
    ],
    features: [
      { label: "Document preparation", icon: "file" },
      { label: "Appointment booking", icon: "calendar" },
      { label: "Interview Q&A preparation", icon: "users" },
    ],
    highlight: "99% approval track record",
    description:
      "We handle every step of your Canada visitor visa application — organising your documents, booking your biometric and interview appointments, and coaching you through likely interview questions so you walk in prepared.",
  },
  {
    slug: "southeast-asia-tour",
    category: "tour",
    title: "Southeast Asia Tour Package",
    subtitle: "Bali, Singapore, Kuala Lumpur and Bangkok in one trip",
    heroTag: "Tour Package",
    price: "PKR 360,000",
    priceNote: "per person, without air ticket",
    coverPhoto: destinationPhotos.bali,
    coverAlt: "Cliffside temple at Uluwatu, Bali, at golden hour",
    stops: [
      {
        city: "Bali",
        country: "Indonesia",
        duration: "3 nights / 4 days",
        photo: destinationPhotos.bali,
        alt: "Cliffside temple at Uluwatu, Bali, at golden hour",
      },
      {
        city: "Singapore",
        country: "Singapore",
        duration: "2 nights / 3 days",
        photo: destinationPhotos.singapore,
        alt: "Merlion and Marina Bay skyline in Singapore",
      },
      {
        city: "Kuala Lumpur",
        country: "Malaysia",
        duration: "4 nights / 5 days",
        photo: destinationPhotos.kualaLumpur,
        alt: "Petronas Twin Towers in Kuala Lumpur at night",
      },
      {
        city: "Bangkok",
        country: "Thailand",
        duration: "4 nights / 5 days",
        photo: destinationPhotos.bangkok,
        alt: "Wat Arun temple on the Chao Phraya River, Bangkok",
      },
    ],
    features: [
      { label: "Visa handled for all four countries", icon: "file" },
      { label: "Hotel booking (hotel only)", icon: "hotel" },
    ],
    description:
      "A four-country itinerary built for travellers who want variety in one booking: temples and cliffside coasts in Bali, skyline views in Singapore, the Petronas Towers in Kuala Lumpur, and riverside temples in Bangkok. Visa and hotel arrangements are handled end to end.",
  },
  {
    slug: "umrah-turkey-package",
    category: "religious",
    title: "Umrah & Turkey Package",
    subtitle: "A 21-day religious and holiday trip in one package",
    heroTag: "Special Offer",
    price: "PKR 620,000",
    priceNote: "per person",
    duration: "21 days total",
    coverPhoto: destinationPhotos.meccaClockTower,
    coverAlt: "The Clock Tower overlooking the Grand Mosque in Makkah",
    stops: [
      {
        city: "Makkah & Madinah",
        country: "Saudi Arabia",
        duration: "Umrah, remainder of 21 days",
        photo: destinationPhotos.meccaClockTower,
        alt: "The Clock Tower overlooking the Grand Mosque in Makkah",
      },
      {
        city: "Istanbul",
        country: "Turkey",
        duration: "6 nights / 7 days",
        photo: destinationPhotos.istanbul,
        alt: "The Blue Mosque against a clear sky in Istanbul",
      },
    ],
    features: [
      { label: "Umrah performance", icon: "kaaba" },
      { label: "Visa for both countries", icon: "file" },
      { label: "Accommodation", icon: "hotel" },
      { label: "Airport-to-hotel pick & drop", icon: "bus" },
      { label: "City tour with guide", icon: "guide" },
    ],
    description:
      "Combine your Umrah with a week in Turkey. This package pairs your time in Makkah and Madinah with a guided 6 night, 7 day stay in Istanbul, including transfers and a city tour, so the religious and holiday parts of the trip are planned together.",
  },
  {
    slug: "russia-summer-package",
    category: "tour",
    title: "Russia Summer Package",
    subtitle: "Moscow and Saint Petersburg, back to back",
    heroTag: "Summer Package",
    price: "PKR 280,000",
    priceNote: "without air tickets",
    coverPhoto: destinationPhotos.moscow,
    coverAlt: "Saint Basil's Cathedral in Moscow",
    stops: [
      {
        city: "Moscow",
        country: "Russia",
        duration: "5 nights / 6 days",
        photo: destinationPhotos.moscow,
        alt: "Saint Basil's Cathedral in Moscow",
      },
      {
        city: "Saint Petersburg",
        country: "Russia",
        duration: "4 nights / 5 days",
        photo: destinationPhotos.saintPetersburg,
        alt: "Church of the Savior on Blood along a canal in Saint Petersburg",
      },
    ],
    features: [
      { label: "Visa consultancy", icon: "file" },
      { label: "Ticketing", icon: "ticket" },
      { label: "Travel insurance", icon: "shield" },
      { label: "Hotel booking", icon: "hotel" },
    ],
    description:
      "Nine nights split between two of Russia's most storied cities — Red Square and the Kremlin in Moscow, then the canals and palaces of Saint Petersburg. Visa, insurance, ticketing and hotels are arranged as one package.",
  },
  {
    slug: "new-zealand-visa",
    category: "visa",
    title: "New Zealand Visa",
    subtitle: "Straightforward visa application support",
    heroTag: "Visa Services",
    price: "PKR 100,000",
    priceNote: "per person, all visa fees included",
    coverPhoto: destinationPhotos.newZealand,
    coverAlt: "Lake Wakatipu and mountains near Queenstown, New Zealand",
    stops: [
      {
        city: "Auckland & beyond",
        country: "New Zealand",
        duration: "Visa application support",
        photo: destinationPhotos.newZealand,
        alt: "Lake Wakatipu and mountains near Queenstown, New Zealand",
      },
    ],
    features: [
      { label: "Full application handling", icon: "file" },
      { label: "All visa fees included", icon: "shield" },
    ],
    description:
      "A flat, all-inclusive fee for New Zealand visa support — no separate government fee to budget for on top. We prepare and lodge your application from start to finish.",
  },
];

export const getPackage = (slug: string) => packages.find((p) => p.slug === slug);
