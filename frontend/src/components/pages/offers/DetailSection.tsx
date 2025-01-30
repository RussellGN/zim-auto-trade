import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type propTypes = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function DetailSection({
  title,
  children,
  className,
}: propTypes) {
  return (
    <section
      className={cn(
        "rounded-xl border border-primary-light bg-white p-4 shadow-md",
        className,
      )}
    >
      <h2 className="mb-3 font-bold capitalize text-gray-800">{title}</h2>

      {children}
    </section>
  );
}
