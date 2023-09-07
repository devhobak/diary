import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { formatCurrentYear } from '../../recoil/selectors/date';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { ChartArticle } from './style/chart';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { GetChartData } from '../../apis/api/ViewList';
import { chartDataState } from '../../recoil/atoms/recordState';

const CustomTooltip = ({
    active,
    payload,
    label,
}: {
    active?: string;
    payload?: any;
    label?: string;
}) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}개`}</p>
            </div>
        );
    }

    return null;
};
export default function Chart() {
    let currentYear = useRecoilValue(formatCurrentYear);
    let user_id = Number(localStorage.getItem('User'));
    let setTotalData = useSetRecoilState(chartDataState);
    let totalNumber = useRecoilValue(chartDataState);
    let { data } = useQuery(
        [
            'record',
            { name: 'chartData', year: currentYear, total: totalNumber },
        ],
        () =>
            GetChartData({
                user_id: user_id,
                year: Number(currentYear),
                totalNumber: totalNumber,
            }),
        {
            refetchOnWindowFocus: false,
            staleTime: Infinity,
            cacheTime: Infinity,
        }
    );
    useEffect(() => {
        let total = data?.monthArray.reduce((arr: number, cur: number) => {
            return arr + cur;
        }, 0);
        if (total) {
            setTotalData(total);
        } else if (total === 0) {
            setTotalData(0);
        }
    }, [data]);

    const day = [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
    ];

    let recordData;
    if (data) {
        recordData = day.map((item, index) => ({
            name: item,
            number: data?.monthArray[index],
        }));
    }

    return (
        <ChartArticle>
            <h3 className="ir">일기 통계 차트</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={100}
                    height={40}
                    data={recordData}
                    margin={{ right: 30 }}
                >
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="number" barSize={10} fill="#D6ECFA" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </BarChart>
            </ResponsiveContainer>
        </ChartArticle>
    );
}
