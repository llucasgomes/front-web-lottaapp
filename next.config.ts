import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kzmoevxsx0tgudgqdbnz.lite.vusercontent.net',
        pathname: '**'
      },
    ]
  }
};

export default nextConfig;
