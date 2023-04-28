import { useMutation } from 'react-query';
import { LoginCheck } from '../apis/api/Login';
interface FormType {
    username: FormDataEntryValue;
    email?: FormDataEntryValue;
    password: FormDataEntryValue;
}
export default function useLoginMutation(key: string[]) {
    return useMutation(
        key,
        (variable: FormType) =>
            variable.email
                ? LoginCheck(variable, '/api/user')
                : LoginCheck(variable, '/api/auth/login'),
        {
            onSuccess(data) {
                console.log(data);
                //성공모달
            },
            onError(error) {
                console.log(error);
                //실패모달
            },
        }
    );
}
