"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="flex justify-center gap-8 py-4 bg-gray-900 text-white fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={clsx(
            "hover:text-blue-400 transition",
            pathname === item.path && "text-blue-400 font-semibold"
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
