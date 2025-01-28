import Container from "@/components/layout/Container";
import Hero from "@/components/pages/landing-page/Hero";
import SmartSearch from "@/components/pages/landing-page/SmartSearch";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
        <SmartSearch />

        <div className="my-10 px-10 py-20 text-center md:p-20">
          <h2 className="mb-5 text-xl">
            A <span className="text-primary-default">Nation-wide</span>{" "}
            Billboard
          </h2>

          <p className="mx-auto mb-5 max-w-prose">
            Zim Auto Trade provides a way for people looking to sell their
            vehicles reach more people nation-wide, and at the same time
            provides a convenient means of finding a vehicle for those in
            search. All listings are advertised free of charge on the platform.
            Everyone is elligible, become a part of the community!
          </p>

          <div className="flex items-center justify-center gap-3">
            <Button className="bg-primary-default text-white" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>

            <Button className="bg-primary-light" asChild>
              <Link href="/about">Read More</Link>
            </Button>
          </div>
        </div>
      </Container>

      <div className="mt-10 bg-gradient-to-t from-primary-dark to-primary-default p-10 text-center md:p-20">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-xl uppercase text-white">
            Lets Find the right vehicle for your needs!
          </h2>

          <div>
            <Button className="border-primary-dark bg-white" asChild>
              <Link href="/signup">Browse vehicles</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
