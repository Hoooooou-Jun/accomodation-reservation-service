import type { AppProps } from 'next/app'
import GlobalStyle from '../../public/assets/font/font.css'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
