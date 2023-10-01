import React, { useState } from 'react';
import {
    FormLayout,
    Input,
    LinkButton,
    LoginButton,
    ErrorMsg,
    Label,
    PwImg,
} from '../common/Form/style/form';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
export default function Form() {
    let navigate = useNavigate();
    let { handleSumit, error } = useForm('signup');
    const [password, setPassword] = useState({ pw: true, rePw: true });
    const ChangePwType = (): void => {
        setPassword({ pw: !password.pw, rePw: password.rePw });
    };
    const ChangeRePwType = (): void => {
        setPassword({ pw: password.pw, rePw: !password.rePw });
    };
    return (
        <FormLayout onSubmit={handleSumit}>
            <Label>
                <Input
                    autoComplete="off"
                    placeholder="닉네임"
                    name="username"
                    find="Profile"
                ></Input>
                {error ? <ErrorMsg>{error.username}</ErrorMsg> : <></>}
            </Label>
            <Label>
                <Input
                    autoComplete="off"
                    placeholder="이메일"
                    name="email"
                    find="Message"
                ></Input>
                {error ? <ErrorMsg>{error.email}</ErrorMsg> : <></>}
            </Label>
            <Label>
                <Input
                    autoComplete="off"
                    type={password.pw ? 'password' : 'text'}
                    placeholder="비밀번호"
                    name="password"
                    find="Lock"
                ></Input>
                <PwImg
                    src={
                        password.pw ? '/assets/eye-off.svg' : '/assets/eye.svg'
                    }
                    alt={password ? '숨김' : '보임'}
                    onClick={ChangePwType}
                />
                {error ? <ErrorMsg>{error.password}</ErrorMsg> : <></>}
            </Label>
            <Label>
                <Input
                    autoComplete="off"
                    type={password.rePw ? 'password' : 'text'}
                    placeholder="비밀번호확인"
                    name="repassword"
                    find="Lock"
                ></Input>
                <PwImg
                    src={
                        password.rePw
                            ? '/assets/eye-off.svg'
                            : '/assets/eye.svg'
                    }
                    alt={password ? '숨김' : '보임'}
                    onClick={ChangeRePwType}
                />
                {error ? <ErrorMsg>{error.password}</ErrorMsg> : <></>}
            </Label>
            <LoginButton type="submit">회원가입하기</LoginButton>
            <LinkButton
                type="button"
                onClick={(e) => {
                    navigate('/login');
                }}
            >
                이미 아이디가 있으신가요? 로그인
            </LinkButton>
        </FormLayout>
    );
}
