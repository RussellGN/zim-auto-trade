import { Input } from "@/components/ui/input";
import React from "react";

export default function SmartSearchForm() {
  return (
    <form>
      <h2 className="mb-5 text-center text-2xl text-white">Smart Search</h2>
      <div className="mb-2 flex flex-1 items-center gap-2 md:mb-5 md:gap-5">
        <Input placeholder="make" className="focus-visible:ring-0" />
        <Input placeholder="model" className="focus-visible:ring-0" />
      </div>

      <div className="mb-2 flex flex-1 items-center gap-2 md:mb-5 md:gap-5">
        <Input
          placeholder="min price"
          type="number"
          min={0}
          max={10000000}
          step={1}
          className="focus-visible:ring-0"
        />
        <Input
          placeholder="max price"
          type="number"
          min={0}
          max={10000000}
          step={1}
          className="focus-visible:ring-0"
        />
      </div>

      <div className="mb-2 flex flex-1 items-center gap-2 md:mb-5 md:gap-5">
        <Input
          placeholder="min year"
          type="number"
          min={1900}
          max={new Date().getFullYear()}
          step={1}
          className="focus-visible:ring-0"
        />
        <Input
          placeholder="max year"
          type="number"
          min={1900}
          max={new Date().getFullYear()}
          step={1}
          className="focus-visible:ring-0"
        />
      </div>

      <div className="flex flex-1 items-center gap-2 md:gap-5">
        <Input
          placeholder="min mileage"
          type="number"
          min={0}
          max={1000000}
          step={10}
          className="focus-visible:ring-0"
        />
        <Input
          placeholder="max mileage"
          type="number"
          min={0}
          max={1000000}
          step={10}
          className="focus-visible:ring-0"
        />
      </div>
    </form>
  );
}
