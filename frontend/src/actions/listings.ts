"use server";

import { ListingInterface } from "@/lib/interfaces";
import { wait } from "@/lib/utils";
import listings from "@/sample-data/listings.json";

export async function getListing(slug: string) {
  await wait(1);

  const listing: ListingInterface | undefined = listings.find(
    (listing) => listing.slug === slug,
  );

  if (!listing) throw new Error(`Error 404, listing not found. Slug: ${slug}`);

  return listing;
}
