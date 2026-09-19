// Central place for remote (Unsplash) photo IDs used across the site.
// Helper builds a right-sized, optimized URL for a given use case.

export function unsplash(
  id: string,
  { w = 1600, h, q = 80 }: { w?: number; h?: number; q?: number } = {}
) {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    q: String(q),
    w: String(w),
  });
  if (h) params.set("h", String(h));
  return `https://images.unsplash.com/${id}?${params.toString()}`;
}

export const destinationPhotos = {
  toronto: "photo-1516981427939-05bfa973da5c",
  bali: "photo-1576019206484-54273acdfa89",
  singapore: "photo-1665493823384-18d9ffa0e88c",
  kualaLumpur: "photo-1666715945700-832656ecf2d0",
  bangkok: "photo-1755251042986-91270ffd76f5",
  istanbul: "photo-1480000709680-1a6cb759fc43",
  moscow: "photo-1513326738677-b964603b136d",
  saintPetersburg: "photo-1712490110118-6b0b84897638",
  newZealand: "photo-1695633439535-dd76ea4f4097",
  meccaClockTower: "photo-1659255068757-259124c6d867",
} as const;

export const articlePhotos = {
  passport: "photo-1593781492912-bb538a002c02",
  packing: "photo-1763569799665-485826a970f6",
  airportBoard: "photo-1522199873717-bc67b1a5e32b",
} as const;
