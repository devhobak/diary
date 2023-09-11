import React, { useEffect, useState } from 'react';
import { vaildation } from '../utils/vaildation';
import { useNavigate } from 'react-router';
import useLoginMutation from './mutations/useLoginMutation';
import useSignupMutation from './mutations/useSignupMutation';
interface FormType {
    username?: FormDataEntryValue;
    email: FormDataEntryValue;
    password: FormDataEntryValue;
    repassword?: FormDataEntryValue;
}
interface ErrorType {
    username?: string;
    email: string;
    password: string;
    repassword?: string;
}

export default function useForm() {
    const [value, setValue] = useState<FormType>({
        username: 'username',
        email: 'email',
        password: 'password',
        repassword: 'password',
    });

    const [error, setError] = useState<ErrorType>({
        username: 'username',
        email: 'email',
        password: 'password',
        repassword: 'repassword',
    });

    let SignUpmutaion = useSignupMutation();
    let LoginMutation = useLoginMutation();

    const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userInfo = Object.fromEntries(formData);
        const { email, password, username, repassword } = userInfo;
        setValue({ email, password, username, repassword });
        if (username && email && password && password === repassword) {
            SignUpmutaion.mutate({ username, email, password });
        } else if (email && password) {
            LoginMutation.mutate({ email, password });
        }
        e.currentTarget.reset();
    };

    useEffect(() => {
        if (value.repassword) {
            setError(vaildation({ ...value }));
        } else {
            setError(vaildation({ ...value }, 'login'));
        }
    }, [value]);

    return { handleSumit, error, value };
}
