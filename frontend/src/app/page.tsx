import Hero from "@/components/pages/landing-page/Hero";
import SmartSearch from "@/components/pages/landing-page/SmartSearch";

export default function Home() {
  return (
    <>
      <Hero />
      <SmartSearch />
      <div className="mx-5">
        <div className="my-3 w-fit rounded bg-slate-100 p-1">smart search</div>
        <div className="my-3 w-fit rounded bg-slate-100 p-1">
          features (whats ZAT)
        </div>
        <div className="my-3 w-fit rounded bg-slate-100 p-1">
          features (how it works)
        </div>
        <div className="my-3 w-fit rounded bg-slate-100 p-1">
          cta (how to join)
        </div>
        <div className="my-3 w-fit rounded bg-slate-100 p-1">cta (browse)</div>
        <div className="my-3 w-fit rounded bg-slate-100 p-1">
          about (read more about platform)
        </div>
      </div>
    </>
  );
}
