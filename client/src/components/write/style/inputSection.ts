import styled from 'styled-components';
import { ViewType } from '../../../types/style';

const WriteSection = styled.section<ViewType>`
    width: ${(props) => (props.mobile ? '90%' : '100%')};
    height: ${(props) => (props.mobile ? '81vh' : '88vh')};
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    margin: 0 auto;
    text-align: center;
    padding: ${(props) => (props.mobile ? '30px 10px' : '30px')};
    overflow-y: scroll;
`;

const Color = styled.input`
    width: 50px;
`;

const DateP = styled.p`
    font-size: 25px;
    font-weight: 700;
    text-align: left;
`;
const WriteDiv = styled.div<ViewType>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: ${(props) => (props.mobile ? '100%' : '100%')};
    height: 100%;
    flex-direction: ${(props) => (props.mobile ? 'center' : '')};
    align-items: ${(props) => (props.mobile ? 'center' : '')};
`;
const WriteForm = styled.form<ViewType>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 3%;
`;
const FileLabel = styled.label<ViewType>`
    position: relative;
    width: ${(props) => (props.mobile ? '100%' : '100%')};
    border: 1px dashed #8b8687;
    border-radius: 12px;
    padding: 51px 111px;
    height: 92%;
    &::before {
        position: absolute;
        display: block;
        content: '';
        width: 8rem;
        height: 8rem;
        background-color: ${({ theme }) => theme.color.inputBoxColor};
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    &::after {
        position: absolute;
        display: block;
        content: '';
        width: 4rem;
        height: 4rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: url('assets/Light.svg') no-repeat center;
    }
    &:focus {
        border: 2px dashed #8b8687;
    }
`;
const ImageLoading = styled.div`
    position: relative;
    width: 100%;
    border: 1px dashed #8b8687;
    border-radius: 12px;
    height: 92%;
`;

const ImageLabel = styled.label<ViewType>`
    width: 100%;
    border: 1px dashed #8b8687;
    border-radius: 12px;
    height: 92%;
`;
const WriteTitle = styled.input`
    display: block;
    width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 20px;
    height: 8%;
`;
const WriteContents = styled.textarea`
    width: 100%;
    display: block;
    height: 90%;
    border-radius: 10px;
    padding: 20px;
    resize: none;
`;
const ImageFile = styled.input`
    display: block;
`;
const SubmitButton = styled.button`
    width: 100%;
    border: 0;
    height: 80px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.color.inputBoxColor};
`;
const FileContainer = styled.div`
    position: relative;
    width: 100%;
    height: 92%;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    transform: translate(-50%, -50%);
`;
export {
    WriteSection,
    WriteForm,
    WriteTitle,
    ImageFile,
    WriteContents,
    WriteDiv,
    ImageLabel,
    FileLabel,
    SubmitButton,
    FileContainer,
    DateP,
    Color,
    ImageLoading,
};
