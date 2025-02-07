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
  const currentPage = Number(searchParams.get("page")) || 1;
  const allPages = Array.from({ length: numberOfPages }, (_, i) => i + 1);
  const mappablePages = closestPages(currentPage, allPages, 5);

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={{ query: { page: currentPage - 1 } }} />
          </PaginationItem>
        )}
        {mappablePages.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              className={`border border-slate-500 p-1 transition-all ${
                currentPage === pageNumber ? "bg-primary-default text-white" : "bg-white"
              }`}
              href={{ query: { page: pageNumber } }}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
        {currentPage < numberOfPages && (
          <PaginationItem>
            <PaginationNext href={{ query: { page: currentPage + 1 } }} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}

function closestPages(currentPage: number, pages: number[], rangeLength: number) {
  const totalPages = pages.length;
  if (totalPages <= rangeLength) return pages;

  const halfRange = Math.floor(rangeLength / 2);
  let start = Math.max(0, currentPage - halfRange - 1);
  let end = start + rangeLength;

  if (end > totalPages) {
    end = totalPages;
    start = Math.max(0, end - rangeLength);
  }

  return pages.slice(start, end);
}
