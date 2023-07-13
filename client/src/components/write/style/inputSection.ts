import styled from 'styled-components';
interface ViewType {
    view: boolean;
}
const WriteSection = styled.section<ViewType>`
    // position: relative;
    width: ${(props) => (props.view ? '90%' : '100%')};
    height: ${(props) => (props.view ? '82vh' : '88vh')};
    //height: 100%;
    // grid-area: main;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    margin: 0 auto;
    text-align: center;
    //border-radius: 10px;
    padding: 30px;
    overflow-y: scroll;
`;
const Color = styled.input`
    width: 50px;
    height: 10%;
`;
const DateP = styled.p`
    font-size: 25px;
    font-weight: 700;
    text-align: left;
    //position: absolute;
`;
const WriteDiv = styled.div<ViewType>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: ${(props) => (props.view ? '100%' : '100%')};
    height: 100%;
    flex-direction: ${(props) => (props.view ? 'center' : '')};
    align-items: ${(props) => (props.view ? 'center' : '')};
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
    width: ${(props) => (props.view ? '100%' : '100%')};
    border: 1px dashed #8b8687;
    border-radius: 12px;
    padding: 51px 111px;
    height: ${(props) => (props.view ? '10%' : '60%')};

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
        background: url('assets/file.png') no-repeat center;
    }
    &:focus {
        border: 2px dashed #8b8687;
    }
`;
const ImageLabel = styled.label<ViewType>`
    width: ${(props) => (props.view ? '100%' : '100%')};
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
    border: 1px solid #dbdbdb;
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
};
