import { SignupFormType } from '../types/serverDataType';
type Vaildation = (
    arg: SignupFormType,
    type?: string
) => { username: string; email: string; password: string; repassword: string };

const vaildation: Vaildation = (data, type) => {
    let error = { username: '', email: '', password: '', repassword: '' };
    const emailRegEx =
        /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
    let email = String(data.email);
    let password = String(data.password);
    if (type === 'login') {
        if (!data.email) {
            error = { ...error, email: '이메일을 입력해주세요' };
        } else if (email !== 'email' && !emailRegEx.test(email)) {
            error = { ...error, email: '올바른 이메일 형식을 입력해주세요' };
        }
        if (!data.password) {
            error = { ...error, password: '비밀번호를 입력해주세요' };
        } else if (!passwordRegEx.test(password)) {
            error = {
                ...error,
                password:
                    '8자리이상 20자리이하 영어와 숫자 조합으로 입력해주세요',
            };
        }
    } else if (type === 'signup') {
        if (!data.username) {
            error = { ...error, username: '이름을 입력해주세요' };
        }
        if (!data.email) {
            error = { ...error, email: '이메일을 입력해주세요' };
        } else if (email !== 'email' && !emailRegEx.test(email)) {
            error = { ...error, email: '올바른 이메일 형식을 입력해주세요' };
        }
        if (!data.password || !data.repassword) {
            error = { ...error, password: '비밀번호를 입력해주세요' };
        } else if (!passwordRegEx.test(password)) {
            error = {
                ...error,
                password:
                    '8자리이상 20자리이하 영어와 숫자 조합으로 입력하세요',
            };
        }
        if (data.password !== data.repassword) {
            error = {
                ...error,
                password: '비밀번호가 일치 하지 않습니다.',
            };
        }
    }
    console.log(error);
    return error;
};
export { vaildation };
