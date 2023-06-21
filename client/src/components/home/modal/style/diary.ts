import styled from 'styled-components';
interface Type {
    type?: string;
    idx?: number;
    first?: number;
    color?: string;
    view?: boolean;
}
const DiarySection = styled.section<Type>`
    width: ${(props) => (props.view ? '100%' : '54rem')};
    height: ${(props) => (props.view ? '100%' : '73rem')};
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
    //width: 500px;
    //height: 700px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
    position: relative;
    overflow-x: hidden;
`;
const Diaryli = styled.li<Type>`
    width: 100%;
    height: 100%;
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
const DiaryImg = styled.img`
    width: 50%;
    height: 100%;
    object-fit: cover;
`;
const DiaryTitle = styled.div`
    // width: 48.2rem;
    // height: 5.6rem;
    width: 100%;
    height: 8%;
    background: url('assets/Light.png') no-repeat 95%;
    padding: 16px 50px 16px 16px;
    border-radius: 12px;
    border: 1px solid #dfdfe6;
    font-size: 1.5rem;
    text-align: left;
    //margin-top: 15px;
    background-color: #fff;
`;
const DiaryTextarea = styled.p<Type>`
    // width: 48.2rem;
    height: ${(props) => (props.type ? '30%' : '55%')};
    width: 100%;
    //height: 55%;
    background: url('assets/Light.png') no-repeat 95% 5%;
    padding: 16px 50px 16px 16px;
    border-radius: 12px;
    border: 1px solid #dfdfe6;
    font-size: 1.2rem;
    text-align: left;
    margin-top: 15px;
    background-color: #fff;
    white-space: pre-line;
`;
const DiaryImgDiv = styled.div`
    width: 100%;
    height: 35%;
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
    DiaryImg,
};
