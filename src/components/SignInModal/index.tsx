import styles from './styles.module.scss';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { signIn, signOut, useSession } from 'next-auth/client';


export function SignInModal() {

    const [session] = useSession()

    console.log(session)

    return session ? (
        <div className={styles.modalContainer}>
           
            <div className={styles.containerContent}>
                <h1>LOGADO!</h1>
                <div className={styles.container}>
                    <button onClick={()=>signOut()}>
                        <FaGithub size={50} color="#04d361"/>
                        Entrar com Github
                    </button>
                    <button>
                        <FaGoogle size={50} color="#04d361"/>
                        Entrar com Gmail
                    </button>
                </div>
            </div>
        </div>
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