import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;

  }
 html{
    font-size:62.5%;
    width:100vw;
    height:100vh;
 }
body{
    background-color: #D6ECFA;
    padding-top: 50px;
}
  button{
    cursor: pointer;
  }
  ul{
    list-style: none;
  }
  .ir{
    position: absolute;
    width:1px;
    height:1px;
    border: 0;
    clip:rect(1px,1px,1px,1px);
    overflow: hidden;
    z-index: -1;
  }
  .visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}

  .ellipsis{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .drop{
    background-color:#dbdbdb;
    border: 3px dashed #8b8687;
  }
 
`;

export default GlobalStyle;
