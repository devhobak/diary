import { LoginArticle } from "../common/Form/style/box";
import Form from "./Form";
import Logo from "../../assets/logo.png";
import { useMediaQuery } from "react-responsive";
export default function SignUp() {
   const isMobile = useMediaQuery({ maxWidth: 414 });
   return (
      <LoginArticle isMobile={isMobile}>
         <h2 className="ir">회원가입 창</h2>
         <img src={Logo} alt="캘린더 로고" />
         <Form />
      </LoginArticle>
   );
}
