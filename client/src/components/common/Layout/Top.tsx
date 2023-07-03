import React from 'react';
import styled from 'styled-components';
import logoImg from '../../../assets/logo.png';
import logoutImg from '../../../assets/Logout.png';
import { LogoImg, LogOutButton, IconImg } from './style/navbar';
const TopLayout = styled.section`
    //position: relative;
    // position: fixed;
    width: 100%;
    height: 7vh;
    //grid-column: 1 / span 2;
    // height: 100%;
    //height: 8vh;
    //top: 0;
    grid-area: top;
    background-color: #ffff;
    display: flex;
`;
export default function Top() {
    return (
        <TopLayout>
            <p style={{ fontSize: '1.8rem' }}></p>
            <LogOutButton>로그아웃</LogOutButton>
        </TopLayout>
    );
}
