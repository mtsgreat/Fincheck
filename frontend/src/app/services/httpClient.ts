import axios from "axios";
import { localStorageKeys } from "../config/localStorageKeys";



export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})


httpClient.interceptors.request.use(config => {
    const acessToken = localStorage.getItem(localStorageKeys.ACESS_TOKEN)

    if(acessToken) {
        config.headers.Authorization = `Bearer ${acessToken}`
    }

    return config
})


