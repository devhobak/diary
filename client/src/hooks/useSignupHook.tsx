import React, { useEffect, useState } from 'react';
import { vaildation } from '../utils/vaildation';
interface FormType {
    username?: FormDataEntryValue;
    email: FormDataEntryValue;
    password: FormDataEntryValue;
}
interface ErrorType {
    username?: string;
    email: string;
    password: string;
}

export default function useForm() {
    const [value, setValue] = useState<FormType>({
        username: 'username',
        email: 'email',
        password: 'password',
    });
    const [error, setError] = useState<ErrorType>();

    const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const { username, email, password } = data;
        setValue({ username, email, password });
        e.currentTarget.reset();
    };
    useEffect(() => {
        setError(vaildation({ ...value }));
    }, [value]);
    return { handleSumit, error, value };
}
