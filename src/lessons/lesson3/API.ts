import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
// const key = '?apikey=37ed7d13';
const key = '?apikey=37dsfsdfw89ed7d13';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `${key}&s=${title}`
        return axiosInstance.get(query)
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
