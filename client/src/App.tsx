import React from "react";
import { ThemeProvider } from "styled-components";
import Routers from "./route/Routers";
import GlobalStyle from "./style/Globalstyle";
import theme from "./style/Theme";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.minimal.css";
import { injectStyle } from "react-toastify/dist/inject-style";
if (typeof window !== "undefined") {
   injectStyle();
}
function App() {
   return (
      <ThemeProvider theme={theme}>
         <ToastContainer
            style={{ fontSize: "1.3rem" }}
            position="top-right"
            autoClose={1000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
         />
         <GlobalStyle />
         <Routers />
      </ThemeProvider>
   );
}

export default App;
