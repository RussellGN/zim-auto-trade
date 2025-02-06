import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import React from "react";

export default function SmartSearchForm({ noTitle }: { noTitle?: boolean }) {
  return (
    <form>
      {!noTitle && <h2 className="mb-5 text-center text-2xl text-white">Smart Search</h2>}

      <div className="mb-2 flex flex-1 items-center gap-2 md:mb-5 md:gap-5">
        <div className="flex-grow">
          <Label className="capitalize" htmlFor="make">
            make
          </Label>
          <Input
            placeholder="make"
            name="make"
            className="border-gray-800 text-gray-800 shadow placeholder:text-gray-600 focus-visible:ring-0"
          />
        </div>

        <div className="flex-grow">
          <Label className="capitalize" htmlFor="model">
            model
          </Label>

          <Input
            placeholder="model"
            name="model"
            className="border-gray-800 text-gray-800 shadow placeholder:text-gray-600 focus-visible:ring-0"
          />
        </div>
      </div>

      <div className="mb-2 flex flex-1 items-center gap-2 md:mb-5 md:gap-5">
        <div className="flex-grow">
          <Label className="capitalize" htmlFor="min-price">
            min price
          </Label>
          <Input
            placeholder="min price"
            name="min-price"
            type="number"
            min={0}
            max={10000000}
            step={1}
            className="border-gray-800 text-gray-800 shadow placeholder:text-gray-600 focus-visible:ring-0"
          />
        </div>

        <div className="flex-grow">
          <Label className="capitalize" htmlFor="max-price">
            max price
          </Label>
          <Input
            placeholder="max price"
            name="max-price"
            type="number"
            min={0}
            max={10000000}
            step={1}
            className="border-gray-800 text-gray-800 shadow placeholder:text-gray-600 focus-visible:ring-0"
          />
        </div>
      </div>

      <div className="mb-2 flex flex-1 items-center gap-2 md:mb-5 md:gap-5">
        <div className="flex-grow">
          <Label className="capitalize" htmlFor="min-year">
            min year
          </Label>

          <Input
            placeholder="min year"
            name="min-year"
            type="number"
            min={1900}
            max={new Date().getFullYear()}
            step={1}
            className="border-gray-800 text-gray-800 shadow placeholder:text-gray-600 focus-visible:ring-0"
          />
        </div>

        <div className="flex-grow">
          <Label className="capitalize" htmlFor="max-year">
            max year
          </Label>
          <Input
            placeholder="max year"
            name="max-year"
            type="number"
            min={1900}
            max={new Date().getFullYear()}
            step={1}
            className="border-gray-800 text-gray-800 shadow placeholder:text-gray-600 focus-visible:ring-0"
          />
        </div>
      </div>

      <div className="flex flex-1 items-center gap-2 md:gap-5">
        <div className="flex-grow">
          <Label className="capitalize" htmlFor="min-mileage">
            min mileage
          </Label>
          <Input
            placeholder="min mileage"
            name="min-mileage"
            type="number"
            min={0}
            max={1000000}
            step={10}
            className="border-gray-800 text-gray-800 shadow placeholder:text-gray-600 focus-visible:ring-0"
          />
        </div>

        <div className="flex-grow">
          <Label className="capitalize" htmlFor="max-mileage">
            max mileage
          </Label>
          <Input
            placeholder="max mileage"
            name="max mileage"
            type="number"
            min={0}
            max={1000000}
            step={10}
            className="border-gray-800 text-gray-800 shadow placeholder:text-gray-600 focus-visible:ring-0"
          />
        </div>
      </div>

      <div className="mt-5 text-end">
        <Button
          className="border-white bg-primary-default text-white"
          size="icon"
          type="submit"
          variant="outline"
        >
          <Search />
        </Button>
      </div>
    </form>
  );
}
