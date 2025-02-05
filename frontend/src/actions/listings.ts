"use server";

import { sampleLister } from "@/lib/constants";
import { wait } from "@/lib/utils";
import { sampleListings } from "@/sample-data/listings";

export async function getListing(slug: string) {
  await wait(1);
  const listing = sampleListings.find((listing) => listing.slug === slug);
  if (!listing) throw new Error(`Error 404, listing not found. Slug: ${slug}`);
  return listing;
}

export async function getListings() {
  await wait(1);
  return sampleListings;
}

export async function getListersListings() {
  await wait(1);
  return sampleListings.reverse();
}

export async function getLister() {
  await wait(1);

  return sampleLister;
}
