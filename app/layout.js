import Link from "./Link";
import HomeLink from "./HomeLink";
import AutoRefresh from "./AutoRefresh";
import ThemeToggle from "./ThemeToggle";
import ThemeScript from "./ThemeScript";
import { sans, serif } from "./fonts";
import "./global.css";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import { cookies } from 'next/headers';

export default function RootLayout({ children }) {
  // Check if in preview mode
  const cookieStore = cookies();
  const isPreview = cookieStore.has('__prerender_bypass');

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/tornikegomareli",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tornikegomareli/",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://x.com/tornikegomareli",
      label: "Twitter"
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@Devtherapy",
      label: "YouTube"
    }
  ];

  return (
    <AutoRefresh>
      <html lang="en" className={`${sans.variable} ${serif.variable}`}>
        <head>
          <ThemeScript />
        </head>
        <body className="mx-auto max-w-2xl bg-[--bg] px-5 py-12 text-[--text] font-sans">
          {isPreview && (
            <div className="fixed top-0 left-0 right-0 bg-blue-600 text-white py-2 px-4 text-center z-50">
              Preview Mode Active - <a href="/api/exit-preview" className="underline hover:text-blue-200">Exit Preview</a>
            </div>
          )}
          <header className="mb-14">
            <div className="flex flex-row place-content-between items-center">
              <HomeLink />
              <div className="flex items-center gap-4">
                <ThemeToggle />
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[--text] hover:text-gray-600 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
          </header>
          <main>{children}</main>
          <Analytics />
        </body>
      </html>
    </AutoRefresh>
  );
}
