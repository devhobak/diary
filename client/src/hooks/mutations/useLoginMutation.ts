import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

import { LoginCheck } from '../../apis/api/Login';

interface FormType {
    email: string;
    password: string;
}

export default function useLoginMutation() {
    let navigate = useNavigate();
    const LoginMutation = useMutation(
        ['login'],
        (variable: FormType) => LoginCheck(variable, '/api/auth/login'),
        {
            onSuccess: (data) => {
                localStorage.setItem('User', String(data.responseData.id));
                localStorage.setItem('token', data.responseData.token);
                navigate('/home');
            },
            onError: (error: AxiosError) => {
                if (error.response?.status === 400) {
                    toast.error('이메일 혹은 비밀번호가 일치하지 않습니다.');
                } else if (error.response?.status === 500) {
                    toast.error(
                        '서버에 문제가 발생했습니다. 관리자에게 문의 부탁드립니다'
                    );
                }
            },
        }
    );
    return LoginMutation;
}
