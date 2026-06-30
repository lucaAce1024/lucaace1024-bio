/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default nextConfig;
