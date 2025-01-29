import { ListingInterface } from "@/lib/interfaces";

export default function Listing({ listing }: { listing: ListingInterface }) {
  return (
    <div className="my-5 rounded-xl border bg-white p-8 shadow-md">
      <p className="">{JSON.stringify(listing)}</p>
    </div>
  );
}
