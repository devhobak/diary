import React, { useEffect, useState } from 'react';
import useRecordMutation from './useRecordMutation';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { formatCurDay } from '../recoil/selectors/date';
import { curDateState } from '../recoil/atoms/calendarState';
import s3upload from '../utils/s3upload';
export default function useRecord() {
    let setDate = useSetRecoilState(curDateState);
    let [file, setFile] = useState<File>();
    useEffect(() => {
        setDate(new Date());
    }, []);

    let curDate = useRecoilValue(formatCurDay);
    let { mutate } = useRecordMutation('postRecord');
    let onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user_id = 1;
        const datetime = curDate;
        const formData = new FormData(e.currentTarget);
        console.log(file);
        if (file instanceof File) {
            let { uploadFile } = s3upload(file);
            let url = await uploadFile();
            await formData.append('content_image', url);
            console.log(url);
        }
        const data = Object.fromEntries(formData);
        const { content_title, content_main, content_image, content_color } =
            data;
        console.log(content_image);
        console.log(data, curDate);
        console.log(datetime);

        if (content_title && content_main) {
            //post 호출
            mutate({
                user_id,
                datetime,
                content_title,
                content_main,
                content_image,
                content_color: 'dbdbdb',
            });
        }
    };
    return { onSubmit, file, setFile };
}
