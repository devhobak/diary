import { useState } from 'react';
import useEditMutation from './useEditMutation';
import s3upload from '../utils/s3upload';
import s3Delete from '../utils/s3Delete';
import { useSetRecoilState } from 'recoil';
import { confirmState } from '../recoil/atoms/modalState';
export default function useEditRecord(
    id: number,
    displayImage: string,
    deletImage?: string
) {
    const [type, setType] = useState<string>('');
    const [file, setFile] = useState<File>();
    const { mutate } = useEditMutation('edit', id, setType);
    const setConfirmModal = useSetRecoilState(confirmState);
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        //const formData = new FormData(e.currentTarget);
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        let color: string;
        console.log(formData);
        console.log(e.currentTarget);
        console.log(file);
        if (file instanceof File) {
            let { uploadFile } = s3upload(file);
            let url = await uploadFile();
            await formData.append('content_image', url);
            console.log(url);
        } else {
            if (displayImage !== 'null') {
                formData.append('content_image', displayImage);
            }
        }
        const data = Object.fromEntries(formData);
        console.log(e);
        const { content_title, content_main, content_image, content_color } =
            data;
        color = String(content_color).split('#')[1];
        console.log(data);
        //처음 글이없는 상태에서 수정하면 이미지가 출력
        if (content_title && content_main) {
            mutate({ content_title, content_main, content_image, color });
            //삭제된 이미지 있다면 삭제하기
            if (deletImage) {
                s3Delete(deletImage);
            }
        } else {
            setConfirmModal(true);
            setType('fail');
        }
    };
    return { onSubmit, file, setFile, type };
}
