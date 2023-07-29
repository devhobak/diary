import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { postRecord } from '../apis/api/Record';
import { useRecoilState } from 'recoil';
import { confirmState } from '../recoil/atoms/modalState';
import { toast } from 'react-toastify';
//{variable.user_id,variable.content_title,variable.content_content,variable.content_image}
interface PostDataType {
    user_id: number;
    datetime: string;
    content_title: FormDataEntryValue;
    content_main: FormDataEntryValue;
    content_image: FormDataEntryValue;
    color: FormDataEntryValue | string;
}
export default function useRecordMutation(
    key: string,
    setType: React.Dispatch<React.SetStateAction<string>>
) {
    const queryClient = useQueryClient();
    const [confirmModal, setConfirmModal] = useRecoilState(confirmState);
    return useMutation(key, (variable: PostDataType) => postRecord(variable), {
        onSuccess(data) {
            console.log(data);
            setConfirmModal(true);
            setType('confirm');
            queryClient.invalidateQueries(['record'], {
                refetchInactive: true,
            });
            toast.success('글작성 완료');
        },
        onError(err) {
            console.log(err);
            setType('error');
            toast.error('⭕️ 글작성 실패');
        },
    });
}
