import { atom } from 'recoil';
const LoginState = atom({
    key: 'LoginState',
    default: false,
});
const UserId = atom({
    key: 'UserId',
    default: 0,
});
export { LoginState, UserId };
