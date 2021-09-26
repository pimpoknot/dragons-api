import type { AppProps } from 'next/app'
import '../styles/globals.scss';
import { Provider as NextAuthProvider } from 'next-auth/client'
import moment from 'moment';
import { ChakraProvider } from "@chakra-ui/react"
import { DragonTheme } from '../styles/theme';

moment.defineLocale('pt-br',{})
moment.localeData('pt-br')
console.log(moment().format('LLL'))




function MyApp({ Component, pageProps }: AppProps) {

 
 
  return (
    <NextAuthProvider session={pageProps.session}>
      <ChakraProvider resetCSS={false} theme={DragonTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </NextAuthProvider>
    
  )
}
export default MyApp
