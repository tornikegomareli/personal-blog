import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import Link from "./Link";
import Color from "colorjs.io";
import { sans } from "./fonts";
import IntroSection from "./IntroSection";
import RecentPostsScroll from "./RecentPostsScroll";
import RecentPodcastsScroll from "./RecentPodcastsScroll";
import RSSButton from "./components/RSSButton";

export const metadata = {
  metadataBase: new URL('https://pipecraft.me'),
  title: "Tornike Gomareli",
  description: "A personal blog by Tornike Gomareli",
  alternates: {
    types: {
      "application/atom+xml":
        "https://tornike-gomareli-personal-website-yt6y.vercel.app/atom.xml",
      "application/rss+xml":
        "https://tornike-gomareli-personal-website-yt6y.vercel.app/rss.xml",
    },
  },
  openGraph: {
    title: "Tornike Gomareli",
    description: "A personal blog by Tornike Gomareli",
    url: "https://pipecraft.me",
    siteName: "Tornike Gomareli",
    images: [
      {
        url: '/sticker-bomb-3.png',
        width: 1200,
        height: 630,
        alt: 'Tornike Gomareli',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tornike Gomareli',
    description: 'A personal blog by Tornike Gomareli',
    images: ['/sticker-bomb-3.png'],
    creator: '@tornikegomareli',
  }
};

export async function getPosts() {
  const entries = await readdir("./public/", { withFileTypes: true });
  const dirs = entries
    .filter((entry) => entry.isDirectory())
    .filter((entry) => entry.name !== 'preview') // Skip the preview directory
    .map((entry) => entry.name);
    
  const fileContents = await Promise.all(
    dirs.map((dir) => {
      try {
        return readFile("./public/" + dir + "/index.md", "utf8");
      } catch (error) {
        console.error(`Error reading file for ${dir}:`, error);
        return null;
      }
    }),
  );
  
  // Filter out nulls from failed reads
  const validPosts = dirs.filter((_, i) => fileContents[i] !== null);
  const validContents = fileContents.filter(content => content !== null);
  
  const posts = validPosts.map((slug, i) => {
    const fileContent = validContents[i];
    try {
      const { data } = matter(fileContent);

      let image = null;
      const imageRegex = /!\[[^\]]*\]\(([^)]+)\)/;
      const match = fileContent.match(imageRegex);
      if (match && match[1]) {
        image = match[1];
      }

      // Validate the date
      const isValidDate = data.date && !isNaN(new Date(data.date).getTime());

      return {
        slug,
        ...data,
        date: isValidDate ? data.date : null,
        image,
      };
    } catch (error) {
      console.error(`Error parsing frontmatter for ${slug}:`, error);
      return {
        slug,
        title: slug,
        date: null,
        spoiler: "No description available",
        image: null,
      };
    }
  });
  
  // Sort posts, handling null dates
  posts.sort((a, b) => {
    // If either date is invalid, move it to the end
    if (!a.date) return 1;
    if (!b.date) return -1;
    
    return Date.parse(a.date) < Date.parse(b.date) ? 1 : -1;
  });
  
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <>
      <IntroSection />
      <RSSButton />
      <RecentPostsScroll posts={posts} />
      <RecentPodcastsScroll />
    </>
  );
}
