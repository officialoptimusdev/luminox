// import { blogData } from "@/constants/data";
// import BlogFeaturedCards from "../../Cards/BlogFeaturedCards";
// import { motion } from "framer-motion";

// export default function FeaturedBlog({ blogs, limit }) {
//   // fallback to blogData if blogs is not provided
//   const source = blogs ?? blogData;

//   const blogsToRender = limit ? source.slice(0, limit) : source;

//   return (
//     <section className="relative bg-transparent overflow-hidden">
//       <div className="relative pt-10 md:pt-10 lg:pt-10 pb-12 px-6 md:px-12 lg:px-30 max-w-6xl mx-auto z-10">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">Blog Posts</h2>

//         {blogsToRender.length > 0 ? (
//           <BlogFeaturedCards blogs={blogsToRender} />
//         ) : (
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//             className="text-gray-500 text-center py-40 font-bold text-[40px]"
//           >
//             No results found.
//           </motion.p>
//         )}
//       </div>
//     </section>
//   );
// }


import BlogSkeleton from "@/components/Atoms/Skeletons/BlogSkeleton";
import BlogFeaturedCards from "../../Cards/BlogFeaturedCards";
import { motion } from "framer-motion";


export default function FeaturedBlog({ blogs = [], limit, loading = false }) {
  const blogsToRender = limit ? blogs.slice(0, limit) : blogs;

  return (
    <section className="relative bg-transparent overflow-hidden mb-10">
      <div className="relative pt-10 pb-12 px-6 md:px-12 max-w-6xl mx-auto z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 mt-10">Blog Posts</h2>

        {loading ? (
          <BlogSkeleton count={6} />
        ) : blogsToRender.length > 0 ? (
          <BlogFeaturedCards blogs={blogsToRender} />
        ) : (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-gray-500 text-center py-40 font-bold text-[40px]"
          >
            No results found.
          </motion.p>
        )}
      </div>
    </section>
  );
}
