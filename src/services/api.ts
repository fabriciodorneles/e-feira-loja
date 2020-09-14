import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://apiefeira.fullmindstudio.net',
    baseURL: 'http://localhost:3334',
    // baseURL: process.env.REACT_APP_API_URL,
});

export default api;
