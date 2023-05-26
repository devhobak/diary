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
    ColorInput,
} from './style/Record';
import { modalState } from '../../../recoil/atoms/modalState';
import { ColorState } from '../../../recoil/atoms/recordState';
interface GetDataType {
    user_id: number;
    datetime: string;
    content_title: string;
    content_main: string;
    content_image: string;
}
interface PropType {
    idx?: number;
    data?: GetDataType[];
}
export default function Record(props: PropType): JSX.Element {
    const curDate = useRecoilValue(curDateState);
    const fullDate = format(curDate, 'yyyy-MM-dd');
    const [dateValue, setDate] = useRecoilState(dateState);
    const [modal, setClose] = useRecoilState(modalState);
    const [color, setColor] = useRecoilState(ColorState);
    const selectDay = useRecoilValue(selectDateState);
    const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
        console.log(color);
    };
    const modalClose = (date: string, idx?: number) => {
        setTimeout(() => {
            setClose(false);
        }, 400);
    };

    const todayRecord = props.data?.filter(
        (item) => item.datetime.split('T')[0] === selectDay.date
    ).length;
    if (selectDay.date === fullDate) {
        return (
            <RecordBackground isClose={modal}>
                <RecordSection isClose={modal} color={color}>
                    <h2 className="ir">일상기록</h2>
                    <Date>{selectDay.date}</Date>
                    <CloseButton
                        src={closeImg}
                        alt="모달 닫는 버튼"
                        onClick={() => {
                            modalClose(selectDay.date, props.idx);
                        }}
                    />
                    <ColorInput
                        type="color"
                        onChange={(e) => {
                            handleColor(e);
                        }}
                    ></ColorInput>
                    {todayRecord ? (
                        <Diary data={props.data} type="today" />
                    ) : (
                        <InputSection setClose={setClose} />
                    )}
                </RecordSection>
            </RecordBackground>
        );
    } else {
        return (
            <RecordBackground isClose={modal}>
                <RecordSection isClose={modal} color={color}>
                    <h2 className="ir">일상기록1</h2>
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
