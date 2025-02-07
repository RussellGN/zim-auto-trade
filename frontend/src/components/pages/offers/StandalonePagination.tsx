"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

type propTypes = {
  numberOfPages: number;
};

export default function StandalonePagination({ numberOfPages }: propTypes) {
  const searchParams = useSearchParams();
  let currentPage = Number(searchParams.get("page")) || 1;
  const allPages = new Array(numberOfPages).fill(0);
  const mappablePages = closestPages(currentPage, allPages, 5);

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={{ query: { page: currentPage - 1 } }} />
          </PaginationItem>
        )}
        {mappablePages.map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              className={`border border-slate-500 p-1 transition-all ${currentPage === index + 1 ? "bg-primary-default text-white" : "bg-white"}`}
              href={{ query: { page: index + 1 } }}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}

        {currentPage < numberOfPages && (
          <PaginationItem>
            <PaginationNext href={{ query: { page: currentPage + 1 } }} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}

function closestPages(midIndex: number, pages: number[], rangeLength: number) {
  if (pages.length <= rangeLength) return pages;
  else if (midIndex - 2 > -1) return pages.slice(midIndex - 2, midIndex + 2);
  else return pages.slice(0, 4);
}
