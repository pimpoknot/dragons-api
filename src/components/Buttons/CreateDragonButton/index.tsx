import styles from './styles.module.scss';
import Link from 'next/link'

type ButtonProps = {
    name: string;
}

export default function CreateDragonButton(props:ButtonProps) {
    return (
        <div className={styles.createDragonButton}>
            <button>
                <Link href="/createDragon">
                    {props.name}
                </Link>
            </button>
        </div>
    )
}