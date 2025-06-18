"use client";
import { sans } from "./fonts";
import { PlayCircle, ExternalLink } from "lucide-react";
import { useState } from "react";

function getYoutubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

function PodcastCard({ podcast, index, featured = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const youtubeId = getYoutubeId(podcast.url);

  if (featured) {
    return (
      <div className="col-span-full lg:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden shadow-lg">
        <div className="grid lg:grid-cols-2 h-full">
          <div className="relative aspect-video lg:aspect-auto">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={podcast.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">Featured Episode</span>
            <h3 className={`${sans.className} font-bold text-2xl mb-4 text-gray-900 dark:text-white`}>
              {podcast.title}
            </h3>
            <a
              href={podcast.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Watch on YouTube <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <a
      href={podcast.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0">
          <img
            src={`https://img.youtube.com/vi/${youtubeId}/default.jpg`}
            alt={podcast.title}
            className="w-24 h-16 object-cover rounded"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all rounded">
            <PlayCircle 
              size={24} 
              className="text-white transform group-hover:scale-110 transition-transform"
            />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className={`${sans.className} font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2`}>
            {podcast.title}
          </h4>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Episode #{podcast.title.match(/#(\d+)/)?.[1] || index + 1}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function PodcastsSection() {
  const podcasts = [
    {
      title: "Devtherapy #18 – Levan Mamulashvili (Mainera) | Technical Leadership, Career Strategy, MIT, Forbes",
      url: "https://youtu.be/aECGCXO1Nus",
    },
    {
      title: "Devtherapy #17 – Irakli Kokrashvili | Virtual Reality, XR, Oculus, Gaming, Police 1-2-3, Unity",
      url: "https://youtu.be/NFmq3_ujDfU",
    },
    {
      title: "Devtherapy #16 – D3, Data visualization, JS, Workstations, Upwork",
      url: "https://www.youtube.com/watch?v=Iw6R3NiEHXA",
    },
    {
      title: "Devtherapy #15 – Dev Community, Terraform, AI Agents, AWS, Bun & Node",
      url: "https://www.youtube.com/watch?v=4mbdXt_wcA0",
    },
    {
      title: "Devtherapy #14 - Helio, AI Agents, Large Language Models, Machine Learning",
      url: "https://www.youtube.com/watch?v=xE4MAuxHnLo",
    },
  ];

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className={`${sans.className} text-2xl font-bold text-gray-900 dark:text-white`}>
          Recent Podcasts
        </h2>
        <a
          href="https://www.youtube.com/@Devtherapy/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          View all episodes →
        </a>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <PodcastCard podcast={podcasts[0]} index={0} featured={true} />
        <div className="lg:col-span-1 space-y-4">
          {podcasts.slice(1, 5).map((podcast, index) => (
            <PodcastCard key={index} podcast={podcast} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}