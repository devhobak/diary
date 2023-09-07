import {
    MyPageH2,
    RecordInfoSection,
    StatisticsNotice,
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
import { useMutation } from 'react-query';
import { Unregister } from '../../apis/api/Login';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { formatCurrentYear } from '../../recoil/selectors/date';
import { useRecoilState, useRecoilValue } from 'recoil';
import { curDateState } from '../../recoil/atoms/calendarState';
import { addYears, subYears } from 'date-fns';
import { chartDataState } from '../../recoil/atoms/recordState';
export default function MyInfo() {
    let user_id = Number(localStorage.getItem('User'));
    const isMobile = useMediaQuery({ maxWidth: 980 });
    let navigate = useNavigate();
    const [curDate, setCurDate] = useRecoilState(curDateState);
    let currentYear = useRecoilValue(formatCurrentYear);
    let totalNumber = useRecoilValue(chartDataState);

    const UpClick = () => {
        setCurDate(addYears(curDate, 1));
    };
    const DownClick = () => {
        setCurDate(subYears(curDate, 1));
    };

    const unregister = useMutation(
        ['unregister'],
        (variable: number) => Unregister(variable, '/api/user/delete'),
        {
            onSuccess() {
                toast.success('탈퇴되었습니다.');
                localStorage.removeItem('User');
                localStorage.removeItem('token');
                setTimeout(() => {
                    navigate('/login');
                }, 500);
            },
            onError() {
                toast.error(
                    '오류가 발생하였습니다. 관리자에게 문의 부탁드립니다.'
                );
            },
        }
    );

    const unregisterHandler = () => {
        if (window.confirm('정말 탈퇴하시겠습니까?')) {
            unregister.mutate(user_id);
        }
    };

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
                        <TotalNumber>{totalNumber}</TotalNumber>
                        <span>개</span>
                    </TotalBox>
                    <ButtonBox>
                        <img
                            src={prevButton}
                            alt="이전년도 버튼"
                            onClick={DownClick}
                        />

                        <YearSpan>{currentYear}년</YearSpan>
                        <img
                            src={nextButton}
                            alt="다음년도 버튼"
                            onClick={UpClick}
                        />
                    </ButtonBox>
                    <Chart />
                </StatisticsNoticeArticle>
                <UserregisterBox>
                    <h3 className="ir">회원 관리</h3>
                    <UserManage>회원 관리</UserManage>
                    <UnregisterButton onClick={unregisterHandler}>
                        회원탈퇴
                    </UnregisterButton>
                </UserregisterBox>
            </RecordInfoSection>
        </ViewLayout>
    );
}
