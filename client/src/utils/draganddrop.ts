//영역에 파일이 drop됐을때
let reader = new FileReader();
const drop = (
    el: HTMLLabelElement | null,
    setFiles: React.Dispatch<
        React.SetStateAction<string | undefined | null | ArrayBuffer>
    >
): void => {
    console.log(typeof el);
    console.log(el);
    let files: FileList[] = [];

    if (el instanceof HTMLLabelElement) {
        el.addEventListener('drop', (e: DragEvent) => {
            el.classList.remove('drop');
            e.preventDefault();
            e.stopPropagation();

            let data: FileList;
            if (e.dataTransfer) {
                data = e.dataTransfer.files;
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
            }
            reader.addEventListener('load', () => {
                setFiles(reader.result);
            });
            reader.readAsDataURL(files[0][0]);
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
const SelectFile = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFiles: React.Dispatch<
        React.SetStateAction<string | undefined | null | ArrayBuffer>
    >
) => {
    console.log(e.target.files);
    reader.addEventListener('load', () => {
        setFiles(reader.result);
    });
    if (e.target.files !== null) reader.readAsDataURL(e.target.files[0]);
};
const DeleteFile = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    setFiles: React.Dispatch<
        React.SetStateAction<string | undefined | null | ArrayBuffer>
    >
) => {
    setFiles(null);
    e.preventDefault();
};
export { SelectFile, onDragOver, drop, DeleteFile };
