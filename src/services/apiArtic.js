import axios from "axios"

const apiArtic = axios.create({
    baseURL: 'https://api.artic.edu/api/v1'
})

export default apiArtic