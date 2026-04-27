import Skeleton from "./Skeleton";

function ProjectCardSkeleton() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6">
      <Skeleton className="w-full h-32 sm:h-40 rounded-lg mb-3 sm:mb-4" />
      <Skeleton className="h-6 w-3/4 rounded-md mb-2" />
      <Skeleton className="h-4 w-full rounded-md mb-1" />
      <Skeleton className="h-4 w-5/6 rounded-md mb-3 sm:mb-4" />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-14 rounded" />
        <Skeleton className="h-6 w-16 rounded" />
        <Skeleton className="h-6 w-14 rounded" />
      </div>
    </div>
  );
}

export default function ProjectsSkeleton() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center bg-gray-950 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full">
        <Skeleton className="h-8 sm:h-10 w-36 mx-auto mb-8 sm:mb-12 rounded-lg" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
