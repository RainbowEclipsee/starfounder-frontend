import '../styles/globals.css'
import { GlobalStyle } from '../components/Core/GlobalStyles'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
