import styled from 'styled-components';
const HomeLayout = styled.section`
    display: grid;
    grid-template-areas: 'nav top top top' 'nav calendar calendar calendar';
`;

const NavLayout = styled.section`
    grid-area: nav;
`;
const TopLayout = styled.section`
    grid-area: top;
`;
const CalendarLayout = styled.section`
    width: 70%;
    grid-area: 'calendar';
    margin: 0 auto;
    text-align: center;
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
    margin-bottom: 20px;
    gap: 10px;
`;
const DayUI = styled.ul`
    width: 900px;
    flex-wrap: wrap;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;
const DayLi = styled.li`
    width: 120px;
    height: 90px;
    border: 1px solid #fff;
    border-radius: 10px;
    text-align: left;
    padding: 10px;
`;
const DaySpan = styled.p`
    width: 120px;
    height: 20px;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    padding: 3px;
    border-radius: 10px;
`;
export {
    HomeLayout,
    NavLayout,
    TopLayout,
    CalendarLayout,
    DayUI,
    DayLi,
    DaySection,
    DaySpan,
    CalendarHead,
};