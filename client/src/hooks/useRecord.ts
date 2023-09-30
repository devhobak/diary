import React, { useEffect, useState } from 'react';
import useRecordMutation from './mutations/useRecordMutation';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { formatCurDay } from '../recoil/selectors/date';
import { curDateState } from '../recoil/atoms/calendarState';
import { toast } from 'react-toastify';
export default function useRecord(s3File: string) {
    let setDate = useSetRecoilState(curDateState);
    // let [file, setFile] = useState<File>();
    let [type, setType] = useState('');
    useEffect(() => {
        setDate(new Date());
    }, []);

    let curDate = useRecoilValue(formatCurDay);
    let { mutate } = useRecordMutation('postRecord', setType);

    let onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user_id = Number(localStorage.getItem('User'));
        const datetime = curDate;
        const formData = new FormData(e.currentTarget);

        await formData.append('content_image', s3File);
        const data = Object.fromEntries(formData);

        const { content_title, content_main, content_image, content_color } =
            data;
        const color = String(content_color).split('#')[1];

        if (content_title && content_main) {
            //post 호출
            mutate({
                user_id,
                datetime,
                content_title,
                content_main,
                content_image,
                color: color,
            });
        } else {
            toast.error('글이나 제목을 작성해주세요');
        }
    };
    return { onSubmit, type };
}
