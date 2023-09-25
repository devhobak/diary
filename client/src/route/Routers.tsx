import { Routes, Route } from 'react-router-dom';
import ProtectedRouter from './ProtectedRouter';
import PublicRouter from './PublicRouter';
import { Suspense, lazy } from 'react';
const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const SignupPage = lazy(() => import('../pages/SignupPage'));
const WritePage = lazy(() => import('../pages/WritePage'));
const ViewPage = lazy(() => import('../pages/ViewPage'));
const MyPage = lazy(() => import('../pages/MyPage'));
export default function Routers() {
    return (
        <Suspense fallback={<></>}>
            <Routes>
                <Route element={<ProtectedRouter />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/record" element={<ViewPage />} />
                    <Route path="/write" element={<WritePage />} />
                    <Route path="/myPage" element={<MyPage />} />
                    <Route path="*" element={<HomePage />} />
                </Route>
                <Route element={<PublicRouter />}>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="*" element={<LoginPage />} />
                </Route>
            </Routes>
        </Suspense>
    );
}
