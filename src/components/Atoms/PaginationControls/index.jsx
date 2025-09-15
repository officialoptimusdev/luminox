import { Tab } from "@headlessui/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function PaginationControls({ page, setPage, totalPages, goPrev, goNext }) {
  if (totalPages <= 1) return null;

  // helper to scroll top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // wrap the page change with scroll
  const handleChangePage = (newPage) => {
    setPage(newPage);
    scrollToTop();
  };

  const handleGoPrev = () => {
    goPrev();
    scrollToTop();
  };

  const handleGoNext = () => {
    goNext();
    scrollToTop();
  };

  return (
    <div className="flex items-center justify-center gap-6 mt-8">
      {/* Left Arrow */}
      <button
        onClick={handleGoPrev}
        disabled={page === 0}
        className={`p-2 rounded-full border ${
          page === 0
            ? "text-gray-300 border-gray-200 cursor-not-allowed"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <ArrowLeft size={18} />
      </button>

      {/* Pagination numbers */}
      <Tab.Group selectedIndex={page} onChange={handleChangePage}>
        <Tab.List className="flex gap-3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                `text-sm px-3 py-1 rounded-full border ${
                  selected
                    ? "bg-sky-600 text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`
              }
            >
              {String(idx + 1).padStart(2, "0")}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>

      {/* Right Arrow */}
      <button
        onClick={handleGoNext}
        disabled={page === totalPages - 1}
        className={`p-2 rounded-full border ${
          page === totalPages - 1
            ? "text-gray-300 border-gray-200 cursor-not-allowed"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
