import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "../Link";
import { mono } from "../fonts";
import Navigation from "../components/Navigation";
import remarkSmartpants from "remark-smartypants";
import rehypePrettyCode from "rehype-pretty-code";
import { remarkMdxEvalCodeBlock } from "./mdx.js";
import overnight from "overnight/themes/Overnight-Slumber.json";
import "./markdown.css";

overnight.colors["editor.background"] = "var(--code-bg)";

export default async function PostPage({ params }) {
  const filename = "./public/" + params.slug + "/index.md";
  const file = await readFile(filename, "utf8");
  let postComponents = {};
  try {
    postComponents = await import(
      "../../public/" + params.slug + "/components.js"
    );
  } catch (e) {
    if (!e || e.code !== "MODULE_NOT_FOUND") {
      throw e;
    }
  }
  const { content, data } = matter(file);
  const discussLinkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    `https://tornike-gomareli-personal-website-yt6y.vercel.app/${params.slug}/`
  )}`;
  const editUrl = `https://github.com/tornikegomareli/TornikeGomareli-personal-website/edit/main/public/${encodeURIComponent(
    params.slug,
  )}/index.md`;
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navigation />
        
        <article>
          <Link href="/" className={`${mono.className} text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-2 mb-8`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
          
          <header className="mb-12">
            <h1 className={`${mono.className} text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4`}>
              {data.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <time className={mono.className}>
                {new Date(data.date).toLocaleDateString("en", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span>•</span>
              <span className={mono.className}>Tornike Gomareli</span>
            </div>
            
            {data.spoiler && (
              <p className={`${mono.className} text-lg text-gray-600 dark:text-gray-400 mt-4`}>
                {data.spoiler}
              </p>
            )}
          </header>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="markdown">
              <MDXRemote
                source={content}
                components={{
                  a: Link,
                  ...postComponents,
                }}
                options={{
                  mdxOptions: {
                    useDynamicImport: true,
                    remarkPlugins: [
                      remarkSmartpants,
                      [remarkMdxEvalCodeBlock, filename],
                    ],
                    rehypePlugins: [
                      [
                        rehypePrettyCode,
                        {
                          theme: overnight,
                        },
                      ],
                    ],
                  },
                }}
              />
            </div>
          </div>
          
          <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 mb-20">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
              <Link 
                href={discussLinkedinUrl} 
                className={`${mono.className} text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-2`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Discuss on LinkedIn
              </Link>
              
              <Link 
                href={editUrl} 
                className={`${mono.className} text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-2`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit on GitHub
              </Link>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/all-posts" 
                className={`${mono.className} inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors`}
              >
                View all articles
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const entries = await readdir("./public/", { withFileTypes: true });
  const dirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  return dirs.map((dir) => ({ slug: dir }));
}

export async function generateMetadata({ params }) {
  const file = await readFile("./public/" + params.slug + "/index.md", "utf8");
  let { data } = matter(file);
  return {
    title: data.title + " — Tornike Gomareli",
    description: data.spoiler,
  };
}