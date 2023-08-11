import React, { useEffect, useState } from 'react';
import { vaildation } from '../utils/vaildation';
import { useMutation } from 'react-query';
import { LoginCheck } from '../apis/api/Login';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
interface FormType {
    email: FormDataEntryValue;
    password: FormDataEntryValue;
}
interface ErrorType {
    email: string;
    password: string;
}
export default function useForm() {
    const [value, setValue] = useState<FormType>({
        email: 'email',
        password: 'password',
    });
    const navigate = useNavigate();
    const [error, setError] = useState<ErrorType>();
    const { mutate } = useMutation(
        ['login'],
        (variable: FormType) => LoginCheck(variable, '/api/auth/login'),
        {
            onSuccess: (data) => {
                localStorage.setItem('User', String(data.responseData.id));
                navigate('/');
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
    const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userInfo = Object.fromEntries(formData);
        const { email, password } = userInfo;
        setValue({ email, password });
        if (email && password) {
            mutate({ email, password });
        }
        e.currentTarget.reset();
    };
    useEffect(() => {
        setError(vaildation({ ...value }, 'login'));
    }, [value]);
    return { handleSumit, error, value };
}
