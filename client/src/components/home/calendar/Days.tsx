import { DayUI, DayLi, DaySection, DaySpan } from './style/calendar';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import {
    curDateState,
    dateState,
    selectDateState,
} from '../../../recoil/atoms/calendarState';
import { useEffect } from 'react';
import { formatCurDataState } from '../../../recoil/selectors/date';
import { recordState } from '../../../recoil/atoms/recordState';

interface DayType {
    days: string[];
}
export default function Days(props: DayType) {
    const [date, setDate] = useRecoilState(dateState);
    const [selectDate, setSelectDate] = useRecoilState(selectDateState);
    const formatDate = useRecoilValue(formatCurDataState);
    const curDate = useRecoilValue(curDateState);
    const resetDate = useResetRecoilState(dateState);
    useEffect(() => {
        formatDate.curMonthDay.forEach((item, idx) => {
            setDate((prev) => [...prev, { date: item, modal: false }]);
        });
        return () => resetDate();
    }, [curDate]);
    const modalUp = (item: string) => {
        let arr = [...date];
        console.log(item);
        date.map((day, idx) => {
            if (day.date === item) {
                arr.splice(idx, 1, { date: item, modal: true });
                setDate(arr);
                setSelectDate(date[idx]);
            }
        });
    };

    return (
        <DaySection>
            <DayUI>
                {props.days.map((item, idx) => (
                    <DaySpan key={idx}>
                        <p>{item}</p>
                    </DaySpan>
                ))}
            </DayUI>
            <DayUI title="">
                {formatDate.curMonthDay.map((item, idx) => {
                    return formatDate.prevNextMonthday.includes(item) ? (
                        <DayLi key={idx} onClick={() => modalUp(item)}>
                            {item.split('-')[2]}
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
