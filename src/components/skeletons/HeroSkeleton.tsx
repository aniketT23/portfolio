import Skeleton from "./Skeleton";

export default function HeroSkeleton() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-black">
      <div className="text-center px-4 sm:px-6 lg:px-8 w-full max-w-2xl mx-auto">
        <Skeleton className="h-4 w-40 mx-auto mb-4 rounded-md" />
        <Skeleton className="h-10 sm:h-14 md:h-16 w-full mx-auto mb-6 rounded-lg" />
        <Skeleton className="h-5 w-3/4 mx-auto mb-8 rounded-md" />
        <Skeleton className="h-12 w-40 mx-auto rounded-full" />
      </div>
    </section>
  );
}
