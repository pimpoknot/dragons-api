import { signOut, useSession } from 'next-auth/client'
import styles from './styles.module.scss'
import { GrLogout } from 'react-icons/gr'
import Link from 'next/link'
import { ReactChild } from 'react'

type HeaderTitleProps = {
    title?: string;
}

export function Header( props: HeaderTitleProps) {
    const [session] = useSession()

    return (
        <div className={styles.header}>
             <div className={styles.headerContent}>
                    <div className={styles.headerContentContainer}>
                        <h3>{props.title}</h3>
                        <div className={styles.userLog}>
                            <div className={styles.imageLog}>
                                <img src={session?.user?.image} alt="Sem imagem" />
                            </div>
                            <p>{session?.user?.email} <span>{session?.user?.name}</span></p>
                            
                        </div>
                        <Link href="/">
                            <button onClick={()=>signOut()}>
                                <GrLogout size={25} color="#04d361"/>
                                Deslogar
                            </button>
                        </Link>
                        
                    </div>
                </div>
        </div>
    )
}