import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    format,
    eachDayOfInterval,
} from 'date-fns';
interface DayType {
    days: string[];
    curDate: Date;
}
export default function Days(props: DayType) {
    const days = eachDayOfInterval({
        start: startOfMonth(props.curDate),
        end: endOfMonth(props.curDate),
    });
    const forMatDay: string[] = [];
    days.forEach((item) => {
        forMatDay.push(format(item, 'd'));
    });
    return (
        <section>
            <ul>
                {props.days.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
            <ul>
                {forMatDay.map((item, idx) => {
                    return <li key={idx}>{item}</li>;
                })}
            </ul>
        </section>
    );
}
