import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';
export const alt = 'Tornike Gomareli';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// This is a simpler version without using fs/promises
export default async function Image({ params }) {
  const { slug } = params;
  
  // Format the slug to look nicer in the image
  const formattedTitle = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Generate an image that's optimized for social media sharing
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#f4f4f4',
          padding: '40px 60px',
          fontFamily: 'system-ui, sans-serif',
          background: 'linear-gradient(to bottom right, #ffffff, #f0f0f0)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            padding: '40px',
            borderRadius: '15px',
            backgroundColor: 'white',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            color: '#333', 
            marginBottom: '20px',
            wordWrap: 'break-word',
            maxWidth: '100%',
            lineHeight: 1.2,
          }}>
            {formattedTitle}
          </div>
          <div style={{ fontSize: '24px', color: '#666', marginBottom: '20px' }}>
            A blog post by Tornike Gomareli
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: '40px',
              padding: '8px 16px',
              borderTop: '1px solid #eee',
            }}
          >
            <div style={{ fontSize: '20px', color: '#999' }}>
              pipecraft.me
            </div>
          </div>
        </div>
      </div>
    ),
    { 
      ...size
    }
  );
}