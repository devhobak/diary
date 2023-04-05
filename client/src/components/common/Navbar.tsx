import React from 'react';
import { NavLayout } from '../home/style';

export default function Navbar() {
    return (
        <NavLayout>
            <img src="" alt="로고" />
            <ul>
                <li>달력</li>
                <li>일상 기록</li>
                <li>마이 페이지</li>
            </ul>
            <div>Logout</div>
        </NavLayout>
    );
}
