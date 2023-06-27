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
    let data = props.data;
    let yearMonth = props.data.map((item) => item.datetime.split(' ')[0]);
    let recordColor = formatDate.curMonthDay.map((item, idex) => {
        if (yearMonth.includes(item)) {
            return `#${data[yearMonth.indexOf(item)].color}`;
        } else {
            return '#ffff';
        }
    });
    console.log(recordColor);
    const modalUp = (item: string) => {
        console.log(CurDay);
        data.map((day) => {
            if (day.datetime.split(' ')[0] === item) {
                setModal(true);
                setSelectDate(day.datetime.split(' ')[0]);
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
                            color={recordColor[idx]}
                        >
                            {item.split('-')[2]}
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
