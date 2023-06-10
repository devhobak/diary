import { atom } from 'recoil';
//오늘 날짜를 넣어준다.
//오늘 날짜에는 글을 작성 할 수 있다.
interface DateType {
    date: string;
    modal: boolean;
}

const curDateState = atom({
    key: 'curDateState',
    default: new Date(),
});
const selectDateState = atom({
    key: 'selecDateState',
    default: '',
});
const dateState = atom<DateType[]>({
    key: 'dateState',
    default: [],
});

export { curDateState, dateState, selectDateState };
