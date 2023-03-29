import type { AppProps } from 'next/app'
import GlobalFont from '@/styles/GlobalFont'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <GlobalFont />
      <Component {...pageProps} />
    </>
  )
}
