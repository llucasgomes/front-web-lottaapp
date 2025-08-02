import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kzmoevxsx0tgudgqdbnz.lite.vusercontent.net',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'www.bytestechnolab.com',
         // você pode especificar pathname se quiser, ou deixar como "/*" para tudo
        pathname: "/wp-content/uploads/**",
      },
    ]
  }
};

export default nextConfig;
