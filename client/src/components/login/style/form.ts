import styled from 'styled-components';
import meassage from '../../../assets/Message.png';
interface FindProps {
    find?: string;
}
const FormLayout = styled.form`
    width: 37.5rem;
    margin: 60px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;
const Input = styled.input`
    padding: 0 5.6rem;
    width: 37.5rem;
    height: 5.2rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.inputBoxColor};
    border: 0;
`;
const LoginButton = styled.button`
    width: 37.5rem;
    height: 5.2rem;
    color: ${({ theme }) => theme.color.inputBoxColor};
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    border-radius: 0.8rem;
    border: 1px solid ${({ theme }) => theme.color.inputBoxColor};
`;
const LinkButton = styled.button<FindProps>`
    color: ${({ theme }) => theme.color.lightFontColor};
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    border: 0;
    margin-left: ${(props) => (props.find === 'find' ? 'auto' : 0)};
`;
export { FormLayout, Input, LoginButton, LinkButton };
