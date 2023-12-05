import { useRecoilState, useRecoilValue } from 'recoil';
import { toast } from 'react-toastify';
import { useMediaQuery } from 'react-responsive';

import Record from '../modal/Record';

import useGetReportQuery from '../../../hooks/queries/useRecordQuery';
import { selectDateState } from '../../../recoil/atoms/calendarState';
import {
    formatCurDataState,
    formatCurDay,
} from '../../../recoil/selectors/date';
import { modalState } from '../../../recoil/atoms/modalState';

import {
    DayUI,
    DayLi,
    DaySection,
    DayOfLi,
    DayOfUI,
    DayDate,
} from './style/calendar';

interface DayType {
    days: string[];
}

export default function Days(props: DayType) {
    const [selectDay, setSelectDate] = useRecoilState(selectDateState);
    const CurDay = useRecoilValue(formatCurDay);
    const formatDate = useRecoilValue(formatCurDataState);
    const [modal, setModal] = useRecoilState(modalState);
    const isMobile = useMediaQuery({ maxWidth: 980 });
    const { data, isSuccess } = useGetReportQuery();

    let RecordData = data;
    let yearMonth = RecordData?.map((item) => item.datetime.split(' ')[0]);

    let recordColor = formatDate.curMonthDay.map((item, idex) => {
        if (yearMonth?.includes(item) && RecordData) {
            return `#${RecordData[yearMonth.indexOf(item)].color}`;
        } else {
            return '#ffff';
        }
    });

    const modalUp = (item: string) => {
        let record = false;
        setModal(false);
        setSelectDate(item);
        RecordData?.map((day) => {
            if (day.datetime.split(' ')[0] === item) {
                setModal(true);
                record = true;
            }
            return record;
        });
        if (item === CurDay) {
            record = true;
            setModal(true);
            setSelectDate(CurDay);
        }
        if (record === false) {
            toast.error(`${item} 일자에 작성한 일기가 없습니다.`);
        }
    };

    return (
        <DaySection>
            <DayOfUI>
                {props.days.map((item, idx) => (
                    <DayOfLi key={idx}>
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
                            data-testid={`dateLi-${item}`}
                        >
                            <DayDate>{item.split('-')[2]}</DayDate>
                        </DayLi>
                    ) : (
                        <DayLi key={idx} color={'#FAFAFA'} view={isMobile}>
                            {item.split('-')[2]}
                        </DayLi>
                    );
                })}
            </DayUI>
            {modal ? <Record /> : <></>}
        </DaySection>
    );
}
