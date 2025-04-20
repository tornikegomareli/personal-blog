# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- Dev: `yarn dev` or `npm run dev` - Start development server and content watcher
- Build: `yarn build` or `npm run build` - Build production version
- Start: `yarn start` or `npm run start` - Start production server
- Watch Content: `yarn watch-content` or `npm watch-content` - Watch content changes

## Code Style Guidelines
- Framework: Next.js with React 18 components
- Styling: Tailwind CSS with custom variables in global.css
- Component Organization: Use client/server component pattern with "use client" directive
- JS vs TS: Project uses JavaScript, not TypeScript
- Links: Use custom Link component for navigation with transition effects
- Responsive Design: Follow Tailwind responsive patterns (sm, md, lg breakpoints)
- Content: Blog posts use MDX with gray-matter for frontmatter
- CSS: Prefer Tailwind classes over custom CSS when possible
- Dark Mode: Support dark/light mode via CSS media queries
- File Organization: Components organized by feature under app/ directory

## Error Handling
- Use try/catch blocks for async operations
- Provide fallback UI when content might be missing