import { signOut, useSession } from 'next-auth/client'
import styles from './styles.module.scss'
import { GrLogout } from 'react-icons/gr'
import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import { Button, useBreakpointValue } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { USER_DEFAULT } from '../../services/variables'
type HeaderTitleProps = {
    title?: string;
}

export function Header(props: HeaderTitleProps) {
    const [session] = useSession()
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.headerContentContainer}>
                    <h3>{props.title}</h3>
                    <Flex align="center">
                        <div className={styles.userLog}>
                            <div className={styles.imageLog}>
                                {session?.user?.image === null ? <img src={USER_DEFAULT} alt="" /> :  <img src={session?.user?.image} alt="" />}
                                
                            </div>
                            {isWideVersion ? <p>{session?.user?.email} <span>{session?.user?.name}</span></p> : ''}

                        </div>
                        <Link href="/">
                            
                            <Button onClick={() => signOut()} ml={5} >
                                <GrLogout size={25} color="#04d361" />
                                Deslogar
                            </Button>
                        </Link>
                    </Flex>



                </div>
            </div>
        </div>
    )
}