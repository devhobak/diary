import React, { useState } from 'react';
import useRecordMutation from './useRecordMutation';
import { useRecoilValue } from 'recoil';
import { curDateState } from '../recoil/atoms/calendarState';

export default function useRecord() {
    let [content, setContent] = useState({
        user_id: '',
        datetime: '',
        content_title: '',
        content_main: '',
        content_image: '',
    });
    let curDate = useRecoilValue(curDateState);
    console.log(curDate);
    let { mutate } = useRecordMutation('postRecord');
    let onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user_id = 1;
        const datetime = '2023-05-10';
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
    return { content, onSubmit };
}
