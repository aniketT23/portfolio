import Skeleton from "./Skeleton";

export default function SkillsSkeleton() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <Skeleton className="h-8 sm:h-10 w-32 mx-auto mb-8 sm:mb-12 rounded-lg" />
        <div className="grid gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <Skeleton className="h-4 w-20 rounded-md" />
                <Skeleton className="h-4 w-10 rounded-md" />
              </div>
              <Skeleton className="h-2 w-full rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
