import { useState } from 'react';
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
interface GetDataType {
    id: number;
    user_id: number;
    datetime: string;
    content_title: string;
    content_main: string;
    content_image: string;
    color: string;
}
interface PropType {
    idx?: number;
    data: GetDataType[];
}
export default function Record(props: PropType): JSX.Element {
    const curDate = useRecoilValue(curDateState);
    const fullDate = format(curDate, 'yyyy-MM-dd');
    const [modal, setClose] = useRecoilState(modalState);
    const selectDay = useRecoilValue(selectDateState);
    const [edit, setEdit] = useState(false);
    const [color, setColor] = useRecoilState(ColorState);
    const isMobile = useMediaQuery({ maxWidth: 980 });
    let diary = props.data;
    let diaryArr: GetDataType[] = [];

    diary?.map((item: GetDataType) => {
        if (item.datetime.split(' ')[0] === selectDay) {
            diaryArr.push(item);
        }
    });

    const modalClose = (date: string, idx?: number) => {
        setTimeout(() => {
            setClose(false);
        }, 200);
    };

    const handleEdit = () => {
        setEdit(true);
    };

    //선택한 날짜의 데이터를 저장함.
    const todayRecord = props.data?.filter(
        (item) => item.datetime.split(' ')[0] === selectDay
    ).length;

    if (selectDay === fullDate) {
        return (
            <ModalBackground isClose={modal}>
                <ModalSection
                    isClose={modal}
                    color={color ?? `#${diaryArr[0].color}`}
                    view={isMobile}
                >
                    <h2 className="ir">일상기록</h2>
                    <Date>{selectDay}</Date>
                    <CloseButton
                        src={closeImg}
                        alt="모달 닫는 버튼"
                        onClick={() => {
                            modalClose(selectDay, props.idx);
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
                    color={`#${diaryArr[0].color}`}
                    view={isMobile}
                >
                    <h2 className="ir">일상기록</h2>
                    <Date>{selectDay}</Date>
                    <CloseButton
                        src={closeImg}
                        alt="모달 닫는 버튼"
                        onClick={() => {
                            modalClose(selectDay, props.idx);
                        }}
                    />
                    <Diary data={diaryArr} />
                </ModalSection>
            </ModalBackground>
        );
    }
}
