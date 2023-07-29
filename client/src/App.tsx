import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routers from './route/Routers';
//import SingupPage from './pages/SingupPage';
import GlobalStyle from './style/Globalstyle';
import theme from './style/Theme';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.minimal.css';
import { injectStyle } from 'react-toastify/dist/inject-style';
// CALL IT ONCE IN YOUR APP
if (typeof window !== 'undefined') {
    injectStyle();
}
function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ToastContainer
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
            <Routers />
        </ThemeProvider>
    );
}

export default App;
