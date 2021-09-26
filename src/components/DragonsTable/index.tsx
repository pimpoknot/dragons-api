import { useEffect, useState } from "react"
import api from '../../services/api'
import styles from './styles.module.scss'
import moment from 'moment'
import Link from 'next/link'
import { GrTrash } from 'react-icons/gr'
import { FiEdit } from 'react-icons/fi'
import { deleteDragon } from '../../services/api'
import { useBreakpointValue } from "@chakra-ui/media-query"
import { GiDoubleDragon } from 'react-icons/gi'



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

    return (
        <div className={styles.container}>
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

                   const checkAvatar = () => {
                    if(dragons.avatar) {
                        if(dragons.avatar === '') {
                            return false
                        }
                    }
                   }

                    return (
                        <tbody key={dragons.id}>
                            <tr>
                                <Link href={`/DragonProfile/${dragons.id}`}>
                                    <td>
                                        <div className={styles.dragonDetail}>
                                            {dragons.avatar ? <img src={dragons.avatar} alt="dragon" />  : <GiDoubleDragon size={50} />}
                                            {dragons.name}
                                        </div>
                                    </td>
                                </Link>
                                <td>{dragons.type}</td>
                                <td>{moment(dragons.createdAt).format('DD/MM/YYYY')}</td>
                                <td>
                                    <Link href={`/EditDragon/${dragons.id}`}>
                                        <button>{isWideVersion ? 'Editar' : <FiEdit size={20} />}</button>
                                    </Link>
                                    <button onClick={() => deleteDragon(dragons.id)}>{isWideVersion ? 'Deletar' : <GrTrash size={20} />}</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}