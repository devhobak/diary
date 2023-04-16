interface LoginType {
    username?: FormDataEntryValue;
    email: FormDataEntryValue;
    password: FormDataEntryValue;
}
interface SignupType {
    username: FormDataEntryValue;
    email: FormDataEntryValue;
    password: FormDataEntryValue;
}
type FormType = LoginType | SignupType;

type Vaildation = (
    arg: FormType,
    type?: string
) => { username: string; email: string; password: string };
const vaildation: Vaildation = (data, type) => {
    let error = { username: '', email: '', password: '' };
    if (type === 'login') {
        if (!data.email) {
            error = { ...error, email: '이메일을 입력해주세요' };
        }
        if (!data.password) {
            error = { ...error, password: '비밀번호를 입력해주세요' };
        }
    } else {
        if (!data.username) {
            error = { ...error, username: '이름을 입력해주세요' };
        }
        if (!data.email) {
            error = { ...error, email: '이메일을 입력해주세요' };
        }
        if (!data.password) {
            error = { ...error, password: '비밀번호를 입력해주세요' };
        }
    }
    return error;
};
export { vaildation };
