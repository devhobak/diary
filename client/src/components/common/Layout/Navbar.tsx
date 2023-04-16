import React from 'react';
import logoImg from '../../../assets/logo.png';
import calendarImg from '../../../assets/Category.png';
import diaryImg from '../../../assets/Chat.png';
import settimtImg from '../../../assets/Setting.png';
import logoutImg from '../../../assets/Logout.png';
import {
    NavLayout,
    LogOutButton,
    NavList,
    LogoImg,
    NavLi,
    IconImg,
} from '../../home/style/navbar';

export default function Navbar() {
    return (
        <NavLayout>
            <LogoImg src={logoImg} alt="로고" />
            <NavList>
                <NavLi>
                    <IconImg src={calendarImg} alt="달력아이콘" />
                    달력
                </NavLi>
                <NavLi>
                    <IconImg src={diaryImg} alt="일상기록 아이콘" />
                    일상 기록
                </NavLi>
                <NavLi>
                    <IconImg src={settimtImg} alt="마이페이지 아이콘" />
                    마이 페이지
                </NavLi>
            </NavList>
            <LogOutButton>
                <IconImg src={logoutImg} alt="로그아웃버튼아이콘" />
                Logout
            </LogOutButton>
        </NavLayout>
    );
}
