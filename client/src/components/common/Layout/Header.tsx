import styled from 'styled-components';

const HeaderLayout = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 8%;
    background-color: ${(props) => props.theme.color.headerBackgroundColor};
    margin-bottom: 10px;
    padding: 5px;
`;

export default function Header() {
    return <HeaderLayout></HeaderLayout>;
}
