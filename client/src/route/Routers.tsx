import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import WritePage from '../pages/WritePage';
import ViewPage from '../pages/ViewPage';

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/record" element={<ViewPage />} />
            <Route path="/write" element={<WritePage />} />
        </Routes>
    );
}
