module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr']
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Accept-Language',
            value: 'fr;q=0.9',
          }
        ],
      },
    ]
  },
}
