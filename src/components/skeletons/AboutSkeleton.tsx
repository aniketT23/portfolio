import Skeleton from "./Skeleton";

export default function AboutSkeleton() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center bg-gray-950 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex justify-center">
          <Skeleton className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-8 sm:h-10 w-48 rounded-lg mx-auto md:mx-0" />
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-5/6 rounded-md" />
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-3/4 rounded-md" />
        </div>
      </div>
    </section>
  );
}
