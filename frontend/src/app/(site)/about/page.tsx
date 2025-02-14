import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Users, Search } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex min-h-[90vh] flex-col justify-between">
      <div className="w-full">
        <Container>
          <div className="mt-5 px-5 py-8">
            <h1 className="mb-8 text-center text-4xl font-bold text-slate-600">
              About Zim Auto Trade
            </h1>

            <p className="mx-auto mb-10 max-w-prose px-3 text-center text-xl">
              Zim Auto Trade is the leading marketplace connecting buyers and sellers of vehicles
              nation-wide. We provide a platform for browsing new and used cars, trucks, and more,
              with detailed listings and price comparisons.
            </p>

            <div className="mb-12 flex flex-col items-center justify-center gap-8 md:flex-row">
              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <Users className="text-primary mb-4 h-12 w-12" />
                <h2 className="mb-2 text-2xl font-semibold">Connect Directly</h2>
                <p className="max-w-[20rem]">
                  Get direct conatct details of sellers to get all the information you need about a
                  vehicle, no middlemen.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <Search className="text-primary mb-4 h-12 w-12" />
                <h2 className="mb-2 text-2xl font-semibold">Detailed Listings</h2>
                <p className="max-w-[20rem]">
                  Access comprehensive vehicle information, including specs, features, and
                  high-quality photos.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-gradient-to-t from-secondary-dark via-secondary-default to-transparent p-10 text-center md:p-20">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-xl uppercase">Lets Find the right vehicle for your needs!</h2>

          <div>
            <Button variant="outline" className="border-black bg-secondary-default" asChild>
              <Link href="/offers">Browse vehicles</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
