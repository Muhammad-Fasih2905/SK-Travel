import { destinationPhotos } from "./images";

export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  readingTime: string;
  publishedAt: string; // ISO date
  updatedAt: string; // ISO date
  coverPhoto: string;
  coverAlt: string;
  keywords: string[];
  content: ArticleSection[];
}

export type ArticleSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export const articles: Article[] = [
  {
    slug: "canada-visitor-visa-documents-checklist",
    title: "Canada Visitor Visa: The Document Checklist That Actually Matters",
    metaTitle: "Canada Visitor Visa Documents Checklist (2026 Guide)",
    metaDescription:
      "A practical checklist of the documents Pakistani applicants need for a Canada visitor visa, plus the mistakes that most often cause delays or refusals.",
    excerpt:
      "The documents that most often decide a Canada visitor visa outcome — and the small mistakes that slow applications down.",
    category: "Visa Guides",
    readingTime: "6 min read",
    publishedAt: "2026-02-10",
    updatedAt: "2026-02-10",
    coverPhoto: destinationPhotos.toronto,
    coverAlt: "Toronto skyline with the CN Tower at dusk",
    keywords: [
      "Canada visitor visa documents",
      "Canada visa checklist Pakistan",
      "Canada tourist visa requirements",
    ],
    content: [
      {
        type: "paragraph",
        text: "Most Canada visitor visa refusals aren't about a single missing form. They come from a file that leaves an officer with unanswered questions: unclear finances, a travel history with gaps, or a purpose of visit that isn't backed up by anything concrete. The checklist below covers what actually gets reviewed, not just what's listed on the application form.",
      },
      {
        type: "heading",
        text: "The core documents",
      },
      {
        type: "list",
        items: [
          "A valid passport with at least six months of validity beyond your planned return date, and enough blank pages for a visa sticker.",
          "A completed application form (IMM 5257) with dates and answers that match your supporting documents exactly.",
          "Two passport-sized photographs meeting Canada's specific dimensions and background requirements.",
          "Proof of funds: recent bank statements (typically six months), covering the full trip cost with a visible, explainable balance.",
          "Proof of ties to Pakistan: employment letter, business registration, property documents, or family responsibilities that show a reason to return.",
          "A travel itinerary, even a provisional one, showing where you'll stay and what you plan to do.",
          "An invitation letter if you're visiting family or friends, including their status in Canada and their relationship to you.",
        ],
      },
      {
        type: "heading",
        text: "Where applications usually lose points",
      },
      {
        type: "paragraph",
        text: "Bank statements with large, unexplained deposits shortly before the application date raise questions rather than reassure. If a relative is supporting the trip, a separate sponsorship letter with proof of their own finances carries more weight than a lump sum appearing in your account. Employment letters that read as templates, with no specific role, salary, or leave approval, are treated the same way.",
      },
      {
        type: "paragraph",
        text: "Travel history matters, but its absence isn't a disqualifier. First-time travellers are approved regularly when the rest of the file is consistent and the ties to Pakistan are well documented.",
      },
      {
        type: "heading",
        text: "Timing the application",
      },
      {
        type: "paragraph",
        text: "Processing times for Canada visitor visas from Pakistan vary and are best checked close to your intended travel date rather than assumed from past experience. Building in a buffer of at least two months before a fixed travel date, such as a wedding or a booked tour, avoids decisions made under time pressure.",
      },
      {
        type: "paragraph",
        text: "If you'd rather have someone review your documents before submission, that's the core of what our Canada visa consultancy covers — a check against what we know reviewers look for, not just what the checklist says.",
      },
    ],
  },
  {
    slug: "best-time-to-visit-southeast-asia",
    title: "Bali, Singapore, Kuala Lumpur, Bangkok: When to Go and What to Expect",
    metaTitle: "Best Time to Visit Bali, Singapore, KL & Bangkok",
    metaDescription:
      "Month-by-month weather guidance for a Southeast Asia trip covering Bali, Singapore, Kuala Lumpur and Bangkok, so you can time your holiday package right.",
    excerpt:
      "A month-by-month look at weather across Bali, Singapore, Kuala Lumpur and Bangkok, for anyone planning a multi-country trip.",
    category: "Destination Guides",
    readingTime: "7 min read",
    publishedAt: "2026-01-22",
    updatedAt: "2026-01-22",
    coverPhoto: destinationPhotos.bangkok,
    coverAlt: "Wat Arun temple on the Chao Phraya River, Bangkok",
    keywords: [
      "best time to visit Bali",
      "Southeast Asia trip planning",
      "Singapore Kuala Lumpur Bangkok weather",
    ],
    content: [
      {
        type: "paragraph",
        text: "Covering four countries in one trip means no single month is perfect everywhere, but some windows work noticeably better than others. Here's what the weather actually looks like across the year, and how it affects a combined Bali, Singapore, Kuala Lumpur and Bangkok itinerary.",
      },
      {
        type: "heading",
        text: "Bali: April to October",
      },
      {
        type: "paragraph",
        text: "Bali's dry season runs roughly April through October, with July and August the busiest and driest months. Temples, cliffside viewpoints, and beach time are all more enjoyable without the daily downpours that mark the November-to-March wet season. If your trip has any flexibility, anchor the Bali leg to this window and build the rest of the itinerary around it.",
      },
      {
        type: "heading",
        text: "Singapore: year-round, with two things to know",
      },
      {
        type: "paragraph",
        text: "Singapore sits close to the equator and stays warm and humid all year, so there isn't a dry season to plan around. What does shift is rainfall intensity: November to January brings the heaviest showers, usually in short, sharp bursts rather than all-day rain. Indoor attractions like Gardens by the Bay's conservatories make a wet afternoon easy to plan around.",
      },
      {
        type: "heading",
        text: "Kuala Lumpur: avoid the monsoon transition",
      },
      {
        type: "paragraph",
        text: "Kuala Lumpur's wetter months cluster around October to December, tied to the Northeast Monsoon. The stretch from January to August is generally more manageable for the Petronas Towers, KL Tower, and street-level exploring that make up most of a KL itinerary.",
      },
      {
        type: "heading",
        text: "Bangkok: cool season wins",
      },
      {
        type: "paragraph",
        text: "Bangkok's cool season, roughly November to February, is the most comfortable stretch — lower humidity, less rain, and daytime temperatures that make walking between Wat Arun, the Grand Palace, and riverside markets more pleasant. March to May runs hot; June to October is the wet season.",
      },
      {
        type: "heading",
        text: "Putting it together",
      },
      {
        type: "paragraph",
        text: "A trip built in July or August lines up well with Bali's dry season and avoids Bangkok and KL's wettest months, at the cost of Bangkok's higher humidity. A trip in December leans into Bangkok's cool season but sits inside Bali's wetter months. Neither choice is wrong — it depends on which leg of the trip you'd rather protect from rain.",
      },
    ],
  },
  {
    slug: "umrah-packing-and-preparation-guide",
    title: "What to Pack and Prepare Before an Umrah Trip",
    metaTitle: "Umrah Packing List & Preparation Guide",
    metaDescription:
      "A practical Umrah packing and preparation guide covering Ihram, documents, health precautions, and what to expect on arrival in Makkah and Madinah.",
    excerpt:
      "What to bring, what to prepare, and what to expect before travelling for Umrah — the practical side, covered in one place.",
    category: "Travel Tips",
    readingTime: "8 min read",
    publishedAt: "2026-03-01",
    updatedAt: "2026-03-01",
    coverPhoto: destinationPhotos.meccaClockTower,
    coverAlt: "The Clock Tower overlooking the Grand Mosque in Makkah",
    keywords: [
      "Umrah packing list",
      "Umrah preparation guide",
      "what to bring for Umrah",
    ],
    content: [
      {
        type: "paragraph",
        text: "Umrah preparation is part spiritual, part logistical. The logistics are simple once laid out, but easy to underestimate if it's your first trip. This guide covers the practical side: what to pack, what paperwork to have ready, and what to expect once you land.",
      },
      {
        type: "heading",
        text: "Documents to carry",
      },
      {
        type: "list",
        items: [
          "Passport with at least six months' validity and your Umrah visa.",
          "Printed and digital copies of your visa, flight tickets, and hotel bookings.",
          "Proof of vaccination where required — check current requirements before departure, as these can change.",
          "A card with emergency contacts and your accommodation address in Makkah and Madinah, kept on you at all times.",
        ],
      },
      {
        type: "heading",
        text: "What to pack",
      },
      {
        type: "list",
        items: [
          "Ihram garments for men — at least two sets, as one may need washing mid-trip.",
          "Simple, modest, breathable clothing for women, in line with Ihram guidelines.",
          "Comfortable, slip-on footwear for the many times shoes come on and off.",
          "A small crossbody or waist bag for your phone, money, and documents during Tawaf and Sa'i.",
          "Unscented toiletries — scented products are not permitted in the state of Ihram.",
          "A basic medical kit: rehydration salts, pain relief, and any personal prescriptions with a copy of the prescription.",
          "A refillable water bottle; Zamzam water is freely available but a bottle helps during the walk to and from the mosque.",
        ],
      },
      {
        type: "heading",
        text: "Health and stamina",
      },
      {
        type: "paragraph",
        text: "The physical side of Umrah — walking, standing, and the crowds around the Kaaba — is more demanding than most first-time pilgrims expect. Comfortable, well worn-in shoes make a bigger difference than most other packing decisions. Travellers with health conditions should carry a doctor's letter and enough medication for the full trip plus a few extra days.",
      },
      {
        type: "heading",
        text: "What to expect on arrival",
      },
      {
        type: "paragraph",
        text: "Immigration and transfer times can run long during busier periods of the year, so arrival-day plans are best kept flexible rather than tightly scheduled. Once at the hotel, most pilgrims take a short rest before heading to the mosque for their first Umrah, rather than going directly from the airport.",
      },
      {
        type: "paragraph",
        text: "Our Umrah & Turkey package includes accommodation, transfers, and a guide for the Istanbul leg, so the logistics around the trip are handled — leaving more attention for the parts of the journey that matter most.",
      },
    ],
  },
  {
    slug: "russia-visa-photo-and-document-requirements",
    title: "Russia Tourist Visa: Photo and Document Requirements Explained",
    metaTitle: "Russia Tourist Visa Photo & Document Requirements",
    metaDescription:
      "What Pakistani travellers need for a Russia tourist visa application, including photo specifications, invitation letters, and common rejection reasons.",
    excerpt:
      "The specific photo and paperwork requirements for a Russia tourist visa, and why small formatting mistakes cause the most delays.",
    category: "Visa Guides",
    readingTime: "5 min read",
    publishedAt: "2026-02-25",
    updatedAt: "2026-02-25",
    coverPhoto: destinationPhotos.moscow,
    coverAlt: "Saint Basil's Cathedral in Moscow",
    keywords: [
      "Russia tourist visa requirements",
      "Russia visa photo specifications",
      "Russia visa Pakistan",
    ],
    content: [
      {
        type: "paragraph",
        text: "Russia's visa application is stricter than many about formatting, particularly for photographs. Getting these details right the first time avoids a second trip to the visa centre.",
      },
      {
        type: "heading",
        text: "Photo requirements",
      },
      {
        type: "list",
        items: [
          "35mm x 45mm in size, taken within the last six months.",
          "Plain white or light grey background, no shadows.",
          "Full face, front view, neutral expression, eyes open and clearly visible.",
          "No glasses with tinted lenses; head coverings are permitted only for religious reasons and must not obscure facial features.",
          "Matte or glossy finish is accepted, but the image must not be digitally altered.",
        ],
      },
      {
        type: "heading",
        text: "Core documents",
      },
      {
        type: "list",
        items: [
          "Passport valid for at least six months beyond the visa's expiry, with two blank pages.",
          "A completed visa application form, signed and dated.",
          "An invitation (tourist voucher or confirmation) from a licensed Russian tour operator or hotel.",
          "Proof of travel insurance valid for the full duration of the stay, meeting Russia's minimum coverage requirements.",
          "Round-trip flight reservations or itinerary.",
          "Proof of accommodation for every night of the stay.",
        ],
      },
      {
        type: "heading",
        text: "Where applications get delayed",
      },
      {
        type: "paragraph",
        text: "The tourist voucher and hotel confirmation need to match exactly — different dates or a hotel name that doesn't match the booking reference are common causes of a request for more information. Travel insurance that doesn't explicitly list Russia as a covered destination, or that has a coverage amount below the minimum required, is another frequent issue.",
      },
      {
        type: "paragraph",
        text: "Our Russia summer package includes visa consultancy alongside ticketing, insurance, and hotel booking, so the voucher, insurance, and accommodation details are aligned from the start rather than assembled separately.",
      },
    ],
  },
  {
    slug: "new-zealand-visa-processing-times-and-tips",
    title: "New Zealand Visitor Visa: Processing Times and What Slows Them Down",
    metaTitle: "New Zealand Visitor Visa Processing Times & Tips",
    metaDescription:
      "What affects New Zealand visitor visa processing times for Pakistani applicants, and practical tips to avoid the most common delays.",
    excerpt:
      "What actually affects New Zealand visitor visa processing times, and the small application details that most often slow things down.",
    category: "Visa Guides",
    readingTime: "5 min read",
    publishedAt: "2026-03-08",
    updatedAt: "2026-03-08",
    coverPhoto: destinationPhotos.newZealand,
    coverAlt: "Lake Wakatipu and mountains near Queenstown, New Zealand",
    keywords: [
      "New Zealand visitor visa processing time",
      "New Zealand visa Pakistan",
      "New Zealand visa tips",
    ],
    content: [
      {
        type: "paragraph",
        text: "New Zealand visitor visa processing times are not fixed — they move with application volume and the completeness of the file submitted. Checking current estimates close to your planned travel date is more useful than relying on a general rule of thumb, but there are still application habits that consistently slow things down or speed them up.",
      },
      {
        type: "heading",
        text: "What typically causes delays",
      },
      {
        type: "list",
        items: [
          "Incomplete financial evidence — a single bank statement without an explanation of income source.",
          "A travel itinerary that doesn't account for the full length of the requested stay.",
          "Supporting letters (employment, sponsorship) that are undated, unsigned, or on plain paper without letterhead.",
          "Missing or expired medical and police certificates for longer stays, where these are required.",
        ],
      },
      {
        type: "heading",
        text: "What helps applications move faster",
      },
      {
        type: "list",
        items: [
          "Submitting a complete file the first time rather than in stages.",
          "Financial evidence that clearly shows both a balance and a consistent income pattern.",
          "A specific, dated itinerary rather than a general description of \"sightseeing.\"",
          "Applying with enough lead time that a request for more information doesn't put a fixed travel date at risk.",
        ],
      },
      {
        type: "paragraph",
        text: "Our New Zealand visa service is a flat, all-inclusive fee that covers document preparation and lodging the application — the aim is a complete, clean file on the first submission rather than a back-and-forth after the fact.",
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
