module.exports = {
  // Remove static export to enable API routes on Vercel
  // output: "export",
  trailingSlash: true,
  
  // Configure environment variables for preview mode
  env: {
    PREVIEW_SECRET: process.env.PREVIEW_SECRET,
    PRERENDER_BYPASS_TOKEN: process.env.PRERENDER_BYPASS_TOKEN,
    NEXT_PREVIEW_DATA: process.env.NEXT_PREVIEW_DATA,
  },
};
