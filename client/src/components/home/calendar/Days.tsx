import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { DayUI, DayLi, DaySection, DaySpan } from './style/calendar';
import { getPeriod, getFormat } from '../../../utils/getPeriod';
import { useRecoilValue } from 'recoil';
import { curDateState } from '../../../recoil/atoms/calendarState';
interface DayType {
    days: string[];
}
export default function Days(props: DayType) {
    const curDate = useRecoilValue(curDateState);
    const monthStart = startOfMonth(curDate.date);
    const monthEnd = endOfMonth(curDate.date);
    const weekStart = startOfWeek(monthStart);
    const weekEnd = endOfWeek(monthEnd);
    console.log(weekStart, weekEnd, monthStart, monthEnd);
    //weekStart 부터 monthStart 사이의 값은 클릭 못하고, 색도 연하게 처리
    //monthEnd부터 weekEnd 사이의 값은 클릭 못하고, 색도 연하게 처리
    const days = getPeriod(monthStart, monthEnd);
    //monthStart의 첫번째 값이 포함 처리 필요
    const disableStartDays = getPeriod(weekStart, monthStart);
    //monthEnd의 첫번째 값이 포함 처리 필요
    const disableEndDays = getPeriod(monthEnd, weekEnd);
    const forMatDay: string[] = [];
    const forMatDisableStart: string[] = [];
    const forMatDisableEnd: string[] = [];
    getFormat(days, forMatDay);
    getFormat(disableStartDays, forMatDisableStart);
    getFormat(disableEndDays, forMatDisableEnd);
    forMatDisableStart.splice(-1);
    forMatDisableEnd.splice(0, 1);
    console.log(forMatDay);
    console.log(forMatDisableStart, forMatDisableEnd);
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
                {forMatDisableStart.map((item, idx) => {
                    return (
                        <DayLi key={idx} title="disable">
                            {item}
                        </DayLi>
                    );
                })}
                {forMatDay.map((item, idx) => {
                    return <DayLi key={idx}>{item}</DayLi>;
                })}
                {forMatDisableEnd.map((item, idx) => {
                    return (
                        <DayLi key={idx} title="disable">
                            {item}
                        </DayLi>
                    );
                })}
                {forMatDisableEnd.map((item, idx) => {
                    return (
                        <DayLi key={idx} title="disable">
                            {item}
                        </DayLi>
                    );
                })}
            </DayUI>
        </DaySection>
    );
}
