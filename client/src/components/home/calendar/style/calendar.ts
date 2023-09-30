import styled from 'styled-components';
import { ViewType } from '../../../../types/style';
interface PropType {
    title?: string;
    color?: string;
    view?: boolean;
}

const TopLayout = styled.section`
    grid-area: top;
    height: 4rem;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    border: 1px solid #fff;
`;
const CalendarLayout = styled.section<ViewType>`
    width: ${(props) => (props.mobile ? '90%' : '100%')};
    height: ${(props) => (props.mobile ? '82vh' : '100%')};
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    text-align: center;
    margin: 0 auto;
`;
const DaySection = styled.section`
    width: 100%;
    height: 85%;
    margin: 0 auto;
`;
const CalendarHead = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.defaultSize};
    padding-top: 10px;
    margin-bottom: 10px;
`;
const DayOfLi = styled.li`
    padding: 10px;
    border: 0.5px solid #dbdbdb;
`;
const DayUI = styled.ul`
    height: 95%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

const DayOfUI = styled.ul`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
    height: 5%;
    flex-wrap: wrap;
`;

const DayLi = styled.li<PropType>`
    position: relative;
    background-color: ${(props) => props.color};
    width: 100%;
    border: 0.5px solid #dbdbdb;
    text-align: left;
    padding: 10px;
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
    font-size: ${(props) => (props.mobile ? '1rem' : '1.2rem')};
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
