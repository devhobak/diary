import React, { useRef, useState, useEffect } from "react";
import {
   RecordInput,
   RecordInputSection,
   RecordForm,
   FileLabel,
   InputLabel,
   RecordButton,
   Recordarea,
   Filep,
   ImgLabel,
   FileImg,
   FileContainer,
   FileDelete,
   ColorInput,
} from "./style/inputSection";
import deleteImg from "../../../assets/close.png";
import { SelectFile, drop, DeleteFile } from "../../../utils/imageUpload";
import { useRecoilState } from "recoil";
import { ColorState } from "../../../recoil/atoms/recordState";
import useEditRecord from "../../../hooks/useEditRecord";
import LoadingImage from "../../common/InputSection/LoadingImage";
interface GetDataType {
   id: number;
   user_id: number;
   datetime: string;
   content_title: string;
   content_main: string;
   content_image: string;
   color: string;
}
interface PropsType {
   data: GetDataType[];
   //positionPost: number;
}
//id 와 데이터 전달
export default function Edit(props: PropsType) {
   let dropSection = useRef<HTMLLabelElement>(null);
   let [s3file, sets3File] = useState<string>("");
   let [files, setFiles] = useState<string | null | ArrayBuffer>();
   let [color, setColor] = useRecoilState(ColorState);
   let [image, setImage] = useState<string>();
   let [dispalyImage, setDisplayImage] = useState<string>("");
   let [loading, setLoading] = useState(false);
   useEffect(() => {
      drop(dropSection.current, setFiles, sets3File, setLoading);
   }, [files]);

   useEffect(() => {
      if (props.data[0].content_image) {
         setDisplayImage(props.data[0].content_image);
      }
   }, []);
   const { onSubmit, setFile } = useEditRecord(props.data[0].id, dispalyImage, s3file, image);
   const ModalClose = () => {};
   const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
   };
   const DeletImage = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      if (s3file) {
         DeleteFile(e, setFiles, s3file);
      }
      setImage(props.data[0].content_image);
      setDisplayImage("");
   };

   return (
      <>
         <RecordInputSection>
            <h3 className="ir">오늘의 일상</h3>
            <RecordForm onSubmit={onSubmit}>
               <InputLabel htmlFor="daily">오늘의 일상</InputLabel>
               <ColorInput
                  type="color"
                  onChange={e => {
                     handleColor(e);
                  }}
                  defaultValue={`#${props.data[0].color}`}
                  name="content_color"></ColorInput>
               <RecordInput
                  id="daily"
                  type="text"
                  name="content_title"
                  defaultValue={props.data[0].content_title}></RecordInput>
               <InputLabel htmlFor="record">기록</InputLabel>
               <Recordarea id="record" name="content_main" defaultValue={props.data[0].content_main}></Recordarea>
               {dispalyImage || files ? (
                  <ImgLabel ref={dropSection}>
                     <FileContainer>
                        <FileImg src={dispalyImage || String(s3file)} alt="업로드한 이미지" />
                        <FileDelete src={deleteImg} alt="사진삭제" onClick={e => DeletImage(e)} />
                     </FileContainer>
                  </ImgLabel>
               ) : (
                  <>
                     {loading ? (
                        <LoadingImage view="modal" />
                     ) : (
                        <FileLabel ref={dropSection}>
                           <input
                              type="file"
                              className="visually-hidden"
                              onChange={e => SelectFile(e, setFiles, sets3File, setLoading)}></input>
                           <Filep>Drop your file here to upload or select from storage</Filep>
                        </FileLabel>
                     )}
                  </>
               )}

               <RecordButton find="confirm" type="submit" onClick={ModalClose} disabled={loading ? true : false}>
                  완료
               </RecordButton>
            </RecordForm>
         </RecordInputSection>
      </>
   );
}
