import { useState } from "react";
import Form from "./Form";
import { LoginArticle } from "../common/Form/style/box";
import Logo from "../../assets/logo.png";
import { useMediaQuery } from "react-responsive";
import Manual from "../manual/Manual";
export default function Login(): JSX.Element {
   const isMobile = useMediaQuery({ maxWidth: 414 });
   const [modal, setModal] = useState(true);

   return (
      <LoginArticle isMobile={isMobile}>
         <h2 className="ir">로그인 창</h2>
         <img src={Logo} alt="캘린더 로고" />
         <Form />
         {modal ? <Manual modal={modal} setModal={setModal} /> : <></>}
      </LoginArticle>
   );
}
