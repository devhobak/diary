import styled from 'styled-components';

const Notice = styled.div`
    margin-top: 25%;
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
    font-size: 16px;
`;
export { Button, P, Notice };
