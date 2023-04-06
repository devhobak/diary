import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routers from './route/Routers';
//import SingupPage from './pages/SingupPage';
import GlobalStyle from './style/Globalstyle';
import theme from './style/Theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routers />
        </ThemeProvider>
    );
}

export default App;
