import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
}


ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

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
   // padding-top: 50px;
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

  .tooltip{
    position: relative;
    display: inline-block;
    width:60px;
    height: 60px;
  
    
  }

  .tooltip .tooltiptext{
    visibility:hidden;
    width: 230px;
    height: 50px;
    background-color: ${(props) => props.theme.color.backgroundColor};
    text-align: center;
    border-radius: 16px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: -10px;
    left: 130%;
    font-size:1.4rem;
    font-weight: 700;
    line-height: 40px;
  }
 
  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 6px;
    border-style: solid;
    border-color: transparent  ${(props) =>
        props.theme.color.backgroundColor} transparent transparent;
 
}

.tooltip:hover .tooltiptext {
  visibility: visible;

}


`;

export default GlobalStyle;
