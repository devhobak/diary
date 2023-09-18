import { useState } from "react";
import useEditMutation from "./mutations/useEditMutation";
import s3upload from "../utils/s3upload";
import s3Delete from "../utils/s3Delete";
import { toast } from "react-toastify";
export default function useEditRecord(id: number, displayImage: string, deletImage?: string) {
   const [file, setFile] = useState<File>();
   const { mutate } = useEditMutation("edit", id);
   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      let color: string;

      if (file instanceof File) {
         let { uploadFile } = s3upload(file);
         let url = await uploadFile();
         await formData.append("content_image", url);
      } else {
         if (displayImage !== "null") {
            formData.append("content_image", displayImage);
         }
      }
      const data = Object.fromEntries(formData);
      const { content_title, content_main, content_image, content_color } = data;
      color = String(content_color).split("#")[1];
      //처음 글이없는 상태에서 수정하면 이미지가 출력
      if (content_title && content_main) {
         mutate({ content_title, content_main, content_image, color });
         //삭제된 이미지 있다면 삭제하기
         if (deletImage) {
            s3Delete(deletImage);
         }
      } else {
         toast.error("글이나 제목을 입력해주세요");
      }
   };
   return { onSubmit, file, setFile };
}
