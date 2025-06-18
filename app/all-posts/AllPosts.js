import { mono } from "../fonts";
import Link from "../Link";
import { getPosts } from "../page";
import Navigation from "../components/Navigation";

export const metadata = {
  title: "All Articles - Tornike Gomareli",
  description: "Browse all blog posts by Tornike Gomareli",
};

function PostItem({ post }) {
  return (
    <Link href={"/" + post.slug + "/"} className="group block">
      <article className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
        <div className="flex items-start justify-between mb-3">
          <h2 className={`${mono.className} text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
            {post.title}
          </h2>
          <time className={`${mono.className} text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4`}>
            {new Date(post.date).toLocaleDateString("en", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </div>
        
        {post.spoiler && (
          <p className={`${mono.className} text-sm text-gray-600 dark:text-gray-400 line-clamp-2`}>
            {post.spoiler}
          </p>
        )}
        
        <div className="flex items-center gap-2 mt-3">
          <span className={`${mono.className} text-xs text-blue-600 dark:text-blue-400`}>
            Read more →
          </span>
        </div>
      </article>
    </Link>
  );
}

export default async function AllPosts() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navigation />
        
        <div className="mb-12">
          <Link href="/" className={`${mono.className} text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-2 mb-8`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
          
          <h1 className={`${mono.className} text-3xl font-bold text-gray-900 dark:text-white mb-4`}>
            All Articles
          </h1>
          <p className={`${mono.className} text-gray-600 dark:text-gray-400`}>
            {posts.length} articles about Swift, Rust, and software engineering
          </p>
        </div>

        <div className="grid gap-4 mb-20">
          {posts.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}