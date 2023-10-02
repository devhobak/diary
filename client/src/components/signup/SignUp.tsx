import { useMediaQuery } from 'react-responsive';

import Form from './Form';

import { LoginArticle, LogoImg } from '../common/Form/style/box';

import Logo from '../../assets/logo.png';

export default function SignUp() {
    const isMobile = useMediaQuery({ maxWidth: 414 });
    return (
        <LoginArticle isMobile={isMobile}>
            <h2 className="ir">회원가입 창</h2>
            <LogoImg src={Logo} alt="캘린더 로고" />
            <Form />
        </LoginArticle>
    );
}
