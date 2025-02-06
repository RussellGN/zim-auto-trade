"use client";

import { vehicleFeatures } from "@/lib/constants";
import { capitalize } from "lodash";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function FeaturesSelector() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      console.log("Option selected or Enter pressed:", value);
      setSelectedFeatures((prev) => [...prev, value]);
    }
  }

  return (
    <div className="flex max-h-[8rem] flex-wrap gap-2.5 overflow-y-auto border bg-slate-50 p-3">
      <>
        {selectedFeatures.map((feature) => (
          <small
            key={feature}
            className="rounded-md border border-slate-300 bg-[whitesmoke] px-1.5 py-1 text-sm"
          >
            {capitalize(feature)}
          </small>
        ))}

        <input
          type="hidden"
          name="features"
          value={selectedFeatures.join(";")}
        />
      </>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            size="icon"
            role="combobox"
            aria-expanded={open}
          >
            <Plus size={18} />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="w-[200px] bg-white p-0"
          side="right"
          align="start"
        >
          <Command>
            <CommandInput
              placeholder="Type feature..."
              onKeyDown={handleKeyDown}
            />

            <CommandList>
              <CommandEmpty>0 found, press enter to add</CommandEmpty>

              <CommandGroup className="m-2 ml-0 max-h-[6.5rem] overflow-y-auto">
                {vehicleFeatures
                  .map((f) => ({ value: f, label: f.toUpperCase() }))
                  .map((feature) => (
                    <CommandItem
                      key={feature.value}
                      value={feature.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {/* <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === feature.value ? "opacity-100" : "opacity-0"
                        )}
                      /> */}
                      {capitalize(feature.label)}
                    </CommandItem>
                  ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
