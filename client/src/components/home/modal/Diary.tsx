import React from 'react';
import { recordState } from '../../../recoil/atoms/recordState';
import { useRecoilValue } from 'recoil';
import { selectDateState } from '../../../recoil/atoms/calendarState';
import {
    DiarySection,
    DiaryTextarea,
    DiaryTitle,
    DiaryLabel,
    DiaryImgDiv,
} from './style/diary';
interface PropType {
    date: '';
}
interface RecordType {
    id: number;
    user_id: number;
    datetime: '';
    content_title: '';
    content_main: '';
}
export default function Diary() {
    const record = useRecoilValue(recordState);
    const selectValue = useRecoilValue(selectDateState);
    const { log }: any = { ...record };
    let dateArr: string[] = [];
    log.map((item: any) => {
        dateArr.push(item.datetime.split('T')[0]);
    });
    return (
        <DiarySection>
            <h3 className="ir">오늘의 일상</h3>
            {log.map((item: RecordType, idx: number) => {
                if (selectValue.date === dateArr[idx]) {
                    return (
                        <>
                            <DiaryLabel>일상</DiaryLabel>
                            <DiaryTitle>{item.content_title}</DiaryTitle>
                            <DiaryLabel>기록</DiaryLabel>
                            <DiaryImgDiv>
                                <img src="" alt="기록한 이미지" />
                            </DiaryImgDiv>
                            <DiaryTextarea>{item.content_main}</DiaryTextarea>
                        </>
                    );
                }
            })}
        </DiarySection>
    );
}
