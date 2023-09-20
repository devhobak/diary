import heic2any from "heic2any";
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

export { heictoany };
