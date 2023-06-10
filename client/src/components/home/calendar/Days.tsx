import {
    DayUI,
    DayLi,
    DaySection,
    DayOfLi,
    StateRecord,
    StateDiv,
} from './style/calendar';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import {
    curDateState,
    dateState,
    selectDateState,
} from '../../../recoil/atoms/calendarState';
import { useEffect } from 'react';
import {
    formatCurDataState,
    formatCurDay,
} from '../../../recoil/selectors/date';
import { modalState } from '../../../recoil/atoms/modalState';
interface GetDataType {
    id: number;
    user_id: number;
    datetime: string;
    content_title: string;
    content_main: string;
    content_image: string;
    color: string;
}
interface DayType {
    days: string[];
    data: GetDataType[];
}

export default function Days(props: DayType) {
    const [date, setDate] = useRecoilState(dateState);
    const [selectDay, setSelectDate] = useRecoilState(selectDateState);
    const CurDay = useRecoilValue(formatCurDay);
    const formatDate = useRecoilValue(formatCurDataState);
    const curDate = useRecoilValue(curDateState);
    const resetDate = useResetRecoilState(dateState);
    const [modal, setModal] = useRecoilState(modalState);
    useEffect(() => {
        formatDate.curMonthDay.forEach((item, idx) => {
            setDate((prev) => [...prev, { date: item, modal: false }]);
        });
        return () => resetDate();
    }, [curDate]);
    let datetime = props.data?.filter((data) => data.datetime.split('T')[0]);
    const modalUp = (item: string) => {
        console.log(CurDay);
        datetime.map((day) => {
            if (day.datetime.split('T')[0] === item) {
                setModal(true);
                setSelectDate(day.datetime.split('T')[0]);
            }
            if (item === CurDay) {
                setModal(true);
                //console.log(CurDay);
                setSelectDate(CurDay);
            }
        });
    };
    return (
        <DaySection>
            <DayUI>
                {props.days.map((item, idx) => (
                    <DayOfLi key={idx}>
                        <p key={idx}>{item}</p>
                    </DayOfLi>
                ))}
            </DayUI>
            <DayUI title="">
                {formatDate.curMonthDay.map((item, idx) => {
                    return formatDate.prevNextMonthday.includes(item) ? (
                        <DayLi key={idx} onClick={() => modalUp(item)}>
                            {item.split('-')[2]}
                            <StateDiv>
                                {datetime?.map((date, index) => {
                                    if (date.datetime.split('T')[0] === item) {
                                        return (
                                            <StateRecord
                                                key={index}
                                                color={`#${props.data[index].color}`}
                                            ></StateRecord>
                                        );
                                    }
                                })}
                            </StateDiv>
                        </DayLi>
                    ) : (
                        <DayLi key={idx} title="disabled">
                            {item.split('-')[2]}
                        </DayLi>
                    );
                })}
            </DayUI>
        </DaySection>
    );
}
