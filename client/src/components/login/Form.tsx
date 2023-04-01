import React from 'react';
import Button from './Button';
interface FormType {
    type: string;
}
export default function Form({ type }: FormType): JSX.Element {
    if (type === 'signin') {
        return (
            <form>
                <label>
                    <input placeholder="이메일" name="email"></input>
                </label>
                <label>
                    <input placeholder="비밀번호" name="password"></input>
                </label>
                <button>비밀번호 찾기</button>
                <button>회원가입</button>
                <Button type="siginin" />
                <button>SNS계정으로 간편 로그인/회원가입</button>
            </form>
        );
    } else if (type === 'signup') {
        return (
            <form>
                <label>
                    <input placeholder="닉네임" name="nickname"></input>
                </label>
                <label>
                    <input placeholder="이메일" name="email"></input>
                </label>
                <label>
                    <input placeholder="비밀번호" name="password"></input>
                </label>
                <Button type="signin" />
                <button>이미 아이디가 있으신가요? 로그인</button>
            </form>
        );
    }
    return <></>;
}
