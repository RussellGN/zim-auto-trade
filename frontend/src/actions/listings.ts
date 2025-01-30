"use server";

import { ListingInterface } from "@/lib/interfaces";
import listings from "@/sample-data/listings.json";

export async function getListing(slug: string) {
  const listing: ListingInterface | undefined = listings.find(
    (listing) => listing.slug === slug,
  );

  if (!listing) throw new Error(`Error 404, listing not found. Slug: ${slug}`);

  return listing;
}
