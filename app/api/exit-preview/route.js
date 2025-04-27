import { NextResponse } from 'next/server';

export async function GET(request) {
  // Exit the preview mode by clearing the preview cookies
  const response = NextResponse.redirect(new URL('/', request.url));
  
  // Clear the preview cookies
  response.cookies.delete('__prerender_bypass');
  response.cookies.delete('__next_preview_data');
  
  return response;
}