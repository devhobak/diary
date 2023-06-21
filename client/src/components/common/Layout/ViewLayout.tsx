import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Layout } from './style/navbar';
import Navbar from './Navbar';
import Top from './Top';

const ViewLayout = ({ children }: { children: JSX.Element }) => {
    const isMobile = useMediaQuery({ maxWidth: 980 });
    return (
        <Layout view={isMobile}>
            <Top />
            <Navbar />
            {children}
        </Layout>
    );
};
export default ViewLayout;
