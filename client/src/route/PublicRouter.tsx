import React from 'react';
import { Navigate, Outlet } from 'react-router';

export default function PublicRouter() {
    let isLogin = localStorage.getItem('User') || '';
    return isLogin ? <Navigate to="/home" /> : <Outlet />;
}
