module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr']
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'Accepted-Language',
            value: '(?<accepted-language>.*)',
          },
          {
            type: 'cookie',
            key: 'NEXT_LOCALE',
            value: '(?<next-locale-value>.*)',
          },
        ],
        permanent: false,
        destination: '<next-locale-value>/:path*',
      },
    ]
  }
}
