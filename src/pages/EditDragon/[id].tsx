import { useEffect } from 'react';
import styles from '../../styles/EditDragon/styles.module.scss';
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/client';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Header } from '../../components/Header';
import axios from 'axios'
import router, { useRouter } from 'next/router'

interface IFormInputs {
    name: string;
    type: string;
    createdAt: string;
  }
export default function EditDragon() {

    const [session] = useSession()
    const router = useRouter()
    const { id } = router.query

    
    const validatePost = yup.object().shape({
        name: yup.string().required("Nome do dragao e obrigatorio"),
        type: yup.string().required("O tipo do dragao e obrigatorio")
    })
    
        const { register, handleSubmit, formState, reset } = useForm<IFormInputs>({
            resolver: yupResolver(validatePost)
        })
    
    
        const addDragon = async function (data: IFormInputs)  {
            await axios.put(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`, data)
            .then(()=> {
                router.push("/dragons")
            })
            console.log(data)
        }

        useEffect(() => {
            axios.get(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`)
            .then((response) =>{
                reset(response.data)
            })
        },[])
    
        const { errors } = formState
    
    return (
        <>
            {session ? (
                <>
                    <Header />
                    <div className={styles.container}>
                        <div className={styles.ModalContainer}>
                        <h2>Edite seu dragao</h2>
                            <form onSubmit={handleSubmit(addDragon)}>
                                <input type="text" {...register('name')} placeholder="Novo Nome" />
                                <p>{errors.name?.message}</p>
                                <input type="text" {...register('type')} placeholder="Digite um novo tipo" />
                                <p>{errors.type?.message}</p>
                                <div className={styles.ButtonSubmit}>
                                    <Link href="/dragons"><button>Voltar</button></Link>
                                    <button>Editar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            ) : (
                <div> 
                    <h1>ACESSO NEGADO!!! RETORNE PARA HOME</h1>
                </div>
           )}
        </>
    )


}