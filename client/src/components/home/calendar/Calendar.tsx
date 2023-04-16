import React, { useState } from 'react';
import { format } from 'date-fns';
import { CalendarLayout } from './style/calendar';
import Days from './Days';
import Month from './Month';
import Record from '../modal/Record';

export default function Calendar() {
    let [modal, setModal] = useState(false);
    const [curDate, setCurDate] = useState(new Date());
    const curMonth = format(curDate, 'MMMM');
    const curYear = format(curDate, 'yyyy');
    console.log(curMonth);
    console.log(curYear);
    console.log(curDate);
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
            <Month
                curDate={curDate}
                setCurDate={setCurDate}
                curMonth={curMonth}
                curYear={curYear}
            />
            <Days days={days} curDate={curDate} setModal={setModal} />
            {modal ? <Record curDate={fullDate} /> : <></>}
        </CalendarLayout>
    );
}
