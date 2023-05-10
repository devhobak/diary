import { useState } from 'react';
import InputSection from './InputSection';
import closeImg from '../../../assets/close.png';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { dateState, curDateState } from '../../../recoil/atoms/calendarState';
import Diary from './Diary';
import { format } from 'date-fns';
import {
    RecordBackground,
    RecordSection,
    CloseButton,
    Date,
} from './style/Record';

interface PropType {
    date: string;
    idx: number;
}
export default function Record(props: PropType): JSX.Element {
    const curDate = useRecoilValue(curDateState);
    const fullDate = format(curDate, 'yyyy-MM-dd');
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
    };
    if (props.date === fullDate) {
        return (
            <RecordBackground isClose={close}>
                <RecordSection isClose={close}>
                    <h2 className="ir">일상기록</h2>
                    <Date>{props.date}</Date>
                    <CloseButton
                        src={closeImg}
                        alt="모달 닫는 버튼"
                        onClick={() => {
                            modalClose(props.date, props.idx);
                        }}
                    />
                    <InputSection setClose={setClose} />
                </RecordSection>
            </RecordBackground>
        );
    } else {
        return (
            <RecordBackground isClose={close}>
                <RecordSection isClose={close}>
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
