import React from 'react';
import { format } from 'date-fns';
import prevIcon from '../../../assets/Prev.png';
import nextIcon from '../../../assets/Next.png';
import { subMonths, addMonths } from 'date-fns';
import { CalendarHead, MonthCalendar } from './style/calendar';
import { curDateState } from '../../../recoil/atoms/calendarState';
import { useRecoilState } from 'recoil';
import { useMediaQuery } from 'react-responsive';
interface MonthType {
    curMonth: string;
    curYear: string;
}
export default function Month(props: MonthType) {
    const [curDate, setCurDate] = useRecoilState(curDateState);
    const isMobile = useMediaQuery({ maxWidth: 390 });
    let GetMonth = {
        year: format(curDate, 'yyyy'),
        month: format(curDate, 'MM'),
    };
    const UpClick = () => {
        setCurDate(addMonths(curDate, 1));
    };
    const DownClick = () => {
        setCurDate(subMonths(curDate, 1));
    };
    const monthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        GetMonth.year = e.target.value.split('-')[0];
        GetMonth.month = e.target.value.split('-')[1];
        setCurDate(new Date(`${GetMonth.year}-${GetMonth.month}`));
    };
    return (
        <section>
            <h3 className="ir">년도,달 파트</h3>
            <CalendarHead>
                <MonthCalendar
                    view={isMobile}
                    type="month"
                    data-placeholder={`${GetMonth.year}-${GetMonth.month}`}
                    onChange={(e) => {
                        monthChange(e);
                    }}
                ></MonthCalendar>
                <img src={prevIcon} alt="이전달이동" onClick={DownClick} />
                <p style={{ width: '15%' }}>{props.curMonth}</p>
                <p style={{ width: '15%' }}>{props.curYear}</p>
                <img src={nextIcon} alt="다음달이동" onClick={UpClick} />
            </CalendarHead>
        </section>
    );
}
