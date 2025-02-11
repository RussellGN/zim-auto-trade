import { Button } from "@/components/ui/button";
import { Users, Search } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <div className="container mx-auto mt-5 px-4 py-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-slate-600">About Zim Auto Trade</h1>

        <div className="mx-auto max-w-3xl">
          <p className="mb-10 text-center text-xl">
            Zim Auto Trade is the leading marketplace connecting buyers and sellers of vehicles
            nation-wide. We provide a platform for browsing new and used cars, trucks, and more,
            with detailed listings and price comparisons.
          </p>

          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <Users className="text-primary mb-4 h-12 w-12" />
              <h2 className="mb-2 text-2xl font-semibold">Connect Directly</h2>
              <p>
                Get direct conatct details of sellers to get all the information you need about a
                vehicle, no middlemen.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <Search className="text-primary mb-4 h-12 w-12" />
              <h2 className="mb-2 text-2xl font-semibold">Detailed Listings</h2>
              <p>
                Access comprehensive vehicle information, including specs, features, and
                high-quality photos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-gradient-to-t from-primary-dark to-primary-default p-10 text-center md:p-20">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-xl uppercase text-white">
            Lets Find the right vehicle for your needs!
          </h2>

          <div>
            <Button className="border-primary-dark bg-white" asChild>
              <Link href="/offers">Browse vehicles</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
