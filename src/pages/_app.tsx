import type { AppProps } from 'next/app'

import { GlobalStyle } from 'styles/global'
import { CartProvider } from 'hooks/useCart'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  )
}

export default MyApp
