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
    ];
  },
};

export default nextConfig;