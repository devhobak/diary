import { useQuery } from 'react-query';
import { GetChartData } from '../../apis/api/ViewList';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { chartDataState } from '../../recoil/atoms/recordState';
import { formatCurrentYear } from '../../recoil/selectors/date';

export default function useChartQuery() {
    let currentYear = useRecoilValue(formatCurrentYear);
    let id = Number(localStorage.getItem('User'));
    let totalNumber = useRecoilValue(chartDataState);

    let { data } = useQuery(
        [
            'record',
            { name: 'chartData', year: currentYear, total: totalNumber },
        ],
        () =>
            GetChartData({
                user_id: id,
                year: Number(currentYear),
                totalNumber: totalNumber,
            }),
        {
            refetchOnWindowFocus: false,
            staleTime: Infinity,
            cacheTime: Infinity,
        }
    );
    return { data };
}
