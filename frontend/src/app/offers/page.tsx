import Container from "@/components/layout/Container";
import CategoryControls from "@/components/pages/offers/CategoryControls";
import Listings from "@/components/pages/offers/Listings";
import SearchControls from "@/components/pages/offers/SearchControls";
import Sidebar from "@/components/pages/offers/Sidebar";

export default function page() {
  return (
    <Container>
      <div className="grid grid-cols-12 items-start gap-5 py-5">
        <div className="col-span-12 md:col-span-3">
          <Sidebar />
        </div>

        <div className="col-span-12 border p-5 md:col-span-9">
          <SearchControls />
          <CategoryControls />
          <Listings />
        </div>
      </div>
    </Container>
  );
}
