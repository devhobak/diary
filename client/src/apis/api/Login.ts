import { Api, authApi } from '../instance';

interface SignUpType {
    username?: FormDataEntryValue;
    password: FormDataEntryValue;
    email: FormDataEntryValue;
}
interface Response {
    id: number;
    token: string;
}
interface LoginType<R> {
    status: number;
    message: string;
    responseData: R;
}

const LoginCheck = async ({ ...data }: SignUpType, url: string) => {
    console.log({ ...data });
    try {
        let res = await Api.post<LoginType<Response>>(url, {
            username: data.username,
            password: data.password,
            email: data.email,
        });
        return await res.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

const Unregister = async (user_id: number, url: string) => {
    try {
        let res = await authApi.post(url, {
            user_id: user_id,
        });
        return await res.data;
    } catch (error) {
        return Promise.reject(error);
    }
};
export { LoginCheck, Unregister };
