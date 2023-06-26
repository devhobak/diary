import React from 'react';
import { Button, P, Notice } from './style/Notic';
import { useNavigate } from 'react-router';

export default function Notification() {
    const navigate = useNavigate();
    return (
        <Notice>
            <P>✏️이미 작성한 글이 있습니다!</P>
            <Button
                onClick={() => {
                    navigate('/record');
                }}
            >
                오늘의 일상 보러가기
            </Button>
        </Notice>
    );
}
