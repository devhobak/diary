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
    width: ${(props) => (props.view ? '90%' : '100%')};
    height: ${(props) => (props.view ? '82vh' : '100%')};
    //height: calc (100% + 82.09px);
    // height: ${(props) => (props.view ? '87%' : '90vh')};
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    // margin: ${(props) => (props.view ? '10px' : '10px')} auto;
    text-align: center;
    // border-radius: 10px;
    //padding: 20px;
    //  padding: 2%;
    margin: 0 auto;
`;
const DaySection = styled.section`
    width: 100%;
    height: 85%;
    // display: flex;
    // flex-direction: column;
    //justify-content: center;
    //align-items: center;
    margin: 0 auto;
    //  padding: 2%;
`;
const CalendarHead = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.defaultSize};
    padding-top: 10px;
    margin-bottom: 10px;
`;
const DayOfLi = styled.li<ViewType>`
    // width: ${(props) => (props.view ? '11%' : '12%')};
    // height: 20px;
    // background-color: ${({ theme }) => theme.color.inputBoxColor};
    padding: 10px;
    //border-radius: 10px;
    border: 0.5px solid #dbdbdb;
`;
const DayUI = styled.ul`
    // width: 100%;
    height: 95%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    //grid-template-rows: auto;
    //한줄에 7개
    // width: 100%;
    // height: 60%;
    //flex-wrap: wrap;
    // display: flex;
    //gap: 10px;
    //align-items: center;
    //justify-content: center;
    //padding: 10px;
`;
const DayOfUI = styled.ul`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
    height: 5%;
    flex-wrap: wrap;
    // display: flex;
    // gap: 10px;
    // align-items: center;
    // justify-content: center;
    //padding: 10px;
`;
const DayLi = styled.li<ViewType>`
    position: relative;
    background-color: ${(props) => props.color};
    //width: 120px;
    width: 100%;
    //height: 100%;
    // width: ${(props) => (props.view ? '11%' : '12%')};
    //height: ${(props) => (props.view ? '15%' : '20%')};
    //border: 1px solid ${({ theme }) => theme.color.inputBoxColor};
    border: 0.5px solid #dbdbdb;
    //border-radius: 10px;
    text-align: left;
    padding: 10px;
    //150씩 (패딩제외한 너비) / 7
`;
const DayDate = styled.div`
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
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
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 50px;
    height: 20px;
    text-align: left;
    flex-basis: 100px;
    font-size: ${(props) => (props.view ? '1rem' : '1.2rem')};
    &::before {
        content: attr(data-placeholder);
        width: 100%;
    }
`;
const MonthLabel = styled.label`
    font-size: 1.2rem;
    line-height: 20px;
    width: 80px;
`;
const PassButton = styled.img`
    width: 40px;
    height: 40px;
`;
const CurDate = styled.p`
    width: 20%;
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
    MonthLabel,
    DayDate,
    CurDate,
    PassButton,
};
