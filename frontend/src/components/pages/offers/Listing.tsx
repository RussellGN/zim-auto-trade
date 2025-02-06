import { ListingInterface } from "@/lib/interfaces";
import ImageCollage from "./ImageCollage";
import { ArrowRight, CircleUser, Clock3, Gauge, MapPin, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatLongNumber } from "@/lib/utils";
import ListerListingActions from "./ListerListingActions";

type propTypes = {
  listing: ListingInterface;
  onDash?: boolean;
};

export default function Listing({ listing, onDash }: propTypes) {
  return (
    <div className="my-5 flex rounded-2xl border border-primary-light bg-white shadow-md">
      <div className="w-1/2">
        <ImageCollage
          compact
          alt={listing.name}
          images={[{ src: listing.coverImage }, ...listing.images.map((img) => ({ src: img }))]}
        />
      </div>

      <div className="flex w-1/2 flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between gap-5">
          <h2 className="text-xl">{listing.name}</h2>

          <div className="flex w-fit items-center gap-1 text-nowrap text-sm text-slate-500">
            <Clock3 size={18} />
            {listing.date}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Tag size={18} />
          <span>$ {formatLongNumber(listing.price)}</span>
        </div>

        <div className="flex items-center gap-2">
          <Gauge size={18} />
          {formatLongNumber(listing.mileage)} km
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={18} />
          {listing.location}
        </div>

        <div className="text-sm text-slate-600">{listing.viewCount} views</div>

        <div className="mt-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Button className="bg-primary-default text-white" asChild>
              <Link
                href={`/offers/${listing.slug}`}
                className="flex items-center justify-center gap-2"
              >
                View
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>

          {onDash ? (
            <ListerListingActions listing={listing} />
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href={`/${listing.lister.slug}`}
                className="flex items-center justify-center gap-2 text-primary-default"
              >
                <CircleUser size={18} />
                {listing.lister.name}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
