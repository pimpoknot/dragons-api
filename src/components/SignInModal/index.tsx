import styles from './styles.module.scss';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { signIn, signOut, useSession } from 'next-auth/client';
import { Header } from '../Header'
import Link from 'next/link'
import Dragons from '../../pages/dragons';


export function SignInModal() {

    const [session] = useSession()

    console.log(session)

    return session ? (
        <>
            <Header />
            <div className={styles.modalContainer}>
                <div className={styles.containerContent}>
                    <h1>Login feito com sucesso!</h1>
                    <Link href="/dragons">
                        <button>Acessar lista de Dragões</button>
                    </Link>
                </div>
            </div>
        </>
    ) : (
        <div className={styles.modalContainer}>
            <div className={styles.containerContent}>
                <button className={styles.buttonSignIn} onClick={()=>signIn('credencials')}>
                    Logar com sua conta
                </button>
                <div className={styles.container}> 
                    <button onClick={()=>signIn('github')}>
                        <FaGithub size={50}color="#eba417"/>
                        Entrar com Github
                    </button>
                    <button>
                        <FaGoogle size={50} color="#eba417"/>
                        Entrar com Gmail
                    </button>
                </div>
                
            </div>
        </div>
    )
}