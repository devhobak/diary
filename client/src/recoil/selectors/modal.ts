import { selector } from 'recoil';
import { Modal } from '../atoms/modalState';
import { curDateState } from '../atoms/calendarState';

const modalUp = selector({
    key: 'modalUp',
    get: ({ get }) => {
        const date = get(curDateState);
    },
});
