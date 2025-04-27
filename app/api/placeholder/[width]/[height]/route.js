import { NextResponse } from 'next/server';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request, { params }) {
  const { width, height } = params;
  
  // Parse dimensions as numbers
  const w = parseInt(width, 10) || 320;
  const h = parseInt(height, 10) || 192;
  
  // Generate a placeholder image
  const imageResponse = new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          backgroundColor: '#f0f0f0',
          color: '#777',
          fontSize: Math.max(w / 20, 12),
        }}
      >
        {w}×{h}
      </div>
    ),
    {
      width: w,
      height: h,
    }
  );
  
  // Return image with appropriate headers
  const response = new NextResponse(await imageResponse.arrayBuffer());
  response.headers.set('content-type', 'image/png');
  response.headers.set('cache-control', 'public, max-age=31536000, immutable');
  
  return response;
}