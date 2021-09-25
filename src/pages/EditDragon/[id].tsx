
import React from 'react'
import { useSession } from 'next-auth/client';
import { Header } from '../../components/Header';
import DeniedAccess from '../../components/DeniedAccess';
import Form from '../../components/Form';


export default function EditDragon() {

    const [session] = useSession()
 
    return (
        <>
            {session ? (
                <>
                    <Header />
                    <Form />
                </>
            ) : (
                <DeniedAccess />
           )}
        </>
    )


}