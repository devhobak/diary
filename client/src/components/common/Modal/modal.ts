import { keyframes } from "styled-components";
import styled from "styled-components";
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
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
interface CloseType {
   isClose: boolean;
   view?: boolean;
   color?: string;
}

const ModalBackground = styled.div<CloseType>`
   background-color: rgba(0, 0, 0, 0.3);
   animation: ${({ isClose }) => (isClose ? fadeIn : fadeOut)} 0.5s ease-out;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
`;
const ModalSection = styled.section<CloseType>`
   position: relative;
   width: ${props => (props.view ? "90%" : "54rem")};
   height: ${props => (props.view ? "100%" : "73rem")};
   height: 90%;
   overflow-y: scroll;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   margin: 0 auto;
   padding: 2.2rem 3.2rem;
   border-radius: 15px;
   animation: ${({ isClose }) => (isClose ? fadeIn : fadeOut)} 0.5s ease-out;
   background-color: ${props => props.color};
   border: 1px solid ${props => props.color};
`;
const CloseButton = styled.img`
   width: 20px;
   height: 20px;
   position: absolute;
   top: 22px;
   right: 32px;
   z-index: 100;
`;
const Date = styled.div`
   font-size: 2.4rem;
   text-align: left;
   margin-bottom: 10px;
`;
const EditButton = styled.button`
   width: 8rem;
   height: 2.5rem;
   position: absolute;
   right: 60px;
   border-radius: 15px;
   border: 0;
   background-color: ${({ theme }) => theme.color.inputBoxColor};
   border: 2px solid #23262f;
   font-size: 10px;
   z-index: 1000;
`;
export { ModalBackground, ModalSection, CloseButton, Date, EditButton };
