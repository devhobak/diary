import { Suspense } from 'react';
import View from '../components/View/View';

import loadingImg from '../assets/loadingView.gif';

import { LoadingImg, ViewSection } from '../components/View/style/RecordList';
import ViewLayout from 'components/common/Layout/ViewLayout';
import { useMediaQuery } from 'react-responsive';

export default function ViewPage() {
    const isMobile = useMediaQuery({ maxWidth: 980 });
    return (
        <ViewLayout>
            <ViewSection mobile={isMobile}>
                <Suspense
                    fallback={<LoadingImg src={loadingImg} alt="로딩중" />}
                >
                    <View />
                </Suspense>
            </ViewSection>
        </ViewLayout>
    );
}
