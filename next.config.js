/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.viapajucara.com.br',    },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
      },
    ],
    domains: [
      'media.graphassets.com',
      'www.viapajucara.com.br',
      'user-images.githubusercontent.com'
    ],
  },
}
