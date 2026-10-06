import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/random",
        destination: "https://example.com",
        permanent: false,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/vihan-goenka/",
        permanent: false,
      },
      {
        source: "/hck1video",
        destination: "https://drive.google.com/file/d/1zu5i0mbTahGL1GeSt9GZFKtx969wpNjZ/view?usp=sharing",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/resume",
        destination: "/resume.pdf",
      },
      {
        source: "/tibqr",
        destination: "/tibqr.png",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/resume",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="Vihan_Goenka_Technical_Resume.pdf"',
          },
        ],
      },
      {
        source: "/resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="Vihan_Goenka_Technical_Resume.pdf"',
          },
        ],
      },
      {
        source: "/tibqr",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="tibqr.png"',
          },
        ],
      },
      {
        source: "/tibqr.png",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="tibqr.png"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
