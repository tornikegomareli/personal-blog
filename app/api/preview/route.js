import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug') || '';
  
  // Check the secret and next parameters
  // Validate against environment variable for security
  const secret = searchParams.get('secret');
  
  // Use a fallback secret if environment variable isn't available
  const previewSecret = process.env.PREVIEW_SECRET || 'pipecraftpreviewer2024';
  
  if (secret !== previewSecret) {
    return NextResponse.json(
      { message: 'Invalid token' },
      { status: 401 }
    );
  }
  
  // Enable Preview Mode by setting the cookies
  const response = NextResponse.redirect(new URL(`/${slug}`, request.url));
  
  // Set cookie to enable preview mode
  // Use static values as a fallback if environment variables aren't available
  const bypassToken = process.env.PRERENDER_BYPASS_TOKEN || 'preview_bypass_token';
  const previewData = process.env.NEXT_PREVIEW_DATA || 'preview_data_token';
  
  response.cookies.set('__prerender_bypass', bypassToken);
  response.cookies.set('__next_preview_data', previewData);
  
  return response;
}