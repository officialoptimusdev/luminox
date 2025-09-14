import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BlogFeaturedCards({ blogs }) {
  // animation variants for stagger effect
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15, // delay each card slightly
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {blogs.map((blog) => (
        <motion.div key={blog.id} variants={card}>
          <Card className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white text-gray-900 flex flex-col">
            {/* Image */}
            <div className="relative w-full h-48">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <CardContent className="flex flex-col flex-1 p-5">
              <h3 className="font-semibold text-lg mb-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {blog.description}
              </p>

              <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
                <a href={`/blog/${blog.id}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full px-3 py-1 flex items-center gap-1 border border-emerald-300 hover:bg-emerald-300 hover:text-white"
                  >
                    Read More
                  </Button>
                </a>

                <p className="text-[10px]">
                  Posted on {blog.date} by{" "}
                  <span>
                    <a
                      href={blog.href}
                      className="text-sky-600 hover:underline text-[8px]"
                    >
                      {blog.author}
                    </a>
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
