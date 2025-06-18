"use client";
import { mono } from "../fonts";

export default function HeroSection() {
  return (
    <section id="about" className="flex flex-col items-center text-center py-20 mb-20">
      <div className="mb-6 relative">
        <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-gray-100 dark:ring-gray-800">
          <img
            src="https://avatars.githubusercontent.com/u/24585160?v=4"
            alt="Tornike Gomareli"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      
      <h1 className={`${mono.className} text-3xl font-bold text-gray-900 dark:text-white mb-2`}>
        Tornike Gomareli
      </h1>
      
      <p className={`${mono.className} text-gray-600 dark:text-gray-400 mb-4`}>
        Software Engineer | Swift Expert | Podcast Host
      </p>
      
      <p className={`${mono.className} text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed`}>
        Experienced software engineer based in Europe with a passion for building innovative solutions 
        and contributing to the open-source community. Specialized in Swift, systems programming and 
        mobile engineering. Host of the Devtherapy podcast and author of articles on software development.
      </p>
    </section>
  );
}