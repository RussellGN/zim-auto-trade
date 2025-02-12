import { Button } from "@/components/ui/button";
import { iconSize } from "@/lib/constants";
import { ListingCategory } from "@/lib/types";
import { formatLongNumber } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type propTypes = { category: ListingCategory };

export default function Category({ category }: propTypes) {
  return (
    <div
      style={{ backgroundImage: `url(${category.image})` }}
      className={`relative aspect-[3/2] w-full rounded-lg bg-white bg-cover bg-no-repeat shadow md:rounded-2xl md:shadow-lg`}
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-l from-transparent to-black opacity-50 md:rounded-2xl md:bg-gradient-to-br md:via-transparent" />

      <div className="relative flex h-full flex-col-reverse items-start justify-between p-1.5 md:flex-row md:items-end md:p-3">
        <Button
          asChild
          className="h-fit gap-0.5 rounded bg-secondary-default px-1 py-0.5 text-xs font-semibold shadow-lg hover:bg-white md:rounded-xl md:px-2 md:py-[0.1rem] md:text-sm"
        >
          <Link href={{ pathname: "/offers", query: { category: category.queryValue } }}>
            {category.name}
            <ChevronRight size={iconSize} className="-mb-[2px]" />
          </Link>
        </Button>

        <p className="flex items-center gap-2 text-xs font-semibold text-white md:text-base">
          {formatLongNumber(category.count)}{" "}
          <category.icon size={iconSize} className="scale-95 md:scale-100" />
        </p>
      </div>
    </div>
  );
}
