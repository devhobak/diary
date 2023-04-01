import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../assets/logo.png';
const HeaderLayout = styled.header`
    width: 100%;
    height: 7.6rem;
    background-color: ${(props) => props.theme.color.headerBackgroundColor};
`;
const Logo = styled.img`
    margin-left: 8.2rem;
    margin-top: 1rem;
`;
export default function Header() {
    return (
        <HeaderLayout>
            <Logo src={LogoImg} alt="홈페이지 로고" />
        </HeaderLayout>
    );
}
