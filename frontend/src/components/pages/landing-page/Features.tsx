import { Button } from "@/components/ui/button";
import { heroHeaderFont } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <div className="mt-5 flex min-h-[80vh] flex-col-reverse items-center justify-center gap-10 p-5 md:mt-0 md:flex-row md:gap-5">
      <div className="md:w-1/2">
        <Image
          src="/vehicles/hero1.png"
          alt="two cars"
          width={735}
          height={311}
          className="h-auto w-full md:scale-x-[-1]"
        />
      </div>

      <div className="w-fit">
        <h1
          className={`mb-5 text-center text-3xl text-gray-700 md:mb-8 md:text-left md:text-4xl ${heroHeaderFont.className}`}
        >
          A <span className="text-primary-default">Nation-wide</span> Billboard
        </h1>

        <p className="mb-5 max-w-prose text-center md:text-left">
          Zim Auto Trade provides a way for people looking to sell their vehicles reach more people
          nation-wide, and at the same time provides a convenient means of finding a vehicle for
          those in search. All listings are advertised free of charge on the platform. Everyone is
          elligible, become a part of the community!
        </p>

        <div className="flex justify-center gap-3 md:justify-start">
          <Button variant="outline" className="border-black bg-secondary-default" asChild>
            <Link href="/signup">Get Started</Link>
          </Button>

          <Button variant="outline" className="border-black bg-secondary-default" asChild>
            <Link href="/about">Read More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
