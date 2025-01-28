import Image from "next/image";
import React from "react";
import SmartSearchForm from "./SmartSearchForm";

export default function SmartSearch() {
  return (
    <div
      className="flex items-center justify-between rounded-2xl bg-cover bg-no-repeat p-10"
      style={{ background: "url(/graphics/smart-search-bg.png)" }}
    >
      <div className="w-5/12">
        <Image
          src="/graphics/smart-search-title-graphic.svg"
          alt="smart search"
          width={1000}
          height={500}
          className="h-auto w-full"
        />
      </div>

      <div className="w-1/2 rounded-2xl border border-black bg-[rgba(0,0,0,0.2)] p-10 shadow-xl backdrop-blur-xl">
        <SmartSearchForm />
      </div>
    </div>
  );
}
