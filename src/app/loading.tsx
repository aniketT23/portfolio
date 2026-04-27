import {
  NavbarSkeleton,
  HeroSkeleton,
  AboutSkeleton,
  SkillsSkeleton,
  ProjectsSkeleton,
  ContactSkeleton,
} from "@/components/skeletons";

export default function Loading() {
  return (
    <>
      <NavbarSkeleton />
      <main>
        <HeroSkeleton />
        <AboutSkeleton />
        <SkillsSkeleton />
        <ProjectsSkeleton />
        <ContactSkeleton />
      </main>
    </>
  );
}
