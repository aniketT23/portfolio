import { NavLink } from "@/types";

interface MobileMenuProps {
  links: NavLink[];
  onLinkClick: () => void;
}

export default function MobileMenu({ links, onLinkClick }: MobileMenuProps) {
  return (
    <ul className="md:hidden bg-[#0a0a0f]/98 border-t border-purple-500/10 px-6 pb-4">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="block py-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
            onClick={onLinkClick}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
