import React from 'react';
import styled from 'styled-components';
import logoImg from '../../../assets/logo.png';
import logoutImg from '../../../assets/Logout.png';
import { LogoImg, LogOutButton, IconImg } from './style/navbar';
const TopLayout = styled.section`
    //position: relative;
    position: fixed;
    width: 100%;
    //height: 8vh;
    top: 0;
    grid-area: top;
    background-color: #ffff;
    padding-left: 30px;
    display: flex;
`;
export default function Top() {
    return (
        <TopLayout>
            <p style={{ fontSize: '1.8rem' }}></p>
            <LogoImg src={logoImg} alt="로고" />
            <LogOutButton>
                <IconImg src={logoutImg} alt="로그아웃버튼아이콘" />
                Logout
            </LogOutButton>
        </TopLayout>
    );
}
