/** @type {import('next').NextConfig} */

const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/about-us',
            destination: '/about',
          },
        ];
      },
      async redirects() {
        return [
          {
            source: '/about',
            destination: '/about-us',
            permanent: true,
          },
        ];
      },
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: false,
        domains: ['algoseabiz.com'],
        formats: ['image/webp']
    },
    // i18n: {
    //     locales: ["en"],
    //     defaultLocale: "en",
    // },
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    }

}

module.exports = nextConfig
