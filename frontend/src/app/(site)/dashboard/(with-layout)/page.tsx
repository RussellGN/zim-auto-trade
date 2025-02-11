import ListingTabs from "@/components/pages/dashboard/ListingTabs";
import Listings from "@/components/pages/offers/Listings";
import SearchControls from "@/components/pages/offers/SearchControls";

export default function page() {
  return (
    <div>
      <SearchControls />
      <ListingTabs />
      <Listings onDash />
    </div>
  );
}
