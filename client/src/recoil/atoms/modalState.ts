import { atom } from 'recoil';
interface ModalType {
    date: string;
    modal: boolean;
}
const modalState = atom<ModalType[]>({
    key: 'modalState',
    default: [],
});

export { modalState };
