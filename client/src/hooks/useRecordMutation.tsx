import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { postRecord } from '../apis/api/Record';
import { useRecoilState } from 'recoil';
import { modalState } from '../recoil/atoms/modalState';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
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
    const [modal, setModal] = useRecoilState(modalState);
    const navigate = useNavigate();
    return useMutation((variable: PostDataType) => postRecord(variable), {
        onSuccess(data) {
            setModal(false);
            queryClient.invalidateQueries(['record'], {
                refetchInactive: true,
            });
            navigate('/home');
            toast.success('글작성 완료');
        },
        onError(err) {
            setModal(true);
            toast.error('⭕️ 글작성 실패');
        },
    });
}
