import styles from './styles.module.scss';
import router from 'next/router'

export default function DragonProfile() {

    const { id } = router.query

    return (
        <div className={styles.container}>
            <div className={styles.dragonProfileContainer}>
                <div className={styles.card}>
                    <h3>{id}</h3>
                </div>
            </div>
        </div>
    )
}