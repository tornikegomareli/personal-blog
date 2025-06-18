"use client";
import { mono } from "../fonts";
import { PlayCircle } from "lucide-react";

export default function PodcastSection() {
  const latestPodcast = {
    title: "Devtherapy Podcast",
    description: "Technical podcast about engineering where I discuss software development, systems programming, and share insights with guest engineers from around the world.",
    episode: "Episode #18 – Levan Mamulashvili | Technical Leadership, Career Strategy, MIT, Forbes",
    url: "https://youtu.be/aECGCXO1Nus",
    thumbnail: "https://img.youtube.com/vi/aECGCXO1Nus/maxresdefault.jpg"
  };

  return (
    <section id="podcasts" className="mb-20">
      <h2 className={`${mono.className} text-2xl font-bold text-gray-900 dark:text-white mb-8`}>
        Podcast Appearances
      </h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h3 className={`${mono.className} text-xl font-bold text-gray-900 dark:text-white mb-2`}>
              {latestPodcast.title}
            </h3>
            <p className={`${mono.className} text-gray-700 dark:text-gray-300 mb-4`}>
              {latestPodcast.description}
            </p>
            <p className={`${mono.className} text-sm text-gray-600 dark:text-gray-400 mb-6`}>
              Latest Episode: {latestPodcast.episode}
            </p>
            
            <a
              href={latestPodcast.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium`}
            >
              <PlayCircle size={20} />
              Listen Now
            </a>
          </div>
          
          <div className="md:w-1/2 relative bg-gradient-to-br from-orange-100 to-yellow-50 dark:from-gray-700 dark:to-gray-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <img
                  src={latestPodcast.thumbnail}
                  alt="Devtherapy Podcast"
                  className="w-64 h-48 object-cover rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <PlayCircle size={32} className="text-gray-900 dark:text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-64 md:h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}