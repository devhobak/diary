import { useQueryClient, useMutation } from 'react-query';
import { EditPatch } from '../apis/api/EditRecord';
import { useRecoilState } from 'recoil';
import { modalState } from '../recoil/atoms/modalState';
import { toast } from 'react-toastify';
interface EditDataType {
    content_title: FormDataEntryValue;
    content_main: FormDataEntryValue;
    content_image: FormDataEntryValue;
    color: string;
}
export default function useEditMutation(key: string, id: number) {
    const [moodal, setModal] = useRecoilState(modalState);
    const queryClient = useQueryClient();
    return useMutation(
        key,
        (variable: EditDataType) => EditPatch(variable, id),
        {
            onSuccess(data) {
                console.log(data);
                queryClient.invalidateQueries(['record'], {
                    refetchInactive: true,
                });
                //setConfirmModal(true);
                setModal(false);
                toast.success('글 수정 완료');
            },
            onError(err) {
                console.log(err);
                //setConfirmModal(true);
                setModal(true);
                toast.error('글 수정 실패');
            },
        }
    );
}
