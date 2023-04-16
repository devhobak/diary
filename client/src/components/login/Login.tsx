import React from 'react';
import Form from './Form';
import { LoginArticle } from '../common/Form/style/box';
import Logo from '../../assets/logo.png';
export default function Login(): JSX.Element {
    return (
        <LoginArticle>
            <h2 className="ir">로그인 창</h2>
            <img src={Logo} alt="캘린더 로고" />
            <Form />
        </LoginArticle>
    );
}
