import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const imgData = fs.readFileSync(path.join(process.cwd(), 'public/ashwin-portrait.png'));
  const base64 = `data:image/png;base64,${imgData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'row',
          background: '#09090b',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Left: Portrait */}
        <div style={{ width: '504px', height: '630px', display: 'flex', position: 'relative', flexShrink: 0 }}>
          <img
            src={base64}
            style={{ width: '504px', height: '630px', objectFit: 'cover', objectPosition: 'top center' }}
          />
          {/* Fade right into bg */}
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: '100px',
            background: 'linear-gradient(to right, transparent, #09090b)',
            display: 'flex',
          }} />
          {/* Red tint bottom */}
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: 0, height: '120px',
            background: 'linear-gradient(to top, rgba(255,30,39,0.2), transparent)',
            display: 'flex',
          }} />
        </div>

        {/* Right: Text */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '64px 64px 64px 36px',
        }}>
          {/* Red accent line */}
          <div style={{ width: '52px', height: '4px', background: '#ff1e27', marginBottom: '28px', display: 'flex' }} />

          {/* Name */}
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
            <div style={{ fontSize: '62px', fontWeight: 900, color: '#ffffff', lineHeight: 1.0, letterSpacing: '-1.5px', textTransform: 'uppercase' }}>
              ASHWIN
            </div>
            <div style={{ fontSize: '62px', fontWeight: 900, color: '#ffffff', lineHeight: 1.0, letterSpacing: '-1.5px', textTransform: 'uppercase' }}>
              PADWALKAR
            </div>
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginBottom: '32px' }}>
            <div style={{
              background: '#ff1e27', color: '#ffffff',
              fontSize: '12px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase',
              padding: '6px 14px', display: 'flex',
            }}>
              CINEMATOGRAPHER
            </div>
            <div style={{
              border: '2px solid #ff1e27', color: '#ff1e27',
              fontSize: '12px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase',
              padding: '4px 14px', display: 'flex',
            }}>
              VIDEO EDITOR
            </div>
          </div>

          {/* Work types */}
          <div style={{ fontSize: '14px', color: '#71717a', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '44px', display: 'flex' }}>
            Documentaries · Music Videos · Podcasts · Reels
          </div>

          {/* Footer */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '14px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px' }}>
            <div style={{ width: '24px', height: '2px', background: '#ff1e27', display: 'flex' }} />
            <div style={{ fontSize: '12px', color: '#52525b', letterSpacing: '3px', fontWeight: 700, display: 'flex' }}>
              VIEW PORTFOLIO — 2024
            </div>
          </div>
        </div>

        {/* Top-right bracket */}
        <div style={{
          position: 'absolute', top: '32px', right: '32px',
          width: '44px', height: '44px',
          borderTop: '3px solid #ff1e27', borderRight: '3px solid #ff1e27',
          display: 'flex',
        }} />
        {/* Bottom-right bracket */}
        <div style={{
          position: 'absolute', bottom: '32px', right: '32px',
          width: '44px', height: '44px',
          borderBottom: '3px solid #ff1e27', borderRight: '3px solid #ff1e27',
          display: 'flex',
        }} />
        {/* Bottom-left bracket */}
        <div style={{
          position: 'absolute', bottom: '32px', left: '32px',
          width: '44px', height: '44px',
          borderBottom: '3px solid rgba(255,255,255,0.15)', borderLeft: '3px solid rgba(255,255,255,0.15)',
          display: 'flex',
        }} />
      </div>
    ),
    { ...size }
  );
}
