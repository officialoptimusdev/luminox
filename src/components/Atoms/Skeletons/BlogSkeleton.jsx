// src/components/Atoms/Skeletons/BlogSkeleton.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogSkeleton({ count = 6 }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {Array.from({ length: count }).map((_, idx) => (
        <Card
          key={idx}
          className="rounded-2xl overflow-hidden shadow-sm bg-white flex flex-col"
        >
          {/* Image skeleton */}
          <div className="relative w-full h-48">
            <Skeleton className="absolute inset-0 skeleton-shimmer" />
          </div>

          {/* Content */}
          <CardContent className="flex flex-col flex-1 p-5 space-y-4">
            {/* Title */}
            <Skeleton className="h-6 w-3/4 skeleton-shimmer" />

            {/* Description */}
            <Skeleton className="h-4 w-full skeleton-shimmer" />
            <Skeleton className="h-4 w-5/6 skeleton-shimmer" />

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between">
              <Skeleton className="h-8 w-20 rounded-full skeleton-shimmer" />
              <Skeleton className="h-4 w-28 skeleton-shimmer" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
