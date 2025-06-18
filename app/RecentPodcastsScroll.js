"use client";
import { sans } from "./fonts";
import Link from "./Link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

function PodcastCard({ podcast }) {
  const [isHovered, setIsHovered] = useState(false);

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
      <a
        href={podcast.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="relative h-48 w-full overflow-hidden">
          <div className="w-full h-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${getYoutubeId(podcast.url)}`}
              title={podcast.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="p-5">
          <h3
            className={`${sans.className} font-bold text-xl mb-3 text-gray-900 dark:text-white line-clamp-2`}
          >
            {podcast.title}
          </h3>

          <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 mt-auto">
            Watch Episode
            <ArrowRight size={14} className="ml-1" />
          </div>
        </div>
      </a>
    </div>
  );
}

function getYoutubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

export default function RecentPodcastsScroll() {
  const podcasts = [
    {
      title:
        "Devtherapy #18 – Levan Mamulashvili (Mainera) | Technical Leadership, Career Strategy, MIT, Forbes",
      url: "https://youtu.be/aECGCXO1Nus",
    },
    {
      title:
        "Devtherapy #17 – Irakli Kokrashvili | Virtual Reality, XR, Oculus, Gaming, Police 1-2-3, Unity",
      url: "https://youtu.be/NFmq3_ujDfU",
    },
    {
      title:
        "Devtherapy #16 – D3, Data visualization, JS, Workstations, Upwork",
      url: "https://www.youtube.com/watch?v=Iw6R3NiEHXA",
    },
    {
      title:
        "Devtherapy #15 – Dev Community, Terraform, AI Agents, AWS, Bun & Node",
      url: "https://www.youtube.com/watch?v=4mbdXt_wcA0",
    },
    {
      title:
        "Devtherapy #14 - Helio, AI Agents, Large Language Models, Machine Learning",
      url: "https://www.youtube.com/watch?v=xE4MAuxHnLo",
    },
    {
      title: "Devtherapy #13 - FreeBSD, C, Penetration Testing, App Security",
      url: "https://www.youtube.com/watch?v=uzsNxVpVR4s",
    },
    {
      title:
        "Devtherapy #12 - GoLang, Simplicity, Tooling, Development Philosophies",
      url: "https://www.youtube.com/watch?v=atg6EtERPVA",
    },
  ];

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2
          className={`${sans.className} text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400`}
        >
          Recent Podcasts
        </h2>
        <a
          href="https://www.youtube.com/@Devtherapy/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
        >
          All Episodes <ArrowRight size={16} className="ml-1" />
        </a>
      </div>

      <div className="overflow-x-auto pb-6 -mx-6 px-6 hide-scrollbar">
        <div className="flex gap-6">
          {podcasts.map((podcast, index) => (
            <PodcastCard key={index} podcast={podcast} />
          ))}
        </div>
      </div>

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
