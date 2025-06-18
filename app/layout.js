import Link from "./Link";
import HomeLink from "./HomeLink";
import AutoRefresh from "./AutoRefresh";
import ThemeToggle from "./ThemeToggle";
import ThemeScript from "./ThemeScript";
import { sans, serif, mono } from "./fonts";
import "./global.css";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

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
      <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
        <head>
          <ThemeScript />
        </head>
        <body className="bg-[--bg] text-[--text] font-mono">
          <main>{children}</main>
          <Analytics />
        </body>
      </html>
    </AutoRefresh>
  );
}
