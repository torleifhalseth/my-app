/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ["nb", "en"],
    defaultLocale: "nb",
    localeDetection: false,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
