/** @type {import('next').NextConfig} */
const nextConfig = { 
  output: 'export',  
  basePath: '/portfolio_web',        // 👈 Repo name
  images: { unoptimized: true }, // 👈 Disable Next.js image optimization for static
  // reactStrictMode: true,  
  // swcMinify: true,
}

module.exports = nextConfig
