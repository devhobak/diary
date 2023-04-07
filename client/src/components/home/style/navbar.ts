import styled from 'styled-components';
const NavLayout = styled.section`
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    height: 100vh;
    grid-area: nav;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border: 1px solid #fff;
    padding: 30px 30px 0 30px;
`;
const LogoImg = styled.img`
    width: 50px;
    height: 50px;
`;
const NavList = styled.ul`
    border-radius: 10px;
    flex-basis: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const NavLi = styled.li`
    border-radius: 10px;
    width: 90%;
    height: 40px;
    text-align: center;
    font-size: 1.2rem;
    padding: 15px;
    &:hover {
        background-color: ${({ theme }) => theme.color.inputBoxColor};
    }
`;
const LogOutButton = styled.button`
    display: block;
    background-color: ${({ theme }) => theme.color.headerBackgroundColor};
    border: 0;
    text-align: left;
    //width: 20%;
    //flex-basis: 20%;
`;
export { NavLayout, LogOutButton, NavList, LogoImg, NavLi };
