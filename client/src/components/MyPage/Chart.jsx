import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { ChartArticle } from './style/chart';

export default function Chart() {
    const data = [
        {
            name: 'Page 1',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page 2',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page 3',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page 4',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page 5',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page 6',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page 7',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page 8',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page 9',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page 10',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page 11',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page 12',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <ChartArticle>
            <h3 className="ir">일기 통계 차트</h3>
            <ResponsiveContainer width="100%" height="100%" margin="0 auto">
                <BarChart
                    width={100}
                    height={40}
                    data={data}
                    margin={{ right: 30 }}
                >
                    <Bar dataKey="uv" barSize={10} fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </BarChart>
            </ResponsiveContainer>
        </ChartArticle>
    );
}
