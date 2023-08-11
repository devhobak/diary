import { useMediaQuery } from 'react-responsive';
import InputSection from './InputSection';
import ViewLayout from '../common/Layout/ViewLayout';
import { useRecoilValue } from 'recoil';
import { WriteSection, DateP } from './style/inputSection';
import { formatCurDay } from '../../recoil/selectors/date';
import Notification from './Notification';
import { useQuery } from 'react-query';
import { getTodayRecord } from '../../apis/api/Record';
export default function Write() {
    let today = useRecoilValue(formatCurDay);
    const isMobile = useMediaQuery({ maxWidth: 980 });
    const id = Number(localStorage.getItem('User'));
    console.log(id);
    const { data } = useQuery(
        ['record', today],
        () => getTodayRecord(today, id),
        {
            staleTime: Infinity,
            cacheTime: Infinity,
            select: (record) => record.log,
            refetchOnWindowFocus: false,
            onSuccess(data) {
                console.log(data);
            },
            onError(err) {
                console.log(err);
            },
        }
    );
    let todayRecord;
    if (data) {
        todayRecord = data?.length > 0 ? true : false;
    }
    console.log(todayRecord);
    return (
        <ViewLayout>
            <WriteSection view={isMobile}>
                <h2 className="ir">게시물 작성</h2>
                <DateP>{today}</DateP>
                {todayRecord ? <Notification /> : <InputSection />}
            </WriteSection>
        </ViewLayout>
    );
}
