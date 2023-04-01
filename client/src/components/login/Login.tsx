import React from 'react';
import Box from './Box';
interface LoginType {
    type: string;
}
export default function Login({ type }: LoginType): JSX.Element {
    return (
        <>{type === 'signin' ? <Box type="signin" /> : <Box type="signup" />}</>
    );
}
