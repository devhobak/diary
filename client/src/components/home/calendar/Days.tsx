import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    format,
    eachDayOfInterval,
} from 'date-fns';
import { DayUI, DayLi, DaySection, DaySpan } from '../style';
interface DayType {
    days: string[];
    curDate: Date;
}
export default function Days(props: DayType) {
    const monthStart = startOfMonth(props.curDate);
    const monthEnd = endOfMonth(props.curDate);
    const weekStart = startOfWeek(monthStart);
    const weekEnd = endOfWeek(monthEnd);
    console.log(weekStart, weekEnd);
    const days = eachDayOfInterval({
        start: weekStart,
        end: weekEnd,
    });
    const forMatDay: string[] = [];
    const forMatDayOfWeek: string[] = [];

    days.forEach((item) => {
        forMatDay.push(format(item, 'd'));
        forMatDayOfWeek.push(format(item, 'eeee'));
    });
    //35일
    console.log(forMatDay);
    console.log(forMatDayOfWeek);
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
                {forMatDay.map((item, idx) => {
                    return <DayLi key={idx}>{item}</DayLi>;
                })}
            </DayUI>
        </DaySection>
    );
}
