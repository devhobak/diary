import styled from "styled-components";
interface ChildType {
   child: number;
   view?: boolean;
}
interface ViewType {
   view: boolean;
}
const Layout = styled.section<ViewType>`
   display: grid;
   height: calc(100vh);
   overflow-y: hidden;
   grid-template-areas: ${props => (props.view ? "'top' 'main' 'nav' " : "'nav top' 'nav main'")};
   grid-template-rows: ${props => (props.view ? "1fr 7fr 2fr" : "1fr 15fr")};
   grid-template-columns: ${props => (props.view ? "" : "1fr 4fr")};
`;

const NavLayout = styled.section<ViewType>`
   position: ${prpos => (prpos.view ? "fixed" : "")};
   bottom: ${prpos => (prpos.view ? "0" : "")};
   background-color: ${({ theme }) => theme.color.headerBackgroundColor};
   grid-area: nav;
   display: flex;
   flex-direction: ${props => (props.view ? "row" : "column")};
   gap: 30px;
   border: 1px solid #fff;
   padding: ${props => (props.view ? "0px" : "20px")} 10px 0 10px;
   width: ${props => (props.view ? "100%" : "100%")};
   height: ${props => (props.view ? "10vh" : "100%")};
`;
const MainLayout = styled.section<ViewType>`
   grid-area: main;
   text-align: center;
   padding: ${props => (props.view ? "1%" : " 2% 8%")};
`;
const LogoImg = styled.img`
   width: 50px;
   height: 50px;
   margin-left: 10%;
   margin-top: 2px;
`;
const NavList = styled.ul<ViewType>`
   width: ${props => (props.view ? "100%" : "90%")};
   border-radius: 10px;
   display: flex;
   flex-direction: ${props => (props.view ? "row" : "column")};
   gap: 20px;
   justify-items: center;
   align-items: center;
   margin: 0 auto;
`;
const NavLi = styled.li<ChildType>`
   display: flex;
   flex-direction: ${props => (props.view ? "column" : "row")};
   gap: 5px;
   border-radius: 10px;
   width: ${props => (props.view ? "25%" : "90%")};
   height: 50px;
   padding: 5px;
   align-items: center;
   text-align: left;
   font-size: 1.2rem;
   &:hover {
      background-color: ${({ theme }) => theme.color.inputBoxColor};
   }
   &:nth-child(${({ child }) => child}) {
      background-color: ${({ theme }) => theme.color.inputBoxColor};
   }
`;
const LogOutButton = styled.button`
   display: block;
   position: absolute;
   right: 20px;
   top: 20px;
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
export { Layout, NavLayout, LogOutButton, NavList, LogoImg, NavLi, IconImg, MainLayout };
