import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { CalendarLayout, MonthCalendar } from './style/calendar';
import Days from './Days';
import Month from './Month';
import Record from '../modal/Record';
import { useRecoilState, useRecoilValue } from 'recoil';
import { curDateState, dateState } from '../../../recoil/atoms/calendarState';
import { useQuery } from 'react-query';
import { getRecord } from '../../../apis/api/Record';
import { AxiosError } from 'axios';
import { modalState } from '../../../recoil/atoms/modalState';
import { useMediaQuery } from 'react-responsive';

interface PostDataType {
    id: number;
    user_id: number;
    datetime: string;
    content_title: string;
    content_main: string;
    content_image: string;
    color: string;
}
interface LogType {
    log: PostDataType[];
}
export default function Calendar() {
    // const curDate = useRecoilValue(curDateState);
    const [curDate, setCurDate] = useRecoilState(curDateState);
    const curMonth = format(curDate, 'MMMM');
    const curYear = format(curDate, 'yyyy');
    const modal = useRecoilValue(modalState);
    const isMobile = useMediaQuery({ maxWidth: 980 });
    const days = [
        // 'Sunday',
        // 'Monday',
        // 'Tuesday',
        // 'Wendnesday',
        // 'Thursday',
        // 'Friday',
        // 'Saturday',
        '일',
        '월',
        '화',
        '수',
        '목',
        '금',
        '토',
    ];
    let GetMonth = {
        year: format(curDate, 'yyyy'),
        month: format(curDate, 'MM'),
    };
    const { data, isLoading } = useQuery<LogType, AxiosError, PostDataType[]>(
        ['record', GetMonth],
        () => getRecord(GetMonth),
        {
            select: (record) => record.log,
            refetchOnWindowFocus: false,
            staleTime: Infinity, // 1초,
            onSuccess(data) {
                console.log(GetMonth);
                console.log(data);
            },
        }
    );
    const monthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        GetMonth.year = e.target.value.split('-')[0];
        GetMonth.month = e.target.value.split('-')[1];
        setCurDate(new Date(`${GetMonth.year}-${GetMonth.month}`));
    };
    return (
        <CalendarLayout view={isMobile}>
            <h2 className="ir">달력</h2>
            <MonthCalendar
                view={isMobile}
                type="month"
                data-placeholder={`${GetMonth.year}-${GetMonth.month}`}
                onChange={(e) => {
                    monthChange(e);
                }}
            ></MonthCalendar>
            <Month curMonth={curMonth} curYear={curYear} />
            {{ isLoading } && data ? <Days days={days} data={data} /> : <></>}
            {modal && data ? <Record data={data} /> : <></>}
        </CalendarLayout>
    );
}
