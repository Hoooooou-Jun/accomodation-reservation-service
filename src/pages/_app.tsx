import type { AppProps } from 'next/app'
import GlobalStyle from '@/styles/GlobalFont'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
