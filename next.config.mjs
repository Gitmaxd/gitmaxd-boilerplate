/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable experimental features for Turbopack
    experimental: {
      // Enable Turbopack
      turbo: {
        rules: {
          // Add any specific Turbopack rules here if needed
        }
      }
    },
    // Add any other Next.js config options here
  };
  
  export default nextConfig;