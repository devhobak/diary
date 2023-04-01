import React from 'react';
interface ButtonType {
    type: string;
}
export default function Button({ type }: ButtonType) {
    return <button>{type === 'siginin' ? '로그인' : '회원가입하기'}</button>;
}
