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
            e.preventDefault();
            e.stopPropagation();
            let data: FileList;
            if (e.dataTransfer) {
                data = e.dataTransfer.files;
                files = [...files, data];
            }
            reader.addEventListener('load', () => {
                setFiles(reader.result);
            });
            reader.readAsDataURL(files[0][0]);
        });
        el.addEventListener('dragover', onDragOver);
    }
};
//영역에 파일이 들어왔을때
const onDragOver = (e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
};
//파일을 보여주는
const displayImg = (
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
export { displayImg, onDragOver, drop };
