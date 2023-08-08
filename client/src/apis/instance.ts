import axios from 'axios';
const Api = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: { 'Content-Type': 'application/json' },
});
const authApi = axios.create({
    baseURL: 'http://localhost:4000/api/auth/signup',
});
authApi.interceptors.request.use((config) => {
    try {
        config.headers['Content-Type'] = 'application/json';
        //config.headers['Authorization'] = ' 토큰 값';
        //config.data.params = 'id';
    } catch (error) {
        return Promise.reject(error);
    }

    return config;
});
export { Api, authApi };
