import { atom } from 'recoil';
interface RecordType {
    log: {
        id: '';
        user_id: '';
        datetime: '';
        content_title: '';
        content_main: '';
    };
}
const recordState = atom({
    key: 'recordState',
    default: {},
});

export { recordState };
