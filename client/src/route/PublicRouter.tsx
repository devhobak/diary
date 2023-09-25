import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { toast } from 'react-toastify';

export default function PublicRouter() {
    let isLogin = localStorage.getItem('User') || '';
    if (isLogin) {
        toast.error('접근 불가');
    }
    return isLogin ? <Navigate to="/home" /> : <Outlet />;
}
