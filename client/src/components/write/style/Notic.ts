import styled from 'styled-components';

const Notice = styled.div`
    padding: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const Button = styled.button`
    width: 220px;
    height: 40px;
    background-color: ${({ theme }) => theme.color.inputBoxColor};
    border: 0;
    border-radius: 20px;
`;
const P = styled.p`
    margin-bottom: 20px;
    font-size: 25px;
`;
export { Button, P, Notice };
