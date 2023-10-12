import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from 'style/Globalstyle';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import theme from 'style/Theme';

import Routers from './route/Routers';

import 'react-toastify/dist/ReactToastify.minimal.css';
import { injectStyle } from 'react-toastify/dist/inject-style';

if (typeof window !== 'undefined') {
    injectStyle();
}

const queryclient = new QueryClient();

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryclient}>
                <RecoilRoot>
                    <ThemeProvider theme={theme}>
                        <ToastContainer
                            style={{ fontSize: '1.3rem' }}
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
                </RecoilRoot>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
