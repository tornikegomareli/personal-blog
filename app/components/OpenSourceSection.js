"use client";
import { useState, useEffect } from "react";
import { mono } from "../fonts";

export default function OpenSourceSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/github/repos')
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch repos:', err);
        setLoading(false);
      });
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      'Swift': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'Rust': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      'JavaScript': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'TypeScript': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Python': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Go': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
      'C++': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Shell': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    };
    return colors[language] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  if (loading) {
    return (
      <section id="opensource" className="mb-20">
        <h2 className={`${mono.className} text-2xl font-bold text-gray-900 dark:text-white mb-8`}>
          Open Source Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-6 animate-pulse">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!repos.length) {
    return null;
  }

  return (
    <section id="opensource" className="mb-20">
      <h2 className={`${mono.className} text-2xl font-bold text-gray-900 dark:text-white mb-8`}>
        Open Source Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className={`${mono.className} font-semibold text-gray-900 dark:text-white flex-1 mr-2`}>
                {repo.name}
              </h3>
              <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className={`${mono.className} text-sm font-medium`}>
                  {repo.stars}
                </span>
              </div>
            </div>
            
            {repo.description && (
              <p className={`${mono.className} text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2`}>
                {repo.description}
              </p>
            )}
            
            <div className="flex items-center gap-2 flex-wrap">
              {repo.language && (
                <span className={`${mono.className} text-xs px-2 py-1 rounded-full ${getLanguageColor(repo.language)}`}>
                  {repo.language}
                </span>
              )}
              {repo.topics.slice(0, 2).map((topic) => (
                <span
                  key={topic}
                  className={`${mono.className} text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300`}
                >
                  {topic}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}