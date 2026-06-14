/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don't let lint warnings turn into hard build failures on CI/Vercel.
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
