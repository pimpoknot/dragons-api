import type { NextPage } from 'next'
import { useSession, signOut, signIn}  from 'next-auth/client'
import { SignInModal } from '../components/SignInModal'



const Home: NextPage = () => {
  return(
   <SignInModal />
  )
}

export default Home
