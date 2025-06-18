"use client";
import { sans } from "./fonts";
import Link from "./Link";

function PostItem({ post }) {
  return (
    <Link 
      href={"/" + post.slug + "/"} 
      className="group block py-3 border-b border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className={`${sans.className} font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
          {post.title}
        </h3>
        <time className="text-sm text-gray-500 dark:text-gray-400 flex-shrink-0" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </time>
      </div>
      {post.spoiler && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-1">
          {post.spoiler}
        </p>
      )}
    </Link>
  );
}

export default function AllPostsGrid({ posts }) {
  return (
    <section className="py-12">
      <h2 className={`${sans.className} text-2xl font-bold text-gray-900 dark:text-white mb-8`}>
        Recent Posts
      </h2>
      
      <div className="space-y-0">
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}