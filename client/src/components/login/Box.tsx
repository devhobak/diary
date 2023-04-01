import React from 'react';
import Form from './Form';
interface LoginType {
    type: string;
}
export default function Box({ type }: LoginType): JSX.Element {
    if (type === 'signin') {
        return (
            <>
                <h2>로그인 창</h2>
                <img src="" alt="캘린더 로고" />
                <Form type="signin" />
            </>
        );
    } else if (type === 'siginup') {
        return (
            <>
                <div>회원가입 창</div>
                <img src="" alt="캘린더 로고" />
                <Form type="signup" />
            </>
        );
    }
    return <></>;
}
