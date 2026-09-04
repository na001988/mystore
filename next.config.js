const checkEnvVariables = require("./check-env-variables")
checkEnvVariables()
const S3_HOSTNAME = process.env.MEDUSA_CLOUD_S3_HOSTNAME
const S3_PATHNAME = process.env.MEDUSA_CLOUD_S3_PATHNAME
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  logging: { fetches: { fullUrl: true } },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  allowedDevOrigins: process.env.BASE44_PUBLIC_HOST_SUFFIX
    ? ["3000-" + process.env.BASE44_PUBLIC_HOST_SUFFIX]
    : [],
  experimental: {
    serverActions: {
      allowedOrigins: process.env.BASE44_PUBLIC_HOST_SUFFIX
        ? [
            `https://3000-${process.env.BASE44_PUBLIC_HOST_SUFFIX}`,
            `3000-${process.env.BASE44_PUBLIC_HOST_SUFFIX}`,
          ]
        : [],
    },
  },
  images: { unoptimized: true, remotePatterns: [
    { protocol: "http", hostname: "localhost" },
    { protocol: "https", hostname: "*.s3.*.amazonaws.com" },
    { protocol: "https", hostname: "*.s3.amazonaws.com" },
    ...(S3_HOSTNAME && S3_PATHNAME ? [{ protocol: "https", hostname: S3_HOSTNAME, pathname: S3_PATHNAME }] : []),
  ]},
  async rewrites() {
    const backendUrl = process.env.MEDUSA_BACKEND_URL || "http://localhost:9000"
    return [
      { source: "/store/:path*", destination: `${backendUrl}/store/:path*` },
      { source: "/admin/:path*", destination: `${backendUrl}/admin/:path*` },
      { source: "/auth/:path*", destination: `${backendUrl}/auth/:path*` },
    ]
  },
}
module.exports = nextConfig
