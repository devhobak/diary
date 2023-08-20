import {
    MyPageH2,
    RecordInfoSection,
    StatisticsNotice,
    ChartArticle,
    TotalNumberContents,
    TotalNumber,
    TotalBox,
    ButtonBox,
    YearSpan,
    UserManage,
    UnregisterButton,
    UserregisterBox,
    StatisticsNoticeArticle,
} from './style/RecordInfo';
import { useMediaQuery } from 'react-responsive';
import ViewLayout from '../common/Layout/ViewLayout';
import Chart from './Chart';
import nextButton from '../../assets/Next.png';
import prevButton from '../../assets/Prev.png';

export default function MyInfo() {
    const isMobile = useMediaQuery({ maxWidth: 980 });
    return (
        <ViewLayout>
            <RecordInfoSection isMobile={isMobile}>
                <MyPageH2>마이페이지</MyPageH2>
                <StatisticsNoticeArticle>
                    <h3 className="ir">일기 통계 보기</h3>
                    <StatisticsNotice>통계보기</StatisticsNotice>
                    <TotalBox>
                        <TotalNumberContents>
                            작성한 일기 수(전체)
                        </TotalNumberContents>
                        <TotalNumber>24</TotalNumber>
                        <span>개</span>
                    </TotalBox>
                    <ButtonBox>
                        <img src={prevButton} alt="이전년도 버튼" />
                        <YearSpan>2023년</YearSpan>
                        <img src={nextButton} alt="다음년도 버튼" />
                    </ButtonBox>
                    <Chart />
                </StatisticsNoticeArticle>
                <UserregisterBox>
                    <h3 className="ir">회원 관리</h3>
                    <UserManage>회원 관리</UserManage>
                    <UnregisterButton>회원탈퇴</UnregisterButton>
                </UserregisterBox>
            </RecordInfoSection>
        </ViewLayout>
    );
}
