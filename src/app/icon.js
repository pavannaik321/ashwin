import { ImageResponse } from 'next/og';

export const size = { width: 48, height: 48 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '48px',
          height: '48px',
          background: '#09090b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #ff1e27',
        }}
      >
        <div
          style={{
            color: '#ffffff',
            fontSize: '18px',
            fontWeight: 900,
            fontFamily: 'system-ui, sans-serif',
            letterSpacing: '-1px',
            display: 'flex',
          }}
        >
          AP
        </div>
      </div>
    ),
    { ...size }
  );
}
