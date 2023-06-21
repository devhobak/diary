import styled from 'styled-components';

const RecordInfoSection = styled.section`
    grid-area: main;
    width: 65vw;
    position: relative;
    height: 75rem;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    margin: 10px auto;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
`;
export { RecordInfoSection };
