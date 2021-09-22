import { useSession } from "next-auth/client";
import { useEffect, useState } from "react"
import api from '../services/api'
import styles from '../styles/DragonsPage/styles.module.scss';
import { Header } from '../components/Header'
import Link from 'next/link'
import { GrTrash } from 'react-icons/gr'


interface ProtoTypeProps {
    createdAt: string;
    name: string;
    id: string;
}

export default function Dragons() {

    const [dragons, setDragons] = useState<ProtoTypeProps[]>([])
    const [session] = useSession()

    useEffect(() => {
        const addData = {
            "createdAt": Date.now(),
            "name": "Banguela",
            "type": "Varanus",
            "histories": [
            ],
            "id": Math.random(),
          }
        api.get('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon')
            .then(res => {
                setDragons(res.data)
            })
            .catch(err => {
                console.log('Erro ao acessar api!')
            })
    }, [])

    

    console.log(dragons)

    return session ? (
        <>
            <Header />
            <div className={styles.dragonContainer}>
                <h3>Lista de Dragoes</h3>

                <main>
                    <ul>
                        {dragons.map(dragons =>{
                            return(
                                <li key={dragons.id} className={styles.listContent}>
                                    <div>
                                        <p>{dragons.name}</p>
                                    </div>
                                    <button>Deletar <GrTrash size={20} /></button>
                                </li>
                            )
                        })}
                    </ul>
                </main>

            </div>
        </>
    ) : (
        <div className={styles.deniedAccess}>
            <p>Acesso Negado! Por favor, faca login</p>
            <Link href="/">
                <button>Voltar para pagina de login</button>
            </Link>
        </div>
    )

}
