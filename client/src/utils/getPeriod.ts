import { format, eachDayOfInterval } from 'date-fns';
//기간 구하는 함수
const getPeriod = (start: Date, end: Date): Date[] => {
    let day = eachDayOfInterval({
        start: start,
        end: end,
    });
    return day;
};
//일로 format하는 함수
const getFormat = (days: Date[], store: string[]) => {
    days.forEach((item) => {
        //일
        store.push(format(item, 'd'));
    });
};

export { getPeriod, getFormat };
