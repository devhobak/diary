import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/Globalstyle';
import theme from './style/Theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
