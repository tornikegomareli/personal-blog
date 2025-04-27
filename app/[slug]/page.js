import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "../Link";
import { sans } from "../fonts";
import remarkSmartpants from "remark-smartypants";
import rehypePrettyCode from "rehype-pretty-code";
import { remarkMdxEvalCodeBlock } from "./mdx.js";
import overnight from "overnight/themes/Overnight-Slumber.json";
import { cookies } from 'next/headers';
import "./markdown.css";

overnight.colors["editor.background"] = "var(--code-bg)";

export default async function PostPage({ params, searchParams }) {
  // Check if in preview mode
  const cookieStore = cookies();
  const isPreview = cookieStore.has('__prerender_bypass');
  
  const filename = "./public/" + params.slug + "/index.md";
  let file;
  
  try {
    file = await readFile(filename, "utf8");
  } catch (error) {
    // If the file doesn't exist and we're in preview mode, we might be viewing a new post
    if (isPreview && params.slug === 'preview') {
      // Return a preview template
      return (
        <article className="preview-template">
          <div className="bg-yellow-100 dark:bg-yellow-900 p-4 mb-6 rounded-lg border-l-4 border-yellow-500">
            <h2 className="font-bold text-yellow-800 dark:text-yellow-200">Preview Mode Active</h2>
            <p className="text-yellow-700 dark:text-yellow-300">
              This is a preview of your content. The content may not be published yet.
              <br />
              <a href="/api/exit-preview" className="underline hover:text-yellow-900 dark:hover:text-yellow-100">
                Exit Preview Mode
              </a>
            </p>
          </div>
          <h1 className={[sans.className, "text-[40px] font-black leading-[44px] text-[--title]"].join(" ")}>
            Preview Content
          </h1>
          <p className="mt-6 text-lg">
            This post is being previewed. The content may still be in draft form.
          </p>
        </article>
      );
    }
    // If not in preview mode, or the file genuinely doesn't exist
    throw error;
  }
  
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
    `https://pipecraft.me/${params.slug}/`
  )}`;
  const editUrl = `https://github.com/tornikegomareli/TornikeGomareli-personal-website/edit/main/public/${encodeURIComponent(
    params.slug,
  )}/index.md`;
  
  // Check if date is valid
  const isValidDate = data.date && !isNaN(new Date(data.date).getTime());
  const formattedDate = isValidDate 
    ? new Date(data.date).toLocaleDateString("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Draft";
  
  return (
    <article>
      {isPreview && (
        <div className="bg-blue-100 dark:bg-blue-900 p-4 mb-6 rounded-lg border-l-4 border-blue-500">
          <h2 className="font-bold text-blue-800 dark:text-blue-200">Preview Mode Active</h2>
          <p className="text-blue-700 dark:text-blue-300">
            You're viewing this content in preview mode.
            <br />
            <a href="/api/exit-preview" className="underline hover:text-blue-900 dark:hover:text-blue-100">
              Exit Preview Mode
            </a>
          </p>
        </div>
      )}
    
      <h1
        className={[
          sans.className,
          "text-[40px] font-black leading-[44px] text-[--title]",
        ].join(" ")}
      >
        {data.title}
      </h1>
      <p className="mt-2 text-[13px] text-gray-700 dark:text-gray-300">
        {formattedDate}
      </p>
      <div className="markdown mt-10 relative">
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
        <hr />
        <p>
          <Link href={discussLinkedinUrl}>Discuss on LinkedIn</Link>
          &nbsp;&nbsp;&middot;&nbsp;&nbsp;
          <Link href={editUrl}>Edit on GitHub</Link>
          {isPreview && (
            <>
              &nbsp;&nbsp;&middot;&nbsp;&nbsp;
              <Link href="/api/exit-preview">Exit Preview</Link>
            </>
          )}
        </p>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const entries = await readdir("./public/", { withFileTypes: true });
  const dirs = entries
    .filter((entry) => entry.isDirectory())
    .filter((entry) => entry.name !== 'preview') // Skip the preview directory for static generation
    .map((entry) => entry.name);
  return dirs.map((dir) => ({ slug: dir }));
}

export async function generateMetadata({ params }) {
  // Check if this is a preview route
  if (params.slug === 'preview') {
    return {
      title: "Content Preview — Tornike Gomareli",
      description: "Preview of unpublished content",
      robots: "noindex,nofollow" // Prevent search engines from indexing preview content
    };
  }
  
  try {
    const file = await readFile("./public/" + params.slug + "/index.md", "utf8");
    const { data } = matter(file);
    
    // Ensure we have valid data
    const title = data.title || params.slug;
    const description = data.spoiler || "A blog post by Tornike Gomareli";
    
    // Extract the first image from the content
    let image = '/sticker-bomb-3.png'; // Default image
    const imageRegex = /!\[[^\]]*\]\(([^)]+)\)/;
    const match = file.match(imageRegex);
    if (match && match[1]) {
      // If the image path is relative, make it absolute
      if (match[1].startsWith('/')) {
        image = match[1];
      } else {
        image = `/${match[1]}`;
      }
    }
    
    // Generate proper page URL
    const url = `https://pipecraft.me/${params.slug}/`;
    
    return {
      title: title + " — Tornike Gomareli",
      description: description,
      openGraph: {
        title: title,
        description: description,
        url: url,
        type: 'article',
        publishedTime: data.date,
        authors: ['Tornike Gomareli'],
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          }
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        creator: '@tornikegomareli',
        images: [image],
      }
    };
  } catch (error) {
    // Return default metadata if file can't be read
    return {
      title: "Post — Tornike Gomareli",
      description: "A blog post by Tornike Gomareli",
    };
  }
}
