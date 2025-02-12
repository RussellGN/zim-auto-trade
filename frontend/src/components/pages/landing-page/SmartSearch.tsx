import Image from "next/image";
import SmartSearchForm from "./SmartSearchForm";

export default function SmartSearch() {
  return (
    <div className="relative mx-3 flex flex-col items-center justify-around rounded-2xl bg-[url(/graphics/smart-search-bg-1.svg)] bg-cover bg-no-repeat py-10 md:mx-0 md:flex-row md:px-10">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black to-transparent opacity-50 md:bg-gradient-to-tr"></div>

      <div className="relative z-10 w-full md:w-6/12">
        <Image
          src="/graphics/smart-search-title-graphic.png"
          alt="smart search"
          width={1000}
          height={500}
          className="relative h-auto w-full"
        />
      </div>

      <div className="relative w-full max-w-[30rem] px-3 md:w-1/2 md:px-0">
        <div className="w-full rounded-2xl bg-white px-2 py-5 shadow-2xl md:px-10 md:py-10">
          <SmartSearchForm />
        </div>
      </div>
    </div>
  );
}
