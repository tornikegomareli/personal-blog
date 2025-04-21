"use client";

import { RssIcon } from "lucide-react";
import { useState } from "react";

export default function RSSButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const rssUrl = "https://tornike-gomareli-personal-website-yt6y.vercel.app/rss.xml";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(rssUrl).then(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    });
  };

  return (
    <div className="flex flex-col items-center relative mt-8 mb-12">
      <div className="flex items-center gap-2 justify-center py-2 px-4 bg-[--bg] border border-[--text] rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer" onClick={copyToClipboard}>
        <RssIcon size={18} />
        <span className="text-sm font-medium">Subscribe via RSS</span>
      </div>
      {showTooltip && (
        <div className="absolute -bottom-8 bg-black text-white text-xs px-2 py-1 rounded">
          RSS URL copied to clipboard!
        </div>
      )}
    </div>
  );
}