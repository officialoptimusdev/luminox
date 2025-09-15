// src/hooks/usePagination.js
import { useState, useMemo } from "react";

export function usePagination(data = [], pageSize = 6) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(data.length / pageSize);

  const currentData = useMemo(() => {
    const start = page * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page, pageSize]);

  const goPrev = () => setPage((p) => Math.max(p - 1, 0));
  const goNext = () => setPage((p) => Math.min(p + 1, totalPages - 1));

  return { page, setPage, totalPages, currentData, goPrev, goNext };
}
