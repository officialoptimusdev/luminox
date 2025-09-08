// src/components/Cards/RelatedPosts.jsx
import { useState } from "react";
import { blogData } from "@/constants/data";
import BlogFeaturedCards from "./BlogFeaturedCards";
import { Tab } from "@headlessui/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RelatedPosts({ currentId }) {
  const related = blogData.filter((b) => b.id !== currentId);
  const pageSize = 3;
  const totalPages = Math.ceil(related.length / pageSize);
  const [page, setPage] = useState(0);

  const postsToShow = related.slice(page * pageSize, (page + 1) * pageSize);

  const goPrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const goNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  return (
    <section className="mt-20">
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>

      {/* AnimatePresence ensures exit + enter animation when posts change */}
      <AnimatePresence mode="wait">
        <motion.div
          key={page} // re-trigger animation on page change
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <BlogFeaturedCards blogs={postsToShow} />
        </motion.div>
      </AnimatePresence>

      {totalPages > 1 && (
        <div className="flex items-center justify-end gap-6 mt-8">
          {/* Left Arrow */}
          <button
            onClick={goPrev}
            disabled={page === 0}
            className={`p-2 rounded-full border ${
              page === 0
                ? "text-gray-300 border-gray-200 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <ArrowLeft size={18} />
          </button>

          {/* Pagination dots */}
          <Tab.Group selectedIndex={page} onChange={setPage}>
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
            onClick={goNext}
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
      )}
    </section>
  );
}
