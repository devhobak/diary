import React, { useEffect, useState } from 'react';
import logoImg from '../../../assets/logo.png';
import calendarImg from '../../../assets/Category.png';
import diaryImg from '../../../assets/Chat.png';
import settimtImg from '../../../assets/Setting.png';
import logoutImg from '../../../assets/Logout.png';
import writeImg from '../../../assets/Light.png';
import { useMediaQuery } from 'react-responsive';
import {
    NavLayout,
    LogOutButton,
    NavList,
    LogoImg,
    NavLi,
    IconImg,
} from './style/navbar';

import { useLocation, useNavigate } from 'react-router';

export default function Navbar() {
    const navigate = useNavigate();
    let url = useLocation();
    let pathArr = ['/home', '/record', '/write', '/myPage'];
    let p = pathArr.indexOf(url.pathname) + 1;
    let [position, setPosition] = useState(p);
    const isMobile = useMediaQuery({ maxWidth: 980 });
    return (
        <NavLayout view={isMobile}>
            {isMobile ? <></> : <LogoImg src={logoImg} alt="로고" />}

            <NavList view={isMobile}>
                <NavLi
                    view={isMobile}
                    onClick={() => {
                        navigate('/home');
                        setPosition(1);
                    }}
                    child={position}
                >
                    <IconImg src={calendarImg} alt="달력아이콘" />
                    달력
                </NavLi>
                <NavLi
                    view={isMobile}
                    onClick={() => {
                        navigate('/record');
                        setPosition(2);
                    }}
                    child={position}
                >
                    <IconImg src={diaryImg} alt="일상기록 아이콘" />
                    일상 기록
                </NavLi>
                <NavLi
                    view={isMobile}
                    onClick={() => {
                        navigate('/write');
                        setPosition(3);
                    }}
                    child={position}
                >
                    <IconImg src={writeImg} alt="일기 작성 아이콘" />
                    일기 작성
                </NavLi>
                <NavLi
                    view={isMobile}
                    onClick={() => {
                        navigate('/myPage');
                        setPosition(4);
                    }}
                    child={position}
                >
                    <IconImg src={settimtImg} alt="마이페이지 아이콘" />
                    마이 페이지
                </NavLi>
            </NavList>
        </NavLayout>
    );
}
