import { getListingAction } from "@/actions";
import ImageCollage from "@/components/pages/offers/ImageCollage";
import { Clock3, GaugeCircle, Mail, MapPin, Tag, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatLongNumber, friendlyDate } from "@/lib/utils";
import Container from "@/components/layout/Container";
import BackBtn from "@/components/layout/BackBtn";
import DetailSection from "@/components/pages/offers/DetailSection";
import { categories } from "@/lib/constants";
import { capitalize } from "lodash";
import ListerListingActions from "@/components/general/ListerListingActions";
import ShareBtn from "@/components/pages/offers/ShareBtn";
import BookmarkBtn from "@/components/pages/offers/BookmarkBtn";
import ReportBtn from "@/components/pages/offers/ReportBtn";

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
      <div className="py-10">
        <div className="flex items-center justify-center gap-4">
          <BackBtn />
          <h1 className="text-center text-3xl">
            {listing.year} {listing.make} {listing.model}
          </h1>
          <span className="">{category?.icon}</span>
        </div>

        <div className="my-5 flex">
          <div className="w-1/2">
            <ImageCollage
              alt={`${listing.year} ${listing.make} ${listing.model}`}
              images={[{ src: listing.coverImage }, ...listing.images.map((img) => ({ src: img }))]}
            />
          </div>

          <div className="grid w-1/2 grid-cols-4 gap-4 p-5">
            <DetailSection className="col-span-2" title="About Listing">
              <div className="flex flex-1 flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Clock3 size={18} className="text-gray-600" />
                  Date Uploaded:
                  <span className="font-semibold">{friendlyDate(listing.date)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Tag size={18} className="text-gray-600" />
                  Ask Price:
                  <span className="font-semibold">$ {formatLongNumber(listing.price)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <GaugeCircle size={18} className="text-gray-600" />
                  Mileage:
                  <span className="font-semibold">{formatLongNumber(listing.mileage)} km</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-gray-600" />
                  Location:
                  <span className="font-semibold">{listing.location} km</span>
                </div>

                <div className="text-sm text-slate-600">{listing.viewCount} views</div>

                <div className="flex items-center gap-2">
                  <UserCircle size={18} className="text-gray-600" />
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

            <div className="col-span-2">
              <div className="p-4">
                <Button disabled={isOwner} className="w-full bg-primary-default text-white">
                  Enquire <Mail size={18} />
                </Button>
              </div>

              <DetailSection className="mb-3" title="actions">
                <div className="grid grid-cols-2 gap-3">
                  <ShareBtn />

                  <BookmarkBtn id={listing.id} />

                  {isOwner ? <ListerListingActions listing={listing} /> : <ReportBtn />}
                </div>
              </DetailSection>
            </div>

            <DetailSection className="col-span-4" title="details">
              <p>{listing.description} </p>
            </DetailSection>

            <DetailSection className="col-span-4" title="Features">
              <div className="flex h-[10rem] flex-wrap gap-2.5 overflow-y-auto">
                {listing.features.map((feature) => (
                  <small
                    key={feature}
                    className="rounded-md border border-slate-300 bg-[whitesmoke] px-1.5 py-1 text-sm"
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
