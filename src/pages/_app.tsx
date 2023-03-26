import type { AppProps } from 'next/app'
import Head from "next/head";
import GlobalStyle from '../styles/font';

export default function MyApp({ Component, pageProps }: AppProps) {
  <>
    <Head>
      <title>boilerplate</title>
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>

}
