import { authApi } from '../instance';
interface SignUpType {
    username: FormDataEntryValue;
    password: FormDataEntryValue;
    email: FormDataEntryValue;
}
const LoginCheck = async (
    username: FormDataEntryValue,
    password: FormDataEntryValue,
    email: FormDataEntryValue
): Promise<SignUpType> => {
    try {
        let res = await authApi.post<SignUpType>('/api/user', {
            username: username,
            password: password,
            email: email,
        });
        return res.data;
    } catch (err) {
        return Promise.reject(err);
    }
};

export { LoginCheck };
