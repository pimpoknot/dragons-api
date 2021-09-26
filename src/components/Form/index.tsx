import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Link from 'next/link'
import axios from 'axios';
import { PropsWithChildren, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

interface IFormInputs {
    name: string;
    type: string;
    createdAt: string;
    avatar: string;
}

export default function Form(props: IFormInputs)  {

    const router = useRouter()
    const { id } = router.query

    const validatePost = yup.object().shape({
        name: yup.string().required("Nome do dragao e obrigatorio"),
        type: yup.string().required("O tipo do dragao e obrigatorio")
    })

    const { register, handleSubmit, formState, reset } = useForm<IFormInputs>({
        resolver: yupResolver(validatePost)
    })

    useEffect(() => {
        axios.get(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`)
            .then((response) => {
                reset(response.data)
            })
    }, [])

    const addDragon = async function (data: IFormInputs)  {
        await axios.put(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`, data)
        .then(()=> {
            router.push("/dragons")
        })
        console.log(data)
    }
    
    const { errors } = formState

    return (
        <div className={styles.container}>
            <div className={styles.ModalContainer}>
                <h2>Edite seu dragao</h2>
                <form onSubmit={handleSubmit(addDragon)}>
                    <input type="text" {...register('name')} />
                    <p>{errors.name?.message}</p>
                    <input type="text" {...register('type')} />
                    <p>{errors.type?.message}</p>
                    <input type="text" placeholder="Http://urldaimagedodragao.com.br" {...register('avatar')} />
                    <div className={styles.ButtonSubmit}>
                        <Link href="/dragons"><button>Voltar</button></Link>
                        <button>Editar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}