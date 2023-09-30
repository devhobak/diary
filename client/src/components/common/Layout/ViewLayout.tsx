import { useMediaQuery } from 'react-responsive';

import { Layout, MainLayout } from './style/navbar';
import Navbar from './Navbar';
import Top from './Top';

const ViewLayout = ({ children }: { children: JSX.Element }) => {
    const isMobile = useMediaQuery({ maxWidth: 980 });
    return (
        <Layout mobile={isMobile}>
            <Top />
            <Navbar />
            <MainLayout mobile={isMobile}>{children}</MainLayout>
        </Layout>
    );
};
export default ViewLayout;
