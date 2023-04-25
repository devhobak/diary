import React from 'react';
import { format } from 'date-fns';
import { CalendarLayout } from './style/calendar';
import Days from './Days';
import Month from './Month';
import Record from '../modal/Record';
import { useRecoilState, useRecoilValue } from 'recoil';
import { curDateState, dateState } from '../../../recoil/atoms/calendarState';
export default function Calendar() {
    const curDate = useRecoilValue(curDateState);
    const date = useRecoilValue(dateState);
    const curMonth = format(curDate, 'MMMM');
    const curYear = format(curDate, 'yyyy');
    const fullDate = format(curDate, 'yyyy년 M월 d일');
    console.log(fullDate);
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wendnesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    return (
        <CalendarLayout>
            <h2 className="ir">달력</h2>
            <Month curMonth={curMonth} curYear={curYear} />
            <Days days={days} />
            {date.map((item, idx) => {
                return item.modal ? (
                    <Record curDate={fullDate} date={item.date} idx={idx} />
                ) : (
                    <></>
                );
            })}
        </CalendarLayout>
    );
}
