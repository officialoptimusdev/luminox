// src/components/Cards/RelatedPosts.jsx
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Tab } from "@headlessui/react";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// import BlogFeaturedCards from "./BlogFeaturedCards";
// import { blogData } from "@/constants/data";
// import { usePagination } from "@/hooks/usePagination";
// import BlogSkeleton from "../Atoms/Skeletons/BlogSkeleton";

// export default function RelatedPosts({ currentId }) {
//   const [loading, setLoading] = useState(true);
//   const [pageLoading, setPageLoading] = useState(false);

//   // simulate async fetch — in real case you’d fetch related posts from API
//   const [related, setRelated] = useState([]);
//   useEffect(() => {
//     setLoading(true);
//     fetchBlogs()
//       .then((blogs) => {
//         setRelated(blogs.filter((b) => b.id !== currentId));
//       })
//       .finally(() => setLoading(false));
//   }, [currentId]);
  

//   const { page, setPage, totalPages, currentData, goPrev, goNext } =
//     usePagination(related, 3);

//   // handle page change with skeleton
//   const handleSetPage = (newPage) => {
//     setPageLoading(true);
//     setTimeout(() => {
//       setPage(newPage);
//       setPageLoading(false);
//     }, 500); // half-second skeleton delay
//   };

//   const handleGoPrev = () => handleSetPage(page - 1);
//   const handleGoNext = () => handleSetPage(page + 1);

//   return (
//     <section className="mt-20">
//       <h2 className="text-2xl font-bold mb-6">Related Posts</h2>

//       {loading ? (
//         <BlogSkeleton count={3} />
//       ) : (
//         <>
//           {pageLoading ? (
//             <BlogSkeleton count={3} />
//           ) : (
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={page} // re-trigger animation on page change
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -15 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//               >
//                 <BlogFeaturedCards blogs={currentData} />
//               </motion.div>
//             </AnimatePresence>
//           )}

//           {totalPages > 1 && (
//             <div className="flex items-center justify-end gap-6 mt-8">
//               {/* Left Arrow */}
//               <button
//                 onClick={handleGoPrev}
//                 disabled={page === 0}
//                 className={`p-2 rounded-full border ${
//                   page === 0
//                     ? "text-gray-300 border-gray-200 cursor-not-allowed"
//                     : "text-gray-600 hover:bg-gray-100"
//                 }`}
//               >
//                 <ArrowLeft size={18} />
//               </button>

//               {/* Pagination dots */}
//               <Tab.Group selectedIndex={page} onChange={handleSetPage}>
//                 <Tab.List className="flex gap-3">
//                   {Array.from({ length: totalPages }).map((_, idx) => (
//                     <Tab
//                       key={idx}
//                       className={({ selected }) =>
//                         `text-sm px-3 py-1 rounded-full border ${
//                           selected
//                             ? "bg-sky-600 text-white"
//                             : "bg-gray-100 text-gray-500 hover:bg-gray-200"
//                         }`
//                       }
//                     >
//                       {String(idx + 1).padStart(2, "0")}
//                     </Tab>
//                   ))}
//                 </Tab.List>
//               </Tab.Group>

//               {/* Right Arrow */}
//               <button
//                 onClick={handleGoNext}
//                 disabled={page === totalPages - 1}
//                 className={`p-2 rounded-full border ${
//                   page === totalPages - 1
//                     ? "text-gray-300 border-gray-200 cursor-not-allowed"
//                     : "text-gray-600 hover:bg-gray-100"
//                 }`}
//               >
//                 <ArrowRight size={18} />
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </section>
//   );
// }


import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tab } from "@headlessui/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import BlogFeaturedCards from "./BlogFeaturedCards";
import { usePagination } from "@/hooks/usePagination";
import BlogSkeleton from "../Atoms/Skeletons/BlogSkeleton";
import { fetchBlogs } from "@/lib/fetchBlogs";

export default function RelatedPosts({ currentId }) {
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchBlogs()
      .then((blogs) => {
        setRelated(blogs.filter((b) => b.id !== currentId));
      })
      .finally(() => setLoading(false));
  }, [currentId]);

  const { page, setPage, totalPages, currentData } = usePagination(related, 3);

  const handleSetPage = (newPage) => {
    setPageLoading(true);
    setTimeout(() => {
      setPage(newPage);
      setPageLoading(false);
    }, 500);
  };

  return (
    <section className="mt-20">
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>

      {loading ? (
        <BlogSkeleton count={3} />
      ) : pageLoading ? (
        <BlogSkeleton count={3} />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <BlogFeaturedCards blogs={currentData} />
          </motion.div>
        </AnimatePresence>
      )}

      {/* {totalPages > 1 && (
        <div className="flex items-center justify-end gap-6 mt-8">
          <button
            onClick={() => handleSetPage(page - 1)}
            disabled={page === 0}
            className={`p-2 rounded-full border ${
              page === 0
                ? "text-gray-300 border-gray-200 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <ArrowLeft size={18} />
          </button>

          <Tab.Group selectedIndex={page} onChange={handleSetPage}>
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

          <button
            onClick={() => handleSetPage(page + 1)}
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
      )} */}
    </section>
  );
}
