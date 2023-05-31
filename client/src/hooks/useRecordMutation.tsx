import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { postRecord } from '../apis/api/Record';
//{variable.user_id,variable.content_title,variable.content_content,variable.content_image}
interface PostDataType {
    user_id: number;
    datetime: string;
    content_title: FormDataEntryValue;
    content_main: FormDataEntryValue;
    content_image: FormDataEntryValue;
    content_color: FormDataEntryValue | string;
}
export default function useRecordMutation(key: string) {
    const queryClient = useQueryClient();
    return useMutation(key, (variable: PostDataType) => postRecord(variable), {
        onSuccess(data) {
            console.log(data);
            queryClient.invalidateQueries(['record'], {
                refetchInactive: true,
            });
        },
        onError(err) {
            console.log(err);
        },
    });
}
