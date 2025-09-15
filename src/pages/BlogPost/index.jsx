// import { useParams } from "react-router-dom";
// import { blogData } from "@/constants/data";
// import RelatedPosts from "@/components/Cards/RelatedPosts";
// import Breadcrumb from "@/components/Atoms/Breadcrumb";
// import { useEffect, useState } from "react";

// const BlogPost = () => {
//   const { id } = useParams();
//   const blog = blogData.find((b) => b.id === parseInt(id));

//   const [isScrolled, setIsScrolled] = useState(false);

//   // Track scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   if (!blog) {
//     return (
//       <main className="max-w-4xl mx-auto px-6 py-20">
//         <p className="text-center text-gray-500">Blog post not found.</p>
//       </main>
//     );
//   }

//   return (
//     <main
//       className={`max-w-6xl mx-auto px-6 py-10 transition-all duration-500 ${
//         isScrolled ? "bg-white shadow-lg rounded-2xl p-8" : ""
//       }`}
//     >
//       {/* Breadcrumb */}
//       <Breadcrumb
//         items={[
//           { label: "Blog", href: "/blog" },
//           { label: blog.title },
//         ]}
//       />

//       {/* Title */}
//       <h1
//         className={`font-bold mb-4 transition-all duration-500 ${
//           isScrolled ? "text-3xl" : "text-4xl"
//         }`}
//       >
//         {blog.title}
//       </h1>

//       {/* Author + Date */}
//       <p className="text-gray-500 mb-6 text-sm">
//         Posted on {blog.date} by{" "}
//         <span className="text-sky-600">{blog.author}</span>
//       </p>

//       {/* Featured Image */}
//       <img
//         src={blog.image}
//         alt={blog.title}
//         className={`w-full object-cover rounded-2xl mb-8 shadow transition-all duration-500 ${
//           isScrolled ? "h-[250px]" : "h-[400px]"
//         }`}
//       />

//       {/* Blog Content */}
//       <article
//         className={`prose prose-lg max-w-none transition-all duration-500 ${
//           isScrolled ? "prose-sky" : "prose-gray"
//         }`}
//         dangerouslySetInnerHTML={{ __html: blog.content }}
//       />

//       {/* Related Posts */}
//       <RelatedPosts currentId={blog.id} />
//     </main>
//   );
// };

// export default BlogPost;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBlogs } from "@/lib/fetchBlogs";
import RelatedPosts from "@/components/Cards/RelatedPosts";
import Breadcrumb from "@/components/Atoms/Breadcrumb";
import BlogPostSkeleton from "@/components/Atoms/Skeletons/BlogPostSkeleton";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchBlogs()
      .then((blogs) => {
        const found = blogs.find((b) => b.id === parseInt(id));
        setBlog(found || null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
  <div className="max-w-4xl w-full">
    <BlogPostSkeleton />
  </div>
</div>



    ); //  show reusable skeleton
  }

  if (!blog) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20">
        <Breadcrumb
        items={[{ label: "Blog", href: "/blog" }, { label: blog.title }]}
      />
        <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-gray-500 text-center py-40 font-bold text-[40px]"
          >
            Blog post not found.
          </motion.p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <Breadcrumb
        items={[{ label: "Blog", href: "/blog" }, { label: blog.title }]}
      />

      {/* Title */}
      <h1 className="font-bold mb-4 text-4xl">{blog.title}</h1>

      {/* Author + Date */}
      <p className="text-gray-500 mb-6 text-sm">
        Posted on {blog.date} by{" "}
        <span className="text-sky-600">{blog.author}</span>
      </p>

      {/* Featured Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full object-cover rounded-2xl mb-8 shadow h-[400px]"
      />

      {/* Blog Content */}
      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* Related Posts */}
      <RelatedPosts currentId={blog.id} />
    </main>
  );
};

export default BlogPost;
