import axios from 'axios'

// Url Filmes em cartaz

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export const keyApi = '1d3845b41c9bc51900e69356c954a732'

export default api