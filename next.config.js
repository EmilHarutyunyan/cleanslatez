/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/.',
        destination: '/',
        permanent: true,
      },
    ]
  },
  images: {
    formats:['image/avif','image/webp']
  }
}

module.exports = nextConfig
