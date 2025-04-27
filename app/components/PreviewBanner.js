'use client';

import Link from 'next/link';

export default function PreviewBanner({ slug }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white py-2 px-4 flex justify-between items-center z-50">
      <p className="text-sm">
        <strong>Preview Mode:</strong> You're viewing an unpublished version
      </p>
      <div className="flex space-x-4">
        {slug && (
          <Link
            href={`/api/exit-preview?slug=${slug}`}
            className="text-sm underline hover:text-blue-200"
          >
            Exit Preview
          </Link>
        )}
      </div>
    </div>
  );
}