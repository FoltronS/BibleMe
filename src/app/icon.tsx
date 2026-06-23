import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 8,
        background: '#FDF6EC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Vertical bar */}
      <div
        style={{
          position: 'absolute',
          width: 5,
          height: 20,
          background: '#C9A6A0',
          borderRadius: 2,
          top: 6,
          left: 13.5,
        }}
      />
      {/* Horizontal bar */}
      <div
        style={{
          position: 'absolute',
          width: 14,
          height: 5,
          background: '#C9A6A0',
          borderRadius: 2,
          top: 10,
          left: 9,
        }}
      />
    </div>,
    { ...size }
  );
}
