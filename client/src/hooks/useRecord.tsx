import React from 'react';
import useRecordMutation from './useRecordMutation';
import { useRecoilValue } from 'recoil';
import { formatCurDay } from '../recoil/selectors/date';

export default function useRecord() {
    let curDate = useRecoilValue(formatCurDay);
    let { mutate } = useRecordMutation('postRecord');
    let onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user_id = 1;
        const datetime = curDate;
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const { content_title, content_main, content_image } = data;
        console.log(data, curDate);
        if (content_title && content_main) {
            //post 호출
            mutate({
                user_id,
                datetime,
                content_title,
                content_main,
                content_image,
            });
        }
    };
    return { onSubmit };
}
