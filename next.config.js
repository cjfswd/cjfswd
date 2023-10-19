/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  crossOrigin:'anonymous'
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
module.exports = withMDX(nextConfig)