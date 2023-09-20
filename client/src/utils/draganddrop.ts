import imageCompression from "browser-image-compression";
import heic2any from "heic2any";
//영역에 파일이 drop됐을때
const heictoany = async (file: File) => {
   let changefile = file;
   await heic2any({ blob: file, toType: "image/webp" }).then((resultBlob: any) => {
      changefile = new File([resultBlob], file.name.split(".")[0] + ".webp", {
         type: "image/webp",
         lastModified: new Date().getTime(),
      });
   });
   return changefile;
};
const reSizing = async (file: File) => {
   let options = {
      maxSizeMB: 1,
   };
   let resizingImg = await imageCompression(file, options);
   let FileResizing = new File([resizingImg], file.name, { type: file.type });

   return FileResizing;
};
let reader = new FileReader();
const drop = async (
   el: HTMLLabelElement | null,
   setFiles: React.Dispatch<React.SetStateAction<string | undefined | null | ArrayBuffer>>,
   setS3file: React.Dispatch<React.SetStateAction<File | undefined>>,
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
               reader.readAsDataURL(await reSizing(heic2webp));
               setS3file(await reSizing(heic2webp));
            } else {
               reader.readAsDataURL(await reSizing(data[0]));
               setS3file(await reSizing(data[0]));
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
   setS3file: React.Dispatch<React.SetStateAction<File | undefined>>,
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
         reader.readAsDataURL(reSizingHeic);
         setS3file(reSizingHeic);
      } else {
         reader.readAsDataURL(await reSizing(image[0]));
         setS3file(await reSizing(image[0]));
      }
   }
};
const DeleteFile = (
   e: React.MouseEvent<HTMLImageElement, MouseEvent>,
   setFiles: React.Dispatch<React.SetStateAction<string | undefined | null | ArrayBuffer>>,
) => {
   setFiles(null);
   e.preventDefault();
};
export { SelectFile, onDragOver, drop, DeleteFile };
