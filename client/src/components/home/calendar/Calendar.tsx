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
import { AxiosError } from 'axios';
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
    interface PostDataType {
        user_id: number;
        datetime: string;
        content_title: string;
        content_main: string;
        content_image: string;
    }
    interface LogType {
        log: PostDataType[];
    }
    //const [record, setRecord] = useRecoilState(recordState);
    const { data, isLoading } = useQuery<LogType, AxiosError, PostDataType[]>(
        ['record', GetMonth],
        () => getRecord(GetMonth),
        {
            select: (record) => record.log,
            refetchOnWindowFocus: false,
            staleTime: 1000, // 1초,
            onSuccess(data) {
                console.log(GetMonth);
                console.log(data);
            },
        }
    );
    return (
        <CalendarLayout>
            <h2 className="ir">달력</h2>
            <Month curMonth={curMonth} curYear={curYear} />
            {{ isLoading } ? <Days days={days} data={data} /> : <></>}
            {date.map((item, idx) => {
                return item.modal ? (
                    <Record data={data} key={idx} idx={idx} />
                ) : (
                    <p key={idx}></p>
                );
            })}
        </CalendarLayout>
    );
}
