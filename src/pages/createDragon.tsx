import { useSession } from "next-auth/client";
import { Header } from "../components/Header";
import styles from '../styles/CreateDragon/styles.module.scss';
import Link from 'next/link'
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios'
import router, { useRouter } from 'next/router'

interface IFormInputs {
    name: string;
    type: string;
    createdAt: string;
  }
  

const validatePost = yup.object().shape({
    name: yup.string().required("Nome do dragao e obrigatorio"),
    type: yup.string().required("O tipo do dragao e obrigatorio")
})
export default function CreateDragon() {
    const [session] = useSession();

    const { register, handleSubmit, formState } = useForm<IFormInputs>({
        resolver: yupResolver(validatePost)
    })


    const addDragon = function (data: IFormInputs)  {
        axios.post('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', data)
        .then(()=> {
            router.push("/dragons")
        })
        console.log(data)
    }

    const { errors } = formState


    return(
        session ? (
           <>
                <Header />
                <div className={styles.Modal}>
                    <h3>Crie seu dragao</h3>
                    <div className={styles.DragonForm}>
                        <form onSubmit={handleSubmit(addDragon)}>
                            <input type="name"  placeholder="Nome do Dragao" {...register("name")} />
                            <p className={styles.erroMsg}>{errors.name?.message}</p>
                            <input type="text" placeholder="Digite o tipo do Dragao" {...register('type')} />
                            <p className={styles.erroMsg}>{errors.type?.message}</p>
                            <div className={styles.buttonSubmit}>
                                <Link href="/dragons"><button>Voltar</button></Link>
                                <input type="submit" value="Criar" />
                            </div>
                        </form>
                    </div>
                </div>
           </>
        ): (
            <h1>Deslogado</h1>
        )
    )
}