import React from 'react';
import styled from 'styled-components';

const HeaderLayout = styled.header`
    width: 100vh;
    height: 7.6rem;
    background-color: ${(props) => props.theme.color.headerBackgroundColor};
`;
export default function Header() {
    return <HeaderLayout></HeaderLayout>;
}
