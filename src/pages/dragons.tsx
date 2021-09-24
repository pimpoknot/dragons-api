import { useSession } from "next-auth/client";
import { useEffect, useState } from "react"
import api from '../services/api'
import styles from '../styles/DragonsPage/styles.module.scss';
import { Header } from '../components/Header'
import Link from 'next/link'
import { GrTrash } from 'react-icons/gr'
import moment from 'moment'
import router from 'next/router'
moment.locale('pt-br'); // BRASIL

moment.defineLocale('pt-br', {})
console.log()

interface ProtoTypeProps {
    createdAt: string;
    type: string;
    name: string;
    id: string;
}

export default function Dragons({ name, type }: ProtoTypeProps) {

    const [session] = useSession()
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

    function deleteDragon(dragonsId: string) {
        api.delete(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragonsId}`)
            .then(response => {
                if (response.data != null) {
                    
                    router.reload()
                }
            })
    }


    const addTolkienDragon = {
        createdAt: new Date().toLocaleDateString('pt-BR', { timeZone: 'UTC' }),
        name: name,
        type: type,
        "histories": [
        ],
        id: Math.floor(Math.random() * 1000).toLocaleString(),
    }



    return session ? (
        <>
            <Header />
            <div className={styles.dragonContainer}>
                <div className={styles.headerTitle}>
                    <h3>Lista de Dragões</h3>
                    <button><Link href="/createDragon">Criar Dragão</Link></button>
                </div>
                <table className={styles.tableContent}>
                    <thead>
                        <tr>
                            <th>Nome do Dragão</th>
                            <th>Tipo</th>
                            <th>Data de Criação</th>
                            <th></th>
                        </tr>
                    </thead>
                    {dragons.map(dragons => {
                        return (
                            <tbody key={dragons.id}>
                                <tr>
                                    <Link href={`/DragonProfile/${dragons.id}`}><td>{dragons.name}</td></Link>
                                    <td>{dragons.type}</td>
                                    <td>{moment(dragons.createdAt).format('DD/MM/YYYY')}</td>
                                    <td>
                                        <Link href={`/EditDragon/${dragons.id}`}><button>Editar</button></Link>
                                        <button onClick={() =>deleteDragon(dragons.id)}>Deletar <GrTrash size={15} /></button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
                {/* <div className={styles.buttonBox}>
                    
                    
                </div> */}
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
