import { authApi } from '../instance';
interface SignUpType {
    username: FormDataEntryValue;
    password: FormDataEntryValue;
    email?: FormDataEntryValue;
}
const LoginCheck = async (
    { ...data }: SignUpType,
    url: string
): Promise<SignUpType> => {
    console.log({ ...data });
    try {
        let res = await authApi.post<SignUpType>(url, {
            username: data.username,
            password: data.password,
            email: data.email,
        });
        return res.data;
    } catch (err) {
        return Promise.reject(err);
    }
};

export { LoginCheck };
