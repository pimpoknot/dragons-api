import styles from '../styles/CreateDragon/styles.module.scss';
import { useSession } from "next-auth/client";
import Link from 'next/link'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { addDragon } from '../services/api';
import DeniedAccess from "../components/DeniedAccess";
import { Header } from "../components/Header";


interface IFormInputs {
    name: string;
    type: string;
    createdAt: string;
    avatar?: string;
}


const validatePost = yup.object().shape({
    name: yup.string().required("Nome do dragao e obrigatorio"),
    type: yup.string().required("O tipo do dragao e obrigatorio"),
    avatar: yup.string()
})

export default function CreateDragon() {

    const [session] = useSession();

    const { register, handleSubmit, formState } = useForm<IFormInputs>({
        resolver: yupResolver(validatePost)
    })

    const { errors } = formState

    return (
        session ? (
            <>
                <Header />
                <div className={styles.Modal}>
                    <h3>Crie seu dragao</h3>
                    <div className={styles.DragonForm}>
                        <form onSubmit={handleSubmit(addDragon)}>
                            <input type="name" placeholder="Nome do Dragao" {...register("name")} />
                            <p className={styles.erroMsg}>{errors.name?.message}</p>
                            <input type="text" placeholder="Digite o tipo do Dragao" {...register('type')} />
                            <p className={styles.erroMsg}>{errors.type?.message}</p>
                            <input type="text" placeholder="URL do avatar do dragao http://..." {...register('avatar')} />
                            <p className={styles.textMsg}></p>
                            <div className={styles.buttonSubmit}>
                                <Link href="/dragons"><button>Voltar</button></Link>
                                <input type="submit" value="Criar" />
                            </div>
                        </form>
                    </div>
                </div>
            </>
        ) : (
            <DeniedAccess />
        )
    )
}