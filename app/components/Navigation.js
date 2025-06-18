"use client";
import Link from "../Link";
import { mono } from "../fonts";
import ThemeToggle from "../ThemeToggle";

export default function Navigation() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "GitHub", href: "https://github.com/tornikegomareli", external: true },
    { label: "Podcasts", href: "#podcasts" },
    { label: "Articles", href: "#articles" },
  ];

  return (
    <nav className="flex items-center justify-between py-6 mb-16">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 bg-gray-900 dark:bg-white group-hover:rotate-180 transition-transform duration-500" />
        <span className={`${mono.className} text-xl font-bold text-gray-900 dark:text-white`}>
          TechPro
        </span>
      </Link>
      
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors`}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  href={item.href}
                  className={`${mono.className} text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors`}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <img
            src="https://avatars.githubusercontent.com/u/24585160?v=4"
            alt="Tornike Gomareli"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700"
          />
        </div>
      </div>
    </nav>
  );
}