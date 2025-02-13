import { ListingInterface } from "@/lib/interfaces";
import ImageCollage from "./ImageCollage";
import { ArrowRight, CircleUser, Clock3, Gauge, MapPin, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatLongNumber } from "@/lib/utils";
import ListerListingActions from "../../general/ListerListingActions";
import { iconSize } from "@/lib/constants";

type propTypes = {
  listing: ListingInterface;
  onDash?: boolean;
};

export default function Listing({ listing, onDash }: propTypes) {
  return (
    <div className="my-5 rounded-xl border border-primary-light bg-white shadow-md md:flex md:rounded-2xl">
      <div className="md:w-1/2">
        <ImageCollage
          compact
          alt={`${listing.year} ${listing.make} ${listing.model}`}
          images={[{ src: listing.coverImage }, ...listing.images.map((img) => ({ src: img }))]}
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3 text-sm md:w-1/2 md:gap-4 md:p-4 md:text-base">
        <div className="flex items-center justify-between gap-5">
          <h2 className="text-lg md:text-xl">{`${listing.year} ${listing.make} ${listing.model}`}</h2>

          <div className="flex w-fit items-center gap-1 text-nowrap text-sm text-slate-500">
            <Clock3 size={iconSize} />
            {listing.date}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Tag size={iconSize} />
          <span>$ {formatLongNumber(listing.price)}</span>
        </div>

        <div className="flex items-center gap-2">
          <Gauge size={iconSize} />
          {formatLongNumber(listing.mileage)} km
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={iconSize} />
          {listing.location}
        </div>

        <div className="text-xs text-slate-600 md:text-sm">{listing.viewCount} views</div>

        <div className="mt-auto flex items-center justify-between gap-3">
          <div>
            <Button
              variant="outline"
              className="hidden border-black bg-secondary-default md:inline-flex"
              asChild
            >
              <Link
                href={`/offers/${listing.slug}`}
                className="flex items-center justify-center gap-2"
              >
                View
                <ArrowRight size={iconSize} />
              </Link>
            </Button>

            <Button
              size="sm"
              variant="outline"
              className="border-black bg-secondary-default md:hidden"
              asChild
            >
              <Link
                href={`/offers/${listing.slug}`}
                className="flex items-center justify-center gap-2"
              >
                View
                <ArrowRight size={iconSize} />
              </Link>
            </Button>
          </div>

          {onDash ? (
            <ListerListingActions listing={listing} compact />
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href={`/${listing.lister.slug}`}
                className="flex items-center justify-center gap-2 text-primary-default"
              >
                <CircleUser size={iconSize} />
                {listing.lister.name}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
