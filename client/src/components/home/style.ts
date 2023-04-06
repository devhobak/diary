import styled from 'styled-components';

const HomeLayout = styled.section`
    display: grid;
    grid-template-areas: 'nav top' 'nav calendar';
`;
const NavLayout = styled.section`
    grid-area: nav;
`;
const TopLayout = styled.section`
    grid-area: top;
`;
const CalendarLayout = styled.section`
    grid-area: 'calendar';
`;

export { HomeLayout, NavLayout, TopLayout, CalendarLayout };
