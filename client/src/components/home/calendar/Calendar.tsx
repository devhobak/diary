import { format } from 'date-fns';
import { useRecoilState } from 'recoil';
import { useMediaQuery } from 'react-responsive';
import { CalendarLayout } from './style/calendar';
import Days from './Days';
import Month from './Month';
import { curDateState } from '../../../recoil/atoms/calendarState';

export default function Calendar() {
    const [curDate, setCurDate] = useRecoilState(curDateState);
    const curMonth = format(curDate, 'MMMM');
    const curYear = format(curDate, 'yyyy');
    const isMobile = useMediaQuery({ maxWidth: 980 });
    const days = ['일', '월', '화', '수', '목', '금', '토'];

    return (
        <CalendarLayout view={isMobile}>
            <h2 className="ir">달력</h2>
            <Month curMonth={curMonth} curYear={curYear} />
            <Days days={days} />
        </CalendarLayout>
    );
}
