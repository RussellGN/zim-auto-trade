import Listings from "@/components/pages/offers/Listings";
import SearchControls from "@/components/pages/offers/SearchControls";

export default async function page() {
  return (
    <div>
      <SearchControls />
      <Listings onDash />
    </div>
  );
}
