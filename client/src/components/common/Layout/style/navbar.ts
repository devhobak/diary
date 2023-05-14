import styled from 'styled-components';
interface ChildType {
    child: number;
}
const Layout = styled.section`
    display: grid;
    grid-template-areas: 'nav top top top' 'nav main main main';
`;
const NavLayout = styled.section`
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    height: 100vh;
    grid-area: nav;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border: 1px solid #fff;
    padding: 30px 10px 0 30px;
`;
const LogoImg = styled.img`
    width: 50px;
    height: 50px;
`;
const NavList = styled.ul`
    width: 17rem;
    border-radius: 10px;
    flex-basis: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const NavLi = styled.li<ChildType>`
    border-radius: 10px;
    width: 100%;
    height: 45px;
    text-align: left;
    font-size: 1.2rem;
    line-height: 45px;
    &:hover {
        background-color: ${({ theme }) => theme.color.inputBoxColor};
    }
    &:nth-child(${({ child }) => child}) {
        background-color: ${({ theme }) => theme.color.inputBoxColor};
    }
`;
const LogOutButton = styled.button`
    display: block;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    border: 0;
    text-align: left;
`;
const IconImg = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 20px;
    margin-left: 20px;
    vertical-align: middle;
`;
export { Layout, NavLayout, LogOutButton, NavList, LogoImg, NavLi, IconImg };
