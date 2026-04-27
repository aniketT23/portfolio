export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-purple-500/10 text-gray-500 text-center py-4 sm:py-6 px-4 text-xs sm:text-sm">
      <div className="flex justify-center gap-6 mb-3">
        <a href="https://github.com/aniketT23" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/aniket23/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">LinkedIn</a>
        <a href="https://twitter.com/AniketT02969951" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Twitter</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Aniket Tiwari. All rights reserved.</p>
    </footer>
  );
}
