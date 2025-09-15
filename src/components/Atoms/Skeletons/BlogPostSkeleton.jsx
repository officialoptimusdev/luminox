// src/components/Atoms/Skeletons/BlogPostSkeleton.jsx
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPostSkeleton() {
  return (
    <main className="">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Skeleton className="h-4 w-32 skeleton-shimmer" />
      </div>

      {/* Title */}
      <Skeleton className="h-10 w-3/4 mb-4 skeleton-shimmer" />

      {/* Author + Date */}
      <Skeleton className="h-4 w-48 mb-6 skeleton-shimmer" />

      {/* Featured Image */}
      <Skeleton className="w-full object-cover rounded-2xl mb-8 shadow h-[400px] skeleton-shimmer" />

      {/* Blog Content */}
      <div className="prose prose-lg max-w-none space-y-4">
        <Skeleton className="h-5 w-full skeleton-shimmer" />
        <Skeleton className="h-5 w-11/12 skeleton-shimmer" />
        <Skeleton className="h-5 w-10/12 skeleton-shimmer" />
        <Skeleton className="h-5 w-2/3 skeleton-shimmer" />
      </div>
    </main>
  );
}
