import axios from 'axios';
import { toast } from 'react-toastify';
const Api = axios.create({
    baseURL: 'https://fixed-jacenta-memoonoffice.koyeb.app/',
    headers: { 'Content-Type': 'application/json' },
});
const authApi = axios.create({
    baseURL: 'https://fixed-jacenta-memoonoffice.koyeb.app/',
    headers: { 'Content-Type': 'application/json' },
});
authApi.interceptors.request.use((config) => {
    try {
        let token = localStorage.getItem('token') || '';
        if (token) {
            config.headers['Content-Type'] = 'application/json';
            config.headers['x-access-token'] = token;
        }
        //config.headers['Authorization'] = ' 토큰 값';
        //config.data.params = 'id';
    } catch (error) {
        return Promise.reject(error);
    }

    return config;
});
authApi.interceptors.response.use((response) => {
    try {
        return response;
    } catch (err) {
        return Promise.reject(err);
    }
});
export { Api, authApi };
