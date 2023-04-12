import React, { useState } from 'react';
import {
    FormLayout,
    Input,
    LinkButton,
    LoginButton,
    ErrorMsg,
    Label,
    PwImg,
} from './style/form';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
interface FormType {
    type: string;
}
export default function Form({ type }: FormType): JSX.Element {
    let navigate = useNavigate();
    let { handleSumit, error, handleClick } = useForm();
    const [password, setPassword] = useState({ pw: true, rePw: true });
    const ChangePwType = (): void => {
        setPassword({ pw: !password.pw, rePw: password.rePw });
    };
    const ChangeRePwType = (): void => {
        setPassword({ pw: password.pw, rePw: !password.rePw });
    };
    if (type === 'signin') {
        return (
            <FormLayout onSubmit={handleSumit}>
                <Label>
                    <Input
                        placeholder="이메일"
                        name="email"
                        find="Message"
                    ></Input>
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
                            password.pw
                                ? '/assets/eye-off.png'
                                : '/assets/eye.png '
                        }
                        alt={password.pw ? '숨김' : '보임'}
                        onClick={ChangePwType}
                    />
                    {error ? <ErrorMsg>{error.password}</ErrorMsg> : <></>}
                </Label>
                <LinkButton find="find" type="button" onClick={handleClick}>
                    비밀번호 찾기
                </LinkButton>
                <LinkButton
                    type="button"
                    onClick={(e) => {
                        navigate('/signup');
                        handleClick(e);
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
    } else if (type === 'signup') {
        return (
            <FormLayout onSubmit={handleSumit}>
                <Label>
                    <Input
                        placeholder="닉네임"
                        name="username"
                        find="Profile"
                    ></Input>
                    {error ? <ErrorMsg>{error.username}</ErrorMsg> : <></>}
                </Label>
                <Label>
                    <Input
                        placeholder="이메일"
                        name="email"
                        find="Message"
                    ></Input>
                    {error ? <ErrorMsg>{error.email}</ErrorMsg> : <></>}
                </Label>
                <Label>
                    <Input
                        type={password.pw ? 'password' : 'text'}
                        placeholder="비밀번호"
                        name="password"
                        find="Lock"
                    ></Input>
                    <PwImg
                        src={
                            password.pw
                                ? '/assets/eye-off.png'
                                : '/assets/eye.png '
                        }
                        alt={password ? '숨김' : '보임'}
                        onClick={ChangePwType}
                    />
                    {error ? <ErrorMsg>{error.password}</ErrorMsg> : <></>}
                </Label>
                <Label>
                    <Input
                        type={password.rePw ? 'password' : 'text'}
                        placeholder="비밀번호확인"
                        name="rePassword"
                        find="Lock"
                    ></Input>
                    <PwImg
                        src={
                            password.rePw
                                ? '/assets/eye.png'
                                : '/assets/eye-off.png '
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
                        navigate('/');
                        handleClick(e);
                    }}
                >
                    이미 아이디가 있으신가요? 로그인
                </LinkButton>
            </FormLayout>
        );
    }
    return <></>;
}
