import { Api } from '../instance';
import { AxiosResponse } from 'axios';
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
export { LoginCheck };
