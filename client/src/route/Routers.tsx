import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage type="signin" />} />
            <Route path="/signup" element={<LoginPage type="signup" />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    );
}
