import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home({locale}) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          <strong>Locale:  {locale}</strong>
        </p>
        <p>(you should see it appended to this site's url if your browser does not use the default one, <code>en</code> )</p>
        <p>In v3 of the next plugin, the <code>NEXT_LOCALE</code> and the `Accept-Language` header is not detected. This is fixed in v4. The workaround is manually detecting if the cookie and header exist and changing the behavior of your site in consequence.</p>
        <a href="https://github.com/netlify/netlify-plugin-nextjs/issues/788#issue-1050456600">See GitHub Issue for full context</a>
        <p>
          Test steps for this page:
          <ol>
            <li>
              Change your default browser language to french. In Chrome: language to french (Settings -> Advanced -> Language -> Add French -> Move to top)
            </li>
            <li>
              Refresh this page, you should see it appended with <strong>/fr</strong>, and the text on the page should change to show <strong>fr</strong>
            </li>
            <li>
              Open the dev tools to the console
            </li>
            <li>
              Enter <strong>document.cookie="NEXT_LOCALE=es"</strong>
            </li>
            <li>
              Refresh this page. You should see it appended with <strong>/es</strong>
            </li>
          </ol>
        </p>
      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const acceptLanguageHeader = context?.req?.headers['accept-language']
  const nextLocaleCookie = context.req?.cookies?.NEXT_LOCALE
  // Force the locale to be either the NEXT_LOCALE cookie or the Accept-Language header
  const locale = nextLocaleCookie 
  ? nextLocaleCookie
  : acceptLanguageHeader 
    ? acceptLanguageHeader
    : context?.req?.locale || "";

  return {
    props: {
      locale
    },
  }
}