import Link from 'next/link'
import styles from '../../HeaderContent/styles.module.scss';


export default function HeaderTitle() {
    return (
        <div className={styles.headerTitle}>
            <h3>Lista de Dragões</h3>
            <button><Link href="/createDragon">Criar Dragão</Link></button>
        </div>
    )
}