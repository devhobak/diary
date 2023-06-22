import styled from 'styled-components';
interface PropType {
    title?: string;
    color?: string;
    view?: boolean;
}
interface ViewType {
    view: boolean;
}
const TopLayout = styled.section`
    grid-area: top;
    height: 4rem;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    border: 1px solid #fff;
`;
const CalendarLayout = styled.section<ViewType>`
    //position: relative;
    //width: 100rem;
    width: ${(props) => (props.view ? '90%' : '65vw')};
    //height: ${(props) => (props.view ? '82vh' : '92vh')};
    //height: calc (100% + 82.09px);
    height: ${(props) => (props.view ? '87%' : '90vh')};
    grid-area: main;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    margin: ${(props) => (props.view ? '10px' : '10px')} auto;
    text-align: center;
    border-radius: 10px;
    //padding: 20px;
`;
const DaySection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    margin: 0 auto;
`;
const CalendarHead = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.defaultSize};
    padding-top: 10px;
`;
const DayOfLi = styled.li<ViewType>`
    width: ${(props) => (props.view ? '11%' : '12%')};
    height: 20px;
    background-color: ${({ theme }) => theme.color.inputBoxColor};
    padding: 3px;
    border-radius: 10px;
`;
const DayUI = styled.ul`
    //width: 100rem;
    width: 100%;
    height: 60%;
    flex-wrap: wrap;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;
const DayOfUI = styled.ul`
    width: 100%;
    height: 10%;
    flex-wrap: wrap;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;
const DayLi = styled.li<ViewType>`
    position: relative;
    background-color: ${(props) => props.color};
    //width: 120px;
    width: ${(props) => (props.view ? '11%' : '12%')};
    height: ${(props) => (props.view ? '15%' : '20%')};
    border: 1px solid ${({ theme }) => theme.color.inputBoxColor};
    border-radius: 10px;
    text-align: left;
    padding: 10px;
`;

const StateDiv = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1px;
`;
const StateRecord = styled.div<PropType>`
    //display: inline-block;
    width: 15%;
    height: 15%;
    background-color: ${(props) => props.color};
    border-radius: 20px;
    border: 1px solid #dbdbdb;
`;
const MonthCalendar = styled.input<ViewType>`
    position: relative;
    top: 10px;
    left: ${(props) => (props.view ? '-35%' : '-40%')};
    //left: -40px;
    //margin-left: 20px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.color.inputBoxColor};
    padding: 10px;
    width: 100px;
    height: 20px;
    text-align: left;

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
    DayOfUI,
    DayOfLi,
    CalendarHead,
    StateRecord,
    StateDiv,
    MonthCalendar,
};
