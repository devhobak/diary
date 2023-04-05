import React from 'react';
import { add, sub, getYear, getMonth, getDate, getDay } from 'date-fns';
export default function Calendar() {
    const date = new Date();
    const prev = sub(date, { months: 1 });
    const next = add(date, { months: 1 });
    const month = date.getMonth() + 1;
    const day = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wendnesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    console.log(month);

    return (
        <section>
            <h2 className="ir">달력</h2>
            <section>
                <h3 className="ir">년도,달 파트</h3>
                <img />
                <p>month</p>
                <p>years</p>
                <img />
            </section>
            <section>
                <h3 className="ir">요일 파트</h3>
            </section>
        </section>
    );
}
