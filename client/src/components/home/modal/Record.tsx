import { useState } from 'react';
import InputSection from './InputSection';
import closeImg from '../../../assets/close.png';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
    dateState,
    curDateState,
    selectDateState,
} from '../../../recoil/atoms/calendarState';
import Diary from './Diary';
import { format } from 'date-fns';
import {
    RecordBackground,
    RecordSection,
    CloseButton,
    Date,
} from './style/Record';
interface GetDataType {
    user_id: number;
    datetime: string;
    content_title: string;
    content_main: string;
    content_image: string;
}
interface PropType {
    idx: number;
    data?: GetDataType[];
}
export default function Record(props: PropType): JSX.Element {
    const curDate = useRecoilValue(curDateState);
    const fullDate = format(curDate, 'yyyy-MM-dd');
    const [dateValue, setDate] = useRecoilState(dateState);
    const [close, setClose] = useState(false);
    const selectDay = useRecoilValue(selectDateState);
    const modalClose = (date: string, idx: number) => {
        setClose(true);
        let arr = [...dateValue];
        arr.splice(idx, 1, { date: date, modal: false });
        setTimeout(() => {
            setDate(arr);
        }, 400);
    };
    if (selectDay.date === fullDate) {
        return (
            <RecordBackground isClose={close}>
                <RecordSection isClose={close}>
                    <h2 className="ir">일상기록</h2>
                    <Date>{selectDay.date}</Date>
                    <CloseButton
                        src={closeImg}
                        alt="모달 닫는 버튼"
                        onClick={() => {
                            modalClose(selectDay.date, props.idx);
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
                    <Date>{selectDay.date}</Date>
                    <CloseButton
                        src={closeImg}
                        alt="모달 닫는 버튼"
                        onClick={() => {
                            modalClose(selectDay.date, props.idx);
                        }}
                    />
                    <Diary data={props.data} />
                </RecordSection>
            </RecordBackground>
        );
    }
}
