interface FormType {
    username?: FormDataEntryValue;
    email: FormDataEntryValue;
    password: FormDataEntryValue;
    repassword?: FormDataEntryValue;
}

type Vaildation = (
    arg: FormType,
    type?: string
) => { username: string; email: string; password: string; repassword: string };
const vaildation: Vaildation = (data, type) => {
    let error = { username: '', email: '', password: '', repassword: '' };
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
        if (!data.password || !data.repassword) {
            error = { ...error, password: '비밀번호를 입력해주세요' };
        }
        if (data.password !== data.repassword) {
            error = {
                ...error,
                password: '비밀번호가 일치 하지 않습니다.',
            };
        }
    }
    return error;
};
export { vaildation };
