import { useParams } from "react-router-dom";
import { blogData } from "@/constants/data";
import RelatedPosts from "@/components/Cards/RelatedPosts";
import Breadcrumb from "@/components/Atoms/Breadcrumb";
import { useEffect, useState } from "react";

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!blog) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-center text-gray-500">Blog post not found.</p>
      </main>
    );
  }

  return (
    <main
      className={`max-w-6xl mx-auto px-6 py-10 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-lg rounded-2xl p-8" : ""
      }`}
    >
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: blog.title },
        ]}
      />

      {/* Title */}
      <h1
        className={`font-bold mb-4 transition-all duration-500 ${
          isScrolled ? "text-3xl" : "text-4xl"
        }`}
      >
        {blog.title}
      </h1>

      {/* Author + Date */}
      <p className="text-gray-500 mb-6 text-sm">
        Posted on {blog.date} by{" "}
        <span className="text-sky-600">{blog.author}</span>
      </p>

      {/* Featured Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className={`w-full object-cover rounded-2xl mb-8 shadow transition-all duration-500 ${
          isScrolled ? "h-[250px]" : "h-[400px]"
        }`}
      />

      {/* Blog Content */}
      <article
        className={`prose prose-lg max-w-none transition-all duration-500 ${
          isScrolled ? "prose-sky" : "prose-gray"
        }`}
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* Related Posts */}
      <RelatedPosts currentId={blog.id} />
    </main>
  );
};

export default BlogPost;
