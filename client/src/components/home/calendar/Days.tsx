import {
    DayUI,
    DayLi,
    DaySection,
    DayOfLi,
    DayOfUI,
    DayDate,
} from './style/calendar';
import { format } from 'date-fns';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
    curDateState,
    selectDateState,
} from '../../../recoil/atoms/calendarState';
import {
    formatCurDataState,
    formatCurDay,
} from '../../../recoil/selectors/date';
import { modalState } from '../../../recoil/atoms/modalState';
import { useMediaQuery } from 'react-responsive';
import Record from '../modal/Record';
import { useQuery } from 'react-query';
import { getRecord } from '../../../apis/api/Record';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
interface GetDataType {
    id: number;
    user_id: number;
    datetime: string;
    content_title: string;
    content_main: string;
    content_image: string;
    color: string;
}
interface LogType {
    log: GetDataType[];
}
interface DayType {
    days: string[];
}

export default function Days(props: DayType) {
    const [selectDay, setSelectDate] = useRecoilState(selectDateState);
    const CurDay = useRecoilValue(formatCurDay);
    const formatDate = useRecoilValue(formatCurDataState);
    const curDate = useRecoilValue(curDateState);
    const [modal, setModal] = useRecoilState(modalState);
    const isMobile = useMediaQuery({ maxWidth: 390 });
    let GetMonth = {
        year: format(curDate, 'yyyy'),
        month: format(curDate, 'MM'),
    };
    const { data, isLoading, isSuccess } = useQuery<
        LogType,
        AxiosError,
        GetDataType[]
    >(['record', GetMonth], () => getRecord(GetMonth), {
        select: (record) => record.log,
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        cacheTime: Infinity,
        onSuccess(data) {
            console.log(GetMonth);
            console.log(data);
        },
    });
    let RecordData = data;
    let yearMonth = RecordData?.map((item) => item.datetime.split(' ')[0]);
    let recordColor = formatDate.curMonthDay.map((item, idex) => {
        if (yearMonth?.includes(item) && RecordData) {
            return `#${RecordData[yearMonth.indexOf(item)].color}`;
        } else {
            return '#ffff';
        }
    });
    console.log(CurDay);
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
                            <DayDate>{item.split('-')[2]}</DayDate>
                        </DayLi>
                    ) : (
                        <DayLi key={idx} color={'#FAFAFA'} view={isMobile}>
                            {item.split('-')[2]}
                        </DayLi>
                    );
                })}
            </DayUI>
            {modal && isSuccess ? <Record data={data} /> : <></>}
        </DaySection>
    );
}
