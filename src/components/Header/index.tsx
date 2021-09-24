import { signOut } from 'next-auth/client'
import styles from './styles.module.scss'
import { GrLogout } from 'react-icons/gr'
import Link from 'next/link'
export function Header() {
    return (
        <div className={styles.header}>
             <div className={styles.headerContent}>
                    <div className={styles.headerContentContainer}>
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