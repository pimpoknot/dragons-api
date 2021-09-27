import { Spinner } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'




export default function ErrorModal() {

    const [count, setCount] = useState(5)







    setTimeout(() => {
        if(count <= 0) {
            setCount(0)
        } else if(count > 0){
            setCount(count - 1)
        }
    }, 1000)


    return (
        <div className={styles.errorModal}>
            <div className={styles.errorModalContainer}>
                <p>Erro ao acessar dados da API</p>
                <p>Voce sera redirecionado para a home com a lista de dragoes em</p>
                <span>{count} segundos</span>
                <Spinner />
            </div>
        </div>
    )
}