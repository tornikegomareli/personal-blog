// app/all-posts/page.js
import { sans } from "../fonts";
import Link from "../Link";
import { getPosts } from "../page";

export const metadata = {
  title: "All Posts - Tornike's Corner",
  description: "Browse all blog posts by Tornike Gomareli",
};

function PostItem({ post }) {
  return (
    <Link
      className="block py-6 border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors px-4 -mx-4 rounded"
      href={"/" + post.slug + "/"}
    >
      <article>
        <h2
          className={`${sans.className} text-xl font-bold text-[--title] mb-1`}
        >
          {post.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {new Date(post.date).toLocaleDateString("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p>{post.spoiler}</p>
      </article>
    </Link>
  );
}

export default async function AllPosts() {
  const posts = await getPosts();

  return (
    <div>
      <h1
        className={`${sans.className} text-3xl font-black mb-8 text-[--title]`}
      >
        All Posts
      </h1>

      <div className="flex flex-col">
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
