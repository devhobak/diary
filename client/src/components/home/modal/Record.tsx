import React, { useState } from 'react';
import InputSection from './InputSection';
import closeImg from '../../../assets/close.png';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { dateState } from '../../../recoil/atoms/calendarState';
import Diary from './Diary';
import {
    RecordBackground,
    RecordSection,
    CloseButton,
    Date,
} from './style/Record';
interface PropType {
    curDate: string;
    date: string;
    idx: number;
}
export default function Record(props: PropType): JSX.Element {
    const setDate = useSetRecoilState(dateState);
    const dateValue = useRecoilValue(dateState);
    const [close, setClose] = useState(false);
    const modalClose = (date: string, idx: number) => {
        setClose(true);
        let arr = [...dateValue];
        arr.splice(idx, 1, { date: date, modal: false });
        setTimeout(() => {
            setDate(arr);
        }, 400);
        console.log(date);
    };
    if (props.date === props.curDate) {
        return (
            <RecordBackground>
                <RecordSection close={close}>
                    <h2 className="ir">일상기록</h2>
                    <Date>{props.date}</Date>
                    <CloseButton
                        src={closeImg}
                        alt="모달 닫는 버튼"
                        onClick={() => {
                            modalClose(props.date, props.idx);
                        }}
                    />
                    <InputSection />
                </RecordSection>
            </RecordBackground>
        );
    } else {
        return (
            <RecordBackground>
                <RecordSection close={close}>
                    <h2 className="ir">일상기록</h2>
                    <Date>{props.date}</Date>
                    <CloseButton
                        src={closeImg}
                        alt="모달 닫는 버튼"
                        onClick={() => {
                            modalClose(props.date, props.idx);
                        }}
                    />
                    <Diary />
                </RecordSection>
            </RecordBackground>
        );
    }
}
