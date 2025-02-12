import Container from "@/components/layout/Container";
import Features from "@/components/pages/landing-page/Features";
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
        <Features />
      </Container>

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
    </>
  );
}
