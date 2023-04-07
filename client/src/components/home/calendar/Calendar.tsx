import React, { useState } from 'react';
import { format } from 'date-fns';
import { CalendarLayout } from '../style.ts/calendar';
import Days from './Days';
import Month from './Month';

export default function Calendar() {
    const [curDate, setCurDate] = useState(new Date());
    const curMonth = format(curDate, 'MMMM');
    const curYear = format(curDate, 'yyyy');
    console.log(curMonth);
    console.log(curYear);
    console.log(curDate);
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
            <Days days={days} curDate={curDate} />
        </CalendarLayout>
    );
}
