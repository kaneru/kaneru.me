import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import Head from 'next/head';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const canonicalURL = `https://kaneru.me${useRouter().asPath}`;
  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalURL} />
        <script
          data-goatcounter="https://kaneru.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
