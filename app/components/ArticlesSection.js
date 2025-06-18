"use client";
import { mono } from "../fonts";
import Link from "../Link";

export default function ArticlesSection({ posts }) {
  /// Show only the latest 3 posts
  const latestPosts = posts.slice(0, 3);

  return (
    <section id="articles" className="mb-20">
      <h2 className={`${mono.className} text-2xl font-bold text-gray-900 dark:text-white mb-8`}>
        Articles
      </h2>
      
      <div className="space-y-6">
        {latestPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/${post.slug}/`}
            className="group block"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden p-8">
              <h3 className={`${mono.className} text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                {post.title}
              </h3>
              <p className={`${mono.className} text-gray-700 dark:text-gray-300 mb-4 line-clamp-2`}>
                {post.spoiler}
              </p>
              
              <div className="flex items-center justify-between">
                <time className={`${mono.className} text-sm text-gray-600 dark:text-gray-400`} dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                
                <span className={`${mono.className} text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline`}>
                  Read Article →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {posts.length > 3 && (
        <div className="text-center mt-8">
          <Link
            href="/all-posts"
            className={`${mono.className} inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium`}
          >
            View All Articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
}