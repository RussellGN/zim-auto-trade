import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import { ReactNode } from "react";

type propTypes = {
  children?: ReactNode;
  legend: string;
  className?: string;
  description?: string;
};

export default function FieldSet({ children, legend, className, description }: propTypes) {
  return (
    <fieldset
      className={cn("flex flex-1 flex-col gap-4 rounded-lg border border-slate-400 p-5", className)}
    >
      <legend className="mx-4 px-2">{legend}</legend>

      {description && (
        <p className="mb-2">
          <Info size={14} className="-mt-1 inline" /> {description}
        </p>
      )}

      {children}
    </fieldset>
  );
}
