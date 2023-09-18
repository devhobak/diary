import React from "react";
import styled from "styled-components";
import { LogOutButton } from "./style/navbar";
import { useNavigate } from "react-router";
import { useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";
import { curDateState } from "../../../recoil/atoms/calendarState";
import { format } from "date-fns";
const TopLayout = styled.section`
   width: 100%;
   height: 7vh;
   grid-area: top;
   background-color: #ffff;
   display: flex;
`;

export default function Top() {
   const curDate = useRecoilValue(curDateState);
   const navigate = useNavigate();
   const queryClient = useQueryClient();
   let GetMonth = {
      year: format(curDate, "yyyy"),
      month: format(curDate, "MM"),
   };
   const Logout = () => {
      navigate("/login");
      localStorage.removeItem("User");
      queryClient.removeQueries(["record", GetMonth, { id: Number(localStorage.getItem("User")) }]);
   };
   return (
      <TopLayout>
         <p style={{ fontSize: "1.8rem" }}></p>
         <LogOutButton onClick={Logout}>로그아웃</LogOutButton>
      </TopLayout>
   );
}
