import { atom } from 'recoil';
interface RecordType {
    log: {
        user_id: number;
        datetime: '';
        content_title: '';
        content_main: '';
        content_image: '';
    };
}
const recordState = atom<RecordType>({
    key: 'recordState',
    default: {
        log: {
            user_id: 0,
            datetime: '',
            content_title: '',
            content_main: '',
            content_image: '',
        },
    },
});
const ColorState = atom({
    key: 'ColorState',
    default: '#ffff',
});
const positionState = atom({
    key: 'positionState',
    default: 0,
});
export { recordState, ColorState, positionState };
