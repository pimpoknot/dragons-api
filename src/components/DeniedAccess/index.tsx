import Link from 'next/link'
import styles from './styles.module.scss';

export default function DeniedAccess () {
    return(
        <div className={styles.deniedAccess}>
            <p>Acesso Negado! Por favor, faca login</p>
            <Link href="/">
                <button>Voltar para pagina de login</button>
            </Link>
        </div>
    )
}