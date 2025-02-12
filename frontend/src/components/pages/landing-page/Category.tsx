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
      className={`relative aspect-[3/2] w-full rounded-2xl bg-white bg-cover bg-no-repeat shadow-lg`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-black opacity-50"></div>

      <div className="relative flex h-full items-end justify-between p-3">
        <Button
          asChild
          className="h-fit gap-0.5 rounded-xl bg-[rgba(255,255,255,0.8)] px-2 py-[0.1rem] text-sm font-semibold shadow-lg hover:bg-white"
        >
          <Link href={{ pathname: "/offers", query: { category: category.queryValue } }}>
            {category.name}
            <ChevronRight size={iconSize} className="-mb-[2px]" />
          </Link>
        </Button>

        <p className="flex items-center gap-2 font-semibold text-white">
          {formatLongNumber(category.count)} <category.icon size={iconSize} />
        </p>
      </div>
    </div>
  );
}
