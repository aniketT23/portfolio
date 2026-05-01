export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10 px-6 w-full">
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-10">
        <p className="text-xs text-[var(--muted)]">
          &copy; {new Date().getFullYear()} Aniket Tiwari
        </p>
        <div className="flex gap-8">
          <a href="https://github.com/aniketT23" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/aniket23/" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200">
            LinkedIn
          </a>
          <a href="https://twitter.com/AniketT02969951" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
