import React, { useEffect, useState } from 'react';
import { vaildation } from '../utils/vaildation';
import { LoginCheck } from '../apis/api/Login';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';
interface FormType {
    username: FormDataEntryValue;
    email: FormDataEntryValue;
    password: FormDataEntryValue;
    repassword: FormDataEntryValue;
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
        repassword: 'repassword',
    });
    let [submit, setSubmit] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState<ErrorType>();
    //submit시 데이터가 바로 출력이 안되는 현상
    //setValue에 시간이 걸려서 비동기 처리를 해주어야한다.
    const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
        'signup',
        (variables) => LoginCheck(value.username, value.email, value.password),
        {
            onMutate(variables) {
                console.log('onMutate', variables);
            },
            onSuccess(data, variables, context) {
                console.log(data);
                //로그인 성공 모달
            },
            onError(error, variables, context) {
                console.log(error);
                //로그인 실패 모달
            },
        }
    );

    const handleSumit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const { username, email, password, repassword } = data;
        await setValue({ username, email, password, repassword });
        if (username && email && password && repassword) {
            await mutateAsync();
        }
        //e.currentTarget.reset();
    };
    useEffect(() => {
        setError(vaildation({ ...value }));
    }, [value]);
    return { handleSumit, error, value };
}
