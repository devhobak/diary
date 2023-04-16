import React from 'react';
import InputSection from './InputSection';
import styled from 'styled-components';
import closeImg from '../../../assets/close.png';
const RecordSection = styled.section`
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
}
export default function Record(props: PropType): JSX.Element {
    return (
        <RecordSection>
            <h2 className="ir">일상기록</h2>
            <Date>{props.curDate}</Date>
            <CloseButton src={closeImg} alt="모달 닫는 버튼" />
            <InputSection />
        </RecordSection>
    );
}
