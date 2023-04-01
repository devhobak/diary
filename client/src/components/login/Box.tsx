import React from 'react';
import Form from './Form';
import { LoginArticle } from './style/box';
import Logo from '../../assets/logo.png';
interface LoginType {
    type: string;
}
export default function Box({ type }: LoginType): JSX.Element {
    if (type === 'signin') {
        return (
            <LoginArticle>
                <h2 className="ir">로그인 창</h2>
                <img src={Logo} alt="캘린더 로고" />
                <Form type="signin" />
            </LoginArticle>
        );
    } else if (type === 'signup') {
        return (
            <LoginArticle>
                <h2 className="ir">회원가입 창</h2>
                <img src={Logo} alt="캘린더 로고" />
                <Form type="signup" />
            </LoginArticle>
        );
    }
    return <></>;
}
