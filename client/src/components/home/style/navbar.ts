import styled from 'styled-components';
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
    width: 15rem;
    border-radius: 10px;
    flex-basis: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const NavLi = styled.li`
    border-radius: 10px;
    width: 200px;
    height: 45px;
    text-align: left;
    font-size: 1.2rem;
    line-height: 45px;
    &:hover {
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
export { NavLayout, LogOutButton, NavList, LogoImg, NavLi, IconImg };
