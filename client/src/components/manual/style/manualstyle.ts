import styled from "styled-components";

interface ViewType {
   isMobile: boolean;
}

const ManualUl = styled.ul`
   display: flex;
   flex-direction: row;
`;

const ManualDiv = styled.div<ViewType>`
   width: 100%;
   height: 100%;
   text-align: center;
   background-color: #fffff3;
   padding: ${props => (props.isMobile ? "60px 20px" : "90px 50px 0px 50px")};
   text-align: left;
`;

const ManualImg = styled.img`
   width: 100%;
   height: 100%;
   margin-top: 16px;
   margin-bottom: 16px;
`;

const ManualP = styled.p`
   margin-bottom: 10px;
   font-size: 3.2em;
   font-weight: 800;
   line-height: normal;
`;

const ManualSubP = styled.p`
   color: #566271;
   font-size: 2rem;
   font-weight: 700;
`;
export { ManualUl, ManualDiv, ManualImg, ManualP, ManualSubP };
