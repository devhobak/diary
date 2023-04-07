import React from 'react';
import logoImg from '../../assets/logo.png';
import {
    NavLayout,
    LogOutButton,
    NavList,
    LogoImg,
    NavLi,
} from '../home/style.ts/navbar';

export default function Navbar() {
    return (
        <NavLayout>
            <LogoImg src={logoImg} alt="로고" />
            <NavList>
                <NavLi>달력</NavLi>
                <NavLi>일상 기록</NavLi>
                <NavLi>마이 페이지</NavLi>
            </NavList>
            <LogOutButton>Logout</LogOutButton>
        </NavLayout>
    );
}
