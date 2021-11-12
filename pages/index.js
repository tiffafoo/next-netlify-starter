import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useRouter } from 'next/router';

export default function Home() {
  const { locale } = useRouter();

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
          <strong>Locale:  {locale}</strong>
        </p>
      </main>

      <Footer />
    </div>
  )
}
