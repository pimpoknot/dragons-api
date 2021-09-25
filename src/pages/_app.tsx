import type { AppProps } from 'next/app'
import '../styles/globals.scss';
import { Provider as NextAuthProvider } from 'next-auth/client'
import moment from 'moment';

moment.defineLocale('pt-br',{})
moment.localeData('pt-br')
console.log(moment().format('LLL'))


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Component {...pageProps} />
    </NextAuthProvider>
    
  )
}
export default MyApp
