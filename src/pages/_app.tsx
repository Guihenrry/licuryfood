import Head from 'next/head'
import type { AppProps } from 'next/app'

import { GlobalStyle } from 'styles/global'
import { CartProvider } from 'hooks/useCart'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <GlobalStyle />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  )
}

export default MyApp
