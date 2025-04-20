"use client";

export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              var savedTheme = localStorage.getItem('theme');
              
              if (savedTheme) {
                document.documentElement.setAttribute('data-theme', savedTheme);
              } else {
                // Default to light theme
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
              }
            } catch (e) {
              // Fallback if localStorage is not available
              console.error('Theme setting error:', e);
            }
          })();
        `,
      }}
    />
  );
}