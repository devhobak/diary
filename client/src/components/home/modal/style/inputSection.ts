import styled from 'styled-components';
interface ProsType {
    find: string;
}
const RecordInputSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const RecordForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
const RecordInput = styled.input`
    width: 48.2rem;
    height: 5.6rem;
    background: url('assets/Light.png') no-repeat 440px;
    padding: 16px 50px 16px 16px;
    border-radius: 12px;
    border: 1px solid #dfdfe6;
`;
const Recordarea = styled.textarea`
    width: 48.2rem;
    height: 20rem;
    background: url('assets/Light.png') no-repeat 440px 10px;
    padding: 16px 50px 16px 16px;
    border-radius: 12px;
    border: 1px solid #dfdfe6;
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
    &::before {
        position: absolute;
        display: block;
        content: '';
        width: 8rem;
        height: 8rem;
        background-color: #f9c00c;
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
`;
const RecordButton = styled.button<ProsType>`
    height: 4.8rem;
    border-radius: 6px;
    border: 1px solid #f9c00c;
    background: ${(props) => (props.find === 'submit' ? '#F9C00C' : '#ffff')};
    color: ${(props) => (props.find === 'submit' ? '#FFFF' : '#F9C00C')};
`;
const Filep = styled.p`
    position: absolute;
    bottom: 20px;
    color: #8b8687;
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
};
