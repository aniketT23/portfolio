import Skeleton from "./Skeleton";

export default function NavbarSkeleton() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <Skeleton className="h-6 w-24 rounded-md" />
        <div className="hidden md:flex gap-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-14 rounded-md" />
          ))}
        </div>
        <Skeleton className="md:hidden h-6 w-6 rounded" />
      </div>
    </nav>
  );
}
