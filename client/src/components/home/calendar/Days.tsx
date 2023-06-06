import {
    DayUI,
    DayLi,
    DaySection,
    DaySpan,
    StateRecord,
} from './style/calendar';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import {
    curDateState,
    dateState,
    selectDateState,
} from '../../../recoil/atoms/calendarState';
import { useEffect } from 'react';
import { formatCurDataState } from '../../../recoil/selectors/date';
import { modalState } from '../../../recoil/atoms/modalState';
import { ColorState } from '../../../recoil/atoms/recordState';
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
    const formatDate = useRecoilValue(formatCurDataState);
    const curDate = useRecoilValue(curDateState);
    const resetDate = useResetRecoilState(dateState);
    const [modal, setModal] = useRecoilState(modalState);
    const color = useRecoilValue(ColorState);
    useEffect(() => {
        formatDate.curMonthDay.forEach((item, idx) => {
            setDate((prev) => [...prev, { date: item, modal: false }]);
        });
        return () => resetDate();
    }, [curDate]);
    let datetime = props.data?.map((data) => data.datetime.split('T')[0]);

    let dup = datetime?.reduce(
        (arr: string[], cur: string) =>
            arr.includes(cur) ? arr : [...arr, cur],
        []
    );

    const modalUp = (item: string) => {
        setModal(true);
        console.log(item);
        date.map((day, idx) => {
            if (day.date === item) {
                setSelectDate(date[idx]);
            }
        });
    };
    return (
        <DaySection>
            <DayUI>
                {props.days.map((item, idx) => (
                    <DaySpan key={idx}>
                        <p key={idx}>{item}</p>
                    </DaySpan>
                ))}
            </DayUI>
            <DayUI title="">
                {formatDate.curMonthDay.map((item, idx) => {
                    return formatDate.prevNextMonthday.includes(item) ? (
                        <DayLi key={idx} onClick={() => modalUp(item)}>
                            {item.split('-')[2]}
                            {dup?.map((date, index) => {
                                if (date === item) {
                                    console.log(index);
                                    return (
                                        <StateRecord
                                            key={index}
                                            color={`#${props.data[index].color}`}
                                        ></StateRecord>
                                    );
                                }
                            })}
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
