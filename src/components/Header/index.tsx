import { signOut, useSession } from 'next-auth/client'
import styles from './styles.module.scss'
import { GrLogout } from 'react-icons/gr'
import Link from 'next/link'
import { ReactChild } from 'react'
import { useBreakpointValue } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
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
                    <Flex>
                        <div className={styles.userLog}>
                            <div className={styles.imageLog}>
                                <img src={session?.user?.image} alt="Sem imagem" />
                            </div>
                            {isWideVersion ? <p>{session?.user?.email} <span>{session?.user?.name}</span></p> : ''}

                        </div>
                        <Link href="/">
                            <button onClick={() => signOut()}>
                                <GrLogout size={25} color="#04d361" />
                                Deslogar
                            </button>
                        </Link>
                    </Flex>



                </div>
            </div>
        </div>
    )
}