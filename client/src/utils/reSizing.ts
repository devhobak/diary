import imageCompression from "browser-image-compression";
const reSizing = async (file: File) => {
   let options = {
      maxSizeMB: 1,
   };
   let resizingImg = await imageCompression(file, options);
   let FileResizing = new File([resizingImg], file.name, { type: file.type });

   return FileResizing;
};

export { reSizing };
