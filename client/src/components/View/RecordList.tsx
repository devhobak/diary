import React from 'react';
import {
    ViewSection,
    ViewUl,
    ViewImg,
    ViewLi,
    ViewDate,
    ViewContent,
    ViewPageNation,
    Page,
} from './style/RecordList';

export default function RecrodList() {
    return (
        <ViewSection>
            <h2 className="ir">일상기록</h2>
            <ViewUl>
                <ViewLi>
                    <ViewDate>날짜</ViewDate>
                    <ViewImg src="" alt="게시한 이미지" />
                    <ViewContent>기록들기록들기록들</ViewContent>
                </ViewLi>
                <ViewLi>
                    <ViewDate>날짜</ViewDate>
                    <ViewImg src="" alt="게시한 이미지" />
                    <ViewContent>기록들기록들기록들</ViewContent>
                </ViewLi>
            </ViewUl>
            <ViewPageNation>
                <Page>1</Page>
            </ViewPageNation>
        </ViewSection>
    );
}
