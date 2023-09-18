import styled from "styled-components";

interface FindProps {
   find?: string;
}

const FormLayout = styled.form`
   margin: 30px auto 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 30px;
`;

const Input = styled.input<FindProps>`
   background: url("assets/${props => props.find}.png") no-repeat 15px center;
   padding: 0 5.6rem;
   width: 100%;
   height: 5.2rem;
   border-radius: 0.8rem;
   background-color: ${({ theme }) => theme.color.inputBoxColor};
   border: 0;
`;

const LoginButton = styled.button`
   width: 100%;
   height: 5.2rem;
   color: ${({ theme }) => theme.color.inputBoxColor};
   background-color: ${({ theme }) => theme.color.headerBackgroundColor};
   border-radius: 0.8rem;
   border: 1px solid ${({ theme }) => theme.color.inputBoxColor};
`;

const LinkButton = styled.button<FindProps>`
   color: #000000;
   background-color: ${({ theme }) => theme.color.headerBackgroundColor};
   border: 0;
   margin-left: ${props => (props.find === "find" ? "auto" : 0)};
`;

const Label = styled.label`
   position: relative;
   width: 100%;
   height: 70px;
`;

const ErrorMsg = styled.div`
   margin-top: 5px;
   color: #000;
   font-size: 1.2rem;
   text-align: left;
`;

const PwImg = styled.img`
   width: 18px;
   position: absolute;
   right: 15px;
   top: 18px;
`;

export { FormLayout, Input, LoginButton, LinkButton, ErrorMsg, Label, PwImg };
