import { vehicleFeatures } from "@/lib/constants";
import { useState } from "react";
import { toast } from "../general/use-toast";

export default function useFeaturesSelector(defaultFeatures: string | undefined) {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(
    defaultFeatures?.split(";") || []
  );
  const [query, setQuery] = useState("");

  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function selectFeat(feat: string) {
    setSelectedFeatures((prev) => [...prev, feat]);
    setQuery("");
  }

  function deselectFeat(feat: string) {
    setSelectedFeatures((prev) => prev.filter((f) => f !== feat));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (selectedFeatures.indexOf(query) === -1) {
        setSelectedFeatures((prev) => [...prev, query]);
        setQuery("");
      } else {
        toast({
          title: "Could not add filter",
          description: `'${query}' has already been entered`,
          className: "bg-white shadow-lg",
        });
      }
    }
  }

  const filteredFeatures = query
    ? vehicleFeatures.filter(
        (feat) =>
          feat.toLowerCase().includes(query.toLowerCase()) && selectedFeatures.indexOf(feat) === -1
      )
    : [];

  return {
    query,
    selectedFeatures,
    filteredFeatures,
    handleQueryChange,
    deselectFeat,
    selectFeat,
    handleKeyDown,
  };
}
