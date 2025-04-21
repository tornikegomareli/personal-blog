import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import Link from "./Link";
import Color from "colorjs.io";
import { sans } from "./fonts";
import IntroSection from "./IntroSection";
import RecentPostsScroll from "./RecentPostsScroll";
import RSSButton from "./components/RSSButton";

export const metadata = {
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
};

export async function getPosts() {
  const entries = await readdir("./public/", { withFileTypes: true });
  const dirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  const fileContents = await Promise.all(
    dirs.map((dir) => readFile("./public/" + dir + "/index.md", "utf8")),
  );
  const posts = dirs.map((slug, i) => {
    const fileContent = fileContents[i];
    const { data } = matter(fileContent);

    let image = null;
    const imageRegex = /!\[[^\]]*\]\(([^)]+)\)/;
    const match = fileContent.match(imageRegex);
    if (match && match[1]) {
      image = match[1];
    }

    return {
      slug,
      ...data,
      image,
    };
  });
  posts.sort((a, b) => {
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
    </>
  );
}
