import React from 'react';
import useRecordMutation from './useRecordMutation';
import { useRecoilValue } from 'recoil';
import { selectDateState } from '../recoil/atoms/calendarState';

export default function useRecord() {
    let curDate = useRecoilValue(selectDateState);
    let { mutate } = useRecordMutation('postRecord');
    let onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user_id = 1;
        const datetime = curDate.date;
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const { content_title, content_main, content_image } = data;
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
