import { blogData } from "@/constants/data";
import BlogFeaturedCards from "../../Cards/BlogFeaturedCards";

export default function FeaturedBlog({ limit }) {
  const blogsToRender = limit ? blogData.slice(0, limit) : blogData;

  return (
    <section className="relative bg-transparent overflow-hidden">
      {/* Blog content */}
      <div className="relative pt-10 md:pt-10 lg:pt-10 pb-12 px-6 md:px-12 lg:px-30 max-w-6xl mx-auto z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Blog Posts</h2>
        <BlogFeaturedCards blogs={blogsToRender} />
      </div>
    </section>
  );
}
