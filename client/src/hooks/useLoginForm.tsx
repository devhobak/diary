import React, { useEffect, useState } from 'react';
import { vaildation } from '../utils/vaildation';
import useLoginMutation from './useLoginMutation';
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
    const [error, setError] = useState<ErrorType>();
    const { mutate } = useLoginMutation(['signin']);
    const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const { email, password } = data;
        const username: FormDataEntryValue = email;
        console.log(data);
        setValue({ email, password });
        if (email && password) {
            //수정필요
            mutate({ username, password });
        }
        e.currentTarget.reset();
    };
    useEffect(() => {
        setError(vaildation({ ...value }, 'login'));
    }, [value]);
    return { handleSumit, error, value };
}
