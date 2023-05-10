import { selector } from 'recoil';
import { curDateState } from '../atoms/calendarState';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { getPeriod, getFormat } from '../../utils/getPeriod';
const formatCurDataState = selector({
    key: 'formatCurData',
    get: ({ get }) => {
        const curDate = get(curDateState);
        const monthStart = startOfMonth(curDate);
        const monthEnd = endOfMonth(curDate);
        const weekStart = startOfWeek(monthStart);
        const weekEnd = endOfWeek(monthEnd);
        const days = getPeriod(monthStart, monthEnd);
        const disableStartDays = getPeriod(weekStart, monthStart);
        const disableEndDays = getPeriod(monthEnd, weekEnd);
        disableStartDays.splice(-1);
        disableEndDays.splice(0, 1);
        let fullDays = disableStartDays.concat(days);
        fullDays = fullDays.concat(disableEndDays);
        let forMatDay: string[] = [];
        let day: string[] = [];
        getFormat(days, day);
        getFormat(fullDays, forMatDay);
        return { curMonthDay: forMatDay, prevNextMonthday: day };
    },
});
export { formatCurDataState };
