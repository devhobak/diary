import s3upload from "./s3upload";
import { reSizing } from "./reSizing";
import { heictoany } from "./heictoany";
import { toast } from "react-toastify";
import s3Delete from "./s3Delete";
//영역에 파일이 drop됐을때
let reader = new FileReader();

const drop = async (
   el: HTMLLabelElement | null,
   setFiles: React.Dispatch<React.SetStateAction<string | undefined | null | ArrayBuffer>>,
   setS3file: React.Dispatch<React.SetStateAction<string>>,
   setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
   let files: FileList[] = [];
   if (el instanceof HTMLLabelElement) {
      el.addEventListener("drop", async (e: DragEvent) => {
         setLoading(true);
         el.classList.remove("drop");
         e.preventDefault();
         e.stopPropagation();
         let data: FileList;
         if (e.dataTransfer) {
            data = e.dataTransfer.files;
            let accept = data[0].type.split("/")[1];
            if (!["jpeg", "png", "jpg", "JPG", "PNG", "JPEG", "heic", "HEIC"].includes(accept)) {
               return;
            }
            if (data[0].type === "image/heic" || data[0].type === "image/HEIC") {
               let heic2webp = await heictoany(data[0]);
               let { uploadFile } = s3upload(await reSizing(heic2webp));
               let url = await uploadFile();
               if (url === Error) {
                  reader.readAsDataURL(await reSizing(heic2webp));
               }
               setS3file(url);
            } else {
               let { uploadFile } = s3upload(await reSizing(data[0]));
               let url = await uploadFile();
               if (url === Error) {
                  reader.readAsDataURL(await reSizing(data[0]));
               }
               setS3file(url);
            }

            files = [...files, data];
         }
         reader.addEventListener("load", () => {
            setFiles(reader.result);
         });
         reader.onloadend = () => {
            setLoading(false);
         };
      });
      el.addEventListener("dragover", e => {
         onDragOver(e, el);
      });
      el.addEventListener("dragleave", e => {
         onDragLeave(e, el);
      });
   }
};
//영역에 파일이 들어왔을때
const onDragOver = (e: DragEvent, el: HTMLLabelElement | null): void => {
   e.preventDefault();
   e.stopPropagation();
   if (el instanceof HTMLLabelElement) {
      el.classList.add("drop");
   }
};
const onDragLeave = (e: DragEvent, el: HTMLLabelElement | null): void => {
   e.preventDefault();
   e.stopPropagation();
   if (el instanceof HTMLLabelElement) {
      el.classList.remove("drop");
   }
};
//파일 클릭
const SelectFile = async (
   e: React.ChangeEvent<HTMLInputElement>,
   setFiles: React.Dispatch<React.SetStateAction<string | undefined | null | ArrayBuffer>>,
   setS3file: React.Dispatch<React.SetStateAction<string>>,
   setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
   setLoading(true);
   let image = e.target.files;
   reader.addEventListener("load", () => {
      setFiles(reader.result);
      // Loading(setLoading);
   });
   reader.onloadend = () => {
      setLoading(false);
   };
   if (image !== null) {
      if (image[0].type === "image/heic" || image[0].type === "image/HEIC") {
         let heic2webp = await heictoany(image[0]);
         let reSizingHeic = await reSizing(heic2webp);
         let { uploadFile } = s3upload(await reSizing(heic2webp));
         let url = await uploadFile();
         if (url !== Error) {
            reader.readAsDataURL(reSizingHeic);
         } else if (url === Error) {
            setLoading(false);
         }
         setS3file(url);
      } else {
         let { uploadFile } = s3upload(await reSizing(image[0]));
         let url = await uploadFile();
         if (url !== Error) {
            reader.readAsDataURL(await reSizing(image[0]));
            setLoading(false);
         }
         setS3file(url);
      }
   }
};
const DeleteFile = async (
   e: React.MouseEvent<HTMLImageElement, MouseEvent>,
   setFiles: React.Dispatch<React.SetStateAction<string | undefined | null | ArrayBuffer>>,
   s3File: string,
) => {
   setFiles(null);
   e.preventDefault();
   await s3Delete(s3File);
   await toast.success("이미지를 취소했습니다");
};
export { SelectFile, onDragOver, drop, DeleteFile };
