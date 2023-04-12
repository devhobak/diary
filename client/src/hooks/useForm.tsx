import React, { useEffect, useState } from 'react';
import { vaildation } from '../utils/vaildation';
interface FormType {
    username?: FormDataEntryValue;
    email: FormDataEntryValue;
    password: FormDataEntryValue;
}
export default function useForm() {
    const [value, setValue] = useState<FormType>({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState<FormType>();
    const [loading, isLoading] = useState(false);
    const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const { username, email, password } = data;
        setValue({ username, email, password });
        isLoading(true);
    };
    useEffect(() => {
        setError(vaildation({ ...value }, 'login'));
        //error내용이 없다면 api요청 하지 말기
    }, [value]);
    return { handleSumit, error, loading, value };
}
