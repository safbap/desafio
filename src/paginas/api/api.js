import axios from 'axios'
import React, {useState} from 'react'

export const api = axios.create({
    baseURL: 'https://api.github.com/users/USER/GITHUB'
})

export const Busca = async() => {
    const [dado, setDado] =useState([]);
    const reposta = await api.get(api)
    setDado(reposta.data)
}

export default api
//API