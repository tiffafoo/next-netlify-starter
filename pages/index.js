import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p>In v3 of the next plugin, the <code>NEXT_LOCALE</code> and the `Accept-Language` header is not detected. This is fixed in v4. The workaround is manually detecting if the cookie and header exist and changing the behavior of your site in consequence.</p>
        <p className="description">
          <strong>Locale in url</strong>
        </p>
      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const acceptLanguageHeader = context?.req?.headers['accept-language']
  const nextLocaleCookie = context.req.cookies?.NEXT_LOCALE
  const locale = nextLocaleCookie 
  ? nextLocaleCookie
  : acceptLanguageHeader 
    ? acceptLanguageHeader
    : context?.req?.locale || "";

  return {
    props: {},
  }
}