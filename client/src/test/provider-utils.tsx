import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import React, { ReactElement } from 'react';
import '@testing-library/jest-dom';
import { act, render, RenderOptions, waitFor } from '@testing-library/react';
import theme from 'style/Theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryclient = new QueryClient();
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <Router>
            <QueryClientProvider client={queryclient}>
                <RecoilRoot>
                    <ThemeProvider theme={theme}>{children}</ThemeProvider>
                </RecoilRoot>
            </QueryClientProvider>
        </Router>
    );
};

const customRender = (
    ui: ReactElement,
    color?: string,
    options?: Omit<RenderOptions, 'wrapper'>
) => {
    return render(ui, { wrapper: AllTheProviders, ...options });
};
export * from '@testing-library/react';
export { customRender as render };
