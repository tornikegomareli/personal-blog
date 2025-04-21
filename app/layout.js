import Link from "./Link";
import HomeLink from "./HomeLink";
import AutoRefresh from "./AutoRefresh";
import ThemeToggle from "./ThemeToggle";
import ThemeScript from "./ThemeScript";
import { sans, serif } from "./fonts";
import "./global.css";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

export default function RootLayout({ children }) {
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
        </body>
      </html>
    </AutoRefresh>
  );
}
