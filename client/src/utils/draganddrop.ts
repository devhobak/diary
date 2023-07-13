import imageCompression from 'browser-image-compression';

//영역에 파일이 drop됐을때
const reSizing = async (file: File) => {
    let options = {
        maxSizeMB: 0.5,
    };
    let resizingImg = await imageCompression(file, options);
    let FileResizing = new File([resizingImg], file.name, { type: file.type });

    return FileResizing;
};
let reader = new FileReader();
const drop = async (
    el: HTMLLabelElement | null,
    setFiles: React.Dispatch<
        React.SetStateAction<string | undefined | null | ArrayBuffer>
    >,
    setS3file: React.Dispatch<React.SetStateAction<File | undefined>>
) => {
    let files: FileList[] = [];
    if (el instanceof HTMLLabelElement) {
        el.addEventListener('drop', async (e: DragEvent) => {
            el.classList.remove('drop');
            e.preventDefault();
            e.stopPropagation();
            let data: FileList;
            if (e.dataTransfer) {
                data = e.dataTransfer.files;
                console.log(reSizing(data[0]));
                reader.readAsDataURL(await reSizing(data[0]));
                setS3file(await reSizing(data[0]));
                // setS3file(e.dataTransfer.files[0]);
                let accept = data[0].type.split('/')[1];
                console.log(accept);
                if (
                    !['jpeg', 'png', 'jpg', 'JPG', 'PNG', 'JPEG'].includes(
                        accept
                    )
                ) {
                    return;
                }
                files = [...files, data];
                console.log(files);
                reader.readAsDataURL(await reSizing(data[0]));
            }
            reader.addEventListener('load', () => {
                setFiles(reader.result);
            });
        });
        el.addEventListener('dragover', (e) => {
            onDragOver(e, el);
        });
        el.addEventListener('dragleave', (e) => {
            onDragLeave(e, el);
        });
    }
};
//영역에 파일이 들어왔을때
const onDragOver = (e: DragEvent, el: HTMLLabelElement | null): void => {
    e.preventDefault();
    e.stopPropagation();
    if (el instanceof HTMLLabelElement) {
        el.classList.add('drop');
    }
};
const onDragLeave = (e: DragEvent, el: HTMLLabelElement | null): void => {
    e.preventDefault();
    e.stopPropagation();
    if (el instanceof HTMLLabelElement) {
        el.classList.remove('drop');
    }
};
//파일 클릭
const SelectFile = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setFiles: React.Dispatch<
        React.SetStateAction<string | undefined | null | ArrayBuffer>
    >,
    setS3file: React.Dispatch<React.SetStateAction<File | undefined>>
) => {
    console.log(e.target.files);
    reader.addEventListener('load', () => {
        setFiles(reader.result);
    });
    if (e.target.files !== null) {
        console.log(reSizing(e.target.files[0]));
        reader.readAsDataURL(await reSizing(e.target.files[0]));
        setS3file(await reSizing(e.target.files[0]));
        //setS3file(e.target.files[0]);
    }
};
const DeleteFile = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    setFiles: React.Dispatch<
        React.SetStateAction<string | undefined | null | ArrayBuffer>
    >,
    setS3file: React.Dispatch<React.SetStateAction<File | undefined>>
) => {
    setFiles(null);
    e.preventDefault();
};
export { SelectFile, onDragOver, drop, DeleteFile };
