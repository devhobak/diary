import styled from 'styled-components';
interface PropType {
    title?: string;
    color?: string;
}

const TopLayout = styled.section`
    grid-area: top;
    height: 4rem;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    border: 1px solid #fff;
`;
const CalendarLayout = styled.section`
    position: relative;
    width: 100rem;
    height: 75rem;
    grid-area: main;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    margin: 10px auto;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
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
const DayLi = styled.li<PropType>`
    position: relative;
    background-color: ${(props) => (props.title ? '#FAFAFA' : '#ffff')};
    width: 120px;
    height: 90px;
    border: 1px solid ${({ theme }) => theme.color.inputBoxColor};
    border-radius: 10px;
    text-align: left;
    padding: 10px;
`;
const DayOfLi = styled.li`
    width: 120px;
    height: 20px;
    background-color: ${({ theme }) => theme.color.inputBoxColor};
    padding: 3px;
    border-radius: 10px;
`;
const StateDiv = styled.div`
    display: flex;

    flex-direction: row;
    flex-wrap: wrap;
    gap: 1px;
`;
const StateRecord = styled.div<PropType>`
    //display: inline-block;
    width: 1.5rem;
    height: 1rem;
    background-color: ${(props) => props.color};
    border-radius: 20px;
    border: 1px solid #dbdbdb;
`;
const MonthCalendar = styled.input`
    position: absolute;
    top: 30px;
    left: 50px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.color.inputBoxColor};
    padding: 10px;
    &::before {
        content: attr(data-placeholder);
        width: 100%;
    }
`;
export {
    TopLayout,
    CalendarLayout,
    DayUI,
    DayLi,
    DaySection,
    DayOfLi,
    CalendarHead,
    StateRecord,
    StateDiv,
    MonthCalendar,
};
