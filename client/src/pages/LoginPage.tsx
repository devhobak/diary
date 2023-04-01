import React from 'react';
import Login from '../components/login/Login';
import Header from '../components/common/Header';
interface PageType {
    type: string;
}
export default function LoginPage({ type }: PageType) {
    return (
        <>
            <Header />
            {type === 'signin' ? (
                <Login type="signin" />
            ) : (
                <Login type="signup" />
            )}
        </>
    );
}
