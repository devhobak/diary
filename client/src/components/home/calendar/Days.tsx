import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { DayUI, DayLi, DaySection, DaySpan } from './style/calendar';
import { getPeriod, getFormat } from '../../../utils/getPeriod';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { curDateState, dateState } from '../../../recoil/atoms/calendarState';
import { useEffect } from 'react';

interface DayType {
    days: string[];
}
export default function Days(props: DayType) {
    const [date, setDate] = useRecoilState(dateState);
    const curDate = useRecoilValue(curDateState);
    const resetDate = useResetRecoilState(dateState);
    const monthStart = startOfMonth(curDate);
    const monthEnd = endOfMonth(curDate);
    const weekStart = startOfWeek(monthStart);
    const weekEnd = endOfWeek(monthEnd);
    //weekStart 부터 monthStart 사이의 값은 클릭 못하고, 색도 연하게 처리
    //monthEnd부터 weekEnd 사이의 값은 클릭 못하고, 색도 연하게 처리
    const days = getPeriod(monthStart, monthEnd);
    //monthStart의 첫번째 값이 포함 처리 필요
    const disableStartDays = getPeriod(weekStart, monthStart);
    //monthEnd의 첫번째 값이 포함 처리 필요
    const disableEndDays = getPeriod(monthEnd, weekEnd);
    disableStartDays.splice(-1);
    disableEndDays.splice(0, 1);
    let fullDays = disableStartDays.concat(days);
    fullDays = fullDays.concat(disableEndDays);
    let forMatDay: string[] = [];
    let day: string[] = [];
    getFormat(days, day);
    getFormat(fullDays, forMatDay);
    useEffect(() => {
        forMatDay.forEach((item, idx) => {
            setDate((prev) => [...prev, { date: item, modal: false }]);
        });
        return () => resetDate();
    }, [curDate]);
    const modalUp = (item: string) => {
        let arr = [...date];
        console.log(item);
        date.map((day, idx) => {
            console.log(day);
            if (day.date === item) {
                arr.splice(idx, 1, { date: item, modal: true });
                setDate(arr);
            }
        });
        console.log(date);
    };
    console.log(day);
    console.log(forMatDay);
    //클릭하면 모달이 뜸
    //오늘 모달 -> 글쓰기창 , 오늘날짜전달
    //다른 날 -> 글 내용, 해당 클릭 날짜 전달
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
                {forMatDay.map((item, idx) => {
                    return day.includes(item) ? (
                        <DayLi key={idx} onClick={() => modalUp(item)}>
                            {item.split(' ')[2].split('일')[0]}
                        </DayLi>
                    ) : (
                        <DayLi key={idx} title="disabled">
                            {item.split(' ')[2].split('일')[0]}
                        </DayLi>
                    );
                })}
            </DayUI>
        </DaySection>
    );
}
