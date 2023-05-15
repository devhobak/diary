import styled from 'styled-components';

const ViewSection = styled.section`
    grid-area: main;
    width: 100rem;
    position: relative;
    height: 75rem;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    margin: 10px auto;
    text-align: center;
    border-radius: 10px;
`;
export { ViewSection };
