import styled from 'styled-components';
interface ProsType {
    find: string;
}
const RecordInputSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
`;

const RecordForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
const RecordInput = styled.input`
    width: 100%;
    height: 8%;
    background: url('assets/Light.png') no-repeat 95%;
    padding: 16px 50px 16px 16px;
    border-radius: 12px;
    border: 1px solid #dfdfe6;
    background-color: #fff;
`;
const Recordarea = styled.textarea`
    //width: 48.2rem;
    // height: 20rem;
    width: 100%;
    height: 70%;
    background: url('assets/Light.png') no-repeat 95% 5%;
    padding: 16px 50px 16px 16px;
    border-radius: 12px;
    border: 1px solid #dfdfe6;
    background-color: #fff;
`;
const InputLabel = styled.label`
    text-align: left;
    font-size: 1.6rem;
    font-weight: 700;
`;
const FileLabel = styled.label`
    position: relative;
    border: 1px dashed #8b8687;
    border-radius: 12px;
    height: 15rem;
    padding: 51px 111px;
    background-color: #fff;
    &::before {
        position: absolute;
        display: block;
        content: '';
        width: 8rem;
        height: 8rem;
        background-color: ${({ theme }) => theme.color.inputBoxColor};
        border-radius: 50%;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
    }
    &::after {
        position: absolute;
        display: block;
        content: '';
        width: 4rem;
        height: 4rem;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        background: url('assets/file.png') no-repeat center;
    }
    &:focus {
        border: 2px dashed #8b8687;
    }
`;
const ImgLabel = styled.label`
    position: relative;
    border: 1px dashed #8b8687;
    border-radius: 12px;
    height: 15rem;
    padding: 51px 111px;
`;
const RecordButton = styled.button<ProsType>`
    height: 70px;
    border-radius: 6px;
    border: 1px solid #dbdbdb;
    background: ${(props) => (props.find === 'submit' ? '#F9C00C' : '#ffff')};
    color: ${(props) => (props.find === 'submit' ? '#FFFF' : '#F9C00C')};
`;
const Filep = styled.p`
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #8b8687;
`;
const FileContainer = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    transform: translate(-50%, -50%);
`;
const FileDelete = styled.img`
    position: absolute;
    top: -5%;
    right: -5%;
    width: 15px;
`;
const FileImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    object-fit: contain;
`;

const ColorInput = styled.input`
    display: block;
    margin-bottom: 15px;
    width: 30px;
    height: 60px;
    padding: 0;
`;

export {
    RecordInput,
    RecordInputSection,
    RecordForm,
    InputLabel,
    FileLabel,
    RecordButton,
    Recordarea,
    Filep,
    ImgLabel,
    FileImg,
    FileContainer,
    FileDelete,
    ColorInput,
};
