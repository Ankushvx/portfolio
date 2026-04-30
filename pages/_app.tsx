import '../styles/globals.css';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/next';





function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
