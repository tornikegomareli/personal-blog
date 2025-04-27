"use client";
import { sans } from "./fonts";
import Link from "./Link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

// Enhanced Post Card component
function PostCard({ post }) {
  const [isHovered, setIsHovered] = useState(false);
  const hasImage = post.image && post.image.length > 0;

  return (
    <div
      className="min-w-[320px] max-w-[320px] flex-shrink-0 rounded-xl overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300"
      style={{
        boxShadow: isHovered
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={"/" + post.slug + "/"} className="block h-full">
        {/* Image section with overlay gradient */}
        <div className="relative h-48 w-full overflow-hidden">
          {hasImage ? (
            <>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/api/placeholder/320/192";
                  e.target.className = "w-full h-full object-cover opacity-60";
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
          )}

          {/* Date badge */}
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow-md">
            {post.date && !isNaN(new Date(post.date).getTime()) 
              ? new Date(post.date).toLocaleDateString("en", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "Invalid Date"
            }
          </div>
        </div>

        {/* Content section */}
        <div className="p-5">
          <h3
            className={`${sans.className} font-bold text-xl mb-3 text-gray-900 dark:text-white line-clamp-2`}
          >
            {post.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
            {post.spoiler}
          </p>

          <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 mt-auto">
            Read Article
            <ArrowRight size={14} className="ml-1" />
          </div>
        </div>
      </Link>
    </div>
  );
}

// Main component
export default function RecentPostsScroll({ posts }) {
  const recentPosts = posts ? posts.slice(0, 5) : [];

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2
          className={`${sans.className} text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400`}
        >
          Recent Posts
        </h2>
        <Link
          href="/all-posts"
          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
        >
          All Posts <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>

      {/* Posts container with improved spacing */}
      <div className="overflow-x-auto pb-6 -mx-6 px-6 hide-scrollbar">
        <div className="flex gap-6">
          {recentPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      {/* Optional: Add custom scrollbar styles */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          height: 4px;
        }
        .hide-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .hide-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 20px;
        }
        .hide-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.2);
        }
        @media (prefers-color-scheme: dark) {
          .hide-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
          }
          .hide-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        }
      `}</style>
    </section>
  );
}
