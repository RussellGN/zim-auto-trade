import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { iconSize } from "@/lib/constants";
import {
  CalendarMinus2,
  CalendarPlus2,
  CircleDollarSign,
  GaugeCircle,
  Search,
  Shield,
  ShieldEllipsis,
} from "lucide-react";

export default function SmartSearchForm({ noTitle }: { noTitle?: boolean }) {
  return (
    <form>
      {!noTitle && <h2 className="mb-5 text-center text-2xl">Smart Search</h2>}

      <div className="mb-2 flex flex-1 items-center gap-2 md:mb-5 md:gap-5">
        <div className="flex flex-grow items-center gap-1 rounded-lg border border-slate-300 bg-[whitesmoke] ps-3">
          <Label className="capitalize" htmlFor="make">
            <span hidden>make</span>
            <Shield className="text-slate-500" size={iconSize} />
          </Label>

          <Input
            placeholder="make"
            name="make"
            className="flex-grow border-0 bg-transparent placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        <div className="flex flex-grow items-center gap-1 rounded-lg border border-slate-300 bg-[whitesmoke] ps-3">
          <Label className="capitalize" htmlFor="model">
            <span hidden>model</span>
            <ShieldEllipsis className="text-slate-500" size={iconSize} />
          </Label>

          <Input
            placeholder="model"
            name="model"
            className="flex-grow border-0 bg-transparent placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      <div className="mb-2 flex flex-1 items-center gap-2 md:mb-5 md:gap-5">
        <div className="flex flex-grow items-center gap-1 rounded-lg border border-slate-300 bg-[whitesmoke] ps-3">
          <Label className="capitalize" htmlFor="min-price">
            <span hidden>min price</span>
            <CircleDollarSign className="text-slate-500" size={iconSize} />
          </Label>

          <Input
            placeholder="min price"
            name="min-price"
            type="number"
            min={0}
            max={10000000}
            step={1}
            className="flex-grow border-0 bg-transparent placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        <div className="flex flex-grow items-center gap-1 rounded-lg border border-slate-300 bg-[whitesmoke] ps-3">
          <Label className="capitalize" htmlFor="max-price">
            <span hidden>max price</span>
            <CircleDollarSign className="text-slate-500" size={iconSize} />
          </Label>

          <Input
            placeholder="max price"
            name="max-price"
            type="number"
            min={0}
            max={10000000}
            step={1}
            className="flex-grow border-0 bg-transparent placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      <div className="mb-2 flex flex-1 items-center gap-2 md:mb-5 md:gap-5">
        <div className="flex flex-grow items-center gap-1 rounded-lg border border-slate-300 bg-[whitesmoke] ps-3">
          <Label className="capitalize" htmlFor="min-year">
            <span hidden>min year</span>
            <CalendarMinus2 className="text-slate-500" size={iconSize} />
          </Label>

          <Input
            placeholder="min year"
            name="min-year"
            type="number"
            min={1900}
            max={new Date().getFullYear()}
            step={1}
            className="flex-grow border-0 bg-transparent placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        <div className="flex flex-grow items-center gap-1 rounded-lg border border-slate-300 bg-[whitesmoke] ps-3">
          <Label className="capitalize" htmlFor="max-year">
            <span hidden>max year</span>
            <CalendarPlus2 className="text-slate-500" size={iconSize} />
          </Label>

          <Input
            placeholder="max year"
            name="max-year"
            type="number"
            min={1900}
            max={new Date().getFullYear()}
            step={1}
            className="flex-grow border-0 bg-transparent placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      <div className="flex flex-1 items-center gap-2 md:gap-5">
        <div className="flex flex-grow items-center gap-1 rounded-lg border border-slate-300 bg-[whitesmoke] ps-3">
          <Label className="capitalize" htmlFor="min-mileage">
            <span hidden>min mileage</span>
            <GaugeCircle className="text-slate-500" size={iconSize} />
          </Label>

          <Input
            placeholder="min mileage"
            name="min-mileage"
            type="number"
            min={0}
            max={1000000}
            step={10}
            className="flex-grow border-0 bg-transparent placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        <div className="flex flex-grow items-center gap-1 rounded-lg border border-slate-300 bg-[whitesmoke] ps-3">
          <Label className="capitalize" htmlFor="max-mileage">
            <span hidden>max mileage</span>
            <GaugeCircle className="text-slate-500" size={iconSize} />
          </Label>

          <Input
            placeholder="max mileage"
            name="max mileage"
            type="number"
            min={0}
            max={1000000}
            step={10}
            className="flex-grow border-0 bg-transparent placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      <div className="mt-5 px-2 text-center md:text-end">
        <Button
          className="border-white bg-primary-default text-white"
          type="submit"
          variant="outline"
        >
          Search
          <Search size={iconSize} />
        </Button>
      </div>
    </form>
  );
}
