import Skeleton from "./Skeleton";

export default function ContactSkeleton() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        <Skeleton className="h-8 sm:h-10 w-44 mx-auto mb-3 sm:mb-4 rounded-lg" />
        <Skeleton className="h-4 w-64 mx-auto mb-8 sm:mb-12 rounded-md" />
        <div className="grid gap-6">
          <div>
            <Skeleton className="h-4 w-12 mb-1 rounded-md" />
            <Skeleton className="h-12 w-full rounded-lg" />
          </div>
          <div>
            <Skeleton className="h-4 w-12 mb-1 rounded-md" />
            <Skeleton className="h-12 w-full rounded-lg" />
          </div>
          <div>
            <Skeleton className="h-4 w-16 mb-1 rounded-md" />
            <Skeleton className="h-32 w-full rounded-lg" />
          </div>
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
}
