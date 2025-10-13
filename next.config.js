/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',              // 👈 Generate static HTML
  basePath: '/portfolio',        // 👈 Repo name
  images: { unoptimized: true }, // 👈 Disable Next.js image optimization for static
  reactStrictMode: true,  
  swcMinify: true,
}

module.exports = nextConfig
