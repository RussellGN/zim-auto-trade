import { Button } from "@/components/ui/button";
import { heroHeaderFont, heroListingCategories } from "@/lib/constants";
import Link from "next/link";
import Category from "./Category";

export default function Hero() {
  return (
    <div className="flex min-h-[80vh] items-center">
      <div className="grid w-full grid-cols-2 items-end gap-10 p-20">
        <div className="col-span-1">
          <div className="flex h-full flex-col gap-5">
            <div className="flex flex-grow items-center justify-center p-5">
              <h1 className={`text-3xl text-gray-700 md:text-4xl ${heroHeaderFont.className}`}>
                <span className="text-primary-light"> Buy & Sell</span> <br /> New and Used Vehicles{" "}
                <br />
                <span className="text-primary-light"> Nation-wide</span>
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <Category category={heroListingCategories[1]} />
              </div>
              <div className="col-span-1">
                <Category category={heroListingCategories[2]} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div>
            <Category category={heroListingCategories[0]} />
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex items-center justify-between gap-10 text-lg">
            <p className="max-w-prose">
              Browse a wide selection, list easily, connect with buyers and sellers, and get the
              best deals on new and used vehicles effortlessly.
            </p>

            <div className="flex justify-center gap-3 md:justify-end">
              <Button size="lg" asChild className="bg-primary-light">
                <Link href="/offers">Browse</Link>
              </Button>
              <Button size="lg" asChild className="bg-primary-default text-white">
                <Link href="/dashboard/new">Get offers for your Vehicle!</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
