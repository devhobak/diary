import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useState } from 'react';

import {
    FormLayout,
    Label,
    Input,
    ErrorMsg,
    LoginButton,
    LinkButton,
    PwImg,
} from './style/form';

import useSignupMutation from 'hooks/mutations/useSignupMutation';
import useLoginMutation from 'hooks/mutations/useLoginMutation';

interface FieldType {
    email?: string;
    password?: string;
    username?: string;
    repassword?: string;
}

const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;
const nicknameRefEx = /./;
const EmailError = '올바른 이메일 형식을 입력해주세요';
const requiredError = '입력해주세요';
const pwError = '8자리이상 20자리이하 영어와 숫자 조합으로 입력해주세요';

export default function LoginForm({ page }: { page: string }) {
    const [password, setPassword] = useState({
        password: true,
        repassword: true,
    });

    const ChangePwType = (key: string) => {
        if (key === 'password')
            setPassword({
                password: !password.password,
                repassword: password.repassword,
            });
        else if (key === 'repassword')
            setPassword({
                password: password.password,
                repassword: !password.repassword,
            });
    };

    let navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    const login = {
        email: {
            field: '이메일',
            pattern: emailRegEx,
            required: true,
            error: { pattern: EmailError, required: requiredError },
        },
        password: {
            field: '비밀번호',
            pattern: passwordRegEx,
            required: true,
            error: { pattern: pwError, required: requiredError },
        },
    };

    const signup = {
        username: {
            field: '닉네임',
            required: true,
            pattern: nicknameRefEx,
            error: { required: requiredError, pattern: '오류' },
        },
        ...login,
        repassword: {
            field: '비밀번호확인',
            required: true,
            pattern: passwordRegEx,
            error: { pattern: pwError, required: requiredError },
        },
    };

    const curPage = page === 'login' ? login : signup;

    let SignUpmutaion = useSignupMutation();
    let LoginMutation = useLoginMutation();

    const onSubmit: SubmitHandler<FieldType> = (data) => {
        const { email, password, username } = { ...data };
        if (email && password && page === 'login') {
            LoginMutation.mutate({ email, password });
        } else if (email && password && username && page === 'signup') {
            SignUpmutaion.mutate({ email, password, username });
        }
    };

    return (
        <FormLayout onSubmit={handleSubmit(onSubmit)}>
            {Object.entries(curPage).map(([key, value]) => (
                <>
                    <Label key={value.field}>
                        <Input
                            type={
                                (key === 'password' && password.password) ||
                                (key === 'repassword' && password.repassword)
                                    ? 'password'
                                    : 'text'
                            }
                            placeholder={value.field}
                            {...register(key, {
                                required: value.required,
                                pattern: value.pattern,
                            })}
                        />
                        {(key === 'repassword' || key === 'password') && (
                            <PwImg
                                src={
                                    password[key]
                                        ? '/assets/eye-off.svg'
                                        : '/assets/eye.svg '
                                }
                                alt={password[key] ? '숨김' : '보임'}
                                onClick={() => {
                                    ChangePwType(key);
                                }}
                            />
                        )}
                        {Object.entries(value.error).map(([type, msg]) => (
                            <>
                                {errors[key]?.type === type && (
                                    <ErrorMsg role="alert">{msg}</ErrorMsg>
                                )}
                            </>
                        ))}
                    </Label>
                </>
            ))}
            {page === 'login' ? (
                <>
                    <LinkButton
                        type="button"
                        onClick={(e) => {
                            navigate('/signup');
                        }}
                    >
                        회원가입
                    </LinkButton>
                    <LoginButton type="submit">로그인</LoginButton>
                </>
            ) : (
                <>
                    <LinkButton
                        type="button"
                        onClick={(e) => {
                            navigate('/');
                        }}
                    >
                        이미 회원이신가요? 로그인하러가기
                    </LinkButton>
                    <LoginButton type="submit">회원가입하기</LoginButton>
                </>
            )}
        </FormLayout>
    );
}
