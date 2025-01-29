import useListings from "@/hooks/server-state/useListings";
import Listing from "./Listing";

export default function Listings() {
  const { listings } = useListings();

  return (
    <div>
      {listings.map((listing) => (
        <Listing key={listing.slug} listing={listing} />
      ))}
    </div>
  );
}
