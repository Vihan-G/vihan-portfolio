import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "https://drive.google.com/file/d/1yBc1fI8SnzDVejzGZ6i8NA16Z1vuvlB7/view?usp=sharing",
        permanent: false,
      },
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
};

export default nextConfig;
