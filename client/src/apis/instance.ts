import axios from 'axios';
const authApi = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: { 'Content-Type': 'application/json' },
});
const api = axios.create({
    baseURL: 'http://localhost:4000/',
});
api.interceptors.request.use((config) => {
    try {
        config.headers['Content-Type'] = 'application/json';
        //config.headers['Authorization'] = ' 토큰 값';
    } catch (error) {
        return Promise.reject(error);
    }

    return config;
});

export { authApi, api };
