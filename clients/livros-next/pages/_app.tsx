import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <meta name='viewport' content='width=devide-width, initial-scale=1' />
    </Head>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp;