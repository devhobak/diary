import axios from 'axios';

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
