/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ntrtbiyiefmemqbcjsad.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },

  experimental: {
    outputFileTracingIncludes: {
      "/api/pdf": [
        "./node_modules/@sparticuz/chromium/bin/**",
      ],
      "/app/api/pdf/route": [
        "./node_modules/@sparticuz/chromium/bin/**",
      ],
    },
  },
};

export default nextConfig;