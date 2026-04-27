import { NavLink } from "@/types";

interface DesktopNavProps {
  links: NavLink[];
}

export default function DesktopNav({ links }: DesktopNavProps) {
  return (
    <ul className="hidden md:flex gap-8">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="text-sm text-gray-400 hover:text-purple-400 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 hover:after:w-full after:transition-all after:duration-300"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
