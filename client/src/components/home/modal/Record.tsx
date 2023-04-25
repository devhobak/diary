import React from 'react';
import InputSection from './InputSection';
import styled from 'styled-components';
import closeImg from '../../../assets/close.png';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { dateState } from '../../../recoil/atoms/calendarState';
import Diary from './Diary';
interface StyleType {
    display: string;
}
const RecordBackground = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;
const RecordSection = styled.section<StyleType>`
display:${(props) => (props.display === 'none' ? 'none' : 'block')}
    position: relative;
    width: 54.4rem;
    height: 73rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    margin: 0 auto;
    padding: 2.2rem 3.2rem;
    border-radius: 15px;
    border: 1px solid #dbdbdb;
`;
const CloseButton = styled.img`
    position: absolute;
    top: 22px;
    right: 32px;
`;
const Date = styled.div`
    font-size: 2.4rem;
    text-align: left;
    margin-bottom: 25px;
`;
interface PropType {
    curDate: string;
    date: string;
    idx: number;
}
export default function Record(props: PropType): JSX.Element {
    const setDate = useSetRecoilState(dateState);
    const dateValue = useRecoilValue(dateState);
    const modalClose = (date: string, idx: number) => {
        let arr = [...dateValue];
        arr.splice(idx, 1, { date: date, modal: false });
        setDate(arr);
        console.log(date);
    };
    if (props.date === props.curDate) {
        return (
            <RecordBackground>
                <RecordSection display="">
                    <h2 className="ir">일상기록</h2>
                    <Date>{props.date}</Date>
                    <CloseButton
                        src={closeImg}
                        alt="모달 닫는 버튼"
                        onClick={() => {
                            modalClose(props.date, props.idx);
                        }}
                    />
                    <InputSection />
                </RecordSection>
            </RecordBackground>
        );
    } else {
        return (
            <RecordBackground>
                <RecordSection display="">
                    <h2 className="ir">일상기록</h2>
                    <Date>{props.date}</Date>
                    <CloseButton
                        src={closeImg}
                        alt="모달 닫는 버튼"
                        onClick={() => {
                            modalClose(props.date, props.idx);
                        }}
                    />
                    <Diary />
                </RecordSection>
            </RecordBackground>
        );
    }
}
