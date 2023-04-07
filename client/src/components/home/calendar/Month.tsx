import React from 'react';
import prevIcon from '../../../assets/Prev.png';
import nextIcon from '../../../assets/Next.png';
import { subMonths, addMonths } from 'date-fns';
import { CalendarHead } from '../style/calendar';
interface MonthType {
    curDate: Date;
    setCurDate: React.Dispatch<React.SetStateAction<Date>>;
    curMonth: string;
    curYear: string;
}
export default function Month(props: MonthType) {
    const UpClick = () => {
        props.setCurDate(addMonths(props.curDate, 1));
    };
    const DownClick = () => {
        props.setCurDate(subMonths(props.curDate, 1));
    };
    return (
        <section>
            <h3 className="ir">년도,달 파트</h3>
            <CalendarHead>
                <img src={prevIcon} alt="이전달이동" onClick={DownClick} />
                <p style={{ width: '70px' }}>{props.curMonth}</p>
                <p style={{ width: '60px' }}>{props.curYear}</p>
                <img src={nextIcon} alt="다음달이동" onClick={UpClick} />
            </CalendarHead>
        </section>
    );
}
