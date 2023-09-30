import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { modalState } from '../../recoil/atoms/modalState';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

import { postRecord } from '../../apis/api/Record';
import { useRecoilState } from 'recoil';

import { PostDataType } from '../../types/serverDataType';

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
            toast.success('글작성을 완료했습니다.');
        },
        onError(err) {
            setModal(true);
            toast.error('글작성을 실패했습니다.');
        },
    });
}
