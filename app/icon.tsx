import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#08080a',
          color: '#e0dcd4',
          display: 'flex',
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: 12,
          fontWeight: 700,
          height: '100%',
          justifyContent: 'center',
          letterSpacing: 1,
          width: '100%',
        }}
      >
        VG
      </div>
    ),
    size
  )
}
