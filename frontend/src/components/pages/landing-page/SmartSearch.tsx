import Image from "next/image";
import React from "react";
import SmartSearchForm from "./SmartSearchForm";

export default function SmartSearch() {
  return (
    <div className="mx-3 flex flex-col items-center justify-between rounded-2xl bg-[url(/graphics/smart-search-bg.png)] bg-cover bg-no-repeat py-16 md:mx-0 md:flex-row md:px-10 md:py-10">
      <div className="w-full md:w-5/12">
        <Image
          src="/graphics/smart-search-title-graphic.svg"
          alt="smart search"
          width={1000}
          height={500}
          className="h-auto w-full"
        />
      </div>

      <div className="w-full px-3 md:w-1/2 md:px-0">
        <div className="w-full rounded-2xl border border-black bg-[rgba(0,0,0,0.2)] px-2 py-10 shadow-xl backdrop-blur-xl md:px-10">
          <SmartSearchForm />
        </div>
      </div>
    </div>
  );
}
