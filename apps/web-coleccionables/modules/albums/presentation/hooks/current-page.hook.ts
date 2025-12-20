import { useState } from "react";

const TOTAL_PAGE = 10;

export function useCurrentPageHook() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < TOTAL_PAGE) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentPage,
    totalPage: TOTAL_PAGE,
    nextPage,
    prevPage,
  };
}
