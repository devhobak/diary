import styled from 'styled-components';

const WriteSection = styled.section`
    grid-area: main;
    width: 100rem;
    position: relative;
    height: 75rem;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    margin: 0px auto;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
`;
const Color = styled.input`
    position: absolute;
    top: 60px;
    left: 30px;
`;
const DateP = styled.p`
    font-size: 25px;
    font-weight: 700;
    position: absolute;
`;
const WriteDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
`;
const WriteForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;
const FileLabel = styled.label`
    position: relative;
    width: 50%;
    border: 1px dashed #8b8687;
    border-radius: 12px;
    height: 50rem;
    padding: 51px 111px;
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
const ImageLabel = styled.label`
    width: 50%;
    border: 1px dashed #8b8687;
    border-radius: 12px;
    height: 50rem;
`;
const WriteTitle = styled.input`
    display: block;
    height: 5rem;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 20px;
`;
const WriteContents = styled.textarea`
    display: block;
    height: 50rem;
    border-radius: 10px;
    padding: 20px;
    resize: none;
`;
const ImageFile = styled.input`
    display: block;
`;
const SubmitButton = styled.button`
    border: 0;
    height: 50px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.color.inputBoxColor};
`;
const FileContainer = styled.div`
    position: relative;
    width: 90%;
    height: 90%;
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
