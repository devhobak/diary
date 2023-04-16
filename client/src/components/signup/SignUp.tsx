import { LoginArticle } from '../common/Form/style/box';
import Form from './Form';
import Logo from '../../assets/logo.png';
export default function SignUp() {
    return (
        <LoginArticle>
            <h2 className="ir">회원가입 창</h2>
            <img src={Logo} alt="캘린더 로고" />
            <Form />
        </LoginArticle>
    );
}
