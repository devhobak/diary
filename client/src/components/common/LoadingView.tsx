import { useLocation } from 'react-router';
import { useMediaQuery } from 'react-responsive';

import ViewLayout from './Layout/ViewLayout';
import { LoginArticle } from './Form/style/box';

import { CalendarLayout } from '../home/style/style';

export default function LoadingView({ children }: { children?: JSX.Element }) {
    const { pathname } = useLocation();
    const path = pathname.split('/')[1];
    const isMobile = useMediaQuery({ maxWidth: 414 });

    if (path === '' || path === 'signup') {
        return <LoginArticle isMobile={isMobile}>{children}</LoginArticle>;
    } else {
        return (
            <ViewLayout>
                <CalendarLayout>{children}</CalendarLayout>
            </ViewLayout>
        );
    }
}
