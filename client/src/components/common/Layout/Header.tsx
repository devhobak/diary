import React from "react";
import styled from "styled-components";
import LogoImg from "../../../assets/logo.png";
const HeaderLayout = styled.header`
   position: fixed;
   top: 0;
   width: 100%;
   height: 8%;
   background-color: ${props => props.theme.color.headerBackgroundColor};
   margin-bottom: 10px;
   padding: 5px;
`;
const Logo = styled.img``;
export default function Header() {
   return <HeaderLayout></HeaderLayout>;
}
