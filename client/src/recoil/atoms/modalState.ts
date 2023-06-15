import { atom } from 'recoil';

const modalState = atom({
    key: 'modalState',
    default: false,
});
const confirmState = atom({
    key: 'confirmModalState',
    default: false,
});
export { modalState, confirmState };
