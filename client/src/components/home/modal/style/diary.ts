import styled from 'styled-components';
interface Type {
    type?: string;
    idx?: number;
    first?: number;
    color?: string;
}
const DiarySection = styled.section<Type>`
    position: absolute;
    //  width: 54.4rem;
    // height: 73rem;
    // border-radius: 15px;
    //padding: 60px 30px;
    //top: 50%;
    //left: 50%;
    //transform: translate(-50%, -50%);
    //z-index: -10;
    //padding: 60px 30px;
`;
const DiaryList = styled.ul`
    width: 500px;
    height: 700px;
    display: flex;
    justify-content: center;
    gap: 15px;
    position: relative;
    padding-left: 20px;
    overflow-x: hidden;
`;
const Diaryli = styled.li<Type>`
    position: absolute;
    left: ${(props) => props.idx}px;
    transition: all 0.5s;
    &:first-child {
        position: absolute;
        left: ${(props) => props.first}px;
    }
`;
const DiaryLabel = styled.p`
    text-align: left;
    font-size: 1.6rem;
    font-weight: 700;
    margin-top: 30px;
`;
const DiaryTitle = styled.div`
    width: 48.2rem;
    height: 5.6rem;
    background: url('assets/Light.png') no-repeat 440px;
    padding: 16px 50px 16px 16px;
    border-radius: 12px;
    border: 1px solid #dfdfe6;
    font-size: 1.5rem;
    text-align: left;
    margin-top: 15px;
    background-color: #fff;
`;
const DiaryTextarea = styled.div<Type>`
    width: 48.2rem;
    height: ${(props) => (props.type ? '25rem' : '40rem')};
    background: url('assets/Light.png') no-repeat 440px 10px;
    padding: 16px 50px 16px 16px;
    border-radius: 12px;
    border: 1px solid #dfdfe6;
    font-size: 1.2rem;
    text-align: left;
    margin-top: 15px;
    background-color: #fff;
`;
const DiaryImgDiv = styled.div`
    width: 48.2rem;
    height: 22rem;
    border-radius: 12px;
    border: 1px solid #dfdfe6;
    background-color: #fff;
`;
const PrevBtn = styled.img`
    position: absolute;
    left: 0px;
`;
const NextBtn = styled.img`
    position: absolute;
    right: 0px;
`;
export {
    DiarySection,
    DiaryTitle,
    DiaryTextarea,
    DiaryLabel,
    DiaryImgDiv,
    DiaryList,
    Diaryli,
    PrevBtn,
    NextBtn,
};
