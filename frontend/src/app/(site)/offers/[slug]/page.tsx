import { getListingAction } from "@/actions";
import ImageCollage from "@/components/pages/offers/ImageCollage";
import { Clock3, GaugeCircle, MapPin, Tag, UserCircle } from "lucide-react";
import Link from "next/link";
import { formatLongNumber, friendlyDate } from "@/lib/utils";
import Container from "@/components/layout/Container";
import BackBtn from "@/components/layout/BackBtn";
import DetailSection from "@/components/pages/offers/DetailSection";
import { categories, iconSize } from "@/lib/constants";
import { capitalize } from "lodash";
import ListerListingActions from "@/components/general/ListerListingActions";
import ShareBtn from "@/components/pages/offers/ShareBtn";
import BookmarkBtn from "@/components/pages/offers/BookmarkBtn";
import ReportBtn from "@/components/pages/offers/ReportBtn";
import Enquire from "@/components/pages/offers/Enquire";

type propTypes = {
  params: Promise<{ slug: string }>;
};

export default async function page({ params }: propTypes) {
  const slug = (await params).slug;
  const listing = await getListingAction(slug);
  const isOwner = false;
  const category = categories.find(
    (category) => category.name.toLowerCase() === listing.category.toLowerCase()
  );

  return (
    <Container>
      <div className="p-5 md:px-0 md:py-10">
        <div className="flex items-center justify-center gap-4">
          <BackBtn />
          <h1 className="text-center text-lg md:text-3xl">
            {listing.year} {listing.make} {listing.model}
          </h1>
          <span>{category?.icon}</span>
        </div>

        <div className="my-5 md:flex">
          <div className="md:w-1/2">
            <ImageCollage
              alt={`${listing.year} ${listing.make} ${listing.model}`}
              images={[{ src: listing.coverImage }, ...listing.images.map((img) => ({ src: img }))]}
            />
          </div>

          <div className="grid grid-cols-4 gap-2 py-5 md:w-1/2 md:gap-4 md:p-5">
            <DetailSection className="col-span-4 md:col-span-2" title="About Listing">
              <div className="flex flex-1 flex-col gap-2 md:gap-3">
                <div className="flex items-center gap-2">
                  <Clock3 size={iconSize} className="text-gray-600" />
                  Date Uploaded:
                  <span className="font-semibold">{friendlyDate(listing.date)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Tag size={iconSize} className="text-gray-600" />
                  Ask Price:
                  <span className="font-semibold">$ {formatLongNumber(listing.price)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <GaugeCircle size={iconSize} className="text-gray-600" />
                  Mileage:
                  <span className="font-semibold">{formatLongNumber(listing.mileage)} km</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={iconSize} className="text-gray-600" />
                  Location:
                  <span className="font-semibold">{listing.location} km</span>
                </div>

                <div className="text-sm text-slate-600">{listing.viewCount} views</div>

                <div className="flex items-center gap-2">
                  <UserCircle size={iconSize} className="text-gray-600" />
                  Listed By:
                  <Link
                    href={`/${listing.lister.slug}`}
                    className="font-semibold text-primary-default underline"
                  >
                    {listing.lister.name} km
                  </Link>
                </div>
              </div>
            </DetailSection>

            <div className="order-last col-span-4 md:order-none md:col-span-2">
              <div className="p-4">
                <Enquire disabled={isOwner} listing={listing} />
              </div>

              <DetailSection title="more actions">
                <div className="grid grid-cols-2 gap-3">
                  <ShareBtn />

                  <BookmarkBtn id={listing.id} />

                  {isOwner ? <ListerListingActions listing={listing} /> : <ReportBtn />}
                </div>
              </DetailSection>
            </div>

            <DetailSection className="col-span-4 md:col-span-4" title="details">
              <p>{listing.description} </p>
            </DetailSection>

            <DetailSection className="col-span-4 md:col-span-4" title="Features">
              <div className="flex h-[10rem] flex-wrap gap-1 overflow-y-auto md:gap-2.5">
                {listing.features.map((feature) => (
                  <small
                    key={feature}
                    className="rounded-md border border-slate-300 bg-[whitesmoke] px-1.5 py-1 text-xs md:text-sm"
                  >
                    {capitalize(feature)}
                  </small>
                ))}
              </div>
            </DetailSection>
          </div>
        </div>
      </div>
    </Container>
  );
}
