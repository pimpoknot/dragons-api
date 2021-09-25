import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from 'axios';
import styles from './styles.module.scss';
import moment from 'moment'
import Link from 'next/link'

interface ProfileDragonProps {
    name: string;
    type: string;
    createdAt: string;
    avatar: string;
    id: string;
}

export default function DragonProfile() {

    const router = useRouter()
    const { id } = router.query
    const [profileDragon, setProfileDragon] = useState<ProfileDragonProps>()



    async function fetchData() {    
        let response = await axios.get(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`)
        let user = await response.data
        setProfileDragon(user)
        console.log('teste: ', profileDragon)

    }
    
    useEffect(() =>{
        fetchData()   
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.card} key={profileDragon?.id}>
                <div className={styles.cardImage}>
                    <img src={profileDragon?.avatar} alt="imagem de dragao" />
                </div>
                <div className={styles.cardText}>
                    <span>Data de criação: {moment(profileDragon?.createdAt).format('DD/MM/YYYY')} </span>
                    <h2>{profileDragon?.name}</h2>
                    <p>Tipo do Dragao: {profileDragon?.type}</p>
                </div>
                <div className={styles.cardStatus}>
                    <Link href="/dragons"><button>Voltar para lista</button></Link>
                </div>
            </div>
        </div>
    )




}