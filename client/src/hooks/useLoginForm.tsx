import React, { useEffect, useState } from 'react';
import { vaildation } from '../utils/vaildation';
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

    const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const { email, password } = data;
        setValue({ email, password });
        e.currentTarget.reset();
    };
    useEffect(() => {
        setError(vaildation({ ...value }, 'login'));
    }, [value]);
    return { handleSumit, error, value };
}
