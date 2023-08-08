import React from 'react';
import { RecordInfoSection } from './style/RecordInfo';
import { useMediaQuery } from 'react-responsive';
import { LoginArticle } from '../common/Form/style/box';
export default function RecordInfo() {
    const isMobile = useMediaQuery({ maxWidth: 980 });
    return (
        <RecordInfoSection isMobile={isMobile}>
            <article>
                <h2 className="ir">마이페이지</h2>
                <button>탈퇴하기</button>
                <div>닉네임</div>
                <div>작성한일기수</div>
            </article>
        </RecordInfoSection>
    );
}
