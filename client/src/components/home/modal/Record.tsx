import { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { format } from 'date-fns';
import { useMediaQuery } from 'react-responsive';

import closeImg from '../../../assets/close.png';

import InputSection from './InputSection';
import Edit from './Edit';
import Diary from './Diary';

import {
    curDateState,
    selectDateState,
} from '../../../recoil/atoms/calendarState';
import { modalState } from '../../../recoil/atoms/modalState';
import { ColorState } from '../../../recoil/atoms/recordState';

import {
    ModalBackground,
    ModalSection,
    CloseButton,
    Date,
    EditButton,
} from '../../common/Modal/modal';

import { GetRecordType } from '../../../types/serverDataType';
import useGetReportQuery from 'hooks/queries/useRecordQuery';

interface PropType {
    idx?: number;
    data?: GetRecordType[];
    today?: boolean;
}

export default function Record(props: PropType): JSX.Element {
    const curDate = useRecoilValue(curDateState);
    const [modal, setClose] = useRecoilState(modalState);
    const selectDay = useRecoilValue(selectDateState);
    const [color, setColor] = useRecoilState(ColorState);
    const fullDate = format(curDate, 'yyyy-MM-dd');

    const [edit, setEdit] = useState(false);
    const [today, setToday] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: 980 });

    const { data } = useGetReportQuery();

    let diaryArr: GetRecordType[] = [];

    data?.map((item: GetRecordType) => {
        if (item.datetime.split(' ')[0] === selectDay) {
            diaryArr.push(item);
        }
    });

    const modalClose = (date: string) => {
        setTimeout(() => {
            setClose(false);
        }, 200);
    };

    const handleEdit = () => {
        setEdit(true);
    };

    //선택한 날짜의 데이터를 저장함.
    const todayRecord = data?.filter(
        (item) => item.datetime.split(' ')[0] === selectDay
    ).length;

    useEffect(() => {
        if (selectDay === fullDate) {
            setToday(true);
        } else if (selectDay !== fullDate) {
            setToday(false);
        }
    }, [todayRecord]);

    if (today) {
        return (
            <ModalBackground isClose={modal}>
                <ModalSection
                    isClose={modal}
                    color={todayRecord ? `#${diaryArr[0]?.color}` : color}
                    view={isMobile}
                >
                    <h2 className="ir">일기 모달</h2>
                    <Date>{selectDay}</Date>
                    <CloseButton
                        src={closeImg}
                        alt="모달 닫는 버튼"
                        onClick={() => {
                            modalClose(selectDay);
                        }}
                    />
                    {todayRecord ? (
                        <>
                            <EditButton onClick={handleEdit}>
                                수정하기
                            </EditButton>
                            {edit ? (
                                <Edit data={diaryArr} />
                            ) : (
                                <Diary data={diaryArr} type="today" />
                            )}
                        </>
                    ) : (
                        <InputSection />
                    )}
                </ModalSection>
            </ModalBackground>
        );
    } else {
        return (
            <ModalBackground isClose={modal}>
                <ModalSection
                    isClose={modal}
                    color={`#${diaryArr[0]?.color}`}
                    view={isMobile}
                >
                    <h2 className="ir">일상기록</h2>
                    <Date>{selectDay}</Date>
                    <CloseButton
                        src={closeImg}
                        alt="모달 닫는 버튼"
                        onClick={() => {
                            modalClose(selectDay);
                        }}
                    />
                    <Diary data={diaryArr} />
                </ModalSection>
            </ModalBackground>
        );
    }
}
