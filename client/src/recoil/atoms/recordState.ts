import { atom } from 'recoil';

const ColorState = atom({
    key: 'ColorState',
    default: 'rgb(251, 217, 109)',
});

const chartDataState = atom({
    key: 'chartDataState',
    default: 0,
});
export { ColorState, chartDataState };
