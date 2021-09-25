import axios from 'axios'
import router, { useRouter } from 'next/router'
const api = axios


interface IFormInputs {
    name: string;
    type: string;
    createdAt: string;
    avatar: string;
  }

// CRIAR DRAGAO - MÉTODO: POST
  export const addDragon = async function (data: IFormInputs)  {
    await axios.post('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', data)
    .then(()=> {
        router.push("/dragons")
    })
    console.log(data)
}

// DELETAR DRAGÃO - MÉTODO: DELETE
export function deleteDragon(dragonsId: string) {
    api.delete(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragonsId}`)
        .then(response => {
            if (response.data != null) {

                router.reload()
            }
        })
}

export default api