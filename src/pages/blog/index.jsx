import FeaturedBlog from "@/components/Featured/FeaturedBlog";
import BlogHero from "@/components/Hero/BlogHero";


const Blog = () => {
   return (
      <main className="w-full">
         <BlogHero />
         <div className="bg-white text-black mt-40"> 
          <FeaturedBlog />
          </div>
      </main>
   );
};

export default Blog;
