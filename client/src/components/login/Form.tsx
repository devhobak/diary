import React from 'react';
import { FormLayout, Input, LinkButton, LoginButton } from './style/form';
import { useNavigate } from 'react-router-dom';
interface FormType {
    type: string;
}
export default function Form({ type }: FormType): JSX.Element {
    let navigate = useNavigate();
    if (type === 'signin') {
        return (
            <FormLayout>
                <label>
                    <Input placeholder="이메일" name="email"></Input>
                </label>
                <label>
                    <Input placeholder="비밀번호" name="password"></Input>
                </label>
                <LinkButton find="find">비밀번호 찾기</LinkButton>
                <LinkButton
                    onClick={() => {
                        navigate('/signup');
                    }}
                >
                    회원가입
                </LinkButton>
                <LoginButton type="submit">로그인</LoginButton>
                <LinkButton>SNS계정으로 간편 로그인/회원가입</LinkButton>
            </FormLayout>
        );
    } else if (type === 'signup') {
        return (
            <FormLayout>
                <label>
                    <Input placeholder="닉네임" name="nickname"></Input>
                </label>
                <label>
                    <Input placeholder="이메일" name="email"></Input>
                </label>
                <label>
                    <Input placeholder="비밀번호" name="password"></Input>
                </label>
                <LoginButton type="submit">회원가입하기</LoginButton>
                <LinkButton
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    이미 아이디가 있으신가요? 로그인
                </LinkButton>
            </FormLayout>
        );
    }
    return <></>;
}
