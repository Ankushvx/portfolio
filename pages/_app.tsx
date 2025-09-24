import '../styles/globals.css';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app'





function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
