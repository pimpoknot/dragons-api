import type { AppProps } from 'next/app'
import '../styles/globals.scss';
import { Provider as NextAuthProvider } from 'next-auth/client'
import '../services/api'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Component {...pageProps} />
    </NextAuthProvider>
    
  )
}
export default MyApp
