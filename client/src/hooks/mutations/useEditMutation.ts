import { useQueryClient, useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';

import { modalState } from '../../recoil/atoms/modalState';
import { EditPatch } from '../../apis/api/Record';
import { EditType } from '../../types/serverDataType';

export default function useEditMutation(key: string, id: number) {
    const [moodal, setModal] = useRecoilState(modalState);
    const queryClient = useQueryClient();
    return useMutation(key, (variable: EditType) => EditPatch(variable, id), {
        onSuccess(data) {
            queryClient.invalidateQueries(['record'], {
                refetchInactive: true,
            });
            setModal(false);
            toast.success('글 수정을 완료했습니다');
        },
        onError(err) {
            setModal(true);
            toast.error('글 수정을 실패했습니다.');
        },
    });
}
