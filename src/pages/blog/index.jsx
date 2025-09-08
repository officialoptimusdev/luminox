import FeaturedBlog from "@/components/Featured/FeaturedBlog";
import BlogHero from "@/components/Hero/BlogHero";
import { useState } from "react";
import { blogData } from "@/constants/data";

const Blog = () => {
   const [query, setQuery] = useState("");

   // Filtering logic: match by title
   const filteredBlogs = blogData.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase())
   );



   return (
      <main className="w-full">
         <BlogHero query={query} setQuery={setQuery} />
         <div className="bg-white text-black mt-10">

            <FeaturedBlog blogs={filteredBlogs} />
         </div>
      </main>
   );
};

export default Blog;
