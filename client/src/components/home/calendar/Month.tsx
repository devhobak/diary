import React from 'react';
import prevIcon from '../../../assets/Prev.png';
import nextIcon from '../../../assets/Next.png';
import { subMonths, addMonths } from 'date-fns';
interface MonthType {
    curDate: Date;
    setCurDate: React.Dispatch<React.SetStateAction<Date>>;
    curMonth: string;
    curYear: string;
}
export default function Month(props: MonthType) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const UpClick = () => {
        props.setCurDate(addMonths(props.curDate, 1));
    };
    const DownClick = () => {
        props.setCurDate(subMonths(props.curDate, 1));
    };
    return (
        <section>
            <h3 className="ir">년도,달 파트</h3>
            <img src={prevIcon} alt="이전달이동" onClick={DownClick} />
            <p>{props.curMonth}</p>
            <p>{props.curYear}</p>
            <img src={nextIcon} alt="다음달이동" onClick={UpClick} />
        </section>
    );
}
