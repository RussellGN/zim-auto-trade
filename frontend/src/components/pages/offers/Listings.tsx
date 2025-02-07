import Listing from "./Listing";
import { getListersListings, getListings } from "@/actions";
import StandalonePagination from "./StandalonePagination";

export default async function Listings({ onDash }: { onDash?: boolean }) {
  const listings = onDash ? await getListersListings() : await getListings();

  return (
    <div>
      {listings.map((listing) => (
        <Listing key={listing.slug} listing={listing} onDash={onDash} />
      ))}

      <div className="my-20">
        <StandalonePagination numberOfPages={10} />
      </div>
    </div>
  );
}
