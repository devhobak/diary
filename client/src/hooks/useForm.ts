import React, { useEffect, useState } from 'react';

import { vaildation } from '../utils/vaildation';

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

export default function useForm(type: string) {
    const [value, setValue] = useState<FormType>({
        username: 'username',
        email: 'email',
        password: 'password',
        repassword: 'password',
    });

    const [errorMessage, setErrorMessage] = useState<ErrorType>({
        username: 'username',
        email: 'email',
        password: 'password',
        repassword: 'repassword',
    });

    const [error, setError] = useState<boolean>(false);

    let SignUpmutaion = useSignupMutation();
    let LoginMutation = useLoginMutation();

    useEffect(() => {
        if (type === 'signup') {
            setErrorMessage(vaildation({ ...value }, 'signup', setError));
        } else if (type === 'login') {
            setErrorMessage(vaildation({ ...value }, 'login', setError));
        }
    }, [value]);

    const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userInfo = Object.fromEntries(formData);
        const { email, password, username, repassword } = userInfo;
        setValue({ email, password, username, repassword });
        if (
            type === 'signup' &&
            !error &&
            email &&
            password &&
            username &&
            repassword
        ) {
            SignUpmutaion.mutate({ username, email, password });
        } else if (type === 'login' && !error && email && password) {
            LoginMutation.mutate({ email, password });
        }
        e.currentTarget.reset();
    };

    return { handleSumit, errorMessage, value, error };
}
