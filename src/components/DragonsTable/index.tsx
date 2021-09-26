import { useSession } from "next-auth/client"
import { useEffect, useState } from "react"
import api from '../../services/api'
import styles from './styles.module.scss'
import moment from 'moment'
import Link from 'next/link'
import { GrTrash } from 'react-icons/gr'
import { deleteDragon } from '../../services/api'
import { useBreakpointValue } from "@chakra-ui/media-query"


interface ProtoTypeProps {
    createdAt: string;
    type: string;
    name: string;
    id: string;
    avatar: string;
}




export default function DragonsTable() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

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

    console.log(dataSorted)



    return (
        <>
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
                                <Link href={`/DragonProfile/${dragons.id}`}>
                                    <td>
                                        <div className={styles.dragonDetail}>
                                            <img src={dragons.avatar} alt="smaug" />
                                            {dragons.name}
                                        </div>
                                    </td>
                                </Link>
                                <td>{dragons.type}</td>
                                <td>{moment(dragons.createdAt).format('DD/MM/YYYY')}</td>
                                <td>
                                    <Link href={`/EditDragon/${dragons.id}`}>
                                        <button></button>
                                    </Link>
                                    <button onClick={() => deleteDragon(dragons.id)}>Deletar <GrTrash size={15} /></button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </>
    )
}