import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex min-h-[60vh] flex-col-reverse items-center justify-center gap-5 p-5 md:flex-row">
      <div className="w-fit">
        <h1 className="mb-5 text-3xl md:text-5xl">
          <span className="text-primary-default"> Buy & Sell</span> <br /> New
          and Used Vehicles <br />
          <span className="text-primary-default"> Nation-wide</span>
        </h1>

        <div className="flex gap-3">
          <Button className="bg-primary-default text-white">
            Get offers for your Vehicle!
          </Button>
          <Button className="bg-primary-light">Browse</Button>
        </div>
      </div>

      <div className="md:w-1/2">
        <Image
          src="/hero-image2.png"
          alt="two cars"
          width={1000}
          height={600}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
