import { useState } from 'react';

import logoImg from '../../../assets/logo_diary.png';
import calendarImg from '../../../assets/Category.png';
import diaryImg from '../../../assets/Chat.png';
import settimtImg from '../../../assets/Setting.png';
import writeImg from '../../../assets/edit.png';
import { useMediaQuery } from 'react-responsive';
import { NavLayout, NavList, LogoImg, NavLi, IconImg } from './style/navbar';

import { useLocation, useNavigate } from 'react-router';

interface NavInfoType {
    path: string;
    img: string;
    alt: string;
    content: string;
}
export default function Navbar() {
    const navigate = useNavigate();
    let url = useLocation();
    let pathArr = ['/home', '/record', '/write', '/myPage'];
    let navInfo: NavInfoType[] = [
        {
            path: '/home',
            img: `${calendarImg}`,
            alt: '달력아이콘',
            content: '달력',
        },
        {
            path: '/record',
            img: `${diaryImg}`,
            alt: '일상기록 아이콘',
            content: '일상 기록',
        },
        {
            path: '/write',
            img: `${writeImg}`,
            alt: '일기 작성 아이콘',
            content: '일기 작성',
        },
        {
            path: '/mypage',
            img: `${settimtImg}`,
            alt: '마이페이지 아이콘',
            content: '마이 페이지',
        },
    ];
    let p = pathArr.indexOf(url.pathname) + 1;
    let [position, setPosition] = useState(p);
    const isMobile = useMediaQuery({ maxWidth: 980 });
    return (
        <NavLayout mobile={isMobile}>
            {isMobile ? <></> : <LogoImg src={logoImg} alt="로고" />}
            <NavList mobile={isMobile}>
                {pathArr.map((path, index) => (
                    <NavLi
                        view={isMobile}
                        onClick={() => {
                            navigate(path);
                            setPosition(index + 1);
                        }}
                        child={position}
                    >
                        <IconImg
                            src={navInfo[index].img}
                            alt={navInfo[index].alt}
                        />
                        {navInfo[index].content}
                    </NavLi>
                ))}
            </NavList>
        </NavLayout>
    );
}
