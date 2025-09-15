// import FeaturedBlog from "@/components/Featured/FeaturedBlog";
// import BlogHero from "@/components/Hero/BlogHero";
// import { useState } from "react";
// import { blogData } from "@/constants/data";

// const Blog = () => {
//    const [query, setQuery] = useState("");

//    // Filtering logic: match by title
//    const filteredBlogs = blogData.filter((blog) =>
//       blog.title.toLowerCase().includes(query.toLowerCase())
//    );



//    return (
//       <main className="w-full">
//          <BlogHero query={query} setQuery={setQuery} />
//          <div className="bg-white text-black mt-10">

//             <FeaturedBlog blogs={filteredBlogs} />
//          </div>
//       </main>
//    );
// };

// export default Blog;

import { useEffect, useState } from "react";
import FeaturedBlog from "@/components/Featured/FeaturedBlog";
import BlogHero from "@/components/Hero/BlogHero";
import { fetchBlogs } from "@/lib/fetchBlogs";
import { usePagination } from "@/hooks/usePagination";
import PaginationControls from "@/components/Atoms/PaginationControls";
import BlogSkeleton from "@/components/Atoms/Skeletons/BlogSkeleton";

const Blog = () => {
  const [query, setQuery] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    fetchBlogs()
      .then((data) => setBlogs(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(query.toLowerCase())
  );

  const { page, setPage, totalPages, currentData, goPrev, goNext } =
    usePagination(filteredBlogs, 6);

  // handle page change with skeleton
  const handleSetPage = (newPage) => {
    setPageLoading(true);
    setTimeout(() => {
      setPage(newPage);
      setPageLoading(false);
    }, 500); // half-second skeleton delay
  };

  const handleGoPrev = () => handleSetPage(page - 1);
  const handleGoNext = () => handleSetPage(page + 1);

  return (
    <main className="w-full">
      <BlogHero query={query} setQuery={setQuery} />

      <div className="bg-white text-black mt-10">
        {loading ? (
          <BlogSkeleton count={6} />
        ) : (
          <>
            {pageLoading ? (
              <BlogSkeleton count={6} />
            ) : (
              <FeaturedBlog blogs={currentData} />
            )}

            <PaginationControls
              page={page}
              setPage={handleSetPage} // wrap with skeleton effect
              totalPages={totalPages}
              goPrev={handleGoPrev}
              goNext={handleGoNext}
            />
          </>
        )}
      </div>
    </main>
  );
};

export default Blog;
