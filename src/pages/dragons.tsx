import { useEffect, useState } from "react"
import  api  from "../services/api"


type DragonsProps = {
    createdAt: string;
    name: string;
    histories?: [];
    id: string;
}


export default function Dragons() {

    const [dragons, setDragons] = useState<DragonsProps>()
    
    useEffect(() => {
        api.get('/api/v1/dragon').then((response)  => setDragons(response.data)).catch((err) => {
            console.error('ops, algo deu errado')
        })
    },[])

    console.log(dragons)
    return(
        <h1>teste</h1>
    )
    
}
