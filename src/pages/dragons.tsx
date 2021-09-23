import { useSession } from "next-auth/client";
import { useEffect, useState } from "react"
import api from '../services/api'
import styles from '../styles/DragonsPage/styles.module.scss';
import { Header } from '../components/Header'
import Link from 'next/link'
import { GrTrash,GrAdd } from 'react-icons/gr'


interface ProtoTypeProps {
    createdAt: string;
    name: string;
    id: string;
}

export default function Dragons() {

    const [session] = useSession()
    const [dragons, setDragons] = useState<ProtoTypeProps[]>([])
    const [newDragons, setNewDragons] = useState('')

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
            if(response.data != null) {
                alert('Dragon deleted succefully')
            }
        })
    }

    

    

    

    async function addDragons(name: string, type: string) {

        if(name === '') {
            return
        }
       
        useEffect(() => {
            const addNewDragons = {
                id: Math.random().toString(),
                name: name,
                type: type,
                createdAt: Date.now().toString()
            }
            api.post('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', addNewDragons)
            .then((response) => setDragons(response.data))
            .catch((err) =>{
                return console.log('erro ao postar api de dragons')
            })
            
        },[])
        console.log(dragons)
    } 
        


    {dragons.map(dragons => {
        console.log(dragons.id, dragons.name)
    })}

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
                                    <div className={styles.buttonBox}>
                                        <button onClick={() =>{addDragons('Ancalagon the Black','Tolkien Dragon')}}>TESTE</button>
                                        <button onClick={() =>deleteDragon(dragons.id)}>Deletar <GrTrash size={20} /></button>
                                    </div>
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
