import { Button } from "@/components/ui/button";
import { heroHeaderFont } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex min-h-[80vh] flex-col-reverse items-center justify-center gap-5 p-5 md:flex-row">
      <div className="w-fit">
        <h1
          className={`mb-5 text-center text-3xl text-gray-700 md:mb-8 md:text-right md:text-4xl ${heroHeaderFont.className}`}
        >
          <span className="text-primary-light"> Buy & Sell</span> <br /> New and
          Used Vehicles <br />
          <span className="text-primary-light"> Nation-wide</span>
        </h1>

        <div className="flex justify-center gap-3 md:justify-end">
          <Button asChild className="bg-primary-light">
            <Link href="/offers">Browse</Link>
          </Button>
          <Button asChild className="bg-primary-default text-white">
            <Link href="/dashboard/new">Get offers for your Vehicle!</Link>
          </Button>
        </div>
      </div>

      <div className="md:w-1/2">
        <Image
          src="/vehicles/hero1.png"
          alt="two cars"
          width={735}
          height={311}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
