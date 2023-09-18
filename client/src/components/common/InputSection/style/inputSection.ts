import styled from "styled-components";
interface ViewType {
   view: string;
}
const ImageLoading = styled.div<ViewType>`
   position: relative;
   width: 100%;
   background-color: #fff;
   border: 1px dashed #8b8687;
   border-radius: 12px;
   height: ${props => (props.view === "modal" ? "15rem" : "92%")};
`;
const FileLabel = styled.label<ViewType>`
   position: relative;
   width: ${props => (props.view ? "100%" : "100%")};
   border: 1px dashed #8b8687;
   border-radius: 12px;
   padding: 51px 111px;
   height: 92%;
   &::before {
      position: absolute;
      display: block;
      content: "";
      width: 8rem;
      height: 8rem;
      background-color: ${({ theme }) => theme.color.inputBoxColor};
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
   }
   &::after {
      position: absolute;
      display: block;
      content: "";
      width: 4rem;
      height: 4rem;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: url("assets/file.png") no-repeat center;
   }
   &:focus {
      border: 2px dashed #8b8687;
   }
`;
const Filep = styled.p`
   position: absolute;
   top: 80%;
   left: 50%;
   transform: translate(-50%, -50%);
   color: #8b8687;
`;
export { ImageLoading, FileLabel, Filep };
