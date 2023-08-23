import React from 'react';
import { Route, Outlet, Navigate } from 'react-router';
import { toast } from 'react-toastify';

export default function ProtectedRouter() {
    const isLogin = localStorage.getItem('User') || '';
    if (!isLogin) {
        toast('로그인이 필요한 기능입니다.');
    }
    /**로그인을 했다면 해당 페이지가 보이고
     * 그렇지 않다면 login페이지로 이동한다.
     */

    return isLogin ? <Outlet /> : <Navigate to="/" />;
}
