import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';
export const alt = 'Tornike Gomareli - Personal Website';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
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
          fontFamily: 'SF Pro, system-ui, sans-serif',
          background: 'linear-gradient(to bottom right, #ffffff, #f0f0f0)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '20px',
            borderRadius: '15px',
            backgroundColor: 'white',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ fontSize: '64px', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
            Tornike Gomareli
          </div>
          <div style={{ fontSize: '32px', color: '#666', textAlign: 'center' }}>
            Engineering, Apple Platforms, and Swift
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '40px',
            }}
          >
            <div style={{ fontSize: '24px', color: '#999' }}>
              pipecraft.me
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}