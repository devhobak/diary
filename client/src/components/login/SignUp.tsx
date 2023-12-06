import { useMediaQuery } from 'react-responsive';

import { LoginArticle, LogoImg } from '../common/Form/style/box';

import Logo from '../../assets/frontLogo.png';
import LoginForm from 'components/common/Form/LoginForm';

export default function SignUp() {
    const isMobile = useMediaQuery({ maxWidth: 414 });
    return (
        <LoginArticle isMobile={isMobile}>
            <h2 className="ir">회원가입 창</h2>
            <LogoImg src={Logo} alt="캘린더 로고" />
            <LoginForm page="signup" />
        </LoginArticle>
    );
}
