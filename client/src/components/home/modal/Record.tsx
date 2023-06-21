import { useState } from 'react';
import InputSection from './InputSection';
import closeImg from '../../../assets/close.png';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
    curDateState,
    selectDateState,
} from '../../../recoil/atoms/calendarState';
import Diary from './Diary';
import { format } from 'date-fns';
import {
    RecordBackground,
    RecordSection,
    CloseButton,
    Date,
    EditButton,
} from './style/Record';
import { modalState } from '../../../recoil/atoms/modalState';
import { ColorState, positionState } from '../../../recoil/atoms/recordState';
import Edit from './Edit';
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
    const [positionPost, setPositionPost] = useRecoilState(positionState);
    const [color, setColor] = useRecoilState(ColorState);
    const isMobile = useMediaQuery({ maxWidth: 980 });
    console.log(isMobile);
    let diary = props.data;
    let diaryArr: GetDataType[] = [];
    diary?.map((item: GetDataType) => {
        if (item.datetime.split('T')[0] === selectDay) {
            diaryArr.push(item);
        }
    });
    const modalClose = (date: string, idx?: number) => {
        setTimeout(() => {
            setClose(false);
            setColor('#ffff');
        }, 200);
    };
    const handleEdit = () => {
        setEdit(true);
        console.log(edit);
    };
    console.log(diaryArr);
    const todayRecord = props.data?.filter(
        (item) => item.datetime.split('T')[0] === selectDay
    ).length;
    if (selectDay === fullDate) {
        return (
            <RecordBackground isClose={modal}>
                <RecordSection
                    isClose={modal}
                    color={color ?? `#${diaryArr[positionPost].color}`}
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
                </RecordSection>
            </RecordBackground>
        );
    } else {
        return (
            <RecordBackground isClose={modal}>
                <RecordSection
                    isClose={modal}
                    color={`#${diaryArr[positionPost].color}`}
                    view={isMobile}
                >
                    <h2 className="ir">일상기록1</h2>
                    <Date>{selectDay}</Date>
                    <CloseButton
                        src={closeImg}
                        alt="모달 닫는 버튼"
                        onClick={() => {
                            modalClose(selectDay, props.idx);
                        }}
                    />
                    <Diary data={diaryArr} />
                </RecordSection>
            </RecordBackground>
        );
    }
}
