"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useFeaturesSelector from "@/hooks/component-hooks/useFeaturesSelector";
import { Square, X } from "lucide-react";

export default function FeaturesSelector() {
  const {
    query,
    selectedFeatures,
    filteredFeatures,
    handleQueryChange,
    deselectFeat,
    selectFeat,
    handleKeyDown,
  } = useFeaturesSelector();

  return (
    <div className="h-[15rem]">
      <div className="flex max-h-full flex-wrap items-start gap-1 overflow-y-auto border bg-slate-50 px-3 py-5">
        <>
          {selectedFeatures.map((feat) => (
            <FeatureOption
              feat={feat}
              key={feat}
              selectFeat={selectFeat}
              deselectFeat={deselectFeat}
              isSelected
            />
          ))}

          <input type="hidden" name="features" value={selectedFeatures.join(";")} />
        </>

        <Input
          id="dontSubmit"
          value={query}
          onChange={handleQueryChange}
          onKeyDown={handleKeyDown}
          placeholder="Type features..."
          className="my-1 h-fit w-full border-0 bg-transparent p-0 focus-visible:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />

        {filteredFeatures.map((feat) => (
          <FeatureOption
            feat={feat}
            key={feat}
            selectFeat={selectFeat}
            deselectFeat={deselectFeat}
          />
        ))}
      </div>
    </div>
  );
}

type featureOptionPropTypes = {
  feat: string;
  isSelected?: boolean;
  selectFeat: (feat: string) => void;
  deselectFeat: (feat: string) => void;
};

function FeatureOption({ feat, isSelected, selectFeat, deselectFeat }: featureOptionPropTypes) {
  return (
    <Button
      onClick={isSelected ? () => deselectFeat(feat) : () => selectFeat(feat)}
      variant="outline"
      type="button"
      size="sm"
      className={`h-fit w-fit border-slate-500 px-1.5 py-1 text-xs font-normal ${isSelected ? "bg-slate-300" : ""}`}
    >
      {feat}
      {isSelected ? <X size={14} /> : <Square size={14} />}
    </Button>
  );
}
