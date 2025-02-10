"use server";

import { sampleLister } from "@/lib/constants";
import { ID } from "@/lib/types";
import { wait } from "@/lib/utils";
import { sampleListings } from "@/sample-data/listings";
import { sampleNotifications } from "@/sample-data/notifications";
import { random } from "lodash";
import { redirect } from "next/navigation";

export async function getListingAction(slug: string) {
  await wait(1);
  const listing = sampleListings.find((listing) => listing.slug === slug);
  if (!listing) throw new Error(`Error 404, listing not found. Slug: ${slug}`);
  return listing;
}

export async function getListingsAction() {
  await wait(1);
  return sampleListings;
}

export async function getListersListingsAction() {
  await wait(1);
  return sampleListings.reverse();
}

export async function getListerAction() {
  await wait(1);
  return sampleLister;
}

export async function getNotificationsAction() {
  await wait(1);
  return sampleNotifications;
}

export async function logoutAction() {
  await wait(1);
  console.log("TODO: logout");
  redirect("/");
}

export async function delistListingAction(id: ID) {
  await wait(1);
  console.log("TODO: delist " + id);
}

export async function deleteListingAction(id: ID) {
  await wait(1);
  console.log("TODO: delete " + id);
}

export async function toggleBookmarkListingAction(id: ID) {
  await wait(1);
  console.log("TODO: bookmark " + id);
}

export async function checkIsBookmarkedAction(id: ID) {
  await wait(1);
  console.log("TODO: bookmark " + id);

  if (random(1) === 1) return true;
  else return false;
}
