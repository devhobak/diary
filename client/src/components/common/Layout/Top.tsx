import React from 'react';
import styled from 'styled-components';
import { LogOutButton } from './style/navbar';
import { useNavigate } from 'react-router';
const TopLayout = styled.section`
    width: 100%;
    height: 7vh;
    grid-area: top;
    background-color: #ffff;
    display: flex;
`;
export default function Top() {
    const navigate = useNavigate();
    const Logout = () => {
        localStorage.removeItem('User');
        navigate('/');
    };
    return (
        <TopLayout>
            <p style={{ fontSize: '1.8rem' }}></p>
            <LogOutButton onClick={Logout}>로그아웃</LogOutButton>
        </TopLayout>
    );
}
