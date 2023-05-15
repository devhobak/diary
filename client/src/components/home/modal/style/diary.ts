import Slider from 'react-slick';
import styled from 'styled-components';
interface Type {
    type?: string;
}
const SliderStyle = styled(Slider)`
    .slick-list {
        width: 50rem;
        text-align: right;
        margin-right: 20px;
    }
`;
const DiarySection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
`;
const DiaryLabel = styled.p`
    text-align: left;
    font-size: 1.6rem;
    font-weight: 700;
    margin-top: 15px;
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
`;
const DiaryTextarea = styled.div<Type>`
    width: 48.2rem;
    height: ${(props) => (props.type ? '20rem' : '40rem')};
    background: url('assets/Light.png') no-repeat 440px 10px;
    padding: 16px 50px 16px 16px;
    border-radius: 12px;
    border: 1px solid #dfdfe6;
    font-size: 1.2rem;
    text-align: left;
    margin-top: 15px;
`;
const DiaryImgDiv = styled.div`
    width: 48.2rem;
    height: 20rem;
    border-radius: 12px;
    border: 1px solid #dfdfe6;
`;
const EditButton = styled.button`
    width: 8rem;
    height: 2.5rem;
    border-radius: 15px;
    border: 0;
    background-color: ${({ theme }) => theme.color.inputBoxColor};
    font-size: 10px;
    margin-right: 20px;
`;
export {
    DiarySection,
    DiaryTitle,
    DiaryTextarea,
    DiaryLabel,
    DiaryImgDiv,
    SliderStyle,
    EditButton,
};
