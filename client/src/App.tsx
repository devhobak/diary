import React from 'react';
import { ThemeProvider } from 'styled-components';
import Calendar from './components/home/calendar/Calendar';
import LoginPage from './pages/LoginPage';
//import SingupPage from './pages/SingupPage';
import GlobalStyle from './style/Globalstyle';
import theme from './style/Theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <LoginPage type="signin" />
            <Calendar />
        </ThemeProvider>
    );
}

export default App;
