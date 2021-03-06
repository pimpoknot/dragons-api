import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from 'axios';
import styles from './styles.module.scss';
import moment from 'moment'
import Link from 'next/link'
import { DRAGON_GENERIC_IMAGE, API_URL } from '../../services/variables'
import ErrorModal from "../../components/ErrorModal";

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
    const [catchError, setCatchError] = useState(false)


    async function fetchData() {    
        await axios.get(API_URL+id)
        .then((response) => {
            let user = response.data
            setProfileDragon(user)
        })
        .catch((err) =>{
            setCatchError(true)
            setTimeout(() =>{
                router.push("/dragons")
            },3000)
        })
        // let response = await axios.get(`${API_URL+id}`)
        // let user = await response.data
        // setProfileDragon(user)
        // console.log('teste: ', profileDragon)
    }
    
    useEffect(() =>{
        fetchData()
        console.log(profileDragon)
    },[])

    return (
       <>
        {catchError ? <ErrorModal /> : ''}
        <div className={styles.container}>
            <div className={styles.card} key={profileDragon?.id}>
                <div className={styles.cardImage}>
                    {profileDragon?.avatar === '' ? <img src={DRAGON_GENERIC_IMAGE}/> : <img src={profileDragon?.avatar} alt="dragon" />}
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
       </>
    )

}