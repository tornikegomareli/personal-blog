"use client";
import Link from "../Link";
import { mono } from "../fonts";
import ThemeToggle from "../ThemeToggle";

export default function Navigation() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "OSS", href: "#opensource" },
    {
      label: "GitHub",
      href: "https://github.com/tornikegomareli",
      external: true,
    },
    { label: "Podcasts", href: "#podcasts" },
    { label: "Articles", href: "#articles" },
  ];

  return (
    <nav className="flex items-center justify-between py-6 mb-16">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center p-1">
          <img
            src="/sticker-bomb-3.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <span
          className={`${mono.className} text-xl font-bold text-gray-900 dark:text-white`}
        >
          Tornike Gomareli
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
            src="/personal-image.JPG"
            alt="Tornike Gomareli"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700"
          />
        </div>
      </div>
    </nav>
  );
}
