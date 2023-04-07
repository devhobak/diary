import styled from 'styled-components';

const HomeLayout = styled.section`
    display: grid;
    grid-template-areas: 'nav top top top' 'nav calendar calendar calendar';
`;

const TopLayout = styled.section`
    grid-area: top;
    height: 4rem;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    border: 1px solid #fff;
`;
const CalendarLayout = styled.section`
    height: 75rem;
    grid-area: calendar;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    margin: 10px auto;
    text-align: center;
    border-radius: 10px;
`;
const DaySection = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;
const CalendarHead = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.defaultSize};
    //margin-bottom: 10px;
    padding-top: 10px;
    gap: 10px;
`;
const DayUI = styled.ul`
    width: 100rem;
    flex-wrap: wrap;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;
const DayLi = styled.li`
    width: 120px;
    height: 90px;
    border: 1px solid ${({ theme }) => theme.color.inputBoxColor};
    border-radius: 10px;
    text-align: left;
    padding: 10px;
`;
const DaySpan = styled.p`
    width: 120px;
    height: 20px;
    background-color: ${({ theme }) => theme.color.inputBoxColor};
    padding: 3px;
    border-radius: 10px;
`;
export {
    HomeLayout,
    TopLayout,
    CalendarLayout,
    DayUI,
    DayLi,
    DaySection,
    DaySpan,
    CalendarHead,
};
