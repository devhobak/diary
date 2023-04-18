import React from 'react';
import prevIcon from '../../../assets/Prev.png';
import nextIcon from '../../../assets/Next.png';
import { subMonths, addMonths } from 'date-fns';
import { CalendarHead } from './style/calendar';
import { curDateState } from '../../../recoil/atoms/calendarState';
import { useRecoilState } from 'recoil';
interface MonthType {
    curMonth: string;
    curYear: string;
}
export default function Month(props: MonthType) {
    const [curDate, setCurDate] = useRecoilState(curDateState);
    const UpClick = () => {
        setCurDate({ date: addMonths(curDate.date, 1), click: false });
    };
    const DownClick = () => {
        setCurDate({ date: subMonths(curDate.date, 1), click: false });
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
