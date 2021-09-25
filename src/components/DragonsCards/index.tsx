import { useSession } from "next-auth/client"
import { useEffect, useState } from "react"
import api from '../../services/api'
import styles from './styles.module.scss'
import moment from 'moment'
import Link from 'next/link'
import router from 'next/router'
import { GrTrash } from 'react-icons/gr'
import { deleteDragon } from '../../services/api'

interface ProtoTypeProps {
    createdAt: string;
    type: string;
    name: string;
    id: string;
    avatar: string;
}

export default function DragonsCards() {
    const [dragons, setDragons] = useState<ProtoTypeProps[]>([])
    useEffect(() => {
        api.get('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon')
            .then(res => {
                setDragons(res.data)
            })
            .catch(err => {
                console.log('Erro ao acessar api!')
            })
    }, [])
 
    const dataSorted = dragons.sort((a, b) => a.name.localeCompare(b.name)).map(dragons => {
        return dragons.name
    })

    console.log(dragons)


    return (
        <div className={styles.container}>
                    {dragons.map(dragons => {
                        return (
                            <div className={styles.card} key={dragons.id}>
                                <div className={styles.cardImage}>
                                    <img src={dragons.avatar} alt="imagem de dragao" />
                                </div>
                                <div className={styles.cardText}>
                                    <span>Data de criação: {moment(dragons.createdAt).format('DD/MM/YYYY')} </span>
                                    <Link href={`/DragonProfile/${dragons.id}`}><h2>{dragons.name}</h2></Link>
                                    <p>Tipo do Dragao: {dragons.type}</p>
                                </div>
                                <div className={styles.cardStatus}>
                                    <div className={styles.stats}>
                                        <Link href={`/EditDragon/${dragons.id}`}><button>Editar</button></Link>
                                        <button onClick={() => deleteDragon(dragons.id)}>Deletar <GrTrash size={15} /></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
    )
}