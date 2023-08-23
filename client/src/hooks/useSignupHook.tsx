import React, { useEffect, useState } from 'react';
import { vaildation } from '../utils/vaildation';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { LoginCheck } from '../apis/api/Login';
interface FormType {
    username: FormDataEntryValue;
    email: FormDataEntryValue;
    password: FormDataEntryValue;
    repassword?: FormDataEntryValue;
}
interface ErrorType {
    username: string;
    email: string;
    password: string;
}

export default function useForm() {
    const [value, setValue] = useState<FormType>({
        username: 'username',
        email: 'email',
        password: 'password',
        repassword: 'password',
    });
    const [error, setError] = useState<ErrorType>();
    //submit시 데이터가 바로 출력이 안되는 현상
    //setValue에 시간이 걸려서 비동기 처리를 해주어야한다.
    // const { mutate } = useLoginMutation();
    const navigate = useNavigate();
    const { mutate } = useMutation(
        (variable: FormType) => LoginCheck(variable, '/api/auth/signup'),
        {
            onSuccess: () => {
                navigate('/');
            },
            onError: (err: AxiosError) => {},
        }
    );
    const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const { username, email, password, repassword } = data;
        setValue({ username, email, password, repassword });
        if (username && email && password && password === repassword) {
            mutate({ username, email, password });
        }
    };
    useEffect(() => {
        setError(vaildation({ ...value }));
    }, [value]);
    return { handleSumit, error, value };
}
