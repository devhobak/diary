import React from 'react';
import Login from '../components/login/Login';
interface PageType {
    type: string;
}
export default function LoginPage({ type }: PageType) {
    return (
        <>
            {type === 'signin' ? (
                <Login type="signin" />
            ) : (
                <Login type="signup" />
            )}
        </>
    );
}
