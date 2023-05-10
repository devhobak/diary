import { format } from 'date-fns';
import { CalendarLayout } from './style/calendar';
import Days from './Days';
import Month from './Month';
import Record from '../modal/Record';
import { useRecoilState, useRecoilValue } from 'recoil';
import { curDateState, dateState } from '../../../recoil/atoms/calendarState';
import { useQuery } from 'react-query';
import { getRecord } from '../../../apis/api/Record';
import { recordState } from '../../../recoil/atoms/recordState';
export default function Calendar() {
    const curDate = useRecoilValue(curDateState);
    const curMonth = format(curDate, 'MMMM');
    const curYear = format(curDate, 'yyyy');
    const date = useRecoilValue(dateState);
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wendnesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const GetMonth = {
        year: format(curDate, 'yyyy'),
        month: format(curDate, 'MM'),
    };
    const [record, setRecord] = useRecoilState(recordState);
    const { isLoading, isError, data, error } = useQuery(
        ['record', GetMonth],
        () => getRecord(GetMonth),
        {
            refetchOnWindowFocus: false,
            staleTime: 1000, // 1초,

            onSuccess(data) {
                console.log(GetMonth);
                console.log(data);
                setRecord(data);
            },
        }
    );
    return (
        <CalendarLayout>
            <h2 className="ir">달력</h2>
            <Month curMonth={curMonth} curYear={curYear} />
            <Days days={days} />
            {date.map((item, idx) => {
                return item.modal ? (
                    <Record date={item.date} key={idx} idx={idx} />
                ) : (
                    <></>
                );
            })}
        </CalendarLayout>
    );
}
