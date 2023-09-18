import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import WritePage from "../pages/WritePage";
import ViewPage from "../pages/ViewPage";
import MyPage from "../pages/MyPage";
import ProtectedRouter from "./ProtectedRouter";
import PublicRouter from "./PublicRouter";
export default function Routers() {
   return (
      <Routes>
         <Route element={<ProtectedRouter />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/record" element={<ViewPage />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/myPage" element={<MyPage />} />
         </Route>
         <Route element={<PublicRouter />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
         </Route>
         <Route path="*" element={<LoginPage />} />
      </Routes>
   );
}
