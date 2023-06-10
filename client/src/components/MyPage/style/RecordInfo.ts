import styled from 'styled-components';

const RecordInfoSection = styled.section`
    grid-area: main;
    width: 100rem;
    position: relative;
    height: 75rem;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    margin: 0px auto;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
`;
export { RecordInfoSection };
