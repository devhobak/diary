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
import useLoginForm from '../../hooks/useLoginForm';
export default function Form(): JSX.Element {
    let navigate = useNavigate();
    let { handleSumit, error } = useLoginForm();
    const [password, setPassword] = useState({ pw: true, rePw: true });
    const ChangePwType = (): void => {
        setPassword({ pw: !password.pw, rePw: password.rePw });
    };
    return (
        <FormLayout onSubmit={handleSumit}>
            <Label>
                <Input placeholder="이메일" name="email" find="Message"></Input>
                {error ? <ErrorMsg>{error.email}</ErrorMsg> : <></>}
            </Label>
            <Label>
                <Input
                    type={password ? 'password' : 'text'}
                    placeholder="비밀번호"
                    name="password"
                    find="Lock"
                ></Input>
                <PwImg
                    src={
                        password.pw ? '/assets/eye-off.png' : '/assets/eye.png '
                    }
                    alt={password.pw ? '숨김' : '보임'}
                    onClick={ChangePwType}
                />
                {error ? <ErrorMsg>{error.password}</ErrorMsg> : <></>}
            </Label>
            <LinkButton find="find" type="button">
                비밀번호 찾기
            </LinkButton>
            <LinkButton
                type="button"
                onClick={(e) => {
                    navigate('/signup');
                }}
            >
                회원가입
            </LinkButton>
            <LoginButton type="submit">로그인</LoginButton>
            <LinkButton type="button">
                SNS계정으로 간편 로그인/회원가입
            </LinkButton>
        </FormLayout>
    );
}
