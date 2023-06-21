import {
    DayUI,
    DayLi,
    DaySection,
    DayOfLi,
    StateRecord,
    StateDiv,
    DayOfUI,
} from './style/calendar';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import {
    curDateState,
    dateState,
    selectDateState,
} from '../../../recoil/atoms/calendarState';
import { useEffect } from 'react';
import {
    formatCurDataState,
    formatCurDay,
} from '../../../recoil/selectors/date';
import { modalState } from '../../../recoil/atoms/modalState';
import { useMediaQuery } from 'react-responsive';
interface GetDataType {
    id: number;
    user_id: number;
    datetime: string;
    content_title: string;
    content_main: string;
    content_image: string;
    color: string;
}
interface DayType {
    days: string[];
    data: GetDataType[];
}

export default function Days(props: DayType) {
    const [date, setDate] = useRecoilState(dateState);
    const [selectDay, setSelectDate] = useRecoilState(selectDateState);
    const CurDay = useRecoilValue(formatCurDay);
    const formatDate = useRecoilValue(formatCurDataState);
    const curDate = useRecoilValue(curDateState);
    const resetDate = useResetRecoilState(dateState);
    const [modal, setModal] = useRecoilState(modalState);
    const isMobile = useMediaQuery({ maxWidth: 390 });
    useEffect(() => {
        formatDate.curMonthDay.forEach((item, idx) => {
            setDate((prev) => [...prev, { date: item, modal: false }]);
        });
        return () => resetDate();
    }, [curDate]);
    let datetime = props.data?.filter((data) => data.datetime.split('T')[0]);
    const modalUp = (item: string) => {
        console.log(CurDay);
        datetime.map((day) => {
            if (day.datetime.split('T')[0] === item) {
                setModal(true);
                setSelectDate(day.datetime.split('T')[0]);
            }
            if (item === CurDay) {
                setModal(true);
                //console.log(CurDay);
                setSelectDate(CurDay);
            }
        });
    };
    return (
        <DaySection>
            <DayOfUI>
                {props.days.map((item, idx) => (
                    <DayOfLi key={idx} view={isMobile}>
                        <p key={idx}>{item}</p>
                    </DayOfLi>
                ))}
            </DayOfUI>
            <DayUI title="">
                {formatDate.curMonthDay.map((item, idx) => {
                    return formatDate.prevNextMonthday.includes(item) ? (
                        <DayLi
                            key={idx}
                            onClick={() => modalUp(item)}
                            view={isMobile}
                        >
                            {item.split('-')[2]}
                            <StateDiv>
                                {datetime?.map((date, index) => {
                                    if (date.datetime.split('T')[0] === item) {
                                        return (
                                            <StateRecord
                                                key={index}
                                                color={`#${props.data[index].color}`}
                                            ></StateRecord>
                                        );
                                    }
                                })}
                            </StateDiv>
                        </DayLi>
                    ) : (
                        <DayLi key={idx} title="disabled" view={isMobile}>
                            {item.split('-')[2]}
                        </DayLi>
                    );
                })}
            </DayUI>
        </DaySection>
    );
}
