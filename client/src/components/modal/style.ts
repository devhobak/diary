import styled, { keyframes } from 'styled-components';
interface Propstype {
    page?: string;
    confirmModal?: boolean;
    view?: boolean;
}

const fadeIn = keyframes`
0%{
    opacity: 0;
}100%{
    opacity: 1;
}

`;
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const ConfirmModal = styled.article<Propstype>`
    // width: ${(props) => (props.view ? '90%' : '65vw')};
    // height: ${(props) => (props.view ? '87%' : '90vh')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    //background-color: rgba(0, 0, 0, 0.3);
    animation: ${({ confirmModal }) => (confirmModal ? fadeOut : fadeIn)} 0.5s
        ease-out;
    overflow-y: scroll;
`;

const ModalBox = styled.div<Propstype>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.color.inputBoxColor};
    width: ${(props) => (props.view ? '60%' : '50%')};
    height: 15%;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 15px;
    padding: ${(props) => (props.view ? '20px' : '30px 20px')};
    animation: ${({ confirmModal }) => (confirmModal ? fadeIn : fadeOut)} 0.5s
        ease-out;
`;
const ModalMessage = styled.p`
    font-size: 1.3rem;
    margin-bottom: 20px;
`;
const ModalButton = styled.button`
    background-color: #ffff;
    width: 40%;
    height: 30px;
    border: 0;
    border-radius: 10px;
    margin-right: 10px;
`;
export { ConfirmModal, ModalBox, ModalButton, ModalMessage };
