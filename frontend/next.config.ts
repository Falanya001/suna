import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // If you ever need it, you can uncomment this:
    // trustHost: true,
  },

  // Rewrites to proxy *everything* from /auth, /rest, etc., through Next's origin
  async rewrites() {
    return [
      {
        source: '/auth/:path*',
        destination: 'http://127.0.0.1:54321/auth/:path*',
      },
      {
        source: '/rest/:path*',
        destination: 'http://127.0.0.1:54321/rest/v1/:path*',
      },
      {
        source: '/graphql/:path*',
        destination: 'http://127.0.0.1:54321/graphql/v1/:path*',
      },
      {
        source: '/storage/:path*',
        destination: 'http://127.0.0.1:54321/storage/v1/:path*',
      },
    ];
  },

  webpack: (config) => {
    // pdf.js / canvas workaround
    config.externals = [...(config.externals || []), { canvas: "canvas" }];
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
    };
    return config;
  },
};

export default nextConfig;
