import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
 html{
    font-size:62.5%;
 }
  body{
    box-sizing: border-box;
  }
  button{
    cursor: pointer;
  }
  ul{
    list-style: none;
  }
`;

export default GlobalStyle;
