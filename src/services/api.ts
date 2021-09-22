import axios from 'axios'

const api = axios

api.create({
    baseURL: 'http://localhost:3000/'
})

export default api