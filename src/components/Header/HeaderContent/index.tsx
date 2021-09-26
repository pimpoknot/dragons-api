import styles from './styles.module.scss';
import Link from 'next/link'
import { PropsWithChildren, ReactChild, useState } from 'react';
import { useSession } from 'next-auth/client';


export default function HeaderContent(props) {

    const [ListView, setListView] = useState(true)

    let viewrMode = ListView

    return (
        <>
            <div className={styles.dragonContainer}>
               {props.children}
            </div>
        </>
    )
}