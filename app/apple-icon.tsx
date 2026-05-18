import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#08080a',
          color: '#e0dcd4',
          display: 'flex',
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: 64,
          fontWeight: 700,
          height: '100%',
          justifyContent: 'center',
          letterSpacing: 4,
          width: '100%',
        }}
      >
        VG
      </div>
    ),
    size
  )
}
