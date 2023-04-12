/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    reactStrictMode: true,
    images: {
        domains: ["firebasestorage.googleapis.com"],
    },
};

module.exports = nextConfig;
