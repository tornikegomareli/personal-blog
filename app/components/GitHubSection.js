"use client";
import { mono } from "../fonts";

export default function GitHubSection() {
  /// Placeholder data for GitHub contributions
  const contributionData = {
    totalContributions: 1337,
    streak: 42,
    repositories: [
      { name: "swift-collections", stars: 245, language: "Swift" },
      { name: "vapor-auth", stars: 189, language: "Swift" },
      { name: "rustlings-solutions", stars: 156, language: "Rust" },
    ]
  };

  return (
    <section className="mb-20 text-center">
      <h2 className={`${mono.className} text-2xl font-bold text-gray-900 dark:text-white mb-8`}>
        GitHub Contributions
      </h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <p className={`${mono.className} text-3xl font-bold text-gray-900 dark:text-white`}>
              {contributionData.totalContributions}
            </p>
            <p className={`${mono.className} text-sm text-gray-600 dark:text-gray-400`}>
              Total Contributions
            </p>
          </div>
          <div>
            <p className={`${mono.className} text-3xl font-bold text-gray-900 dark:text-white`}>
              {contributionData.streak}
            </p>
            <p className={`${mono.className} text-sm text-gray-600 dark:text-gray-400`}>
              Day Streak
            </p>
          </div>
        </div>
        
        <div className="space-y-3 mb-8">
          {contributionData.repositories.map((repo, index) => (
            <div key={index} className="flex items-center justify-between text-left p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <div>
                <p className={`${mono.className} font-medium text-gray-900 dark:text-white`}>
                  {repo.name}
                </p>
                <p className={`${mono.className} text-xs text-gray-600 dark:text-gray-400`}>
                  {repo.language}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className={`${mono.className} text-sm text-gray-600 dark:text-gray-400`}>
                  {repo.stars}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <a
          href="https://github.com/tornikegomareli"
          target="_blank"
          rel="noopener noreferrer"
          className={`${mono.className} inline-flex items-center justify-center w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors`}
        >
          View GitHub Profile
        </a>
      </div>
    </section>
  );
}