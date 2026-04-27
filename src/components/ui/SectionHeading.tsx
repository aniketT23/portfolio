interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="w-20 h-[2px] mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-4" />
      {subtitle && <p className="text-sm sm:text-base text-gray-500">{subtitle}</p>}
    </div>
  );
}
