import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BlogFeaturedCards({ blogs }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <Card
          key={blog.id}
          className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white text-gray-900 flex flex-col"
        >
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
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
              {blog.description}
            </p>

            <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full px-3 py-1 flex items-center gap-1"
              >
               Read More 
                {/* <ArrowRight size={16} /> */}
              </Button>
             
              <p className="text-[10px]">
                Posted on {blog.date} by{" "}
                <span>   <a href={blog.href} className="text-sky-600 hover:underline text-[8px]">
                  {blog.author}
                </a></span>
             
              </p>
            </div>
          </CardContent>
        </Card>
      ))}

      
    </div>
  );
}
